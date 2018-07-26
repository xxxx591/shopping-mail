let express = require('express');

let router = express.Router();

let mysql = require('mysql')

let config = require('./config')

router.get('/', (req, res) => {
  console.log(req.query);
  let connection = mysql.createConnection(config);
  var stawrtPrice, endPrice;
  let sql = 'SELECT * FROM goods gs'
  let sql1 = ' WHERE 1=1 AND gs.productPrice >= 0 AND gs.productPrice <= 500';
  let sql2 = ' limit ' + (req.query.page * req.query.pageSize) + ',8 ';
  let sql3 = ' LIMIT 0,8'

  switch (req.query.priceLevel) {
    case 'all':
      sql = sql + sql2;
      break;
    case '0':
      stawrtPrice = 0;
      endPrice = 500
      sql = sql + ' WHERE 1=1 AND gs.productPrice >= 0 AND gs.productPrice <= 500' 
      console.log(sql);
      break;
    case '1':
      stawrtPrice = 500;
      endPrice = 1000
      sql = sql + ' WHERE 1=1 AND gs.productPrice >= 500 AND gs.productPrice <= 1000'
      break;
    case '2':
      stawrtPrice = 1000;
      endPrice = 2000
      sql = sql + ' WHERE 1=1 AND gs.productPrice >= 1000 AND gs.productPrice <= 2000'
      break;
    default:
      stawrtPrice = 1000;
      endPrice = 999999999
      sql = sql + ' WHERE 1=1 AND gs.productPrice >= 2000 AND gs.productPrice <= 99999'
      break;
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
