<!-- 联盟计划关于 -->
<template>
  <div class="   mtb-10">
    <div class="el-row header">
      <div class="el-col-24 mtb-10">
        <div class="title font-title-h1 text-center">{{ data.title || 'Title' }}</div>
        <div class="tip el-content-text-h3 text-center">{{ data.tip || 'Tip' }}</div>
      </div>
    </div>
    <div class="el-row mt-20">
      <div class="el-col-xs-24 el-col-sm-24 el-col-md-8" v-for="(item,index) in data.listData" :key="index">
        <div class="card el-mx-auto-90 el-width-card mtb-10">
          <div class="triangle" :style="`background:${item.triangleColor || '#000'};color:#fff`">
            {{ index + 1 }}
          </div>
          <div class="card-item el-mx-auto-70">
            <div class="label el-content-text-h2 fw-600 mtb-10" :style="`color:${item.labelColor || '#000'}`">{{ item.label }}</div>
            <div class="text el-content-text-h4" :style="`color:${item.textColor || '#000'}`">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'jrAffiliateAbout',
    data(){
      return{}
    },
    props: {
      data: {
        type: Object,
        default: () => ({
          title: '',
          tip: '',
          listData: [],
        }),
      },
    },
    methods:{},
 }
</script>

<style scoped>
@import url("../../assets/css/style.css");
.card{
  position: relative;
}
.triangle {
    width: 100px;
    position: absolute;
    height: 90px;
    border-top-left-radius: 10px;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
    clip-path: polygon(94% 0, 40% 61%, 1% 100%, 0 100%, 0 53%, 0 0);
    padding-left: 16px;
    padding-top: 18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    left: -10px;
    top: 20px;
}
.card-item{
  height: 150px;
}
</style>