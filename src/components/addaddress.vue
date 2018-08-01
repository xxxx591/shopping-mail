<template>
  <div id="app">
    <div class="ceng"></div>
    <div class="content">
      <p>新增收货地址</p>
      <div class="address">
        <div class="address-box">
          <label>收件人姓名</label>
          <input type="text" v-model="userName">
        </div>
        <div class="address-box">
          <label>收货地址</label>
          <input type="text" v-model="streetName">
        </div>
        <div class="address-box">
          <label>联系方式</label>
          <input type="text" v-model="tel">
        </div>
        <button>立即添加</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      streetName: "",
      tel: ""
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
#app {
  .ceng {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  .content {
    z-index: 9999;
    position: fixed;
    width: 320px;
    height: 500px;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -100px;
    background: #fff;
    border: 2px solid #e9e9e9;
    padding: 0 20px;
    p {
      padding: 20px 20px;
      font-size: 16px;
      color: #605f5f;
    }
    label {
      display: inline-block;
      min-width: 100px;
    }
    input {
      padding: 0.5em;
      margin-bottom: 20px;
    }
    button {
        width: 130px;
        height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      font-family: "moderat", sans-serif;
      font-weight: bold;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
      background-color: #d1434a;
      border-color: #d1434a;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      white-space: nowrap;
      &:last-of-type{
          float: right;
      }
    }
  }
}
</style>
