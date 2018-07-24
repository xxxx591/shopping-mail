let express = require('express')

let app = express();

let mysql = require('mysql')
let index = require('./routers/index')
let users = require('./routers/users')
let shoppingCart = require('./routers/shoppingCart')

app.use('/', index);
app.use('/users', users);
app.use('/shoppingCart', shoppingCart);



// 引入模板函数
app.set('view engine', 'ejs')

// 设置静态文件获取路径     ----响应静态文件中间件
app.use(express.static('./public'))

app.get('/', (req, res, next) => {
  let data = linkBase("47.98.191.251", 3306, 'test', 'root', 'root', 'SELECT * FROM `goods`')
  res.render('index')
}).listen(3000)
console.log('server success');
