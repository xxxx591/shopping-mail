let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let config = require("./config");


router.get('/productlist', (req, res, nex) => {
  let arr = req.headers.cookie.split('userId=')
  var userid = arr[1];
  let connection = mysql.createConnection(config);
  let selectsql = `select * from catList cl where 1=1 and ${userid} = cl.user_id`
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
})



module.exports = router;
