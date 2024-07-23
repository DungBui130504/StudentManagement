const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});


const connect = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected! threadId : ", con.threadId);

    });

}

const endConnect = () => {
    con.end((err) => {
        if (err) {
            console.log(err);
        }
        console.log("connection ended , threadId :", con.threadId);
    })
}


const execute = async (sql_statement) => {
    return new Promise((resolve, reject) => {
        con.query(sql_statement, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}

module.exports = {
    connect: connect,
    execute: execute,
    endConnect: endConnect,
}
