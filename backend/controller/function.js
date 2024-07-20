const connection = require("../model/connection.js")



const getStudentTable = async (req, res) => {
    let data =await connection.execute("select * from student").then((data) => { return data })
    res.send(data)
    console.log(data);
    return data
}

const getMarkTable = async (req, res) => {
    return connection.execute("select * from mark").then((data) => { return data })
}

const getSubjectTable = async (req, res) => {
    return connection.execute("select * from subject").then((data) => { return data })
}


const fun = {
    getStudentTable: getStudentTable,
    getMarkTable: getMarkTable,
    getSubjectTable: getSubjectTable
}


module.exports = fun