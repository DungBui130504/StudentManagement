const connection = require('./backend/model/connection.js')
const fun = require("./backend/controller/function.js")
const main = async () => {
    console.log(await fun.getSubjectTable());
}
main()