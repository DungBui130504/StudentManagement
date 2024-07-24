const connection = require("../model/connection.js");

//Lay toan bo thong tin ve diem
const getMarkTable = async (req, res) => {
    let data = await connection.execute("SELECT student.student_id, student.name, subject.subject_id, subject.subject_name, mark.tx1, mark.tx2, mark.ck FROM student JOIN mark ON student.student_id = mark.student_id JOIN subject ON mark.subject_id = subject.subject_id").then((data) => { return data });
    res.send(data);
}

//Lay du lieu cho bang danh sach sinh vien
const getTableData = async (req, res) => {
    let data = await connection.execute("SELECT * FROM student").then((data) => { return data });
    res.send(data);
}

const fun = {
    getMarkTable: getMarkTable,
    getTableData: getTableData
}

module.exports = fun;