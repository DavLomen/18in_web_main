<!-- 鼠标挪动到图片上显示详细内容组件 -->
<template>
       <div class="container ">
        <div class="el-row">
            <div class="el-col-xs-12 el-col-sm-12 el-col-md-8 el-col-lg-6" v-for="(item, index) in listData" :key="index">
                <div class="about-item-data el-mx-auto-90">
                <img :src="item.imageUrl">
                <h1 class="label mt-20 text-center" v-if="showTitle">{{ item.label }}</h1>
                <div class="about-item-text text-center" :class="showTitle ? 'data-flex justify-content-center' : ''">
                  <h1 v-if="!showTitle">{{ item.label }}</h1>
                  <div class="el-mx-auto-80 el-content-text mt-20">{{ item.content }}</div>
                </div>
              </div>
            </div>
            </div>
        </div>
</template>

<script>
import { type } from 'jquery';


  export default {
    name: 'jrArticleHover',
    data(){
      return{}
    },
    props: {
        showTitle: {
            type: Boolean,
            default: false
        },
        listData: {
            type: Array,
            default: () => ([]),
          },

    },
    methods:{},
 }
</script>

<style scoped>
  @import url("../../assets/css/style.css");
  .titled_2 {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .mini_desc {
    color: rgba(0, 0, 0, 0.70);
    font-family: 'Roboto';
    font-size: 20px;
    margin-top: 7px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0px;
    line-height: 125%;
  }

  .about-data {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 10px;
  }

  .about-item-data {
    padding: 9px 9px 9px 9px;
    margin: 0.5rem;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }

  .about-item-data .about-item-text {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.70);
    color: #fff;
    padding: 10px 0;
    opacity: 0;
    transition: all 1s ease;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  .about-item-data p {
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 7;
    height: 100%;

  }

  .about-item-data:hover .about-item-text{
    opacity: 1;
    display: block;
  }


  .about-item-data img {
    width: 100%;
    object-fit: cover;
    height: 14rem;
  }

  .about-item-data h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 148%;
    margin-top: 11px;
    margin-bottom: 6px;
    /* or 21px */

    text-align: center;
  }

  .about-item-data p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 133%;
    /* or 13px */
    margin-bottom: 3px;
    text-align: center;
  }

  .about-item div h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    margin-bottom: 7px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-item div p {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    /* identical to box height */


    color: #FFFFFF;
  }

  .about-data {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin-top: 10px;
  }
</style>