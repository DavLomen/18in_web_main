<!-- 支持的币种 -->
<template>
  <div>
    <div class="mt-40 mb-40">
      <div class="el-row data-flex" style="flex-wrap: wrap;justify-content: space-around;">
          <!-- <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-BTC"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-USDT-TRC20"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-ETH"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-LTC"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-binance"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-arnkm-c389e"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-coinbase"></use>
            </svg>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-3">
            <svg data-v-cbf2c648="" class="svg-icon" aria-hidden="true">
              <use data-v-cbf2c648="" xlink:href="#icon-Kraken"></use>
            </svg>
          </div> -->
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4 mx-auto">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/BTC.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/USDT-ERC20.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/ETH.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/LTC.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/binance.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/arnkm.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/SOL.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4 justify-content-center">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/XRP.png'" class="iconStyle" />
            </div>
          </div>
          <div class="item el-col-xs-8 el-col-sm-6 el-col-md-4 justify-content-center">
            <div class="box" :style="`background:${background};border-radius:${isRound ? 50 : 0}%`">
              <img :src="'./static/images/Icon/DOGE.png'" class="iconStyle" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jrIconList",
  data() {
    return {};
  },
  props: {
    background: {
      type: String,
      default: "#fff",
    },
    isRound: {
      type: Boolean,
      default: true,
    },  
  },
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/style.css");
.item{
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
.box{
  background: #fff;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.iconStyle {
    height: 50%;
    object-fit: cover;
  }
</style>
