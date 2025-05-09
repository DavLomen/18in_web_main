<!-- 滚动数据 -->
<template>
    <div class="el-row">
      <div class="mt-20" v-for="(item,index) in list" :key="index" :class="!cloName ? `el-col-${col}` : cloName">
        <div class="card text-center el-mx-auto-90" :style="`background:${item.cardColor || '#000'};color:#fff`">
          <div class="count font-title mt-40">{{ item.count }}+</div>
          <div class="text mb-40 mtb-10 el-content-label">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name:'jrRollingData',
      data(){
        return{
          list: []
        }
      },
      created(){
        this.list = JSON.parse(JSON.stringify(this.listData));
        this.list.forEach((el) => {
          this.$set(el, 'count', 0)
        });
        this.$nextTick(() => {
          this.move();
        })
      },
      props: {
        listData: {
          type: Array,
          default: () => ([]),
        },
        cloName: {
          style: {
            type: String,
            default: null,
          },
        },
        col: {
          type: String,
          default: '6',
        },
      },
      methods:{
      move() {
        let timer = setInterval(() => {
          for(let index=0;index<this.list.length;index++)
            if (this.list[index].count < this.listData[index].count) {
              this.list[index].count += this.list[index].baseNumber || 1;
              this.move();
            } else {
              clearInterval(timer);
            }
          }, 10);
        }
      },
   }
  </script>
  
  <style scoped>
  @import url("../../assets/css/style.css");
  .card{
    border-radius: 12px;
    padding: 10px 15px;
  }
  </style>