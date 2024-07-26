const api = require("express").Router();
const { log } = require("console");
const fun = require("../controller/function.js");
const connection = require("../model/connection.js");
const path = require("path");

api.post("/table/get_table_data/get_mark", async (req, res) => {
    const studentName = req.body.linkText;
    let marks = await connection.execute(`
            SELECT student.student_id, student.name, subject.subject_id, subject.subject_name, mark.tx1, mark.tx2, mark.ck
            FROM student
            JOIN mark ON student.student_id = mark.student_id
            JOIN subject ON mark.subject_id = subject.subject_id
            WHERE student.name = "${studentName}"
        `).then((data) => { return data; }).catch((e) => { return e });

    console.log(marks);
    res.send(marks);
});

api.get("/table/get_table_data", (req, res) => { fun.getTableData(req, res) });

api.post("/searching_api", async (req, res) => {
    let message

    const codeTrue = req.body.codeTrue;
    const codeName = req.body.codeName;
    const randomCode = req.body.randomCode;

    // console.log(`${codeTrue}, ${codeName}, ${randomCode}`);

    let students = await connection.execute("select * from student").then((data) => { return data }).catch((e) => { return e })
    let student = students.find((e) => { return e.student_id == codeName });
    if (!student) {
        message = "invalid id";
    }
    if (randomCode != codeTrue) {
        message = "invalid captcha code";
    }
    if (!message) {
        // console.log(student);
        res.send(student);
        return;
    } else {
        api.get("/invalid_message", (req, res) => { res.json(message) });
        res.sendFile(path.resolve("../fontend/invalid_code.html"));
        return;
    }
});

module.exports = api;