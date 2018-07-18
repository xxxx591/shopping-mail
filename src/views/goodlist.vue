<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span>商品列表</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">价格排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a href="javascript:void(0)" class="price">价格从高到低 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">价格列表</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>单价:</dt>
                <dd><a href="javascript:void(0)" @click="checkAll()" :class="{'cur':PriceChecek == 'all'}">All</a></dd>
                <dd v-for="(item,index) of PriceList" :key="index">
                  <a href="javascript:void(0)"  @click="check(index)" :class="{'cur':PriceChecek == index }">{{item.StartPrice}} - {{item.EndPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(val,index) of goodList" :key="index" >
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+val.productImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{val.productName}}</div>
                      <div class="price">{{val.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFalg" @click="closePop"></div>
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
      msg: "lele",
      goodList: [],
      PriceList: [
        {
          StartPrice: "0.00",
          EndPrice: "500.00"
        },
        {
          StartPrice: "500.00",
          EndPrice: "1000.00"
        },
        {
          StartPrice: "1000.00",
          EndPrice: "2000.00"
        }
      ],
      PriceChecek: "all",
      filterBy: false,
      overLayFalg: false
    };
  },
  mounted() {
    this.getGoodList();
  },
  methods: {
    getGoodList() {
      axios.get("static/mock/goodlist.json").then(res => {
        this.goodList = res.data.result;
      });
    },
    check(index) {
      this.PriceChecek = index;
      this.closePop();
    },
    checkAll() {
      this.PriceChecek = "all";
      this.closePop();
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFalg = true;
    },
    closePop(){
      this.filterBy = false;
      this.overLayFalg = false;
    }
  },
  components: {
    NavHeader,
    NavFoot,
    NavBread
  }
};
</script>
<style lang="scss" scoped>
</style>
