const Sequelize = require("sequelize");
const database = new Sequelize('aula_node', 'root', '524613', {
    host: "localhost",
    dialect: "mariadb"
});


module.exports = {
    Sequelize,
    database
};