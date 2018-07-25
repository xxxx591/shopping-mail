let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let bodyParser = require('body-parser')



router.post('/userlogin', bodyParser.json(), (req, res, next) => {
  console.log('提交成功');
  console.log(req.body);
  let username = req.body.params.username;
  let userpwd = req.body.params.userpwd;
  console.log(username + '-----' + userpwd);
  let catnum = 0;
  let selectArr, updateArr, resultArr, index;
  let loginsql = `SELECT * FROM users us WHERE 1=1 AND us.username = '${username}' AND us.userpwd = '${userpwd}'`
  let insertsql = `insert into catList(user_id,productId,productImg,productName,productPrice,productNum) values(?,?,?,?,?,?)`
  let updatesql = `update catList cl set cl.productNum = ? where cl.id = ?`
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
    }
  })
  console.log(loginsql);
  connection.query(loginsql, (err, result) => {
    if (err) {
      console.log(err.message);
    }
    res.json({
      'static': '1',
      'msg': "登录成功",
      data: result
    })
  })
  connection.end();
})



module.exports = router;
