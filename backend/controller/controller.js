const path = require("path");
const fun = require('./function.js');
const connection = require('../model/connection.js');

const getHomePage = (req, res) => {
    res.sendFile(path.resolve("../fontend/page.html"));
}

const displayTable = (req, res) => {
    res.sendFile(path.resolve("../fontend/table.html"));
}

const displayMarkTable = (req, res) => {
    res.sendFile(path.resolve("../fontend/mark.html"));
}

const displaySearchTable = (req, res) => {
    res.sendFile(path.resolve("../fontend/search.html"));
}

const displayEditInfor = (req, res) => {
    res.sendFile(path.resolve("../fontend/editStudentInfor.html"));
}

const displayEditMark = (req, res) => {
    res.sendFile(path.resolve("../fontend/editMark.html"));
}

const controller = {
    getHomePage: getHomePage,
    displayTable: displayTable,
    displayMarkTable: displayMarkTable,
    displaySearchTable: displaySearchTable,
    displayEditInfor: displayEditInfor,
    displayEditMark: displayEditMark
}

module.exports = controller