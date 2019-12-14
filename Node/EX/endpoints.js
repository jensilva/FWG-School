const postEndpoint = require("./router/post")

const endpoints = (app) => {

    app.get("/users/:id", (req, res) => {
        const { id } = req.params;

        if(isNaN(id)){
            res.status(400).send();
        }

        res.status(404).send();
    });
    postEndpoint(app);

};


module.exports = endpoints;