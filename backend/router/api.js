const api = require("express").Router();
const fun = require("../controller/function.js");
const connection = require("../model/connection.js");

api.get("/api/get_student_data", (req, res) => { fun.getStudentTable(req, res) });

api.get("/api/get_student_name_data", (req, res) => { fun.getStudentName(req, res) });

api.get("/api/get_subject_data", (req, res) => { fun.getSubjectTable(req, res) });

api.get("/api/get_mark_data", (req, res) => { fun.getMarkTable(req, res) });

api.get("/api/get_table_data", (req, res) => { fun.getTableData(req, res) });

module.exports = api;