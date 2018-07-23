# shopping-mail

> A Vue.js project

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
    