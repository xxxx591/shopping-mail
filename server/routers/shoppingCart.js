let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let bodyParser = require('body-parser')



router.post('/addcarts', bodyParser.json(), (req, res, next) => {
  console.log('提交成功');
  console.log(req.body.params.productId);
  let productIds = req.body.params.productId;
  let sql = `select * from goods gs where 1=1 and gs.productId = ${productIds}`
  let connection = mysql.createConnection({
    host: "47.98.191.251",
    port: 3306,
    database: "test",
    user: "root",
    password: "root",
    multipleStatements: true
  });
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('数据库连接成功');
      console.log(sql);
    }
  })

  connection.query(sql, (err, result, fields) => {
    // if (err) throw err;
    res.send(result)
    let productArr = result;
    console.log(productArr);
  });

  connection.end();
})



module.exports = router;
