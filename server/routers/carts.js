let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let config = require("./config");


router.get('/productlist', (req, res, nex) => {
  let arr = req.headers.cookie.split('userId=')
  let userid = arr[1];
  let selectsql = `select * from catList cl where 1=1 and ${userid} = cl.user_id`
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


router.post('/edits', bodyParser.json(), (req, res, next) => {
  let arr = req.headers.cookie.split('userId=')
  let userid = arr[1];
  let productNum = req.body.productNum;
  let productId = req.body.productId;
  let checked = req.body.checked;
  console.log(checked);
  let updatearr = [productNum, checked, userid, productId]
  let updatesql = `UPDATE
  catList cl 
  SET
  productNum =? , checked = ?
  WHERE
  1=1
  AND
  user_id = ?
  AND
  productId=?
  `
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });
  console.log(updatearr);
  connection.query(updatesql, updatearr, (err, result) => {

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
