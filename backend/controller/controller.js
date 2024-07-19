const path = require("path")
const fun = require('./function.js')

const getHomePage = (req, res) => {
    res.sendFile(path.resolve("../fontend/page.html"));
}


const disPlayData = (req, res) => {
    res.sendFile(path.resolve("../fontend/page2.html"));

}

const controller = {
    getHomePage: getHomePage,
    disPlayData: disPlayData,
}



module.exports = controller