const route = require("express").Router()
const path = require("path")
const connection = require('../model/connection.js');
const controller = require("../controller/controller.js")
const fun = require('../controller/function.js')

route.get('/', (req, res) => { controller.getHomePage(req, res) });

route.get("/table", async (req, res) => { controller.displayTable(req, res) });

route.get("/table/get_table_data/get_mark_data", async (req, res) => { controller.displayMarkTable(req, res) });

route.get("/table/search", async (req, res) => { controller.displaySearchTable(req, res) });

module.exports = route;