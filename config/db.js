const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "evote"
});

db.getConnection((err, conn) => {
    if (err) console.log("DB error", err);
    if (conn) console.log("connect DB OK");    
});

module.exports = db;