const express = require("express");

const app = express();

app.get("/", function(require, response){
    return response.send('Be The Hero');
});

app.listen(3333);