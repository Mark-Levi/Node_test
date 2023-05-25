//npm mysql

const mysql = require('mysql');
const { config } = require('process');
// Конфигурация пакета
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodecourse',
  password: '',
});
// console.log(conn);

conn.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Database connected');
  }
});

let query = 'SELECT * FROM user';

conn.query(query, (err, result) => {
  console.log(err);
  console.log(result);
});

conn.end((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Database closed');
  }
});
