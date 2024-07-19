const connection = require("../model/connection.js")


const getInfoStudent = async (req, res) => {
    let data = await connection.execute("select * from student").then((data) => { return data })
    res.send(data)
    return data
}

const fun = {
    getInfoStudent: getInfoStudent,
}


module.exports = fun