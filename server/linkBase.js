let mysql = require('mysql')

let linkBase = (host, port, database, user, password, sql,reqdata) => {
  let connection = mysql.createConnection({
    host: host,
    port: port,
    database: database,
    user: user,
    password: password
  });
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('数据库连接成功');

    }
  })
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    reqdata = result;
  });
  return reqdata
//   connection.end();

}

module.exports = linkBase;
