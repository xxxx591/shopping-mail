let express = require('express');

let router = express.Router();

let mysql = require('mysql')


router.get('/', (req, res) => {
  console.log(req.query.sort);
  let connection = mysql.createConnection({
    host: "47.98.191.251",
    port: 3306,
    database: "test",
    user: "root",
    password: "root"
  });
  let sql = 'SELECT * FROM `goods` ';
  if (req.query.sort == 1) {
    sql = sql += 'ORDER BY `productPrice` DESC';
  } else {
    sql = sql;

  }
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('数据库连接成功');

    }
  })

  connection.query(sql, (err, result, fields) => {
    // if (err) throw err;
    res.send(result)
  });
  connection.end();
})


module.exports = router
