const express = require("express");
const connection = require('./model/connection.js');
const path = require('path');
const routes = require('./router/router.js')

const app = express()

app.use(express.static(path.join(__dirname, '../fontend')));

app.use(routes)

app.listen(3000, () => {
    console.log("server is running on the port 3000");
})
