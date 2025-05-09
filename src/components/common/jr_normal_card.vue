<!-- 常规图片文字组件 -->
<template>
    <div class="el-row">
      {{ cloName }}
      <div class="mt-20" v-for="(item,index) in listData" :key="index" :class="!colName ? `el-col-${col}` : colName">
        <div class="card text-center el-mx-auto-90" :style="`background:${item.cardColor || '#000'};color:#fff`">
          <img class="normal_card_icon " :src="item.imageUrl" alt=""></img>
          <div class="count el-content-text-s1">{{ item.title }}</div>
          <div class="text mb-40 mtb-10 el-content-text-s3">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name:'jrNormalCard',
      data(){
        return{
        }
      },

      props: {
        listData: {
          type: Array,
          default: () => ([]),
        },
        colName: {
          type: String,
          default: null,
        },
        col: {
          type: String,
          default: '6',
        },
      },
      methods:{
      },
   }
  </script>
  
  <style scoped>
  @import url("../../assets/css/style.css");
  .card{
    border-radius: 12px;
    padding: 10px 15px;
  }
  .normal_card_icon{
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 20px auto 10px auto;
  }
  </style>