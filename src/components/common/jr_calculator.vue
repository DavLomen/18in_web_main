<!-- 利润计算器组件 -->
<template>
    <div>
      <div class="container" style="max-width: 90%;margin: 0 auto;">
        <div class="row justify-content-center">
          <div class="col-md-8 col-xl-6">
            <h2 class="mt-0 text-center title-main">{{title}}</h2>
            <p class="mb-0 mx-auto text-center t-short-para" style="font-size: 16px;">
              {{tip}}
            </p>
          </div>
        </div>
        <div class="row row_input mt-20">
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="form-group">
              <label class="d-inline-block mb-2 t-heading-font fw-md el-content-label">{{ label[0] || '' }}</label>
              <select name="plan_id" style="width: 21.5rem;" class="form-select form--select" v-model="selectM" @change="handelChange">
                <option :value="item.id" v-for="(item,index) in listData" :key="index">
                  {{item.title}}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="form-group">
              <label class="d-inline-block mb-2 t-heading-font fw-md el-content-label">{{ label[1] || '' }}</label>
              <input style="width: 20rem" type="text" v-model="selectP.amount" name="amount" class="form-control form--control" autocomplete="off">
              <code class="limit"></code>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4">
            <div class="form-group">
              <label class="d-inline-block mb-2 t-heading-font fw-md el-content-label">{{ label[2] || '' }}</label>
              <input style="width: 20rem" v-if="selectP.daily_rate !=''" type="text" v-model="((selectP.daily_rate)/100*selectP.amount*selectP.cycle).toFixed(4)" class="form-control form--control" readonly>
              <input style="width: 20rem" v-else type="text" class="form-control form--control">
            </div>
            <code class="msg">{{$t('calculator[5]')}}: {{selectP.daily_rate}}%</code>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>

  export default {
      name:'jrCalculator',
      data(){
        return{
            selectP:{
              daily_rate:0,
              amount: 0,
              cycle: 0
            },
        }
      },
      props: {
        // 选项数据
        listData: {
            type: Array,
            default: () => ([]),
          },
        // 标题
        title: {
          type: String,
          default: '',
        },
        // 小标题
        tip: {
          type: String,
          default: '',
        },
        // 3个选项的标题传入例子['a', 'b', 'c']
        label: {
          type: Array,
          default: () => ([]),
        },
      },
      methods:{
        handelChange() {
            let id = this.selectM;
            this.selectP = this.listData.filter(item=>item.id==id)[0];
        },
      },
   }
  </script>
  
  <style scoped>
  .row_input{
    padding: 25px 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  </style>