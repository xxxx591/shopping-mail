<template>
  <header class="header">
    <symbol id="icon-cart" viewBox="0 0 38 32">
      <title>cart</title>
      <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
      <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
      <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
      <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
    </symbol>
    <div class="navbar">
      <div class="navbar-left-container">
        <a href="/">
          <img class="navbar-brand-logo" src="static/logo.png">
        </a>
      </div>
      <div class="navbar-right-container" style="display: flex;">
        <div class="navbar-menu-container">
          <!--<a href="/" class="navbar-link">我的账户</a>-->
          <span class="navbar-link" v-text="nickName" v-if="nickName"></span>
          <a href="javascript:void(0)" class="navbar-link" @click="login()" v-else>登录</a>
          <a href="javascript:void(0)" class="navbar-link" v-if="nickName" @click="logout()">退出</a>
          <div class="navbar-cart-container">
            <span class="navbar-cart-count"></span>
            <a class="navbar-link navbar-cart-link" href="/#/cart">
              <svg class="navbar-cart-logo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="cover" v-show="loginShow" @click="cancelLogin()"></div>
      <div class="login" v-show="loginShow">
        <div class="header">
          <div class="switch" id="switch">
            <a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" @click="loginup()">快速登录</a>
            <a class="switch_btn" id="switch_login" href="javascript:void(0);" @click="loginin()">快速注册</a>
            <div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; left: 0px;" v-if="showmodle"></div>
            <div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; right: 0px;" v-else></div>
          </div>
        </div>
        <div class="web_qr_login" id="web_qr_login" style="display: block; height: 250px;" v-if="showmodle">
          <div class="web_login" id="web_login">
            <div class="login-box">
              <div class="login_form">
                <input type="hidden" name="did" value="0" />
                <input type="hidden" name="to" value="log" />
                <div class="uinArea" id="uinArea">
                  <label class="input-tips" for="u">帐号：</label>
                  <div class="inputOuter" id="uArea">
                    <input type="text" id="u" name="username" v-model="username" class="inputstyle" />
                  </div>
                </div>
                <div class="pwdArea" id="pwdArea">
                  <label class="input-tips" for="p">密码：</label>
                  <div class="inputOuter" id="pArea">
                    <input type="password" id="p" name="password" v-model="userpwd" class="inputstyle" @keyup.enter="userLogin" />
                  </div>
                </div>
                <div v-show="worngpwd">
                  <p style="color:red;font-size:14px;">
                    账号密码错误！
                  </p>
                </div>
                <div style="padding-left:50px;margin-top:20px;">
                  <input type="submit" value="登 录" style="width:150px;" class="button_blue" @click="userLogin()" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="qlogin" id="qlogin" style="" v-else>
          <div class="web_login">
            <input type="hidden" name="to" value="reg" />
            <input type="hidden" name="did" value="0" />
            <ul class="reg_form" id="reg-ul">
              <div id="userCue" class="cue">
                快速注册请注意格式
              </div>
              <li>
                <label for="user" class="input-tips2">用户名：</label>
                <div class="inputOuter2">
                  <input type="text" id="user" name="user" maxlength="16" class="inputstyle2" v-model="username" />
                </div>
              </li>
              <li>
                <label for="passwd" class="input-tips2">密码：</label>
                <div class="inputOuter2">
                  <input type="password" id="passwd" name="passwd" maxlength="16" class="inputstyle2" v-model="userpwd" />
                </div>
              </li>
              <li>
                <label for="passwd2" class="input-tips2">确认密码：</label>
                <div class="inputOuter2">
                  <input type="password" id="passwd2" name="" maxlength="16" class="inputstyle2" v-model="againpwd" />
                </div>
              </li>
              <li>
                <label for="qq" class="input-tips2">联系方式：</label>
                <div class="inputOuter2">
                  <input type="text" id="phone" name="phone" maxlength="11" class="inputstyle2" v-model="userphone" />
                </div>
              </li>
              <li>
                <div v-show="signinworng">
                  <p style="color:red;font-size:14px;">
                    {{signinmsg}}
                  </p>
                </div>
              </li>
              <li>
                <div class="inputArea" style="text-align:center">
                  <input type="button" id="reg" class="button_blue" value="立即注册" @click="signin()" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import "@/assets/css/login2.css";
  import axios from "axios";
  export default {
    data() {
      return {
        msg: "头部页面",
        loginShow: false,
        showmodle: true,
        username: "",
        userpwd: "",
        againpwd: "",
        userphone: "",
        worngpwd: false,
        signinworng: false,
        signinmsg: "",
      };
    },
    computed: {
      nickName() {
        return this.$store.state.nickName
      }
    },
    mounted() {
     this.usercheck();
    },
    methods: {
      login() {
        this.loginShow = true;
      },
      loginup() {
        this.showmodle = true;
      },
      loginin() {
        this.showmodle = false;
      },
      cancelLogin() {
        this.loginShow = false;
      },
      // 查询
      usercheck(){
        axios.get('/api/loginup/usercheck').then(res=>{
          console.log(res);
          if(res.data.state == '1'){
              this.$store.commit('updateUserInfo',res.data.result["0"].username)
              console.log(res);
          }
        })
      },
      // 登录
      userLogin() {
        axios
          .post("/api/loginup/register", {
            params: {
              username: this.username,
              userpwd: this.userpwd
            }
          })
          .then(res => {
            console.log(res);
            if (res.data.static != 1) {
              this.worngpwd = true;
              console.log("登录失败");
            } else {
              this.worngpwd = false;
              console.log("登录成功");
              this.loginShow = false;
              this.nickName = res.data.username;
            }
          });
      },
      // 注册
      signin() {
        if (this.userpwd == this.againpwd) {
          axios
            .post("/api/loginup/signin", {
              params: {
                username: this.username,
                userpwd: this.userpwd,
                userphone: this.userphone
              }
            })
            .then(res => {
              console.log(res);
              this.signinworng = true;
              this.signinmsg = res.data.msg;
            });
        } else {
          this.signinmsg = "两次密码不一致，请确认！";
          this.signinworng = true;
        }
      },
      // 退出登录
      logout() {
        axios.post("/api/loginup/logout").then(res => {
          this.nickName = '';

        });
      }
    }
  };

</script>


