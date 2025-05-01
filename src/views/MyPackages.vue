<template>
  <div class="HomePage" id="app">
    <Header></Header>

    <div class="d-flex">
      <div class="col-2 border-end border-hhs d-none d-lg-block">
        <Side></Side>
      </div>
      <div class="container col-lg-10 ">
        <div class="">
          <h4 class="text-zs">{{$t('transaction[5]')}}</h4>
          <table class="w-100 text-bhs text-center">
            <thead class="fs-5 border-bottom border-hhs bg-okh" style="height: 50px">
            <tr class="">
              <th  scope="col" class="text-center">{{$t('package[1]')}}</th>
              <th  scope="col" class="text-center">{{$t('package[11]')}}</th>
              <th  scope="col" class="text-center">{{$t('package[10]')}}</th>
              <th  scope="col" class="text-center">{{$t('package[2]')}}</th>
              <th  scope="col" class="text-center">{{$t('package[12]')}}</th>
              <!--                    <th  scope="col" class="text-center">{{$t('product[14]')}}</th>-->
              <th  scope="col" class="text-center">{{$t('package[8]')}}</th>
              <th  scope="col" class="text-center">{{$t('package[9]')}}</th>
            </tr>
            </thead>
            <tbody class="fs-7" style="height: 50px">
            <tr v-for="(item,index) in listData" :key="index">
              <!--                    <td  class="text-center small">-->
              <!--                      {{item.order_number}}<br>{{item.addtime_txt}}-->
              <!--                    </td>-->
              <td  class="text-center small">
                {{item.title}}
              </td>

              <td  class="text-center small">
                {{item.cycle}} {{$t('product[15]')}}
              </td>
              <td  class="text-center small">
                {{item.amount}}
              </td>
              <td  class="text-center small">
                {{InitData.currency}} {{item.day_income}}
              </td>
              <td  class="text-center small">
                {{InitData.currency}} {{item.total_income}}
              </td>
              <!--                    <td  class="text-center small">-->
              <!--                      <div class="td" @click="jumpShow(item)">{{$t('dashboard[0]')}}</div>-->
              <!--                    </td>-->
              <td  class="text-center small">
                {{item.addtime_txt}}
              </td>
              <td  class="text-center small">
                {{item.end_time}}
              </td>
              <!--                    <td  class="text-center small">-->
              <!--                      <van-count-down :time="item.countdown*1000" v-if="item.countdown>0">-->
              <!--                        <template v-slot="timeData">-->
              <!--                          <span class="item">{{ timeData.hours+(timeData.days*24)}}</span>-->
              <!--                          <span class="item">:{{timeData.minutes<10?'0'+timeData.minutes:timeData.minutes }}</span>-->
              <!--                          <span class="item">:{{ timeData.seconds<10?'0'+timeData.seconds:timeData.seconds }}</span>-->
              <!--                        </template>-->
              <!--                      </van-count-down>-->
              <!--                      <span v-else>{{$t('complete')}}</span>-->
              <!--                    </td>-->
            </tr>
            </tbody>
          </table>
          <div class="mt-4">
            <div class="VuePagination ">
              <paginate
                :page-count="data_total_page"
                :page-range="3"
                :margin-pages="2"
                :click-handler="changePage"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
                :prev-class="'prev-item'"
                :prev-link-class="'prev-link'"
                :next-class="'prev-item'"
                :next-link-class="'prev-link'"
              >
              </paginate>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="rainbow-gradient-circle"></div>
      <div class="rainbow-gradient-circle theme-pink"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'transaction',
    components: {
    },
    data() {
      return {
        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,

        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:1,
        data_total_page:1,
        status:'',
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      let status = this.$route.query.status;
      if (status != undefined && status !='') {
        this.status = status;
      }
      this.getListData('init');
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      jumpShow(item) {
        localStorage.setItem("agreement", item.agreement);
        this.$router.push('/productDetail?view=1&id='+item.pid)
      },
      changePage(page){
        this.pageNo = page;
        this.getListData('next');
      },
      perPage(){
        if (parseInt(this.data_current_page) > 1) {
          this.pageNo = parseInt(this.data_current_page) - 1;
          this.getListData('next');
        }
      },
      nextPage(){
        if (parseInt(this.data_current_page) < this.data_total_page) {
          this.pageNo = parseInt(this.data_current_page) + 1;
          this.getListData('next');
        }
      },
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else if (type == 'init') {
          this.pageNo = 1;
          this.isFinished = false;
        } else {
          this.isFinished = false;
        }
        this.$Model.MyProductList({status: this.status,page_no: this.pageNo,is_u: 2},data=>{
          this.isLoad = false
          if(data.code==1){
            if(data.data.data.length<=0){
              this.listData =[];
            }else {
              this.data_current_page = data.data.current_page;
              this.data_total_page = data.data.last_page;
              if(type=='load'){
                this.listData = this.listData.concat(data.data.data);
              }else{
                this.listData = data.data.data;
              }
            }
            if(data.data.total ==0 || this.pageNo == data.data.last_page){
              this.isFinished = true
            }else{
              this.isFinished = false
            }
          }else{
            this.listData = []
            this.isFinished = true
          }
        })
      },
    },
  }
