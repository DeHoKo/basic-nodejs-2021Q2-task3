const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
})

sequelize.authenticate().then(
    function () {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;