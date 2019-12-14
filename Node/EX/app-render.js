const express = require("express");
const app = express();
const port = 8081;


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/helloworld.html");
});

app.get("/:name/:lastName", (req, res) => {
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});

