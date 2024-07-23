const api = require("express").Router();
const fun = require("../controller/function.js");
const connection = require("../model/connection.js");
const path = require("path")

api.get("/api/get_student_data", (req, res) => { fun.getStudentTable(req, res) });

api.get("/api/get_student_name_data", (req, res) => { fun.getStudentName(req, res) });

api.get("/api/get_subject_data", (req, res) => { fun.getSubjectTable(req, res) });

api.get("/api/get_mark_data", (req, res) => { fun.getMarkTable(req, res) });

api.get("/table/get_table_data", (req, res) => { fun.getTableData(req, res) });

api.post("/searching_api", async (req, res) => {
    let message
    let data_send = {
        id: req.body.codename,
        captcha_send: req.body.random_code,
        captcha_true: req.body.code_true
    }
    let students = await connection.execute("select * from student").then((data) => { return data }).catch((e) => { return e })
    let student = students.find((e) => { return e.student_id == data_send.id })
    if (!student) {
        message = "invalid id"
    }
    if (data_send.captcha_send != data_send.captcha_true) {
        message = "invalid captcha code"
    }
    if (!message) {
        res.send(student)
        return
    } else {
        api.get("/invalid_message", (req, res) => { res.json(message) })
        res.sendFile(path.resolve("../fontend/invalid_code.html"))
        return
    }


})

module.exports = api;