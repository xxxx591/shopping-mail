let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let config = require("./config");


router.get('/list', (req, res, nex) => {
  let arr = req.headers.cookie.split('userId=')
  let userid = arr[1];
  let selectsql = `select * from addressList cl where 1=1 and ${userid} = cl.user_id`
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });
  console.log(selectsql);
  connection.query(selectsql, (err, result) => {
    if (err) throw err.message;
    if (result[0]) {
      res.json({
        static: "1",
        msg: '数据获取成功',
        result
      })
    } else {
      res.json({
        static: "2",
        msg: "无法获取用户id"

      })
    }
  })
  connection.end();
})


router.post('/updatedAddress', bodyParser.json(), (req, res, next) => {
  let arr = req.headers.cookie.split('userId=')
  let userid = arr[1];
  let addressId = req.body.addressId;
  let sql1 = 'UPDATE addressList SET isDefault = 1 WHERE 1=1 AND user_id = ' + userid + ' AND id = ' + addressId + ' ;'
  let sql2 = ' UPDATE addressList SET isDefault = 0 WHERE 1=1 AND user_id = ' + userid + ' AND id !=' + addressId + ' ;'
  let updatesql = sql1 + sql2;
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });
  console.log(updatesql);
  connection.query(updatesql, (err, result) => {

    if (err) throw err.message;
    res.json({
      static: "1",
      msg: '修改成功',
      result
    })

  })
  connection.end();

})



module.exports = router;
