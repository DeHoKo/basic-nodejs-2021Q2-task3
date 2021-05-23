require("dotenv").config();
const express = require("express");
const validateSession = require("./middleware/validate-session");
const app = express();
const db = require("./db");
const user = require("./controllers/usercontroller");
const game = require("./controllers/gamecontroller");

const PORT = process.env.PORT || 4000;

db.sync()
  .then(() => {
    app.use(express.json());
    app.use("/api/auth", user);
    app.use(validateSession);
    app.use("/api/game", game);
    app.listen(PORT, function () {
      console.log(`App is listening on ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Can't synchronize ", e);
  });
