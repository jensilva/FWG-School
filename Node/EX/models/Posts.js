const db = require("./db");
const {database, Sequelize} = db;


const Post = database.define("postagens",{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

module.exports = Post;