</script>
<style scoped>
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
  }

  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px
  }

  ::-webkit-scrollbar-corner,::-webkit-scrollbar-track {
    background-color: #e2e2e2
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: rgb(13,110,253)
  }

  .slide-enter-active,.slide-leave-active {
    transition: all .2s ease
  }

  .slide-enter,.slide-leave-to {
    transform: translateY(10px);
    opacity: 0
  }

  .slide-right-enter-active,.slide-right-leave-active {
    transition: all .2s ease
  }

  .slide-right-enter,.slide-right-leave-to {
    transform: translateX(-10px);
    opacity: 0
  }

  @keyframes tobig-9afe708e {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
    -webkit-appearance: none!important
  }

  input[type=number] {
    -moz-appearance: textfield
  }

  .el-carousel__indicators--outside button {
    background-color: rgb(13,110,253)!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: rgb(13,110,253)!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: rgb(13,110,253)!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: rgb(13,110,253)!important*/
  /*}*/

  .el-message {
    font-size: 1.6rem
  }

  .el-menu-item {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: 700
  }

  .el-submenu__title {
    font-size: 1.5rem!important;
    font-weight: 700
  }

  .el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-] {
    font-size: 2rem
  }

  .el-submenu__icon-arrow {
    font-size: 1.4rem!important
  }

  .el-menu-item.is-active,.el-menu-item:hover,.el-submenu__title:hover {
    color: rgb(13,110,253);
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: rgb(13,110,253)
  }

  .lang-item {
    display: flex;
    align-items: center;
    width: 100%;
    white-space: nowrap
  }

  .lang-item .flag {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .option-label {
    display: flex;
    align-items: center;
    width: 100%
  }

  .option-label .icon {
    min-width: 2.5rem;
    max-width: 2.5rem;
    height: 2.5rem;
    margin-right: .6rem
  }

  .el-input {
    font-size: 1.5rem!important
  }

  .el-input .el-input__inner {
    height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 2rem;
    font-family: myFont;
    color: #000;
    border: 1px solid #d9d9d9!important
  }

  .el-textarea__inner {
    font-size: 1.5rem!important;
    font-family: myFont;
    color: #000!important
  }

  .el-form-item__label {
    padding-bottom: 1rem!important;
    line-height: normal!important;
    font-size: 1.5rem!important;
    color: #000!important;
    word-wrap: break-word
  }

  .el-input.is-disabled .el-input__inner {
    color: #000!important;
    cursor: default!important
  }

  .el-radio {
    color: #000!important
  }

  .el-radio__label {
    font-size: 1.5rem!important
  }

  .el-select {
    width: 100%
  }

  .el-select-dropdown__item {
    font-size: 1.5rem;
    font-family: myFont
  }

  .el-select-dropdown__empty {
    font-size: 1.5rem!important;
    font-family: myFont
  }

  .el-select-dropdown__item.selected {
    color: rgb(13,110,253)
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgb(13,110,253)!important;
    border-color: rgb(13,110,253)!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: rgb(13,110,253)!important
  }

  @media only screen and (min-width: 1024px) {
    .container .t-table,.container {
      width:100%
    }

    .container .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }

    .container .t-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: #f4f4f4;
    }

    .container .t-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .t-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .t-table .tr .th {
      word-wrap: break-word
    }

    .container .t-table .tr .td,.container .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      color: #000;
      text-align: center
    }

    .container .t-table .tr .td {
      word-break: break-all
    }

    .container .t-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1.5rem;
      color: #444;
      text-align: center;
      white-space: nowrap;
      background-color: #fff
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 3rem 0 0
    }

    .container .pagination-box .pagination-h5 {
      display: none
    }
  }

  @media only screen and (max-width: 1024px) {
    .container .t-table,.container {
      width:100%
    }

    .container .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      background-color: #fff
    }

    .container .t-table .tr:first-child {
      border-bottom: none!important;
      border-radius: 4px 4px 0 0;
      background-color: #f4f4f4;
    }

    .container .t-table .tr:last-child {
      border-radius: 0 0 4px 4px
    }

    .container .t-table .tr:not(:last-child) {
      border-bottom: 1px solid #e9e9e9
    }

    .container .t-table .tr .th {
      word-wrap: break-word
    }

    .container .t-table .tr .td,.container .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.2rem;
      color: #000;
      text-align: center
    }

    .container .t-table .tr .td {
      word-break: break-all
    }

    .container .t-table .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      font-size: 1.4rem;
      color: #444;
      text-align: center;
      white-space: nowrap;
      background-color: #fff
    }

    .container .pagination-box {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 0 0
    }

    .container .pagination-box .pagination-pc {
      display: none
    }
  }

</style>
