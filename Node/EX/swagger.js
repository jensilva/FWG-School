const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json')


module.exports = (app) => {
    app.use("/api-docs", swaggerUI.serve);
    app.get("/api-docs", swaggerUI.setup(swaggerDocument))
};