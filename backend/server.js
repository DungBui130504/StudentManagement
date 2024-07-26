const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const connection = require('./model/connection.js');
const routes = require('./router/router.js');
const api = require("./router/api.js");
const port = 3000;

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../fontend')));

app.use(routes);

app.use(api);

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
})
