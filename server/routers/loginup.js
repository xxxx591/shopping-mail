let express = require("express");
let router = express.Router();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let config = require("./config");

// 登录接口
router.post("/register", bodyParser.json(), (req, res, next) => {
  let username = req.body.params.username; //获取前台传过来的账号密码
  let userpwd = req.body.params.userpwd;
  let loginsql = `SELECT * FROM users us WHERE 1=1 AND us.username = '${username}' AND us.userpwd = '${userpwd}'`; //查询数据库是否存在数据
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });
  connection.query(loginsql, (err, result) => {
    if (err) {
      console.log(err.message);
    }
    if (result[0]) {
      console.log(result[0].username);
      res.cookie("userId", result[0].user_id, {
        path: "/",
        maxAge: 1000 * 60 * 60
      });
      res.json({
        static: "1",
        msg: "登录成功",
        username: result[0].username
      });
    } else {
      res.json({
        static: "2",
        msg: "登录失败，账号密码错误",
        result: result
      });
    }
  });
  connection.end();
});

// 注册接口
router.post("/signin", bodyParser.json(), (req, res, next) => {
  let username = req.body.params.username; //获取前台传过来的账号密码
  let userpwd = req.body.params.userpwd;
  let userphone = req.body.params.userphone;
  let selectsql = `SELECT * FROM users us WHERE 1=1 AND us.username = '${username}'`; //查询数据库是否存在数据
  let insertsql = `insert into users(username,userpwd,phonenum) values(?,?,?)`;
  let insertArr = [username, userpwd, userphone];
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("数据库连接成功");
    }
  });
  connection.query(selectsql, (err, result) => {
    if (err) throw err.message;
    if (result[0]) {
      res.json({
        static: "0",
        msg: "账号已存在，请更换用户名！",
        result
      });
    } else {
      connection.query(insertsql, insertArr, (err, result) => {
        if (err) throw err.message;
        res.json({
          static: "1",
          msg: "注册成功！",
          username: result[0].username
        });
      });
      connection.end();
    }
  });
});

// 退出登录接口

router.post('/logout', bodyParser.json(), (req, res, next) => {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    static: '0',
    msg: "退出成功，数据以清理"
  })
})


module.exports = router;
