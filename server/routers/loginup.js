let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let bodyParser = require('body-parser')
let config = require('./config')

// 登录接口
router.post('/register', bodyParser.json(), (req, res, next) => {
  let username = req.body.params.username; //获取前台传过来的账号密码
  let userpwd = req.body.params.userpwd;
  let loginsql = `SELECT * FROM users us WHERE 1=1 AND us.username = '${username}' AND us.userpwd = '${userpwd}'`; //查询数据库是否存在数据
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('数据库连接成功');
    }
  })
  connection.query(loginsql, (err, result) => {
    if (err) {
      console.log(err.message);
    }
    if (result[0]) {
      res.json({
        'static': '1',
        'msg': "登录成功",
        data: result
      })
    } else {
      res.json({
        'static': '2',
        'msg': "登录失败，账号密码错误",
        data: result
      })
    }
  })
  connection.end();
})

// 注册接口
router.post('/signin', bodyParser.json(), (req, res, next) => {

})


module.exports = router;
