const Sequelize = require("sequelize");
const sequelize = new Sequelize('aula_node', 'root', '524613', {
    host: "localhost",
    dialect: "mariadb"
});


/*
sequelize.authenticate().then(() => {
    console.log("Conexão com banco feito com sucesso.");
    }).catch((err) => {
        console.log(`Error: ${err}`)
});
**/

const Postagem = sequelize.define("postagens",{
    title: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Usuario.sync({force: true});
//Postagem.sync({force: true})

// Postagem.create({
//     title: "Um titulo",
//     conteudo: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//     Facere nihil in quidem non molestiae natus harum ducimus ipsam? 
//     Voluptas earum optio impedit dolor 
//     sit repellendus mollitia aspernatur ullam sed totam!`
// })

Usuario.create({
    nome: "Jenn",
    sobrenome: "Silva",
    idade: 25,
    email: "jennfer.silva@meuemail.com"
})