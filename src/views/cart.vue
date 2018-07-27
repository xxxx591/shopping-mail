<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>我的购物车</span>
    </nav-bread>
    <div class="item-list-wrap">
      <div class="cart-item">
        <div class="cart-item-head">
          <ul>
            <li>商品</li>
            <li>单价</li>
            <li>数量</li>
            <li>总价</li>
            <li>编辑</li>
          </ul>
        </div>
        <ul class="cart-item-list">
          <li v-for="(val,index) of goodList" :key="index">
            <div class="cart-tab-1">
              <div class="cart-item-check">
                <a href="javascipt:;" class="checkbox-btn item-check-btn" :class="{'check':val.checked=='1'}" @click="select(index)">
                  
                </a>
              </div>
              <div class="cart-item-pic">
                <img :src="'static/'+val.productImg">
              </div>
              <div class="cart-item-title">
                <div class="item-name">{{val.productName}}</div>
              </div>
            </div>
            <div class="cart-tab-2">
              <div class="item-price">{{val.productPrice}}</div>
            </div>
            <div class="cart-tab-3">
              <div class="item-quantity">
                <div class="select-self select-self-open">
                  <div class="select-self-area">
                    <a class="input-sub">-</a>
                    <span class="select-ipt">{{val.productNum}}</span>
                    <a class="input-add">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-tab-4">
              <div class="item-price-total">{{val.productPrice*val.productNum}}</div>
            </div>
            <div class="cart-tab-5">
              <div class="cart-item-opration">
                <a href="javascript:;" class="item-edit-btn">
                  <img src="static/delete2.png" alt="">
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-foot-wrap">
      <div class="cart-foot-inner">
        <div class="cart-foot-l">
          <div class="item-all-check">
            <a href="javascipt:;">
              <span class="checkbox-btn item-check-btn">
                
              </span>
              <span>Select all</span>
            </a>
          </div>
        </div>
        <div class="cart-foot-r">
          <div class="item-total">
            Item total:
            <span class="total-price">{{total}}</span>
          </div>
          <div class="btn-wrap">
            <a class="btn btn--red">Checkout</a>
          </div>
        </div>
      </div>
    </div>
    <nav-foot></nav-foot>
  </div>
</template>

<script>
import NavHeader from "@/components/Header";
import NavFoot from "@/components/Foot";
import NavBread from "@/components/Bread";
import axios from "axios";
export default {
  data() {
    return {
      goodList: [],
      checkThis: true,
      total: 0
    };
  },
  components: {
    NavHeader,
    NavFoot,
    NavBread
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/api/carts/productlist").then(res => {
        console.log(res);
        if (res.data.static != 1) {
          console.log(res.data.msg);
        } else {
          this.goodList = res.data.result;
          this.goodList.forEach(item => {
            if (item.checked == "1") {
              this.total = this.total += item.productPrice;
            }
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.input-sub,
.input-add {
  min-width: 40px;
  height: 100%;
  border: 0;
  color: #605f5f;
  text-align: center;
  font-size: 16px;
  overflow: hidden;
  display: inline-block;
  background: #f0f0f0;
}

.item-quantity .select-self-area {
  background: none;
  border: 1px solid #f0f0f0;
}

.item-quantity .select-self-area .select-ipt {
  display: inline-block;
  padding: 0 3px;
  width: 30px;
  min-width: 30px;
  text-align: center;
}
</style>
