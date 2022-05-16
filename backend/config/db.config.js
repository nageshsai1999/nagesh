const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sai'
})

dbConn.connect(
function(error){
    if(error) throw error;
    console.log("Database connection successfully")
}
)

module.exports = dbConn;