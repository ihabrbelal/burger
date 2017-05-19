var mysql = require("mysql");

var connection;

var JAWSDB_URL = {
    port: 3306,
    host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "zhjfgifgk712xaou",
    password: "n6s87py8ihhaa5gt",
    database: "p6tilh0efzx9j5zo"
}

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});



module.exports = connection;
