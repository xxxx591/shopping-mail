let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let bodyParser = require('body-parser')
let config = require('./config')


router.post('/addcarts', bodyParser.json(), (req, res, next) => {
  console.log('提交成功');
  console.log(req.body.params.productId);
  let productIds = req.body.params.productId;
  let catnum = 0;
  let selectArr, updateArr, resultArr, index;
  let sql = `select * from catList cl where 1=1 and cl.productId = ${productIds}`
  let selectsql = `select * from goods gs where 1=1 and gs.productId = ${productIds}`
  let insertsql = `insert into catList(user_id,productId,productImg,productName,productPrice,productNum) values(?,?,?,?,?,?)`
  let updatesql = `update catList cl set cl.productNum = ? where cl.id = ?`
  let connection = mysql.createConnection(config);
  connection.connect(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('数据库连接成功');
      console.log(sql);
    }
  })

  connection.query(sql, (err, result, fields) => {

    resultArr = result; //在购物车表内查询数据并取出来
    // 查询数据库 
    if (resultArr[0]) { //判断数据库是否存在该条信息
      result.forEach(item => {
        console.log(item);
        if (item.productNum) {
          console.log(`商品数量为：${item.productNum}`);
          catnum = item.productNum + 1;
          console.log(catnum);
          // productArr = [item.user_id, item.productId, item.productImg, item.productName, item.productPrice, catnum]
          // console.log(productArr);
          updateArr = [catnum, item.id]
          console.log(updateArr);
        }
      });
      connection.query(updatesql, updateArr, (err, result) => { //更新数据库信息
        if (err) {
          console.log(err.message);
        }
        console.log(`-----------------updated---------------`);
        res.json({
          'static': "1",
          'msg': "数据更新成功"
        })
      })
    } else { //不存在就添加这一条数据
      connection.query(selectsql, (err, result) => {
        if (err) {
          console.log('读取数据出错：' + err.message);
        }
        selectArr = result;
        selectArr.forEach(item => {
          index = ['1', item.productId.toString(), item.productImg, item.productName, item.productPrice.toString(), '1'];

        })
      });
      setTimeout(() => {
        console.log('---------' + index);
        connection.query(insertsql, index, (err, result) => {
          if (err) {
            console.log(err.message);
          }
          res.json({
            'static':1,
            "msg":"加入购物车成功"
          })
        })
      }, 50);
    }
  });
})



module.exports = router;
