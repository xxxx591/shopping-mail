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
            <a href="javascript:void(0)" class="default" :class="{'cur':sortStatic == true}" @click="defaultPrice()">默认</a>
            <a href="javascript:void(0)" class="price" @click="changePrice()" :class="{'cur':sortStatic == false}">价格从高到低 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
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
                      <a href="#"><img v-lazy="'static/'+val.productImg" alt="" :key="val.productImg"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{val.productName}}</div>
                      <div class="price">{{val.productPrice}}元</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addcarts(val.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5" class="load-more">
                  加载中...
                </div>
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
        },
        {
          StartPrice: "2000.00",
          EndPrice: "更多"
        }
      ],
      PriceChecek: "all",
      busy: false,
      filterBy: false,
      overLayFalg: false,
      sort: false,
      sortStatic: true,
      page: 0,
      pageSize: 8,
      dataFalg: true,
      selectPrice: true
    };
  },
  mounted() {
    // this.getGoodList();
  },
  methods: {
    getGoodList() {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
        priceLevel: this.PriceChecek
      };
      if (this.PriceChecek == "all") {
        this.dataFalg = true;
      } else {
        this.isAll = true;
        this.goodList = [];
        this.dataFalg = false;
      }
      axios
        .get("/api/users", {
          params: params
        })
        .then(res => {
          this.goodList = this.goodList.concat(res.data);
          if (res.data < this.pageSize) {
            this.dataFalg = false;
          }
          console.log(res);
        });
    },
    cpmpare(property) {
      return (obj1, obj2) => {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value2 - value1; // 降序
      };
    },
    check(index) {
      this.PriceChecek = index;
      this.closePop();
      console.log(index);
      this.getGoodList();
    },
    checkAll() {
      this.goodList = [];
      this.page = 0;
      this.PriceChecek = "all";
      this.closePop();
      if (this.page == 0) {
        this.getGoodList();
        this.page++;
      }
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFalg = true;
    },
    closePop() {
      this.filterBy = false;
      this.overLayFalg = false;
    },
    changePrice() {
      this.goodList = this.goodList.sort(this.cpmpare("productPrice"));
    },
    defaultPrice() {
      this.sortStatic = true;
      this.sort = !this.sort;
      this.getGoodList();
    },
    addcarts(index) {
      console.log(index);
      axios
        .post("/api/shoppingCart/addcarts", {
          
          params: {
            productId: index
          }
        })
        .then(res => {
          console.log(res);
        });
    },

    loadMore() {
      console.log(this.page);
      console.log(this.dataFalg);
      if (this.dataFalg) {
        this.getGoodList();
        this.page++;
      } else {
        return;
      }
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 2000);
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
