const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'test2',
  database: 'carsdb'
});
module.exports = connection;