# shopping-mail

> 模仿慕课网仿写了一个vue商城，技术栈：vue-cli vuex node MYSQL 1

## Build Setup

``` bash
# install dependencies
npm install 

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



# 日常踩坑
## 07.23 
####  vue-lazyload 一个隐藏的小坑，本项目采用了懒加载方式，然而官方文档没有特殊标记出来，如果数组是存在动态渲染的情况下，图片的路径无法更改。解决方案-----:key
    <img v-lazy="'static/'+val.productImg" alt="" :key="val.productImg">


## 07.25
#### 购物车模块小坑，1：设置查询的时候不能提前写res方法，否则无法书写多条sql语句，
#### 2：插入条件的占位符问题 不知道为什么我首先用select语句查询出来的数组在select里面能使用 离开这个函数之后就无法使用了。..最后我我我用了个settimeout方法来处理 就能获取到数据了。我真是心态崩了，哪位大佬有什么好的意见记得告诉我 呜呜呜！

    