const connection = require("../model/connection.js");

//Lay toan bo thong tin sinh vien
const getStudentTable = async (req, res) => {
    let data = await connection.execute("select * from student").then((data) => { return data });
    res.send(data);
}

//Lay ten sinh vien
const getStudentName = async (req, res) => {
    let data = await connection.execute("select name from student").then((data) => { return data });
    res.send(data);
}

//Lay toan bo thong tin ve diem
const getMarkTable = async (req, res) => {
    let data = await connection.execute("select * from mark").then((data) => { return data });
    res.send(data);
}

//Lay toan bo thong tin ve mon hoc
const getSubjectTable = async (req, res) => {
    res.send(await connection.execute("select * from subject").then((data) => { return data }));
}

//Lay du lieu cho bang
const getTableData = async (req, res) => {
    let data = await connection.execute("SELECT student.student_id, student.name, student.address, student.YOB, subject.subject_name, subject.subject_id, mark.tx1, mark.tx2, mark.ck FROM student LEFT JOIN mark ON student.student_id = mark.student_id LEFT JOIN subject ON mark.subject_id = subject.subject_id UNION SELECT student.student_id, student.name, student.address, student.YOB, subject.subject_name, subject.subject_id, mark.tx1, mark.tx2, mark.ck FROM subject LEFT JOIN mark ON subject.subject_id = mark.subject_id LEFT JOIN student ON mark.student_id = student.student_id; ").then((data) => { return data });
    res.send(data);
}

const fun = {
    getStudentTable: getStudentTable,
    getMarkTable: getMarkTable,
    getSubjectTable: getSubjectTable,
    getStudentName: getStudentName,
    getTableData: getTableData
}

module.exports = fun;