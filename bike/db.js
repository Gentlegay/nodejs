var CONFIG = require('config').Customer,
mysql = require('mysql');
conn = mysql.createConnection({
    user : CONFIG.dbName,
    password : CONFIG.dbPwd,
    database : CONFIG.database,
    debug : false
});
conn.connect();
exports.conn=conn;