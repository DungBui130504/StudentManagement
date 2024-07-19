const connection = require('./backend/model/connection.js')

const main = async () => {
    let data0 = await connection.execute("select * from student").then((data) => { return data[0]; })
    console.log(data0);
}
main()