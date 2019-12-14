const express = require("express");
const bodyParse = require("body-parser");
const swagger = require("./swagger");
const endpoints = require("./endpoints");

const app = express();


const port = 8081;

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

swagger(app);

app.use("/posts", require("./router/post"))

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});
