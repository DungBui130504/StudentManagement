const path = require("path")
const fun = require('./function.js')
const connection = require('../model/connection.js')

const getHomePage = (req, res) => {
    res.sendFile(path.resolve("../fontend/page.html"));
}

const getInfoStudent = async (req, res) => {
    let data = await connection.execute("select * from student").then((data) => { return data })
    res.send(data)

}

const disPlayData = (req, res) => {
    res.sendFile(path.resolve("../fontend/page2.html"));

}

const displayTable = (req, res) => {
    res.sendFile(path.resolve("../fontend/table.html"));
}

const controller = {
    getInfoStudent: getInfoStudent,
    getHomePage: getHomePage,
    disPlayData: disPlayData,
    displayTable: displayTable
}

module.exports = controller