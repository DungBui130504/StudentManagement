const path = require("path");
const fun = require('./function.js');
const connection = require('../model/connection.js');

const getHomePage = (req, res) => {
    res.sendFile(path.resolve("../fontend/page.html"));
}

const disPlayData = (req, res) => {
    res.sendFile(path.resolve("../fontend/page2.html"));

}

const displayTable = (req, res) => {
    res.sendFile(path.resolve("../fontend/table.html"));
}

const controller = {
    getHomePage: getHomePage,
    disPlayData: disPlayData,
    displayTable: displayTable
}

module.exports = controller