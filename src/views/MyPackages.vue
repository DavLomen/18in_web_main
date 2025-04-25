<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('head[11]')}}</div>
        <div class="el-dropdown">
          <div @click="showUserDown = !showUserDown" class="right-icon el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button" tabindex="0" x-placement="bottom-end"><i class="el-icon-user"></i></div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-8265" v-show="showUserDown">
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/walletAddress')"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/loginPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/payPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
            <li  tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$Model.Logout()"><i class="el-icon-switch-button"></i> {{$t('head[5]')}} </li>
            <div x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
          </ul>
        </div>
      </div>

      <div class="container">
        <section class="section">
          <div class="">
            <div class="table-responsive--md">
              <table class="table custom--table">
                <thead>
                <tr>
                  <th>{{$t('package[1]')}}</th>
                  <th>{{$t('package[0]')}}</th>
                  <th>{{$t('package[2]')}}</th>
                  <th>{{$t('product[4]')}}</th>
                  <th>{{$t('product[2]')}}</th>
                  <th>{{$t('package[3]')}}</th>
                  <th>{{$t('productDetail[0]')}}</th>
                  <th>{{$t('next')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="listData.length==0">
                  <td colspan="100%" class="text-center">{{$t('vanPull[1]')}}</td>
                </tr>
                <tr v-for="(item,index) in listData" :key="index">
                  <td :data-label="$t('package[1]')" >
                   <div> {{item.title}}</div>
                  </td>
                  <td :data-label="$t('package[0]')">
                    <strong>{{item.order_number}}<br>{{item.addtime_txt}}</strong>
                  </td>
                  <td :data-label="$t('package[2]')">
                    {{InitData.currency}} {{item.day_income}}
                  </td>
                  <td :data-label="$t('product[4]')">
                    {{InitData.currency}} {{item.total_income}}
                  </td>
                  <td :data-label="$t('product[2]')">
                    {{item.cycle}} {{$t('product[15]')}}
                  </td>
                  <td :data-label="$t('package[3]')">
                    {{item.amount}}
                  </td>
                  <td :data-label="$t('productDetail[0]')">
                    <div @click="jumpShow(item)">{{$t('dashboard[0]')}}</div>
                  </td>
                  <td :data-label="$t('next')">
                    <van-count-down :time="item.countdown*1000" v-if="item.countdown>0"/>
                    <span v-else>{{$t('complete')}}</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div class="pagination-box">
          <div class="pagination-pc el-pagination is-background">
            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>
            </button>
            <ul class="el-pager">
              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
            </ul>
            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>
          </div>
          <div class="pagination-h5 el-pagination is-background">
            <button @click="perPage" type="button" :disabled="data_current_page==1?true:false" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>
            </button>
            <ul class="el-pager">
              <li @click="changePage(item)" :class="'number '+(item==data_current_page?'active':'')" v-for="item in data_total_page">{{item}}</li>
            </ul>
            <button @click="nextPage" :disabled="data_total_page==data_current_page?true:false" type="button" class="btn-next"><i class="el-icon el-icon-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="mask" v-if="showDialogD">
      <div class="modal" style="max-height: 100%;overflow: scroll;position: relative;">
        <div class="modal-header">
          <div class="modal-title">{{$t('productDetail[0]')}}</div>
          <div class="close" @click="showDialogD = false"><i class="el-icon-close"></i></div>
        </div>
        <div class="modal-body">
          <div class="">
            <div class="container">
              <div class="main">
                <div class="top">
                  <div style="position: relative;" class="image_border">
                    <img
                      class="product-img"
                      :src="InitData.setting.up_url + detailData.icon"
                    />
                  </div>
                  <div class="">
                    <div class="plan-title">{{detailData.title}}</div>
                    <div class="pricing">
                      <h1>${{parseFloat(detailData.amount)}}</h1>
                      <p>/{{detailData.cycle}} {{$t('product[15]')}}
                      </p>
                    </div>
                    <div class="description">
                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('product[2]')}}: <span class="notranslate">{{detailData.cycle}} {{$t('product[15]')}}
                            </span></p>
                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('product[0]')}}: <span class="notranslate">${{detailData.amount}}</span></p>
                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('product[3]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*1).toFixed(2))}}</span></p>
                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('product[4]')}}: <span class="notranslate">${{parseFloat((parseFloat(detailData.daily_rate)/100*detailData.amount*detailData.cycle).toFixed(2))}}</span></p>
                      <p><van-icon :name="'./static/image/check.png'" style="margin-right: 0.5rem;"/> {{$t('settle[0]')}}:<span class="notranslate">{{detailData.type==1?$t('product[7]'):$t('product[17]')}}</span></p>
                    </div>
                    <div class="bonus" style="padding: 0" v-if="detailData.amount !=15">
                      <div class="label">{{$t('product[10]')}}</div>
                      <ul style="display: flex;height: 3rem;padding: 0;font-size: 1.5rem;">
                        <div class="single-referral" v-for="(aa,i) in detailData.affiliate_bonus">
                          <div class="ddcc" v-if="aa==3">{{$t('affiliates[13]')}} {{(i+1)}}: <van-icon :name="'./static/image/333.png'" size="3.5rem" style="margin-right: 0.5rem;"/></div>
                          <div class="ddcc" v-if="aa==1.5">{{$t('affiliates[13]')}} {{(i+1)}}: <van-icon :name="'./static/image/151515.png'" size="3.5rem" style="margin-right: 0.5rem;"/></div>
                        </div>
                      </ul>
                    </div>
                    <div v-else style="height: 7rem"></div>
                  </div>
                </div>
                <div class="container-fluid">
                  <!--                  <div class="flexc">-->
                  <!--                    <div class="main-btn buy_bt" style="height: 48px; margin-top: 19px;"  @click="orderNow()">{{$t('settle[5]')}}</div>-->
                  <!--                  </div>-->
                  <div class="block-input new-collection" style="width: 100%;border-radius: 10px;font-weight: 600;font-size: 18px; margin-top: 21px; height: 61px; margin-bottom: 15px;">{{$t('productDetail[2]')}}</div>
                  <div class="description-block-2">
                    <div>
                      <div v-if="detailData.amount==100 || detailData.amount==10" class="ram_detail" style="border-radius: 10px; border: 2px solid var(--blue-blue-300, #fade88); padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">
                        <span v-if="detailData.amount==100">{{$t('productDetail[4]')}}</span>
                        <span v-else-if="detailData.amount==10">{{$t('productDetail[3]')}}</span>
                      </div>
                      <div v-else class="ram_detail" style="border-radius: 10px; border: 2px solid var(--blue-blue-300, #fade88); padding: 15px 35px; font-size: 18px; display: inline-flex; align-items: center; gap: 10px; font-family: Helvetica; text-transform: none; white-space: normal;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMzSURBVHgB7VdLUttAEB2NMGyAKDuqQEYu8qmsIk4Qc4LACSAniDkB9gnIDTAnwJwAOAHOKlVJwCqwC5YCwwL06bx2JJCxJY9SUGHBqxp7RurpeTP9mZYQL/jP0PIItyzL8DxvWZfyExFZmqZZ+HfxykW/KdGElAclx3FUdSoRwMJWGASb6C4LNdSlrtdUiIwkcFQsVgXRRjzGjvcxqYHdOhNjY80botfC91+FQtg4hWUSohzLhkS1t+129Z8I8HFTEOwkFH677HZri67rigz8mJmxxgsFJrwWEW52r66W0uZpqYuH4R4m2xg6kmit1G4fiByADhtm20HXyiIhh01me8eL33reUt7FGbB/k+eyDpjGnp6a2hwmN3ACv01zDQ+30HWhYPHD+bmTtgjL6ppGpZOT7TQZNsnE+PghNmT4vr/y/uyskXw/cAJwrp7DwQSVrMU5MpgoHK3+c3bWTpNjHUEQ1LhfKBQ2RRZ4R0emSWgtoQDIbaHtqMgem+Ye626Z5ufk87HkAMexCq/n3VeFAhZOT78IRcAPGjBDOSCqYLibWPMecch5QZDb6UZCyu2ISJ+57ghw2PRIIGSybJ/EcbHY4qYii6jgEHTQjKTP3BGAhxpR1xWK4PuAm1BHk380ovkBArEiHJEjng5utIYxQEBKGe/cEE8EhK3F/3pik3cEdF2PH9riqRDt3CO6GCAg/qZMPgXr0DAe/RQ4cUXpXbzrdJoDBHpeigjg/vTk5Kp4ZCAblvmfr/Pk87484IdhL1ZJvfBQRpziwaCeSgC5mi8KNkUZhUhFjEBkMmeUHKf4KMqcN53OdioBNgN2vx4x3WC7ZSm+uLwsoUhZzJJhHdh97xIaluK1FMZ1vFjlnKBJuZSnyHy4eFTYWBjWh90dQwsShGSFq9xepoOCrOs2Db/m5srx4pzecVLrw+Sya8L7soyhVOnyvJCPmugrj9nrUY6t5KoJ+xQWixsoOqrxmBXiu6CBiPnO3wRwXPf25sZGITqPcV9VDOHqQrtdy9Kv9F3wsNIdBRBpeL6/rnKr5voyYiLwjzJO4CMm2jgZgy8W9B3iFob73evr3VGl+wueFf4Apau8q/LsijQAAAAASUVORK5CYII=" style="width: 32px;" data-filename="info.png">
                        <span >{{$t('productDetail[5]')}}</span>
                      </div>
                    </div>
                    <h6 v-html="$t('productDetail[6]')"></h6>
                    <h6 v-html="$t('productDetail[7]')"></h6>
                    <h6 v-html="$t('productDetail[8]')"></h6>
                    <h6 v-html="$t('productDetail[9]')"></h6>
                    <h6 v-html="$t('productDetail[10]')"></h6>
                    <h6 v-html="$t('productDetail[11]')"></h6>
                    <h6 v-html="$t('productDetail[12]')"></h6>
                    <h6 v-html="$t('productDetail[13]')"></h6>
                    <h6 v-html="$t('productDetail[14]')"></h6>
                    <h6 v-html="$t('productDetail[15]')"></h6>
                    <h6 v-html="$t('productDetail[16]')"></h6>
                    <h6 v-html="$t('productDetail[17]')"></h6>
                    <h6 v-html="$t('productDetail[18]')"></h6>
                    <h6 v-html="$t('productDetail[19]')"></h6>
                    <h6 v-html="$t('productDetail[20]')"></h6>
<!--                    <h6 v-html="$t('productDetail[21]')"></h6>-->
                    <h6 v-if="detailData.agreement && detailData.agreement !=''" v-html="detailData.agreement">
                    </h6>
                    <h6>{{$t('productDetail[21]')}}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          <div class="centered">-->
          <!--            <button @click="buyProduct" class="main-btn modal-submit" style="width: fit-content;min-width: 200px;height: 40px; margin-bottom: 10px; font-weight: 400;" type="submit">{{$t('settle[10]')}}</button>-->
          <!--          </div>-->
        </div>
        <div class="diaf" >
          <div class="buttons">
            <a href="javascript:;"  class="w-100" @click="showDialogD = false"><div class="main-btn ed w-100">{{$t('close')}}</div></a>
            <!--                    <a href="javascript:;"  class="w-100" @click="$router.push(`/productDetail?id=${item.id}`)"><div class="main-btn ed w-100">{{$t('settle[4]')}}</div></a>-->
<!--            <div class="main-btn buy_bt" @click="orderNow(detailData)">{{$t('settle[5]')}}</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'transaction',
    components: {
      UserHeader
    },
    data() {
      return {
        showDialogD:false,
        detailData:{},

        showDetail:false,
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,

        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
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
        // localStorage.setItem("agreement", item.agreement);
        // this.$router.push('/productDetail?view=1&id=' + item.pid);
        this.$Dialog.Loading(this.$t('dialog[6]'));
        this.$Model.ProductDetail(item.pid, data => {
          this.$Dialog.Close();
          this.detailData = data.data;
          this.detailData.agreement = this.detailData.agreement + '<br>' + item.agreement;
          this.showDialogD = true;
        });
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

  /*::-webkit-scrollbar {*/
  /*  width: 4px;*/
  /*  height: 5px*/
  /*}*/

  /*::-webkit-scrollbar-corner,::-webkit-scrollbar-track {*/
  /*  background-color: #e2e2e2*/
  /*}*/

  /*::-webkit-scrollbar-thumb {*/
  /*  border-radius: 0;*/
  /*  background-color: #662282*/
  /*}*/

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
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
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
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
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
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
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
      word-break: break-word;
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
  .row1 .col-sm-4 {
    width: 100%;
    padding: 0 10px;
  }
  .container {
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
    .iframe {
      height: 54px !important;
    }
  }
  .col-md-4{flex:0 0 auto;width:33.33333333%}
  @media only screen and (max-width: 1024px) {
    html {
      font-size:10px
    }
    .cover{
      background-size: cover !important;
      background-position: center;
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
    background-color: #662282
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

  @keyframes tobig-17e61fa8 {
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
    background-color: #662282!important
  }

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
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
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
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
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
  }
  .container .box3 .product-list .product-item {
    position: relative;
  }
  .container .box-wrapper {
    position: relative;
    max-width: 1300px;
    z-index: 2;
    color: #000000;
  }
  @media only screen and (min-width: 1024px) {

    .container .mask {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0;
      background-color: rgba(0,0,0,.5);
      overflow: auto
    }

    .container .mask .modal {
      position: relative;
      width: 50rem;
      box-sizing: border-box;
      padding: .5rem 1.2rem 1.2rem;
      margin-bottom: 2rem;
      border-radius: 1rem;
      background-color: #fff
    }

    .container .mask .modal .auto-close-time {
      position: absolute;
      top: -2.2rem;
      right: -2.2rem;
      width: 3.8rem;
      height: 3.8rem;
      line-height: 3.8rem;
      box-sizing: border-box;
      border-radius: 50%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      white-space: nowrap;
      background-color: #ddd
    }

    .container .mask .modal .modal-content {
      width: 100%;
      min-height: 10rem;
      max-height: 70rem;
      overflow: auto
    }

    .container .mask .close-icon {
      font-size: 4.8rem;
      color: #fff;
      white-space: nowrap;
      cursor: pointer
    }

    .container .box-wrapper {
      width: 100%;
      /*max-width: 1300px;*/
      margin: 0 auto;
    }

    .container .box1 {
      display: flex;
      align-items: center;
      width: 100%;
      /*height: 70rem;*/
      box-sizing: border-box;
      padding: 2rem 3rem 10rem 3rem
    }

    .container .box1 .box1-inner-area {
      /*min-width: 70rem;*/
      /*width: 33.33%*/
    }

    .container .box1 .box1-inner-area .box1-title {
      line-height: 110%;
      font-size: 5.4rem;
      font-weight: 700;
      word-wrap: break-word;
      -webkit-text-fill-color: transparent;
      background: linear-gradient(90deg, #f8e4c7, #e1af61);
      -webkit-background-clip: text;
      color: #f8f8f8;
    }

    .container .box1 .box1-inner-area .box1-desc {
      margin: 3rem 0 2.5rem;
      line-height: 160%;
      font-size: 1.6rem;
      color: #fff;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info {
      width: 100%
    }

    .container .box1 .box1-inner-area .reward-info .info-item {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: red;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info .info-item:not(:last-child) {
      margin-bottom: 1rem
    }

    .container .box1 .box1-inner-area .action-btns {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 5rem
    }

    .container .box1 .box1-inner-area .action-btns .btn {
      /*height: 4.5rem;*/
      /*line-height: 4.5rem;*/
      padding: 1.3rem 1.5rem;
      min-width: 12rem;
      box-sizing: border-box;
      /*padding: 0 2.5rem;*/
      border-radius: .5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: red;
      cursor: pointer
    }

    .container .box1 .box1-inner-area .action-btns .btn:not(:last-child) {
      margin-right: 1.6rem
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 8rem 3rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list {
      display: flex;
      justify-content: space-between;
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid #662282;
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 64px;
      max-width:64px;
      height: 64px
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 2rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: left;
      word-wrap: break-word
    }

    .container .box3 {
      width: 100%;
      box-sizing: border-box;
      padding: 2rem 3rem
    }

    .container .box3 .box3-title {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list {
      width: 100%
    }

    .container .box3 .product-list .product-item {
      display: flex;
      width: 100%
    }
    .container .box3 .product-list .product-item .progress {
      position: absolute;
      left: 34rem;
      bottom: 1rem;
      width: calc(100% - 36rem);
    }
    .container .box3 .product-list .product-item:not(:last-child) {
      margin-bottom: 3rem
    }

    .container .box3 .product-list .product-item .img-box {
      position: relative;
      min-width: 30rem;
      max-width: 30rem;
      height: 26rem;
      overflow: hidden
    }

    .container .box3 .product-list .product-item .img-box .img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    .container .box3 .product-list .product-item .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 26rem;
      box-sizing: border-box;
      padding: 0 3rem;
      background-color: #efefef
    }

    .container .box3 .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 2.5rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .name .countdown {
      font-size: 1.8rem;
      color: #28c76f
    }

    .container .box3 .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.9rem;
      font-weight: 700
    }

    .container .box3 .product-list .product-item .right .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item {
      width: 25%;
      box-sizing: border-box;
      padding-right: 2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+5) {
      margin-top: 2.5rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .rebate {
      word-break: keep-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus {
      min-width: 16rem;
      max-width: 16rem;
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .buy-btn {
      height: 5rem;
      line-height: 5rem;
      box-sizing: border-box;
      padding: 0 2.5rem;
      border-radius: 5rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }

    .container .box4,.container .box5 {
      width: 100%;
      box-sizing: border-box;
      padding: 10rem 3rem
    }

    .container .box4 .box-wrapper,.container .box5 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box4 .box-wrapper .left,.container .box4 .box-wrapper .right,.container .box5 .box-wrapper .left,.container .box5 .box-wrapper .right {
      width: 100%
    }

    .container .box4 .box-wrapper .left .title,.container .box4 .box-wrapper .right .title,.container .box5 .box-wrapper .left .title,.container .box5 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left .title:after,.container .box4 .box-wrapper .right .title:after,.container .box5 .box-wrapper .left .title:after,.container .box5 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -2rem;
      left: 0;
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.8rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left,.container .box5 .box-wrapper .left {
      margin-right: 5rem
    }

    .container .box4 .box-wrapper .right,.container .box5 .box-wrapper .right {
      margin-left: 5rem
    }

    .container .box4 .box-wrapper .img,.container .box5 .box-wrapper .img {
      min-width: 50rem;
      max-width: 50rem
    }

    .container .box6 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
    }

    .container .box6 .box6-title {
      position: relative;
      width: 100%;
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table {
      width: 100%
    }

    .container .box6 .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 98%;
      height: 5rem;
      margin: 0 auto;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }

    .container .box6 .t-table .tr:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box6 .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 0 2rem;
      font-size: 1.6rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table .tr .th:last-child {
      flex: 3
    }

    .container .box6 .t-table .tr .td {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: 0 2rem;
      font-size: 1.6rem;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
    }

    .container .box7 .box-wrapper {
      display: flex;
      align-items: center
    }

    .container .box7 .box-wrapper .img {
      min-width: 50rem;
      max-width: 50rem
    }

    .container .box7 .box-wrapper .right {
      width: 100%;
      margin-left: 5rem
    }

    .container .box7 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 6rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -2rem;
      left: 0;
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box7 .box-wrapper .right .faq-list {
      width: 100%
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem 2rem;
      border-radius: 6px;
      background-color: #efefef;
      transition: all .3s
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item:not(:last-child) {
      margin-bottom: 2.5rem
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.8rem;
      max-width: 3.8rem;
      height: 3.8rem;
      margin-left: 3rem;
      border-radius: 50%;
      background-color: #662282
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 2rem
    }

    .container .box8 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 3rem 8rem
    }

    .container .box8 .box8-title {
      position: relative;
      width: 100%;
      margin-bottom: 10rem;
      font-size: 3rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .box8-title:after {
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 16rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box8 .customer-list {
      width: 100%
    }

    .container .box8 .customer-list .customer-item {
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-items: center;*/
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 2rem;
      height: fit-content;
      min-height: 300px;
    }

    .container .box8 .customer-list .customer-item .avatar {
      min-width: 8rem;
      max-width: 8rem;
      height: 8rem;
      margin-bottom: .5rem
    }

    .container .box8 .customer-list .customer-item .name {
      width: 100%;
      font-size: 2.4rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: #662282
    }
  }

  @media only screen and (max-width: 1024px) {

    .container .mask {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 3rem 1.5rem;
      background-color: rgba(0,0,0,.4);
      overflow: auto
    }

    .container .mask .modal {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: .5rem 1rem 1rem;
      margin-bottom: 2rem;
      border-radius: .8rem;
      background-color: #fff
    }

    .container .mask .modal .auto-close-time {
      position: absolute;
      top: -1.8rem;
      right: -1rem;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      box-sizing: border-box;
      border-radius: 50%;
      font-size: 1.4rem;
      color: #000;
      text-align: center;
      white-space: nowrap;
      background-color: #ddd
    }

    .container .mask .modal .modal-content {
      width: 100%;
      min-height: 10rem;
      max-height: 50rem;
      overflow: auto
    }

    .container .mask .close-icon {
      font-size: 4rem;
      color: #fff;
      white-space: nowrap;
      cursor: pointer
    }

    .container .box-wrapper {
      width: 100%
    }

    .container .box1 {
      display: flex;
      align-items: center;
      width: 100%;
      /*height: 55rem;*/
      box-sizing: border-box;
      padding: 2rem 1rem 10rem 1rem;
      /*background: url(../img/top-img.2fb775d8.png) no-repeat;*/
      /*background-size: auto 100%;*/
      background-position: 0;
    }

    .container .box1 .box1-inner-area {
      /*max-width: 70rem*/
    }

    .container .box1 .box1-inner-area .box1-title {
      line-height: 110%;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      word-wrap: break-word;
      -webkit-text-fill-color: transparent;
      background: linear-gradient(90deg, #f8e4c7, #e1af61);
      -webkit-background-clip: text;
      color: #f8f8f8;
    }

    .container .box1 .box1-inner-area .box1-desc {
      margin: 2rem 0 1.5rem;
      line-height: 160%;
      font-size: 1.5rem;
      color: #fff;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info {
      width: 100%
    }

    .container .box1 .box1-inner-area .reward-info .info-item {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: red;
      word-wrap: break-word
    }

    .container .box1 .box1-inner-area .reward-info .info-item:not(:last-child) {
      margin-bottom: .8rem
    }

    .container .box1 .box1-inner-area .action-btns {
      display: flex;
      /*justify-content: center;*/
      align-items: center;
      width: 100%;
      margin-top: 3rem;
      padding-left: 2rem;
    }

    .container .box1 .box1-inner-area .action-btns .btn {
      /*height: 4.2rem;*/
      /*line-height: 4.2rem;*/
      min-width: 12rem;
      box-sizing: border-box;
      padding: 1.3rem 1.5rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-color: red;
      cursor: pointer
    }

    .container .box1 .box1-inner-area .action-btns .btn:not(:last-child) {
      margin-right: 1.2rem
    }

    .container .box2 {
      width: 100%;
      box-sizing: border-box;
      padding: 3rem 1rem
    }

    .container .box2 .box2-title {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box2 .tab-list {
      width: 100%
    }

    .container .box2 .tab-list .tab-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      cursor: pointer;
      box-shadow: rgba(102, 34, 130, 0.33) 0px 0px 5px 0px;
      padding: 10px 20px;
      border-radius: 10px;
      border: 1px solid #662282;
      margin: 0 1rem;
    }

    .container .box2 .tab-list .tab-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box2 .tab-list .tab-item .img {
      min-width: 64px;
      max-width: 64px;
      height: 64px;
    }

    .container .box2 .tab-list .tab-item .line {
      width: 8rem;
      height: 2px;
      margin: 1.5rem 0;
      border-radius: 2px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box2 .tab-list .tab-item .title {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      text-align: left;
      word-wrap: break-word;
      margin-top: 10px;
    }

    .container .box2 .tab-list .tab-item .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.5rem;
      color: #000;
      text-align: left;
      word-wrap: break-word
    }

    .container .box3 {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem
    }

    .container .box3 .box3-title {
      position: relative;
      width: 100%;
      margin-bottom: 0.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item,.container .box3 .product-list {
      width: 100%
    }

    .container .box3 .product-list .product-item:not(:last-child) {
      margin-bottom: 2rem
    }

    .container .box3 .product-list .product-item .img-box {
      position: relative;
      width: 100%
    }

    .container .box3 .product-list .product-item .img-box .img {
      display: block;
      width: 100%
    }

    .container .box3 .product-list .product-item .right {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1rem 1.5rem;
      background-color: #efefef
    }

    .container .box3 .product-list .product-item .right .name {
      width: 100%;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .name .countdown {
      display: block;
      font-size: 1.5rem;
      color: #28c76f
    }

    .container .box3 .product-list .product-item .right .name .countdown i {
      margin-right: 2px;
      font-size: 1.6rem;
      font-weight: 700
    }

    .container .box3 .product-list .product-item .right .bottom {
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .info-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item {
      width: 50%;
      box-sizing: border-box;
      padding-right: 1rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item:nth-child(n+3) {
      margin-top: 1.2rem
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .info-list .info-item .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus {
      width: 100%;
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .label {
      width: 100%;
      margin-bottom: .8rem;
      font-size: 1.5rem;
      color: #333;
      word-wrap: break-word
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .bonus .value {
      width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-break: break-all
    }
    .container .box3 .product-list .product-item .progress {
      /*手机*/
      position: absolute;
      left: 2rem;
      bottom: 7rem;
      width: calc(100% - 4rem);
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .buy-btn {
      margin-top: 2rem;
      width: 100%;
      height: 4.5rem;
      line-height: 4.5rem;
      box-sizing: border-box;
      padding: 0 2rem;
      border-radius: 4.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      background-image: linear-gradient(90deg,#fe9500,#fade88);
      cursor: pointer
    }

    .container .box3 .product-list .product-item .right .bottom .right-actions .disabled-btn {
      color: #333!important;
      background-image: linear-gradient(90deg,#c5c5c5,#c5c5c5)
    }

    .container .box4,.container .box5 {
      width: 100%;
      box-sizing: border-box;
      padding: 4rem 1rem
    }

    .container .box4 .box-wrapper,.container .box5 .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box4 .box-wrapper .left,.container .box4 .box-wrapper .right,.container .box5 .box-wrapper .left,.container .box5 .box-wrapper .right {
      width: 100%
    }

    .container .box4 .box-wrapper .left .title,.container .box4 .box-wrapper .right .title,.container .box5 .box-wrapper .left .title,.container .box5 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left .title:after,.container .box4 .box-wrapper .right .title:after,.container .box5 .box-wrapper .left .title:after,.container .box5 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box4 .box-wrapper .left .desc,.container .box4 .box-wrapper .right .desc,.container .box5 .box-wrapper .left .desc,.container .box5 .box-wrapper .right .desc {
      width: 100%;
      line-height: 160%;
      font-size: 1.6rem;
      color: #000;
      word-wrap: break-word
    }

    .container .box4 .box-wrapper .left,.container .box5 .box-wrapper .left {
      margin-bottom: 1rem
    }

    .container .box4 .box-wrapper .right,.container .box5 .box-wrapper .right {
      margin-top: 1rem
    }

    .container .box4 .box-wrapper .img,.container .box5 .box-wrapper .img {
      width: 100%
    }

    .container .box6 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box6 .box6-title {
      position: relative;
      width: 100%;
      margin-bottom:1rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table {
      width: 100%
    }

    .container .box6 .t-table .tr {
      display: flex;
      justify-content: space-between;
      width: 98%;
      margin: 0 auto;
      min-height: 4.5rem;
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }


    .container .box6 .t-table .tr:not(:last-child) {
      margin-bottom: .5rem
    }

    .container .box6 .t-table .tr .th {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.3rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box6 .t-table .tr .th:last-child {
      flex: 3
    }

    .container .box6 .t-table .tr .td {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      box-sizing: border-box;
      padding: .5rem;
      font-size: 1.2rem;
      color: #000;
      text-align: center;
      word-break: break-all
    }

    .container .box6 .t-table .tr .td:last-child {
      flex: 3
    }

    .container .box7 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box7 .box-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center
    }

    .container .box7 .box-wrapper .img {
      width: 100%
    }

    .container .box7 .box-wrapper .right {
      width: 100%;
      margin-top: 1rem
    }

    .container .box7 .box-wrapper .right .title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box7 .box-wrapper .right .faq-list {
      width: 100%
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1.5rem;
      border-radius: 6px;
      background-color: #efefef;
      transition: all .3s
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item:not(:last-child) {
      margin-bottom: 1.5rem
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .name {
      max-width: 100%;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      word-wrap: break-word
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.2rem;
      max-width: 3.2rem;
      height: 3.2rem;
      margin-left: 1.5rem;
      border-radius: 50%;
      background-color: #662282
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon i {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      transition: all .3s ease
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-title .right-icon .on {
      transform: rotate(180deg)
    }

    .container .box7 .box-wrapper .right .faq-list .faq-item .faq-content {
      width: 100%;
      margin-top: 1rem
    }

    .container .box8 {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1rem 3rem
    }

    .container .box8 .box8-title {
      position: relative;
      width: 100%;
      margin-bottom: 4.5rem;
      font-size: 2.2rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .box8-title:after {
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 10rem;
      height: 4px;
      border-radius: 4px;
      background-image: linear-gradient(90deg,#fe9500,#fade88)
    }

    .container .box8 .customer-list {
      width: 100%
    }

    .container .box8 .customer-list .customer-item {
      /*display: flex;*/
      /*flex-direction: column;*/
      /*align-items: center;*/
      width: 100%;
      box-sizing: border-box;
      padding: .8rem .8rem 1.5rem;
      height: fit-content;
      min-height: 300px;
    }

    .container .box8 .customer-list .customer-item .avatar {
      min-width: 6rem;
      max-width: 6rem;
      height: 6rem;
      margin-bottom: .5rem
    }

    .container .box8 .customer-list .customer-item .name {
      width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .position {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.4rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .customer-item .content {
      width: 100%;
      line-height: 160%;
      font-size: 1.3rem;
      color: #000;
      text-align: center;
      word-wrap: break-word
    }

    .container .box8 .customer-list .active {
      background-color: #662282
    }
  }
  .mySwiper>>>.swiper-slide-next {
    background-color: #662282 !important;
  }
  .customer-item img {
    margin: 0 auto;
    display: block;
  }
  @media only screen and (min-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 4rem 0px;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 80%;
      margin: 0px auto;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.8rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 4rem;
      max-width: 4rem;
      height: 3.2rem;
      margin-left: 4rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 2rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 2rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }

  .s-content {
    font-size: 16px;
    line-height: 1.5
  }
  .svg-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .wrap {
    width: 100%;
    padding: 10px
  }

  .wrap .item-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
  }

  .wrap .item {
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 24px 8px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    cursor: pointer;
    font-size: 29px;
    transition: all .3s ease;
    padding: 15px
  }

  .wrap .item img {
    width: 43.5px;
    height: 43.5px
  }

  .wrap .item .svg-icon {
    transition: all .3s ease
  }

  .wrap .item:hover {
    box-shadow: 0 0 24px 8px rgba(0,0,0,.2)
  }
  @media only screen and (max-width: 1024px) {
    .mask {
      position: fixed;
      bottom: 0px;
      left: 0px;
      z-index: 99;
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
      padding: 2rem 1rem;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: auto;
    }

    .mask .modal {
      width: 100%;
      border-radius: 4px;
      background-color: rgb(255, 255, 255);
    }

    .mask .modal .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-bottom: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-header .modal-title {
      max-width: 100%;
      font-size: 1.7rem;
      font-weight: 700;
      color: rgb(0, 0, 0);
      overflow-wrap: break-word;
    }

    .mask .modal .modal-header .close {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3.6rem;
      max-width: 3.6rem;
      height: 2.8rem;
      margin-left: 2rem;
      border-radius: 4px;
      background-color: rgb(234, 84, 85);
      cursor: pointer;
    }

    .mask .modal .modal-header .close i {
      font-size: 1.7rem;
      color: rgb(255, 255, 255);
    }

    .mask .modal .modal-body {
      width: 100%;
      min-height: 8rem;
      box-sizing: border-box;
      padding: 1.5rem;
    }

    .mask .modal .modal-footer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem;
      border-top: 1px solid rgb(233, 233, 233);
    }

    .mask .modal .modal-footer .confirm-btn {
      height: 3.5rem;
      line-height: 3.5rem;
      box-sizing: border-box;
      padding: 0px 1.6rem;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
      white-space: nowrap;
      background-color: rgb(251, 194, 65);
      cursor: pointer;
    }
  }
  .payment-info {
    font-size: 1.2rem;
  }
  .payment-info img {
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%
    }

    .container .quotes {
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      background-color: #fff9f0;
      overflow: hidden;
      margin-bottom: 0;
      border-radius: 0;
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  @media only screen and (max-width: 1024px) {

    .container .quotes {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      background-color: #fff9f0;
      overflow: hidden;
      margin-bottom: 0;
      border-radius: 0;
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  .modal-body>>>img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  .imageDiv img{
    display: block; margin: 5rem auto;max-width: 70%;
  }



  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .title-main {
      font-size: 2.5rem !important;
    }
    .col-md-6 {
      width: 100%;
    }
    .box1-inner-area {
      padding: 35px 8px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      top: 0px;
      width: 80%;
      height: 200px;
      background-size: 100% auto !important;
    }
    .banner_inp {
      width: 100%;
      padding: 9px 0px 9px 8px;
      font-size: 14px;
      height: auto;
      border-radius: 14px;
      max-width: 300px;
      border: 1px solid #B32283;
    }
    .menu-btn {
      width: 100%;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #B62283 0%, #722283 100%);
      border-radius: 10px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }
    .button_home {
      display: inline-block;
      text-align: center;
      outline: none;
      border: none;
      width: auto;
      padding: 10px 25px;
      height: auto;
      min-width: 150px;
      margin-top: 10px;
    }
  }

  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .columnd {
      width: 25%;
    }
    .box1-inner-area {
      padding: 70px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      top: 0px;
      width: 50%;
      height: 679px;
      background-size: 100% auto !important;
    }
  }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width:769px) {
    .input-relative {
      width: calc(100% - 187px);
      position: relative;
    }
    .nav-btn {
      display: inline-block;
      cursor: pointer;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.18px;
      padding: 10.5px 0 10.5px 0;
      width: 135px;
      text-align: center;
    }
    .input-main {
      background: rgba(255, 255, 255, 0.08);
      border: 0.5px solid #CDCDCD;
      border-radius: 10px;
      width: 100%;
      height: 48px;
      padding: 0px 10px 0px 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.7);
    }
    .pass-input {
      height: 56px;
      padding: 0px 16px 0px 16px;
    }
    .newinput {
      height: 65px!important;
      border-radius: 20px;
    }
    .banner_inp {
      border-radius: 30px;
      width: -webkit-fill-available;
      border: 1px solid #662282;
    }
    .box1-inner-area {
      padding: 140px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: 100% auto !important;
    }
    .button_send {
      position: absolute;
      right: 1px;
      border-radius: 20px;
      line-height: 41px;
      top: 1px;
      height: 97%;
      cursor: pointer;
    }
    .br-30 {
      border-radius: 30px;
    }
    .signup {
      background: #F0E9F3;
      color: #662282;
      border: none;
    }
  }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: 1200px) {
    .input-relative {
      width: calc(100% - 187px);
      position: relative;
    }
    .nav-btn {
      display: inline-block;
      cursor: pointer;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.18px;
      padding: 10.5px 0 10.5px 0;
      width: 135px;
      text-align: center;
    }
    .input-main {
      background: rgba(255, 255, 255, 0.08);
      border: 0.5px solid #CDCDCD;
      border-radius: 10px;
      width: 100%;
      height: 48px;
      padding: 0px 10px 0px 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.7);
    }
    .pass-input {
      height: 56px;
      padding: 0px 16px 0px 16px;
    }
    .newinput {
      height: 65px!important;
      border-radius: 20px;
    }
    .banner_inp {
      border-radius: 30px;
      width: -webkit-fill-available;
      border: 1px solid #662282;
    }
    .box1-inner-area {
      padding: 140px 16px 0px;
    }
    .banner__image {
      position: absolute;
      background-position: top right!important;
      right: 0px;
      bottom: -10%;
      width: 55%;
      height: 542px;
      background-size: 100% auto !important;
    }
    .button_send {
      position: absolute;
      right: 1px;
      border-radius: 20px;
      line-height: 41px;
      top: 1px;
      height: 97%;
      cursor: pointer;
    }
    .br-30 {
      border-radius: 30px;
    }
    .signup {
      background: #F0E9F3;
      color: #662282;
      border: none;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-right: 0.5rem;;
    margin-left: 0.5rem;;
  }
  @media (min-width: 768px){
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  @media (min-width: 992px){
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      margin: 0 auto;
    }
  }
  .col-lg-6 {
    width: 100%;
  }
  @media (min-width: 992px){
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-6 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media (max-width: 992px){
    .page-banner {
      visibility: hidden;
      height: 10px;
      padding-top: 0.25rem!important;
    }
  }
  .plan-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 1px solid #2d3651;
    text-align: center;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 20px;
    -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    margin: 1rem;
    height: 100%;
  }

  .plan-card:hover {
    -webkit-box-shadow: 0 0 30px #000;
    box-shadow: 0 0 30px #000;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  .plan-card__badge {
    display: inline-block;
    padding: 3px 10px;
    font-size: 14px;
    border-radius: 15px;
  }

  .plan-card__badge--primary {
    background: #33BDFF;
  }

  .plan-card__badge--success {
    background: #0ea76c;
  }

  .plan-card__badge--warning {
    background: #ff9f43;
  }

  .plan-card__badge--danger {
    background: #f01313;
  }

  .plan-card__body {
    min-height: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .plan-card__footer {
    margin-top: auto;
  }
  .text-left {
    text-align: left;
  }
  .plan-card__head {
    padding: 0 20px;
    font-size: 1.5rem;
  }
  .pt-2 {
    padding: 0 20px;
    font-size: 1.5rem;
  }
  .mb-2 {
    margin-bottom: 10px;
  }
  .badge-card {
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.04em;
    color: #E86969;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pricing {
    display: flex;
    align-items: center;
    grid-gap: 8px;
  }
  .pricing h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #070A13;
    margin: 0;
  }
  .pricing p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
    margin: 0;
  }
  .bonus {
    color: #000;
  }
  .main-btn {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    border: none;
    outline: none;
    background: linear-gradient(180deg, #B92183 0%, #662282 100%);
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    transition: .2s ease;
  }

  .buttons {
    width: 90%;
    display: flex;
    grid-gap: 16px;
    margin: 15px auto;
  }

  .buttons div {
    width: 48%;
    min-height: 36px;
    font-weight: 400;
  }
  .buttons .ed {
    background: none;
    border: 1px solid #662282;
    color: #662282;
  }
  .w-100 {
    width: 100%!important;
  }
  .flex-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .gr-block {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .mb-4 {
    margin-top: 1rem;
  }
  .input_label {
    line-height: 3rem;
  }
  .col-12 >>>.van-stepper__input {
    width: 12rem !important;
  }
  .col-12 >>>.van-stepper__minus, .col-12 >>>.van-stepper__plus {
    background-color: #662282 !important;
    color: #ffffff !important;
  }
  .centered {
    display: flex;
    justify-content: center;
  }
  .title-main {
    color: #343A40;
    font-family: 'Roboto';
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120.5%;
    text-align: center;
    margin-bottom: 2rem;
  }
  .block_of {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px;
    background: rgb(255, 255, 255);
    border-radius: 24px;
    transition: all 260ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
    border: 1px solid #662282;
    margin-bottom: 2rem;
  }
  .block_of img {
    position: absolute;
    right: 16px;
    bottom: 23px;
    height: 70px;
  }
  .block_of p {
    margin-top: 12px;
    font-size: 16px;
    line-height: 150%;
    height: 4.5em;
    color: rgba(29, 29, 29, 0.6);
  }
  .justify-content-sm-between{
    justify-content: space-evenly;
  }
  .wd {
    width: 90%;
  }
  .figure {
    display: inline-block;
  }
  .figure {
    position: absolute;
    width: 100%;
    height: 542px;
    transform: rotate(7.042deg) translateX(-150px);
    flex-shrink: 0;
    background: #FDF9FF;
    border-radius: 150px;
    z-index: -1;
  }
  .trusteds {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .itemd {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 126px;
    margin: 2rem 5px;
    border: 1px solid #238fe3;
    border-radius: 5px;
  }
  .main-btnNew {
    height: 4.8rem;
    line-height: 3.8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: rgb(13,110,253);
    cursor: pointer;
    border: none;
    border-radius: 30px;
  }
  .dasbtn {
    background: linear-gradient(180deg, #329ae8 0%, #1e45d4 100%) !important;
  }
  .main-btnNew1 {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(180deg, #B62283 0%, #722283 100%);
    padding: 14px 30px 14px 30px;
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .text, .descriptiond {
    padding: 5px;
  }
  .text {
    color: #662282;
    text-align: center;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%;
    text-transform: capitalize;
  }
  .descriptiond {
    color: #273444;
    text-align: center;
    font-family: 'Roboto';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-transform: capitalize;
    width: 230px;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .text, .descriptiond {
    padding: 5px;
  }
  .bg_img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px 0 0 10px;
  }
  .r_right {
    border-radius: 0 10px 10px 0;
  }
  .contact-form-wrapper {
    background-color: #F3F3F3;
    border-radius: 0 10px 10px 0;
  }
  .r_left {
    border-radius: 10px 0 0 10px;
  }
  .recth1 {
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    width: 800px;
    line-height: 54px;
    margin-bottom: 21px;
  }
  .new-collection {
    background: #F0E9F3;
    border-radius: 0px 10px 10px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #662282;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
  }
  /*.grid-part {*/
  /*  margin-top: 25px;*/
  /*  display: grid;*/
  /*  grid-template-columns: repeat(auto-fit, minmax(238px, 1fr));*/
  /*}*/
  .grid-part img {
    cursor: pointer;
    transition: .2s ease;
    width: 100%;
    max-width: 25rem;
  }
  .grid-part {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .g-4, .gy-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-3, .gx-3 {
    --bs-gutter-x: 1rem;
  }
  /*.row>* {*/
  /*  flex-shrink: 0;*/
  /*  width: 100%;*/
  /*  max-width: 100%;*/
  /*  padding-right: calc(var(--bs-gutter-x) * .5);*/
  /*  padding-left: calc(var(--bs-gutter-x) * .5);*/
  /*  margin-top: var(--bs-gutter-y);*/
  /*}*/
  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .text-center {
    text-align: center!important;
  }
  h4 {
    font-size: 2rem;
  }
  table {
    width: 100%;
    font-size: 1.4rem;
  }
  table tbody {
    border: 0 !important;
  }
  table thead {
    background: #eee;
    font-size: 1.3rem;
  }
  .d-flex div,tbody, td, tfoot, th {
    width: 33.3%;
    text-align: center;
    padding: 13px 34px;
    font-size: 1.5rem;
  }
  tbody, td, tfoot, th, thead, tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    font-size: 1.5rem;
    width: 33.3%;
  }
  .style-two tbody tr td {
    text-align: left;
    vertical-align: middle;
    padding: 15px 34px;
    font-weight: 500;
    border-width: 0;
    font-size:1.2rem;
  }
  .style-two tbody>>> tr {
    border-bottom: 1px solid #333;
    width: 100%;
  }
  .style-two tbody tr td {
    font-size: 1.2rem;
    text-align: center;
  }
  @media screen and (max-width: 1199px){
    .style-two tbody tr td {
      padding: 15px 24px;
    }
  }
  .van-swipe-item {
    width: 100%;
  }
  .transaction .col-item .item-body .card1 {
    border-bottom: 1px solid rgb(13,110,253);
    padding: 7px 13px;
  }
  .transaction .col-item .item-body {
    height: 450px;
    /*background: #1B2030;*/
    box-shadow: 0 2px 8px 0 rgb(13,110,253);
    border-radius: 0 0 6px 6px
  }
  .d-flex {
    display: flex!important
  }
  .justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
  }
  .hero-wrap>>>video{
    position: absolute;
    left: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    /*z-index:-11*/

  }
  .hero-wrap>>>source{
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
  .box-wrapper {
    color: #ffffff;
  }
  .feature-card {
    padding: 30px 15px;
    position: relative;
    border: 1px solid rgb(109,151,200);
    border-radius: 20px;
    background-color: #fff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1;
  }
  .feature-card {
    border: 1px solid rgb(109,151,200);
  }
  .feature-card:hover {
    -webkit-box-shadow: 0 3px 10px rgb(109,151,200);
    box-shadow: 0 3px 10px rgb(109,151,200);
  }
  .icon {
    position: relative;
    display: inline-block;
  }
  .icon--sqr {
    border-radius: 5px;
    text-align: center;
  }
  .icon--md {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
  }
  .feature-card__icon {
    background: #f01313;
    color: #fff;
  }
  .feature-card__icon {
    background: linear-gradient(180deg, #579de5 0%, #0d6efd 100%);
  }
  .feature-card__icon-float {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: clamp(4rem, 8vw + 1rem, 8rem);
    line-height: 1;
    opacity: 0.05;
    z-index: -1;
  }
  .mb-0 {
    font-size: 1.2rem;
    color: #000000 !important;
  }


  :root {
    /* Font Family */
    --heading-font: "Chakra Petch", sans-serif;
    --body-font: "Lato", sans-serif;
    /* ========================= Color Variables Start =========================== */
    --white: 0 0% 100%;
    --light-h: 0;
    --light-s: 0%;
    --light-l: 71%;
    --light: var(--light-h) var(--light-s) var(--light-l);
    --black-h: 225;
    --black-s: 31%;
    --black-l: 10%;
    --black: var(--black-h) var(--black-s) var(--black-l);
    --heading-color: var(--white);
    --body-color: var(--light);
    --border-color: 0 0% 88%;
    --section-bg: 226 28% 15%;
    /* ================================ Box Shadow Start =============================== */
    --header-box-shadow: 0px -1px 15px 3px hsl(var(--black) /.3);
    --mobile-box-shadow: 0px -1px 5px 0px hsl(var(--black) /.92);
    --box-shadow: 0px 2px 15px hsl(var(--black) /.05);
    /* ================================ Box Shadow End =============================== */
    /* ========================= Base Color ============================= */

    --base-h: 59;
    --base-s: 90%;
    --base-l: 77%;
    --base: 59 90% 77%;
    /* Base Darken  */
    --base-d-100: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.1);
    --base-d-200: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.2);
    --base-d-300: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.3);
    --base-d-400: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.4);
    --base-d-500: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.5);
    --base-d-600: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.6);
    --base-d-700: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.7);
    --base-d-700: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.7);
    --base-d-800: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.8);
    --base-d-800: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.8);
    --base-d-900: var(--base-h) var(--base-s) calc(var(--base-l) - var(--base-l) * 0.9);
    /* Base Lighten */
    --base-l-100: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.1);
    --base-l-200: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.2);
    --base-l-300: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.3);
    --base-l-400: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.4);
    --base-l-500: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.5);
    --base-l-600: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.6);
    --base-l-700: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.7);
    --base-l-800: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.8);
    --base-l-900: var(--base-h) calc(var(--base-s)) calc(var(--base-l) + (100% - var(--base-l)) * 0.9);
    --base-gradient: linear-gradient(180deg, hsl(var(--base-two)) 2.95%, hsl(var(--base)) 54.04%, hsl(var(--base-two)) 105.51%);
    --base-gradient-reverse: linear-gradient(180deg, hsl(var(--base)) -10.95%, hsl(var(--base-two)) 50.04%, hsl(var(--base)) 130.51%);
    /* ========================= Base Color ============================= */
    --base-two-h: 31;
    --base-two-s: 68%;
    --base-two-l: 38%;
    --base-two: 31 68% 38%;
    /* Base Darken  */
    --base-two-d-100: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.1);
    --base-two-d-200: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.2);
    --base-two-d-300: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.3);
    --base-two-d-400: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.4);
    --base-two-d-500: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.5);
    --base-two-d-600: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.6);
    --base-two-d-700: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.7);
    --base-two-d-700: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.7);
    --base-two-d-800: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.8);
    --base-two-d-800: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.8);
    --base-two-d-900: var(--base-two-h) var(--base-two-s) calc(var(--base-two-l) - var(--base-two-l) * 0.9);
    /* Base Lighten */
    --base-two-l-100: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.1);
    --base-two-l-200: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.2);
    --base-two-l-300: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.3);
    --base-two-l-400: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.4);
    --base-two-l-500: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.5);
    --base-two-l-600: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.6);
    --base-two-l-700: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.7);
    --base-two-l-800: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.8);
    --base-two-l-900: var(--base-two-h) calc(var(--base-two-s)) calc(var(--base-two-l) + (100% - var(--base-two-l)) * 0.9);
    /* ============================== Bootstrap Modifier Start ============================== */
    /* Primary Color */
    --primary-h: 211;
    --primary-s: 100%;
    --primary-l: 50%;
    --primary: var(--primary-h) var(--primary-s) var(--primary-l);
    /* Primary Darken */
    --primary-d-100: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.1);
    --primary-d-200: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.2);
    --primary-d-300: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.3);
    --primary-d-400: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.4);
    --primary-d-500: var(--primary-h) var(--primary-s) calc(var(--primary-l) - var(--primary-l) * 0.5);
    /* primary Lighten */
    --primary-l-100: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.1);
    --primary-l-200: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.2);
    --primary-l-300: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.3);
    --primary-l-400: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.4);
    --primary-l-500: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.5);
    --primary-l-600: var(--primary-h) calc(var(--primary-s)) calc(var(--primary-l) + (100% - var(--primary-l)) * 0.6);
    /* Secondary Color */
    --secondary-h: 208;
    --secondary-s: 7%;
    --secondary-l: 46%;
    --secondary: var(--secondary-h) var(--secondary-s) var(--secondary-l);
    /* Secondary Darken */
    --secondary-d-100: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.1);
    --secondary-d-200: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.2);
    --secondary-d-300: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.3);
    --secondary-d-400: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.4);
    --secondary-d-500: var(--secondary-h) var(--secondary-s) calc(var(--secondary-l) - var(--secondary-l) * 0.5);
    /* secondary Lighten */
    --secondary-l-100: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.1);
    --secondary-l-200: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.2);
    --secondary-l-300: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.3);
    --secondary-l-400: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.4);
    --secondary-l-500: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.5);
    --secondary-l-600: var(--secondary-h) calc(var(--secondary-s)) calc(var(--secondary-l) + (100% - var(--secondary-l)) * 0.6);
    /* Success Color */
    --success-h: 115;
    --success-s: 99%;
    --success-l: 41%;
    --success: var(--success-h) var(--success-s) var(--success-l);
    /* Success Darken */
    --success-d-100: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.1);
    --success-d-200: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.2);
    --success-d-300: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.3);
    --success-d-400: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.4);
    --success-d-500: var(--success-h) var(--success-s) calc(var(--success-l) - var(--success-l) * 0.5);
    /* Success Lighten */
    --success-l-100: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.1);
    --success-l-200: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.2);
    --success-l-300: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.3);
    --success-l-400: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.4);
    --success-l-500: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.5);
    --success-l-600: var(--success-h) calc(var(--success-s)) calc(var(--success-l) + (100% - var(--success-l)) * 0.6);
    /* Danger Color */
    --danger-h: 0;
    --danger-s: 96%;
    --danger-l: 63%;
    --danger: var(--danger-h) var(--danger-s) var(--danger-l);
    /* Danger Darken */
    --danger-d-100: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.1);
    --danger-d-200: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.2);
    --danger-d-300: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.3);
    --danger-d-400: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.4);
    --danger-d-500: var(--danger-h) var(--danger-s) calc(var(--danger-l) - var(--danger-l) * 0.5);
    /* danger Lighten */
    --danger-l-100: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.1);
    --danger-l-200: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.2);
    --danger-l-300: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.3);
    --danger-l-400: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.4);
    --danger-l-500: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.5);
    --danger-l-600: var(--danger-h) calc(var(--danger-s)) calc(var(--danger-l) + (100% - var(--danger-l)) * 0.6);
    /* Warning Color */
    --warning-h: 38;
    --warning-s: 100%;
    --warning-l: 55%;
    --warning: var(--warning-h) var(--warning-s) var(--warning-l);
    /* Warning Darken */
    --warning-d-100: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.1);
    --warning-d-200: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.2);
    --warning-d-300: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.3);
    --warning-d-400: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.4);
    --warning-d-500: var(--warning-h) var(--warning-s) calc(var(--warning-l) - var(--warning-l) * 0.5);
    /* Warning Lighten */
    --warning-l-100: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.1);
    --warning-l-200: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.2);
    --warning-l-300: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.3);
    --warning-l-400: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.4);
    --warning-l-500: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.5);
    --warning-l-600: var(--warning-h) calc(var(--warning-s)) calc(var(--warning-l) + (100% - var(--warning-l)) * 0.6);
    /* Info Color */
    --info-h: 196;
    --info-s: 100%;
    --info-l: 50%;
    --info: var(--info-h) var(--info-s) var(--info-l);
    /* Info Darken */
    --info-d-100: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.1);
    --info-d-200: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.2);
    --info-d-300: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.3);
    --info-d-400: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.4);
    --info-d-500: var(--info-h) var(--info-s) calc(var(--info-l) - var(--info-l) * 0.5);
    --info-l-100: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.1);
    --info-l-200: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.2);
    --info-l-300: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.3);
    --info-l-400: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.4);
    --info-l-500: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.5);
    --info-l-600: var(--info-h) calc(var(--info-s)) calc(var(--info-l) + (100% - var(--info-l)) * 0.6);
    /* ============================== Bootstrap Modifier End ============================== */
  }

  .flex-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .pa-extend, .contact-item__icon::before, .contact-item__icon::after, .about-item__icon::before, .about-item__icon::after, .how-work-item__content::before, .how-work-item__number::before, .how-work-item__number::after, .calculator-content::before, .social-list__link::before, .footer-menu__item::before, .alert__link::before, .pagination .page-item .page-link::before, .before-shadow::before, .before-shadow::after {
    position: absolute;
    content: "";
  }
  .how-work-item {
    text-align: center;
    padding: 0 25px;
    flex-direction: column;
  }


  .how-work-item__number {
    position: relative;
    width: 90px;
    height: 94px;
    border-radius: 20px;
    display: inline-flex;
    margin-bottom: 40px;
  }

  .how-work-item__number::before,
  .how-work-item__number::after {
    left: 0;
    top: 0;
    background: linear-gradient(180deg, #329ae8 0%, #1e45d4 100%);
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transform: rotate(130deg) skew(0deg, 14deg);
    z-index: -1;
  }

  .how-work-item__number::after {
    background: var(--base-gradient);
    background: linear-gradient(180deg, #1e45d4 0%, #1e45d4 100%);
    z-index: -2;
    top: 6px;
  }

  .how-work-item__number .text {
    color: #ffffff;
    font-size: 2rem;
  }

  .how-work-item__hexagon {
    position: absolute;
    width: 128px;
    height: 136px;
    bottom: -65px;
    -webkit-mask: url(data:image/png;base64,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) no-repeat 50% 50%;
    mask: url(data:image/png;base64,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) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    z-index: -3;
    background: linear-gradient(0deg, #eeeeee 0%, rgba(63, 23, 172, 0.64) 75.24%);
  }

  .how-work-item__content {
    background-color: #eee;
    padding: 32px 24px;
    border-radius: 10px;
    position: relative;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__content {
      padding: 24px;
    }
  }

  @media screen and (max-width: 575px) {
    .how-work-item__content {
      padding: 24px 16px;
    }
  }

  .how-work-item__content::before {
    top: -11px;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 0px;
    transform: translateX(-50%) rotate(135deg);
    z-index: -1;
    border: 12px solid #eee;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__title {
      margin-bottom: 12px;
      font-size: 1.4rem;
    }
  }

  .how-work-item__desc {
    font-size: 1.4rem;
    color: #000000 !important;
  }

  @media screen and (max-width: 1199px) {
    .how-work-item__desc {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 992px) {
    .how-work-item__content h5 {
      font-size: 2em;
      margin-top: 1rem;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item__content {
      margin-bottom: 36px;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item {
      flex-direction: column-reverse;
    }
    .how-work-item-wrapper div[class*=col]:nth-child(even) .how-work-item__content::before {
      top: auto;
      bottom: -11px;
    }
  }
  .justify-content-center {
    justify-content: center!important;
  }
  .section-heading__title {
    font-size: 2rem;
    margin: 0 0 15px 0;
    text-align: center;
  }
  .section-heading__desc {
    max-width: 625px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
    color: #000000 !important;
  }
  @media (min-width: 576px){
    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }
  @media screen and (min-width: 425px) and (max-width: 575px){
    .col-xsm-6 {
      width: 50%;
    }
  }
  @media (min-width: 992px){
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .section-heading__title {
      font-size: 3rem;
    }
    .section-heading__desc {
      font-size: 1.5rem;
    }
  }
  .how-work-item {
    margin-top: 1rem;
  }
  .how-work {
    margin-top: 2rem;
  }
  .hero-text {
    font-size: 1.5rem;
    color: #e73329;
  }


  /* Dots Css End */
  /* ================= Slick Arrow & Dots css Start ================ */
  /* ============================= Blog Sidebar Css Start ============================ */
  .blog-sidebar-wrapper {
    position: sticky;
    top: 100px;
    border-radius: 8px;
    padding: 10px;
    background: linear-gradient(hsl(var(--black)), hsl(var(--black))) padding-box, hsl(var(--white)/0.06) border-box;
    border: 1px solid transparent;
    margin-left: 20px;
  }

  @media screen and (max-width: 1399px) {
    .blog-sidebar-wrapper {
      margin-left: 0;
    }
  }

  .blog-sidebar {
    background-color: hsl(var(--section-bg));
    padding: 20px;
    border-radius: inherit;
  }

  @media screen and (max-width: 1399px) {
    .blog-sidebar {
      padding: 15px 10px;
    }
  }

  /* Latest Blog Css */
  .latest-blog {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    border-radius: inherit;
    background: linear-gradient(#323645, #323645) padding-box, var(--base-gradient) border-box;
    border: 1px solid transparent;
    margin-bottom: 20px;
  }

  .latest-blog:last-of-type {
    margin-bottom: 0px;
  }

  .latest-blog__thumb {
    height: 80px;
    width: 92px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
  }

  @media screen and (max-width: 1399px) {
    .latest-blog__thumb {
      width: 70px;
    }
  }

  .latest-blog__thumb a {
    display: block;
    height: 100%;
    width: 100%;
  }

  .latest-blog__content {
    width: calc(100% - 92px);
    padding-left: 15px;
  }

  @media screen and (max-width: 1399px) {
    .latest-blog__content {
      width: calc(100% - 70px);
      padding-left: 10px;
    }
  }

  .latest-blog__title {
    margin-bottom: 5px;
  }

  .latest-blog__title a {
    color: hsl(var(--heading-color));
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .latest-blog__title a:hover {
    color: hsl(var(--base));
  }

  .blog-meta {
    margin-top: 12px;
    row-gap: 10px;
  }

  .blog-meta__item {
    font-size: 0.8125rem;
    margin-right: 10px;
    padding-right: 10px;
    line-height: 0.7;
    border-style: solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: var(--base-gradient);
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
  }

  @media screen and (max-width: 1399px) {
    .blog-meta__item {
      margin-right: 6px;
      padding-right: 6px;
    }
  }

  .blog-meta__item:last-child {
    border-right: 0;
  }

  .blog-meta__item .icon {
    margin-right: 5px;
  }
  .flex-wrap, .form--check {
    display: flex;
  }
  .testimonial-item {
    background: linear-gradient(hsl(294.78deg 73.22% 58.81%), hsl(226deg 16.69% 28.71%)) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%, 77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;
    border: 2px solid transparent;
    padding: 10px 8px;
    padding-left: 0;
    border-radius: 15px;
    position: relative;
    margin-left: 32px;
  }
  .testimonails-card {
    height: 100%;
  }
  @media screen and (max-width: 424px) {
    .testimonial-item {
      margin-left: 25px;
    }
  }

  @media screen and (max-width: 575px) {
    .testimonial-item {
      padding: 24px;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 424px) {
    .testimonial-item {
      padding: 24px 16px 24px 0;
    }
  }

  .testimonial-item__thumb {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(hsl(211 ,81.57%, 68.8%), hsl(226, 92.08% ,72.12%)) padding-box, linear-gradient(180deg, hsl(31, 68%, 38%) 2.95%, hsl(59, 90%,77%) 54.04%, hsl(31, 68%, 38%) 105.51%) border-box;
    border: 2px solid transparent;
    margin-left: -32px;
  }

  @media screen and (max-width: 424px) {
    .testimonial-item__thumb {
      width: 50px;
      height: 50px;
    }
  }

  .testimonial-item__content {
    width: calc(100% - 32px);
    padding-left: 20px;
  }

  @media screen and (max-width: 575px) {
    .testimonial-item__content {
      padding-left: 12px;
    }
  }

  @media screen and (max-width: 424px) {
    .testimonial-item__content {
      width: calc(100% - 25px);
    }
  }

  .testimonial-item__info {
    margin-bottom: 16px;
  }

  .testimonial-item__name {
    margin-bottom: 0px;
    font-size: 2rem;
    color: #ffffff;
    margin-top: 0;
  }
  .fit-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fs-14, .form--control::placeholder, .form--label {
    font-size: 1.4rem;
    color: #eee;
  }
  .fs-16, .latest-blog__title a, .alert__title, p {
    font-size: 1.4rem;
    color: #fff;
  }
  .py-120 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .slick-list {
    padding: 0 4rem;
  }
  .mt-2 {
    margin-bottom: 1rem;
    padding:0 2rem;
  }
  .btn:hover {
    transform: scale(.94)
  }
  .first-box-wraper {
    background: radial-gradient(circle, #323136 0, #181a22 99%);
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .first-box-wraper-img-layer {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  .top-wraper .left-info-area .btn-area {
    /*align-items: center;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    margin-top: 40px
  }

  .top-wraper .left-info-area .btn-area .btn {
    align-items: center;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    height: 60px;
    justify-content: center;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
    transition: transform .2s ease-in;
    width: 210px;

  }

  .top-wraper .left-info-area .btn-area .btn.start-btn {
    background: linear-gradient(110deg, #f9e6c9, #e7bd7d 59%, #eacda0);
    color: #000;
    /*padding: 0 30px;*/
    /*width: 130px;*/
    /*max-width: 300px;*/
    line-height: 60px;
    text-align: center;
  }



  .top-wraper .left-info-area .btn-area .about-us-btn {
    background: linear-gradient(90deg,#707070,#010007);
    border: none;
    overflow: hidden
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-mask {
    background: linear-gradient(90deg, #707070, #010007);
    border-radius: 30px;
    height: 100%;
    left: 0;
    opacity: .4;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-text {
    align-items: center;
    border-radius: 30px;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2
  }

  .top-wraper .left-info-area .btn-area .about-us-btn .btn-bg-video {
    width: 210px;
    overflow: hidden;
  }

  .top-wraper .left-info-area .btn-area .start-btn:hover {
    background: linear-gradient(110deg,#f7deb9,#e0a958 59%,#e4be83)
  }
  .avatar.avatar-md-sm {
    height: 65px;
    width: 65px;
  }
  .mt-4 {
    margin-top: 10px;
  }
  .feature-clean h5 {
    font-size: 20px !important;
  }
  .text-muted {
    color: #8492a6 !important;
    font-size: 16px;
  }
  .feature-primary {
    padding: 0 15px;
    margin-top: 1.5rem;
  }
  .pl-3, .px-3 {
    padding-left: 2rem !important;
  }
  .pr-3, .px-3 {
    padding-right: 2rem !important;
  }
  .buttons .ed:hover {
    background: #662282;
    color: #ffffff;
  }


  .image_border {
    border-radius: 10px;
    border: 2px solid #662282;
    padding: 3px;
    max-width: 400px;
    height: fit-content;
    margin-right: 10px;
  }
  .image_border img {
    width: 100%;
  }
  @media (max-width: 768px) {
    .top {
      width: 96%;
      margin: 0 auto;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .top {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .plan-title {
    color: #7F2483;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    text-align: left;
    line-height: normal;
    max-width: 50rem;
  }
  .flexc {
    display: flex;
    justify-content: center;
  }
  .new-collection {
    background: #F0E9F3;
    border-radius: 0px 10px 10px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #662282;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pricing p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #64748B;
    margin: 0;
  }
  .description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #070A13;
    text-align: left;
    margin: 5px 0;
    vertical-align: center;
  }
  .description img {
    display: inline-block !important;

  }
  .diaf {
    position: sticky;
    bottom: 0;
    width: 100%;
    background: #fff;
    left: 0;
    padding: 10px 0;
    border-top: 1px solid #ccc;
  }
  .description-block-2 {
    font-size: 2rem;
  }
  .top-wraper1 {
    display: flex;
    align-items: center;
  }
  .testimonial-item__content {
    height: 15rem;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    html {
      font-size:10px
    }
    .top-wraper .left-info-area .btn-area .btn:hover {
      transform: scale(.94)
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
    background-color: #662282
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

  @keyframes tobig-39d242ba {
    0% {
      transform: scale(1)
    }

    to {
      transform: scale(1.5)
    }
  }

  /*input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {*/
  /*  -webkit-appearance: none!important*/
  /*}*/

  /*input[type=number] {*/
  /*  -moz-appearance: textfield*/
  /*}*/

  /*.el-carousel__indicators--outside button {*/
  /*  background-color: #662282!important*/
  /*}*/

  .el-dropdown-menu__item {
    font-size: 1.5rem;
    color: #000;
    font-family: myFont
  }

  .el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover {
    color: #662282!important;
    background-color: #fff9f0!important
  }

  .el-pager li {
    font-family: myFont
  }

  /*.el-pagination.is-background .el-pager li:not(.disabled).active {*/
  /*  background-color: #662282!important*/
  /*}*/

  /*.el-pagination.is-background .el-pager li:not(.active):hover {*/
  /*  color: #662282!important*/
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
    color: #662282;
    background-color: #fff9f0!important
  }

  .el-menu-item:hover i,.el-submenu__title:hover i {
    color: #662282
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
    color: #662282
  }

  .el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #662282!important;
    border-color: #662282!important
  }

  .el-checkbox__label {
    font-size: 1.5rem!important;
    color: #000
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000!important
  }

  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #662282!important
  }

  .nav-item {
    position: relative;
  }
  .active .underlined {
    width: 70.2%;
    opacity: 1;
  }
  .nav-item:hover .underlined {
    width: 70.2%;
    opacity: 1;
  }
  .underlined {
    position: absolute;
    border-radius: 5px;
    background: #d89864;
    width: 0%;
    height: 2px;
    margin-top: 2px;
    opacity: 0;
    bottom: -0.5rem;
    transition: width 0.3s, opacity 0.3s;
  }

  .dasbtn {
    background: linear-gradient(180deg, #B62283 0%, #722283 100%) !important;
  }
  .el-dropdown {
    margin-right: 10px;
  }
  .svg-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .profit-calculator {
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 768px) {
    .profit-calculator {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: 30px;
      border: 1px solid rgba(240, 19, 19, 0.3);
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    .profit-calculator {
      padding: 40px 60px 50px;
    }
  }
  .profit-calculator .form--control,.profit-calculator .form-select {
    padding: 5px;
    border-radius: 6px;

  }
  .profit-calculator .form--control[readonly] {
    color: #000;

  }
  .form-group {
    padding: 10px;
    font-size: 1.5rem;
    color: #000000;
  }
  .msg {
    padding: 0 10px;
    font-size: 1.5rem;
  }

  .articles .article-holder {
    display: flex;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #3a3939;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 768px) {
    .row1 {
      flex-wrap: wrap;
    }
    h2 {
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 769px) {
    .col-sm-4 {
      max-width: 33.3333333333%;
      flex-basis: 33.3333333333%;
    }
  }

  h2 strong {
    color: #fba342;
  }
  .news, .profcalc {
    background: #fafafa;
    padding: 32px 0;
    margin-bottom: 16px;
  }

  .article {
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 5px #3a39391a;
    margin-bottom: 51px;
    cursor: pointer
  }

  .article .image {
    height: 200px;
    background: #eee;
    border-radius: 5px 5px 0 0;
    position: relative;
    padding: 24px;
    background-position: center;
    background-size: cover
  }

  .article .image .video {
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 60px;
    background-color: #fee8d0;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    font-size: 24px;
    color: #fba342;
    opacity: .6
  }

  .article .image .tag {
    border-radius: 5px;
    background-color: #f5f5f5;
    border: solid 1px #cecdcd;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 1px;
    color: #959595;
    padding: 3px 5px;
    opacity: .5;
    margin: 0 8px 8px 0;
    display: inline-block;
    text-transform: uppercase
  }

  .article .image .tag:hover {
    color: #fba342;
    border-color: #fcfcfc;
    opacity: 1
  }

  .article:hover {
    box-shadow: 0 10px 20px #2323231a
  }

  .article:hover .video,.article:hover .tag {
    opacity: 1
  }

  .article .details {
    padding: 24px;
    color: #959595;
    font-size: 12px;
    line-height: 1.5
  }

  .article .details a {
    font-size: 18px;
    line-height: 1.67;
    color: #3a3939;
    margin-top: 16px;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  @media only screen and (min-width : 769px) {
    .article.large {
      height:416px;
      display: flex
    }

    .article.large .image {
      max-width: calc(66.66667% - 8px);
      flex-basis: calc(66.66667% - 8px);
      height: 100%
    }

    .article.large .details {
      max-width: calc(33.33333% + 8px);
      flex-basis: calc(33.33333% + 8px);
      margin-top: 120px
    }

    .article.large .details a {
      font-size: 24px
    }

  }
  .row1 {
    display: flex;
  }
  .articles .article-holder .article {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .btn.normal {
    padding: 13px 24px 12px;
    font-size: 12px;
    letter-spacing: .5px;
  }
  .btn.fluid {
    width: 100%;
  }
  .btn.outline.primary {
    color: #fba342;
    box-shadow: inset 0 0 0 1px #fba342 !important;
  }
  .btn.outline.normal {
    padding-left: 14px;
    padding-right: 14px;
  }
  .ddcc{
    display: flex;
    align-items: center;
  }
  .about-us-btn video {
    border-radius: 30px;
    overflow: hidden !important;
  }
  .img-box {
    max-height: 35rem;
  }
  .d3-block {
    flex-wrap: wrap;
    justify-content: center;
  }
  .d3-block {
    display: flex;
    justify-content: space-between;
  }
  .col-lg-4 {
    margin-bottom: 10px;
  }

  :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff
  }

  *, ::after, ::before {
    box-sizing: border-box
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth
    }
  }

  body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: .25
  }

  hr:not([size]) {
    height: 1px
  }


  p {
    margin-top: 0;
    margin-bottom: 1rem
  }

  abbr[data-bs-original-title], abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit
  }

  ol, ul {
    padding-left: 2rem
  }

  dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem
  }

  ol ol, ol ul, ul ol, ul ul {
    margin-bottom: 0
  }

  dt {
    font-weight: 700
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0
  }

  blockquote {
    margin: 0 0 1rem
  }

  b, strong {
    font-weight: bolder
  }

  .small, small {
    font-size: .875em
  }

  .mark, mark {
    padding: .2em;
    background-color: #fcf8e3
  }

  sub, sup {
    position: relative;
    font-size: .75em;
    line-height: 0;
    vertical-align: baseline
  }

  sub {
    bottom: -.25em
  }

  sup {
    top: -.5em
  }

  a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none
  }

  code, kbd, pre, samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    direction: ltr;
    unicode-bidi: bidi-override
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: .875em
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal
  }

  code {
    font-size: .875em;
    color: #d63384;
    word-wrap: break-word
  }

  a > code {
    color: inherit
  }

  kbd {
    padding: .2rem .4rem;
    font-size: .875em;
    color: #fff;
    background-color: #212529;
    border-radius: .2rem
  }

  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700
  }

  figure {
    margin: 0 0 1rem
  }

  img, svg {
    vertical-align: middle
  }

  table {
    caption-side: bottom;
    border-collapse: collapse
  }

  caption {
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: #6c757d;
    text-align: left
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent
  }

  tbody, td, tfoot, th, thead, tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0
  }

  label {
    display: inline-block
  }

  button {
    border-radius: 0
  }

  button:focus:not(:focus-visible) {
    outline: 0
  }

  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
  }

  button, select {
    text-transform: none
  }

  [role=button] {
    cursor: pointer
  }

  select {
    word-wrap: normal
  }

  select:disabled {
    opacity: 1
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none
  }

  [type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button
  }

  [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none
  }

  textarea {
    resize: vertical
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: calc(1.275rem + .3vw);
    line-height: inherit
  }

  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem
    }
  }

  legend + * {
    clear: left
  }

  ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-year-field {
    padding: 0
  }

  ::-webkit-inner-spin-button {
    height: auto
  }

  [type=search] {
    outline-offset: -2px;
    -webkit-appearance: textfield
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0
  }

  ::-webkit-file-upload-button {
    font: inherit
  }

  ::file-selector-button {
    font: inherit
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
  }

  output {
    display: inline-block
  }

  iframe {
    border: 0
  }

  summary {
    display: list-item;
    cursor: pointer
  }

  progress {
    vertical-align: baseline
  }

  [hidden] {
    display: none !important
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300
  }

  .display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-1 {
      font-size: 5rem
    }
  }

  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-2 {
      font-size: 4.5rem
    }
  }

  .display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-3 {
      font-size: 4rem
    }
  }

  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-4 {
      font-size: 3.5rem
    }
  }

  .display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-5 {
      font-size: 3rem
    }
  }

  .display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2
  }

  @media (min-width: 1200px) {
    .display-6 {
      font-size: 2.5rem
    }
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none
  }

  .list-inline {
    padding-left: 0;
    list-style: none
  }

  .list-inline-item {
    display: inline-block
  }

  .list-inline-item:not(:last-child) {
    margin-right: .5rem
  }

  .initialism {
    font-size: .875em;
    text-transform: uppercase
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem
  }

  .blockquote > :last-child {
    margin-bottom: 0
  }

  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: .875em;
    color: #6c757d
  }

  .blockquote-footer::before {
    content: "— "
  }

  .img-fluid {
    max-width: 100%;
    height: auto
  }

  .img-thumbnail {
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    max-width: 100%;
    height: auto
  }

  .figure {
    display: inline-block
  }

  .figure-img {
    margin-bottom: .5rem;
    line-height: 1
  }

  .figure-caption {
    font-size: .875em;
    color: #6c757d
  }

  .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto
  }

  @media (min-width: 576px) {
    .container, .container-sm {
      max-width: 540px
    }
  }

  @media (min-width: 768px) {
    .container, .container-md, .container-sm {
      max-width: 720px
    }
  }

  @media (min-width: 992px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 960px
    }
  }

  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1140px
    }
  }

  @media (min-width: 1400px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      max-width: 1320px
    }
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x))
  }

  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
    margin-top: var(--bs-gutter-y)
  }

  .col {
    flex: 1 0 0%
  }

  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%
  }

  .offset-1 {
    margin-left: 8.33333333%
  }

  .offset-2 {
    margin-left: 16.66666667%
  }

  .offset-3 {
    margin-left: 25%
  }

  .offset-4 {
    margin-left: 33.33333333%
  }

  .offset-5 {
    margin-left: 41.66666667%
  }

  .offset-6 {
    margin-left: 50%
  }

  .offset-7 {
    margin-left: 58.33333333%
  }

  .offset-8 {
    margin-left: 66.66666667%
  }

  .offset-9 {
    margin-left: 75%
  }

  .offset-10 {
    margin-left: 83.33333333%
  }

  .offset-11 {
    margin-left: 91.66666667%
  }

  .g-0, .gx-0 {
    --bs-gutter-x: 0
  }

  .g-0, .gy-0 {
    --bs-gutter-y: 0
  }

  .g-1, .gx-1 {
    --bs-gutter-x: 0.25rem
  }

  .g-1, .gy-1 {
    --bs-gutter-y: 0.25rem
  }

  .g-2, .gx-2 {
    --bs-gutter-x: 0.5rem
  }

  .g-2, .gy-2 {
    --bs-gutter-y: 0.5rem
  }

  .g-3, .gx-3 {
    --bs-gutter-x: 1rem
  }

  .g-3, .gy-3 {
    --bs-gutter-y: 1rem
  }

  .g-4, .gx-4 {
    --bs-gutter-x: 1.5rem
  }

  .g-4, .gy-4 {
    --bs-gutter-y: 1.5rem
  }

  .g-5, .gx-5 {
    --bs-gutter-x: 3rem
  }

  .g-5, .gy-5 {
    --bs-gutter-y: 3rem
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%
    }

    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-sm-0 {
      margin-left: 0
    }

    .offset-sm-1 {
      margin-left: 8.33333333%
    }

    .offset-sm-2 {
      margin-left: 16.66666667%
    }

    .offset-sm-3 {
      margin-left: 25%
    }

    .offset-sm-4 {
      margin-left: 33.33333333%
    }

    .offset-sm-5 {
      margin-left: 41.66666667%
    }

    .offset-sm-6 {
      margin-left: 50%
    }

    .offset-sm-7 {
      margin-left: 58.33333333%
    }

    .offset-sm-8 {
      margin-left: 66.66666667%
    }

    .offset-sm-9 {
      margin-left: 75%
    }

    .offset-sm-10 {
      margin-left: 83.33333333%
    }

    .offset-sm-11 {
      margin-left: 91.66666667%
    }

    .g-sm-0, .gx-sm-0 {
      --bs-gutter-x: 0
    }

    .g-sm-0, .gy-sm-0 {
      --bs-gutter-y: 0
    }

    .g-sm-1, .gx-sm-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-sm-1, .gy-sm-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-sm-2, .gx-sm-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-sm-2, .gy-sm-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-sm-3, .gx-sm-3 {
      --bs-gutter-x: 1rem
    }

    .g-sm-3, .gy-sm-3 {
      --bs-gutter-y: 1rem
    }

    .g-sm-4, .gx-sm-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-sm-4, .gy-sm-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-sm-5, .gx-sm-5 {
      --bs-gutter-x: 3rem
    }

    .g-sm-5, .gy-sm-5 {
      --bs-gutter-y: 3rem
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%
    }

    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-md-0 {
      margin-left: 0
    }

    .offset-md-1 {
      margin-left: 8.33333333%
    }

    .offset-md-2 {
      margin-left: 16.66666667%
    }

    .offset-md-3 {
      margin-left: 25%
    }

    .offset-md-4 {
      margin-left: 33.33333333%
    }

    .offset-md-5 {
      margin-left: 41.66666667%
    }

    .offset-md-6 {
      margin-left: 50%
    }

    .offset-md-7 {
      margin-left: 58.33333333%
    }

    .offset-md-8 {
      margin-left: 66.66666667%
    }

    .offset-md-9 {
      margin-left: 75%
    }

    .offset-md-10 {
      margin-left: 83.33333333%
    }

    .offset-md-11 {
      margin-left: 91.66666667%
    }

    .g-md-0, .gx-md-0 {
      --bs-gutter-x: 0
    }

    .g-md-0, .gy-md-0 {
      --bs-gutter-y: 0
    }

    .g-md-1, .gx-md-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-md-1, .gy-md-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-md-2, .gx-md-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-md-2, .gy-md-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-md-3, .gx-md-3 {
      --bs-gutter-x: 1rem
    }

    .g-md-3, .gy-md-3 {
      --bs-gutter-y: 1rem
    }

    .g-md-4, .gx-md-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-md-4, .gy-md-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-md-5, .gx-md-5 {
      --bs-gutter-x: 3rem
    }

    .g-md-5, .gy-md-5 {
      --bs-gutter-y: 3rem
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%
    }

    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-lg-0 {
      margin-left: 0
    }

    .offset-lg-1 {
      margin-left: 8.33333333%
    }

    .offset-lg-2 {
      margin-left: 16.66666667%
    }

    .offset-lg-3 {
      margin-left: 25%
    }

    .offset-lg-4 {
      margin-left: 33.33333333%
    }

    .offset-lg-5 {
      margin-left: 41.66666667%
    }

    .offset-lg-6 {
      margin-left: 50%
    }

    .offset-lg-7 {
      margin-left: 58.33333333%
    }

    .offset-lg-8 {
      margin-left: 66.66666667%
    }

    .offset-lg-9 {
      margin-left: 75%
    }

    .offset-lg-10 {
      margin-left: 83.33333333%
    }

    .offset-lg-11 {
      margin-left: 91.66666667%
    }

    .g-lg-0, .gx-lg-0 {
      --bs-gutter-x: 0
    }

    .g-lg-0, .gy-lg-0 {
      --bs-gutter-y: 0
    }

    .g-lg-1, .gx-lg-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-lg-1, .gy-lg-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-lg-2, .gx-lg-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-lg-2, .gy-lg-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-lg-3, .gx-lg-3 {
      --bs-gutter-x: 1rem
    }

    .g-lg-3, .gy-lg-3 {
      --bs-gutter-y: 1rem
    }

    .g-lg-4, .gx-lg-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-lg-4, .gy-lg-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-lg-5, .gx-lg-5 {
      --bs-gutter-x: 3rem
    }

    .g-lg-5, .gy-lg-5 {
      --bs-gutter-y: 3rem
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%
    }

    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-xl-0 {
      margin-left: 0
    }

    .offset-xl-1 {
      margin-left: 8.33333333%
    }

    .offset-xl-2 {
      margin-left: 16.66666667%
    }

    .offset-xl-3 {
      margin-left: 25%
    }

    .offset-xl-4 {
      margin-left: 33.33333333%
    }

    .offset-xl-5 {
      margin-left: 41.66666667%
    }

    .offset-xl-6 {
      margin-left: 50%
    }

    .offset-xl-7 {
      margin-left: 58.33333333%
    }

    .offset-xl-8 {
      margin-left: 66.66666667%
    }

    .offset-xl-9 {
      margin-left: 75%
    }

    .offset-xl-10 {
      margin-left: 83.33333333%
    }

    .offset-xl-11 {
      margin-left: 91.66666667%
    }

    .g-xl-0, .gx-xl-0 {
      --bs-gutter-x: 0
    }

    .g-xl-0, .gy-xl-0 {
      --bs-gutter-y: 0
    }

    .g-xl-1, .gx-xl-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-xl-1, .gy-xl-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-xl-2, .gx-xl-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-xl-2, .gy-xl-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-xl-3, .gx-xl-3 {
      --bs-gutter-x: 1rem
    }

    .g-xl-3, .gy-xl-3 {
      --bs-gutter-y: 1rem
    }

    .g-xl-4, .gx-xl-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-xl-4, .gy-xl-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-xl-5, .gx-xl-5 {
      --bs-gutter-x: 3rem
    }

    .g-xl-5, .gy-xl-5 {
      --bs-gutter-y: 3rem
    }
  }

  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%
    }

    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto
    }

    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%
    }

    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%
    }

    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%
    }

    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%
    }

    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%
    }

    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.33333333%
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.66666667%
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.33333333%
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.66666667%
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.33333333%
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.66666667%
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.33333333%
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.66666667%
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%
    }

    .offset-xxl-0 {
      margin-left: 0
    }

    .offset-xxl-1 {
      margin-left: 8.33333333%
    }

    .offset-xxl-2 {
      margin-left: 16.66666667%
    }

    .offset-xxl-3 {
      margin-left: 25%
    }

    .offset-xxl-4 {
      margin-left: 33.33333333%
    }

    .offset-xxl-5 {
      margin-left: 41.66666667%
    }

    .offset-xxl-6 {
      margin-left: 50%
    }

    .offset-xxl-7 {
      margin-left: 58.33333333%
    }

    .offset-xxl-8 {
      margin-left: 66.66666667%
    }

    .offset-xxl-9 {
      margin-left: 75%
    }

    .offset-xxl-10 {
      margin-left: 83.33333333%
    }

    .offset-xxl-11 {
      margin-left: 91.66666667%
    }

    .g-xxl-0, .gx-xxl-0 {
      --bs-gutter-x: 0
    }

    .g-xxl-0, .gy-xxl-0 {
      --bs-gutter-y: 0
    }

    .g-xxl-1, .gx-xxl-1 {
      --bs-gutter-x: 0.25rem
    }

    .g-xxl-1, .gy-xxl-1 {
      --bs-gutter-y: 0.25rem
    }

    .g-xxl-2, .gx-xxl-2 {
      --bs-gutter-x: 0.5rem
    }

    .g-xxl-2, .gy-xxl-2 {
      --bs-gutter-y: 0.5rem
    }

    .g-xxl-3, .gx-xxl-3 {
      --bs-gutter-x: 1rem
    }

    .g-xxl-3, .gy-xxl-3 {
      --bs-gutter-y: 1rem
    }

    .g-xxl-4, .gx-xxl-4 {
      --bs-gutter-x: 1.5rem
    }

    .g-xxl-4, .gy-xxl-4 {
      --bs-gutter-y: 1.5rem
    }

    .g-xxl-5, .gx-xxl-5 {
      --bs-gutter-x: 3rem
    }

    .g-xxl-5, .gy-xxl-5 {
      --bs-gutter-y: 3rem
    }
  }

  .table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #212529;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #212529;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #212529;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6
  }

  .table > :not(caption) > * > * {
    width: 100%;
    padding: .5rem .5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg)
  }

  .table > tbody {
    vertical-align: inherit
  }

  .table > thead {
    vertical-align: bottom
  }

  .table > :not(:first-child) {
    border-top: 2px solid currentColor
  }

  .caption-top {
    caption-side: top
  }

  .table-sm > :not(caption) > * > * {
    padding: .25rem .25rem
  }

  .table-bordered > :not(caption) > * {
    border-width: 1px 0
  }

  .table-bordered > :not(caption) > * > * {
    border-width: 0 1px
  }

  .table-borderless > :not(caption) > * > * {
    border-bottom-width: 0
  }

  .table-borderless > :not(:first-child) {
    border-top-width: 0
  }

  .table-striped > tbody > tr:nth-of-type(odd) > * {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color)
  }

  .table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color)
  }

  .table-hover > tbody > tr:hover > * {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color)
  }

  .table-primary {
    --bs-table-bg: #cfe2ff;
    --bs-table-striped-bg: #c5d7f2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bacbe6
  }

  .table-secondary {
    --bs-table-bg: #e2e3e5;
    --bs-table-striped-bg: #d7d8da;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #cbccce;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d1d2d4;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #cbccce
  }

  .table-success {
    --bs-table-bg: #d1e7dd;
    --bs-table-striped-bg: #c7dbd2;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bcd0c7;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c1d6cc;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bcd0c7
  }

  .table-info {
    --bs-table-bg: #cff4fc;
    --bs-table-striped-bg: #c5e8ef;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #badce3;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #bfe2e9;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #badce3
  }

  .table-warning {
    --bs-table-bg: #fff3cd;
    --bs-table-striped-bg: #f2e7c3;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e6dbb9;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ece1be;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #e6dbb9
  }

  .table-danger {
    --bs-table-bg: #f8d7da;
    --bs-table-striped-bg: #eccccf;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfc2c4;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5c7ca;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfc2c4
  }

  .table-light {
    --bs-table-bg: #f8f9fa;
    --bs-table-striped-bg: #ecedee;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfe0e1;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e6e7;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfe0e1
  }

  .table-dark {
    --bs-table-bg: #212529;
    --bs-table-striped-bg: #2c3034;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #373b3e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #323539;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #373b3e
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  @media (max-width: 767.98px) {
    .table-responsive-md {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  @media (max-width: 991.98px) {
    .table-responsive-lg {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  @media (max-width: 1399.98px) {
    .table-responsive-xxl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  .form-label {
    margin-bottom: .5rem
  }

  .col-form-label {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5
  }

  .col-form-label-lg {
    padding-top: calc(.5rem + 1px);
    padding-bottom: calc(.5rem + 1px);
    font-size: 1.25rem
  }

  .col-form-label-sm {
    padding-top: calc(.25rem + 1px);
    padding-bottom: calc(.25rem + 1px);
    font-size: .875rem
  }

  .form-text {
    margin-top: .25rem;
    font-size: .875em;
    color: #6c757d
  }

  .form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none
    }
  }

  .form-control[type=file] {
    overflow: hidden
  }

  .form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer
  }

  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .form-control::-webkit-date-and-time-value {
    height: 1.5em
  }

  .form-control::-moz-placeholder {
    color: #6c757d;
    opacity: 1
  }

  .form-control::placeholder {
    color: #6c757d;
    opacity: 1
  }

  .form-control:disabled, .form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1
  }

  .form-control::-webkit-file-upload-button {
    padding: .375rem .75rem;
    margin: -.375rem -.75rem;
    -webkit-margin-end: .75rem;
    margin-inline-end: .75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  .form-control::file-selector-button {
    padding: .375rem .75rem;
    margin: -.375rem -.75rem;
    -webkit-margin-end: .75rem;
    margin-inline-end: .75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none
    }

    .form-control::file-selector-button {
      transition: none
    }
  }

  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3
  }

  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #dde0e3
  }

  .form-control::-webkit-file-upload-button {
    padding: .375rem .75rem;
    margin: -.375rem -.75rem;
    -webkit-margin-end: .75rem;
    margin-inline-end: .75rem;
    color: #212529;
    background-color: #e9ecef;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none
    }
  }

  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #dde0e3
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: .375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0
  }

  .form-control-plaintext.form-control-lg, .form-control-plaintext.form-control-sm {
    padding-right: 0;
    padding-left: 0
  }

  .form-control-sm {
    min-height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem
  }

  .form-control-sm::-webkit-file-upload-button {
    padding: .25rem .5rem;
    margin: -.25rem -.5rem;
    -webkit-margin-end: .5rem;
    margin-inline-end: .5rem
  }

  .form-control-sm::file-selector-button {
    padding: .25rem .5rem;
    margin: -.25rem -.5rem;
    -webkit-margin-end: .5rem;
    margin-inline-end: .5rem
  }

  .form-control-sm::-webkit-file-upload-button {
    padding: .25rem .5rem;
    margin: -.25rem -.5rem;
    -webkit-margin-end: .5rem;
    margin-inline-end: .5rem
  }

  .form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: .3rem
  }

  .form-control-lg::-webkit-file-upload-button {
    padding: .5rem 1rem;
    margin: -.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem
  }

  .form-control-lg::file-selector-button {
    padding: .5rem 1rem;
    margin: -.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem
  }

  .form-control-lg::-webkit-file-upload-button {
    padding: .5rem 1rem;
    margin: -.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem
  }

  textarea.form-control {
    min-height: calc(1.5em + .75rem + 2px)
  }

  textarea.form-control-sm {
    min-height: calc(1.5em + .5rem + 2px)
  }

  textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px)
  }

  .form-control-color {
    width: 3rem;
    height: auto;
    padding: .375rem
  }

  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer
  }

  .form-control-color::-moz-color-swatch {
    height: 1.5em;
    border-radius: .25rem
  }

  .form-control-color::-webkit-color-swatch {
    height: 1.5em;
    border-radius: .25rem
  }

  .form-select {
    display: block;
    width: 100%;
    padding: .375rem 2.25rem .375rem .75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right .75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }

  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none
    }
  }

  .form-select:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .form-select[multiple], .form-select[size]:not([size="1"]) {
    padding-right: .75rem;
    background-image: none
  }

  .form-select:disabled {
    background-color: #e9ecef
  }

  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #212529
  }

  .form-select-sm {
    padding-top: .25rem;
    padding-bottom: .25rem;
    padding-left: .5rem;
    font-size: .875rem;
    border-radius: .2rem
  }

  .form-select-lg {
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    border-radius: .3rem
  }

  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: .125rem
  }

  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em
  }

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: .25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, .25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact
  }

  .form-check-input[type=checkbox] {
    border-radius: .25em
  }

  .form-check-input[type=radio] {
    border-radius: 50%
  }

  .form-check-input:active {
    filter: brightness(90%)
  }

  .form-check-input:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .form-check-input:checked[type=checkbox] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e")
  }

  .form-check-input:checked[type=radio] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")
  }

  .form-check-input[type=checkbox]:indeterminate {
    background-color: #0d6efd;
    border-color: #0d6efd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")
  }

  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: .5
  }

  .form-check-input:disabled ~ .form-check-label, .form-check-input[disabled] ~ .form-check-label {
    opacity: .5
  }

  .form-switch {
    padding-left: 2.5em
  }

  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none
    }
  }

  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")
  }

  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")
  }

  .form-check-inline {
    display: inline-block;
    margin-right: 1rem
  }

  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none
  }

  .btn-check:disabled + .btn, .btn-check[disabled] + .btn {
    pointer-events: none;
    filter: none;
    opacity: .65
  }

  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }

  .form-range:focus {
    outline: 0
  }

  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .form-range::-moz-focus-outer {
    border: 0
  }

  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -.25rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    appearance: none
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
      -webkit-transition: none;
      transition: none
    }
  }

  .form-range::-webkit-slider-thumb:active {
    background-color: #b6d4fe
  }

  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: .5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem
  }

  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #0d6efd;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    -moz-appearance: none;
    appearance: none
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
      -moz-transition: none;
      transition: none
    }
  }

  .form-range::-moz-range-thumb:active {
    background-color: #b6d4fe
  }

  .form-range::-moz-range-track {
    width: 100%;
    height: .5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem
  }

  .form-range:disabled {
    pointer-events: none
  }

  .form-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd
  }

  .form-range:disabled::-moz-range-thumb {
    background-color: #adb5bd
  }

  .form-floating {
    position: relative
  }

  .form-floating > .form-control, .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25
  }

  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem .75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out, transform .1s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .form-floating > label {
      transition: none
    }
  }

  .form-floating > .form-control {
    padding: 1rem .75rem
  }

  .form-floating > .form-control::-moz-placeholder {
    color: transparent
  }

  .form-floating > .form-control::placeholder {
    color: transparent
  }

  .form-floating > .form-control:not(:-moz-placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: .625rem
  }

  .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: .625rem
  }

  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: .625rem
  }

  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: .625rem
  }

  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
  }

  .form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
  }

  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: .65;
    transform: scale(.85) translateY(-.5rem) translateX(.15rem)
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%
  }

  .input-group > .form-control, .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0
  }

  .input-group > .form-control:focus, .input-group > .form-select:focus {
    z-index: 3
  }

  .input-group .btn {
    position: relative;
    z-index: 2
  }

  .input-group .btn:focus {
    z-index: 3
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem
  }

  .input-group-lg > .btn, .input-group-lg > .form-control, .input-group-lg > .form-select, .input-group-lg > .input-group-text {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: .3rem
  }

  .input-group-sm > .btn, .input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text {
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem
  }

  .input-group-lg > .form-select, .input-group-sm > .form-select {
    padding-right: 3rem
  }

  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }

  .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4), .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }

  .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #198754
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .25rem .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    color: #fff;
    background-color: rgba(25, 135, 84, .9);
    border-radius: .25rem
  }

  .is-valid ~ .valid-feedback, .is-valid ~ .valid-tooltip, .was-validated :valid ~ .valid-feedback, .was-validated :valid ~ .valid-tooltip {
    display: block
  }

  .form-control.is-valid, .was-validated .form-control:valid {
    border-color: #198754;
    padding-right: calc(1.5em + .75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(.375em + .1875rem) center;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem)
  }

  .form-control.is-valid:focus, .was-validated .form-control:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .25)
  }

  .was-validated textarea.form-control:valid, textarea.form-control.is-valid {
    padding-right: calc(1.5em + .75rem);
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
  }

  .form-select.is-valid, .was-validated .form-select:valid {
    border-color: #198754
  }

  .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-position: right .75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
  }

  .form-select.is-valid:focus, .was-validated .form-select:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .25)
  }

  .form-check-input.is-valid, .was-validated .form-check-input:valid {
    border-color: #198754
  }

  .form-check-input.is-valid:checked, .was-validated .form-check-input:valid:checked {
    background-color: #198754
  }

  .form-check-input.is-valid:focus, .was-validated .form-check-input:valid:focus {
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .25)
  }

  .form-check-input.is-valid ~ .form-check-label, .was-validated .form-check-input:valid ~ .form-check-label {
    color: #198754
  }

  .form-check-inline .form-check-input ~ .valid-feedback {
    margin-left: .5em
  }

  .input-group .form-control.is-valid, .input-group .form-select.is-valid, .was-validated .input-group .form-control:valid, .was-validated .input-group .form-select:valid {
    z-index: 1
  }

  .input-group .form-control.is-valid:focus, .input-group .form-select.is-valid:focus, .was-validated .input-group .form-control:valid:focus, .was-validated .input-group .form-select:valid:focus {
    z-index: 3
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: .875em;
    color: #dc3545
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .25rem .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    color: #fff;
    background-color: rgba(220, 53, 69, .9);
    border-radius: .25rem
  }

  .is-invalid ~ .invalid-feedback, .is-invalid ~ .invalid-tooltip, .was-validated :invalid ~ .invalid-feedback, .was-validated :invalid ~ .invalid-tooltip {
    display: block
  }

  .form-control.is-invalid, .was-validated .form-control:invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + .75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(.375em + .1875rem) center;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem)
  }

  .form-control.is-invalid:focus, .was-validated .form-control:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .25rem rgba(220, 53, 69, .25)
  }

  .was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
    padding-right: calc(1.5em + .75rem);
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
  }

  .form-select.is-invalid, .was-validated .form-select:invalid {
    border-color: #dc3545
  }

  .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-position: right .75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
  }

  .form-select.is-invalid:focus, .was-validated .form-select:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .25rem rgba(220, 53, 69, .25)
  }

  .form-check-input.is-invalid, .was-validated .form-check-input:invalid {
    border-color: #dc3545
  }

  .form-check-input.is-invalid:checked, .was-validated .form-check-input:invalid:checked {
    background-color: #dc3545
  }

  .form-check-input.is-invalid:focus, .was-validated .form-check-input:invalid:focus {
    box-shadow: 0 0 0 .25rem rgba(220, 53, 69, .25)
  }

  .form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label {
    color: #dc3545
  }

  .form-check-inline .form-check-input ~ .invalid-feedback {
    margin-left: .5em
  }

  .input-group .form-control.is-invalid, .input-group .form-select.is-invalid, .was-validated .input-group .form-control:invalid, .was-validated .input-group .form-select:invalid {
    z-index: 2
  }

  .input-group .form-control.is-invalid:focus, .input-group .form-select.is-invalid:focus, .was-validated .input-group .form-control:invalid:focus, .was-validated .input-group .form-select:invalid:focus {
    z-index: 3
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none
    }
  }

  .btn:hover {
    color: #212529
  }

  .btn-check:focus + .btn, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .btn.disabled, .btn:disabled, fieldset:disabled .btn {
    pointer-events: none;
    opacity: .65
  }

  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca
  }

  .btn-check:focus + .btn-primary, .btn-primary:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5)
  }

  .btn-check:active + .btn-primary, .btn-check:checked + .btn-primary, .btn-primary.active, .btn-primary:active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0a58ca;
    border-color: #0a53be
  }

  .btn-check:active + .btn-primary:focus, .btn-check:checked + .btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(49, 132, 253, .5)
  }

  .btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d
  }

  .btn-secondary:hover {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64
  }

  .btn-check:focus + .btn-secondary, .btn-secondary:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5)
  }

  .btn-check:active + .btn-secondary, .btn-check:checked + .btn-secondary, .btn-secondary.active, .btn-secondary:active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e
  }

  .btn-check:active + .btn-secondary:focus, .btn-check:checked + .btn-secondary:focus, .btn-secondary.active:focus, .btn-secondary:active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5)
  }

  .btn-secondary.disabled, .btn-secondary:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d
  }

  .btn-success {
    color: #fff;
    background-color: #198754;
    border-color: #198754
  }

  .btn-success:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43
  }

  .btn-check:focus + .btn-success, .btn-success:focus {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
    box-shadow: 0 0 0 .25rem rgba(60, 153, 110, .5)
  }

  .btn-check:active + .btn-success, .btn-check:checked + .btn-success, .btn-success.active, .btn-success:active, .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #146c43;
    border-color: #13653f
  }

  .btn-check:active + .btn-success:focus, .btn-check:checked + .btn-success:focus, .btn-success.active:focus, .btn-success:active:focus, .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(60, 153, 110, .5)
  }

  .btn-success.disabled, .btn-success:disabled {
    color: #fff;
    background-color: #198754;
    border-color: #198754
  }

  .btn-info {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0
  }

  .btn-info:hover {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2
  }

  .btn-check:focus + .btn-info, .btn-info:focus {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
    box-shadow: 0 0 0 .25rem rgba(11, 172, 204, .5)
  }

  .btn-check:active + .btn-info, .btn-check:checked + .btn-info, .btn-info.active, .btn-info:active, .show > .btn-info.dropdown-toggle {
    color: #000;
    background-color: #3dd5f3;
    border-color: #25cff2
  }

  .btn-check:active + .btn-info:focus, .btn-check:checked + .btn-info:focus, .btn-info.active:focus, .btn-info:active:focus, .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(11, 172, 204, .5)
  }

  .btn-info.disabled, .btn-info:disabled {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0
  }

  .btn-warning {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107
  }

  .btn-warning:hover {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720
  }

  .btn-check:focus + .btn-warning, .btn-warning:focus {
    color: #000;
    background-color: #ffca2c;
    border-color: #ffc720;
    box-shadow: 0 0 0 .25rem rgba(217, 164, 6, .5)
  }

  .btn-check:active + .btn-warning, .btn-check:checked + .btn-warning, .btn-warning.active, .btn-warning:active, .show > .btn-warning.dropdown-toggle {
    color: #000;
    background-color: #ffcd39;
    border-color: #ffc720
  }

  .btn-check:active + .btn-warning:focus, .btn-check:checked + .btn-warning:focus, .btn-warning.active:focus, .btn-warning:active:focus, .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(217, 164, 6, .5)
  }

  .btn-warning.disabled, .btn-warning:disabled {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107
  }

  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37
  }

  .btn-check:focus + .btn-danger, .btn-danger:focus {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 .25rem rgba(225, 83, 97, .5)
  }

  .btn-check:active + .btn-danger, .btn-check:checked + .btn-danger, .btn-danger.active, .btn-danger:active, .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #b02a37;
    border-color: #a52834
  }

  .btn-check:active + .btn-danger:focus, .btn-check:checked + .btn-danger:focus, .btn-danger.active:focus, .btn-danger:active:focus, .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(225, 83, 97, .5)
  }

  .btn-danger.disabled, .btn-danger:disabled {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545
  }

  .btn-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa
  }

  .btn-light:hover {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb
  }

  .btn-check:focus + .btn-light, .btn-light:focus {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb;
    box-shadow: 0 0 0 .25rem rgba(211, 212, 213, .5)
  }

  .btn-check:active + .btn-light, .btn-check:checked + .btn-light, .btn-light.active, .btn-light:active, .show > .btn-light.dropdown-toggle {
    color: #000;
    background-color: #f9fafb;
    border-color: #f9fafb
  }

  .btn-check:active + .btn-light:focus, .btn-check:checked + .btn-light:focus, .btn-light.active:focus, .btn-light:active:focus, .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(211, 212, 213, .5)
  }

  .btn-light.disabled, .btn-light:disabled {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa
  }

  .btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529
  }

  .btn-dark:hover {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21
  }

  .btn-check:focus + .btn-dark, .btn-dark:focus {
    color: #fff;
    background-color: #1c1f23;
    border-color: #1a1e21;
    box-shadow: 0 0 0 .25rem rgba(66, 70, 73, .5)
  }

  .btn-check:active + .btn-dark, .btn-check:checked + .btn-dark, .btn-dark.active, .btn-dark:active, .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f
  }

  .btn-check:active + .btn-dark:focus, .btn-check:checked + .btn-dark:focus, .btn-dark.active:focus, .btn-dark:active:focus, .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem rgba(66, 70, 73, .5)
  }

  .btn-dark.disabled, .btn-dark:disabled {
    color: #fff;
    background-color: #212529;
    border-color: #212529
  }

  .btn-outline-primary {
    color: #0d6efd;
    border-color: #0d6efd
  }

  .btn-outline-primary:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .5)
  }

  .btn-check:active + .btn-outline-primary, .btn-check:checked + .btn-outline-primary, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show, .btn-outline-primary:active {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .btn-check:active + .btn-outline-primary:focus, .btn-check:checked + .btn-outline-primary:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus, .btn-outline-primary:active:focus {
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .5)
  }

  .btn-outline-primary.disabled, .btn-outline-primary:disabled {
    color: #0d6efd;
    background-color: transparent
  }

  .btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d
  }

  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d
  }

  .btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5)
  }

  .btn-check:active + .btn-outline-secondary, .btn-check:checked + .btn-outline-secondary, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show, .btn-outline-secondary:active {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d
  }

  .btn-check:active + .btn-outline-secondary:focus, .btn-check:checked + .btn-outline-secondary:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus, .btn-outline-secondary:active:focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5)
  }

  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
    color: #6c757d;
    background-color: transparent
  }

  .btn-outline-success {
    color: #198754;
    border-color: #198754
  }

  .btn-outline-success:hover {
    color: #fff;
    background-color: #198754;
    border-color: #198754
  }

  .btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .5)
  }

  .btn-check:active + .btn-outline-success, .btn-check:checked + .btn-outline-success, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show, .btn-outline-success:active {
    color: #fff;
    background-color: #198754;
    border-color: #198754
  }

  .btn-check:active + .btn-outline-success:focus, .btn-check:checked + .btn-outline-success:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus, .btn-outline-success:active:focus {
    box-shadow: 0 0 0 .25rem rgba(25, 135, 84, .5)
  }

  .btn-outline-success.disabled, .btn-outline-success:disabled {
    color: #198754;
    background-color: transparent
  }

  .btn-outline-info {
    color: #0dcaf0;
    border-color: #0dcaf0
  }

  .btn-outline-info:hover {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0
  }

  .btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
    box-shadow: 0 0 0 .25rem rgba(13, 202, 240, .5)
  }

  .btn-check:active + .btn-outline-info, .btn-check:checked + .btn-outline-info, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show, .btn-outline-info:active {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0
  }

  .btn-check:active + .btn-outline-info:focus, .btn-check:checked + .btn-outline-info:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus, .btn-outline-info:active:focus {
    box-shadow: 0 0 0 .25rem rgba(13, 202, 240, .5)
  }

  .btn-outline-info.disabled, .btn-outline-info:disabled {
    color: #0dcaf0;
    background-color: transparent
  }

  .btn-outline-warning {
    color: #ffc107;
    border-color: #ffc107
  }

  .btn-outline-warning:hover {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107
  }

  .btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
    box-shadow: 0 0 0 .25rem rgba(255, 193, 7, .5)
  }

  .btn-check:active + .btn-outline-warning, .btn-check:checked + .btn-outline-warning, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show, .btn-outline-warning:active {
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107
  }

  .btn-check:active + .btn-outline-warning:focus, .btn-check:checked + .btn-outline-warning:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus, .btn-outline-warning:active:focus {
    box-shadow: 0 0 0 .25rem rgba(255, 193, 7, .5)
  }

  .btn-outline-warning.disabled, .btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent
  }

  .btn-outline-danger {
    color: #dc3545;
    border-color: #dc3545
  }

  .btn-outline-danger:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545
  }

  .btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
    box-shadow: 0 0 0 .25rem rgba(220, 53, 69, .5)
  }

  .btn-check:active + .btn-outline-danger, .btn-check:checked + .btn-outline-danger, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show, .btn-outline-danger:active {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545
  }

  .btn-check:active + .btn-outline-danger:focus, .btn-check:checked + .btn-outline-danger:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus, .btn-outline-danger:active:focus {
    box-shadow: 0 0 0 .25rem rgba(220, 53, 69, .5)
  }

  .btn-outline-danger.disabled, .btn-outline-danger:disabled {
    color: #dc3545;
    background-color: transparent
  }

  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa
  }

  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa
  }

  .btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
    box-shadow: 0 0 0 .25rem rgba(248, 249, 250, .5)
  }

  .btn-check:active + .btn-outline-light, .btn-check:checked + .btn-outline-light, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show, .btn-outline-light:active {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa
  }

  .btn-check:active + .btn-outline-light:focus, .btn-check:checked + .btn-outline-light:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus, .btn-outline-light:active:focus {
    box-shadow: 0 0 0 .25rem rgba(248, 249, 250, .5)
  }

  .btn-outline-light.disabled, .btn-outline-light:disabled {
    color: #f8f9fa;
    background-color: transparent
  }

  .btn-outline-dark {
    color: #212529;
    border-color: #212529
  }

  .btn-outline-dark:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529
  }

  .btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
    box-shadow: 0 0 0 .25rem rgba(33, 37, 41, .5)
  }

  .btn-check:active + .btn-outline-dark, .btn-check:checked + .btn-outline-dark, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show, .btn-outline-dark:active {
    color: #fff;
    background-color: #212529;
    border-color: #212529
  }

  .btn-check:active + .btn-outline-dark:focus, .btn-check:checked + .btn-outline-dark:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus, .btn-outline-dark:active:focus {
    box-shadow: 0 0 0 .25rem rgba(33, 37, 41, .5)
  }

  .btn-outline-dark.disabled, .btn-outline-dark:disabled {
    color: #212529;
    background-color: transparent
  }

  .btn-link {
    font-weight: 400;
    color: #0d6efd;
    text-decoration: underline
  }

  .btn-link:hover {
    color: #0a58ca
  }

  .btn-link.disabled, .btn-link:disabled {
    color: #6c757d
  }

  .btn-group-lg > .btn, .btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    border-radius: .3rem
  }

  .btn-group-sm > .btn, .btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem
  }

  .fade {
    transition: opacity .15s linear
  }

  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none
    }
  }

  .fade:not(.show) {
    opacity: 0
  }

  .collapse:not(.show) {
    display: none
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height .35s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none
    }
  }

  .collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width .35s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
      transition: none
    }
  }

  .dropdown, .dropend, .dropstart, .dropup {
    position: relative
  }

  .dropdown-toggle {
    white-space: nowrap
  }

  .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent
  }

  .dropdown-toggle:empty::after {
    margin-left: 0
  }

  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: .5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem
  }

  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: .125rem
  }

  .dropdown-menu-start {
    --bs-position: start
  }

  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0
  }

  .dropdown-menu-end {
    --bs-position: end
  }

  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto
  }

  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-position: start
    }

    .dropdown-menu-sm-start[data-bs-popper] {
      right: auto;
      left: 0
    }

    .dropdown-menu-sm-end {
      --bs-position: end
    }

    .dropdown-menu-sm-end[data-bs-popper] {
      right: 0;
      left: auto
    }
  }

  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-position: start
    }

    .dropdown-menu-md-start[data-bs-popper] {
      right: auto;
      left: 0
    }

    .dropdown-menu-md-end {
      --bs-position: end
    }

    .dropdown-menu-md-end[data-bs-popper] {
      right: 0;
      left: auto
    }
  }

  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-position: start
    }

    .dropdown-menu-lg-start[data-bs-popper] {
      right: auto;
      left: 0
    }

    .dropdown-menu-lg-end {
      --bs-position: end
    }

    .dropdown-menu-lg-end[data-bs-popper] {
      right: 0;
      left: auto
    }
  }

  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-position: start
    }

    .dropdown-menu-xl-start[data-bs-popper] {
      right: auto;
      left: 0
    }

    .dropdown-menu-xl-end {
      --bs-position: end
    }

    .dropdown-menu-xl-end[data-bs-popper] {
      right: 0;
      left: auto
    }
  }

  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-position: start
    }

    .dropdown-menu-xxl-start[data-bs-popper] {
      right: auto;
      left: 0
    }

    .dropdown-menu-xxl-end {
      --bs-position: end
    }

    .dropdown-menu-xxl-end[data-bs-popper] {
      right: 0;
      left: auto
    }
  }

  .dropup .dropdown-menu[data-bs-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: .125rem
  }

  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent
  }

  .dropup .dropdown-toggle:empty::after {
    margin-left: 0
  }

  .dropend .dropdown-menu[data-bs-popper] {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: .125rem
  }

  .dropend .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: 0;
    border-bottom: .3em solid transparent;
    border-left: .3em solid
  }

  .dropend .dropdown-toggle:empty::after {
    margin-left: 0
  }

  .dropend .dropdown-toggle::after {
    vertical-align: 0
  }

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: .125rem
  }

  .dropstart .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: ""
  }

  .dropstart .dropdown-toggle::after {
    display: none
  }

  .dropstart .dropdown-toggle::before {
    display: inline-block;
    margin-right: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: .3em solid;
    border-bottom: .3em solid transparent
  }

  .dropstart .dropdown-toggle:empty::after {
    margin-left: 0
  }

  .dropstart .dropdown-toggle::before {
    vertical-align: 0
  }

  .dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, .15)
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0
  }

  .dropdown-item:focus, .dropdown-item:hover {
    color: #1e2125;
    background-color: #e9ecef
  }

  .dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #0d6efd
  }

  .dropdown-item.disabled, .dropdown-item:disabled {
    color: #adb5bd;
    pointer-events: none;
    background-color: transparent
  }

  .dropdown-menu.show {
    display: block
  }

  .dropdown-header {
    display: block;
    padding: .5rem 1rem;
    margin-bottom: 0;
    font-size: .875rem;
    color: #6c757d;
    white-space: nowrap
  }

  .dropdown-item-text {
    display: block;
    padding: .25rem 1rem;
    color: #212529
  }

  .dropdown-menu-dark {
    color: #dee2e6;
    background-color: #343a40;
    border-color: rgba(0, 0, 0, .15)
  }

  .dropdown-menu-dark .dropdown-item {
    color: #dee2e6
  }

  .dropdown-menu-dark .dropdown-item:focus, .dropdown-menu-dark .dropdown-item:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, .15)
  }

  .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
    color: #fff;
    background-color: #0d6efd
  }

  .dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
    color: #adb5bd
  }

  .dropdown-menu-dark .dropdown-divider {
    border-color: rgba(0, 0, 0, .15)
  }

  .dropdown-menu-dark .dropdown-item-text {
    color: #dee2e6
  }

  .dropdown-menu-dark .dropdown-header {
    color: #adb5bd
  }

  .btn-group, .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle
  }

  .btn-group-vertical > .btn, .btn-group > .btn {
    position: relative;
    flex: 1 1 auto
  }

  .btn-group-vertical > .btn-check:checked + .btn, .btn-group-vertical > .btn-check:focus + .btn, .btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn-check:checked + .btn, .btn-group > .btn-check:focus + .btn, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {
    z-index: 1
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
  }

  .btn-toolbar .input-group {
    width: auto
  }

  .btn-group > .btn-group:not(:first-child), .btn-group > .btn:not(:first-child) {
    margin-left: -1px
  }

  .btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }

  .btn-group > .btn-group:not(:first-child) > .btn, .btn-group > .btn:nth-child(n+3), .btn-group > :not(.btn-check) + .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }

  .dropdown-toggle-split {
    padding-right: .5625rem;
    padding-left: .5625rem
  }

  .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after {
    margin-left: 0
  }

  .dropstart .dropdown-toggle-split::before {
    margin-right: 0
  }

  .btn-group-sm > .btn + .dropdown-toggle-split, .btn-sm + .dropdown-toggle-split {
    padding-right: .375rem;
    padding-left: .375rem
  }

  .btn-group-lg > .btn + .dropdown-toggle-split, .btn-lg + .dropdown-toggle-split {
    padding-right: .75rem;
    padding-left: .75rem
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
  }

  .btn-group-vertical > .btn, .btn-group-vertical > .btn-group {
    width: 100%
  }

  .btn-group-vertical > .btn-group:not(:first-child), .btn-group-vertical > .btn:not(:first-child) {
    margin-top: -1px
  }

  .btn-group-vertical > .btn-group:not(:last-child) > .btn, .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0
  }

  .btn-group-vertical > .btn-group:not(:first-child) > .btn, .btn-group-vertical > .btn ~ .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
  }

  .nav-link {
    display: block;
    padding: .5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none
    }
  }

  .nav-link:focus, .nav-link:hover {
    color: #0a58ca
  }

  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6
  }

  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: 0 0;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem
  }

  .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    isolation: isolate
  }

  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff
  }

  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0
  }

  .nav-pills .nav-link {
    background: 0 0;
    border: 0;
    border-radius: .25rem
  }

  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #0d6efd
  }

  .nav-fill .nav-item, .nav-fill > .nav-link {
    flex: 1 1 auto;
    text-align: center
  }

  .nav-justified .nav-item, .nav-justified > .nav-link {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center
  }

  .nav-fill .nav-item .nav-link, .nav-justified .nav-item .nav-link {
    width: 100%
  }

  .tab-content > .tab-pane {
    display: none
  }

  .tab-content > .active {
    display: block
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .navbar > .container, .navbar > .container-fluid, .navbar > .container-lg, .navbar > .container-md, .navbar > .container-sm, .navbar > .container-xl, .navbar > .container-xxl {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between
  }

  .navbar-brand {
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0
  }

  .navbar-nav .dropdown-menu {
    position: static
  }

  .navbar-text {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center
  }

  .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .navbar-toggler {
      transition: none
    }
  }

  .navbar-toggler:hover {
    text-decoration: none
  }

  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 .25rem
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%
  }

  .navbar-nav-scroll {
    max-height: var(--bs-scroll-height, 75vh);
    overflow-y: auto
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-wrap: nowrap;
      justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
      flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute
    }

    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: .5rem;
      padding-left: .5rem
    }

    .navbar-expand-sm .navbar-nav-scroll {
      overflow: visible
    }

    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
      display: none
    }

    .navbar-expand-sm .offcanvas-header {
      display: none
    }

    .navbar-expand-sm .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      transform: none
    }

    .navbar-expand-sm .offcanvas-bottom, .navbar-expand-sm .offcanvas-top {
      height: auto;
      border-top: 0;
      border-bottom: 0
    }

    .navbar-expand-sm .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
      flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute
    }

    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: .5rem;
      padding-left: .5rem
    }

    .navbar-expand-md .navbar-nav-scroll {
      overflow: visible
    }

    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
      display: none
    }

    .navbar-expand-md .offcanvas-header {
      display: none
    }

    .navbar-expand-md .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      transform: none
    }

    .navbar-expand-md .offcanvas-bottom, .navbar-expand-md .offcanvas-top {
      height: auto;
      border-top: 0;
      border-bottom: 0
    }

    .navbar-expand-md .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-wrap: nowrap;
      justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
      flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute
    }

    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: .5rem;
      padding-left: .5rem
    }

    .navbar-expand-lg .navbar-nav-scroll {
      overflow: visible
    }

    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
      display: none
    }

    .navbar-expand-lg .offcanvas-header {
      display: none
    }

    .navbar-expand-lg .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      transform: none
    }

    .navbar-expand-lg .offcanvas-bottom, .navbar-expand-lg .offcanvas-top {
      height: auto;
      border-top: 0;
      border-bottom: 0
    }

    .navbar-expand-lg .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-wrap: nowrap;
      justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
      flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute
    }

    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: .5rem;
      padding-left: .5rem
    }

    .navbar-expand-xl .navbar-nav-scroll {
      overflow: visible
    }

    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
      display: none
    }

    .navbar-expand-xl .offcanvas-header {
      display: none
    }

    .navbar-expand-xl .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      transform: none
    }

    .navbar-expand-xl .offcanvas-bottom, .navbar-expand-xl .offcanvas-top {
      height: auto;
      border-top: 0;
      border-bottom: 0
    }

    .navbar-expand-xl .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible
    }
  }

  @media (min-width: 1400px) {
    .navbar-expand-xxl {
      flex-wrap: nowrap;
      justify-content: flex-start
    }

    .navbar-expand-xxl .navbar-nav {
      flex-direction: row
    }

    .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute
    }

    .navbar-expand-xxl .navbar-nav .nav-link {
      padding-right: .5rem;
      padding-left: .5rem
    }

    .navbar-expand-xxl .navbar-nav-scroll {
      overflow: visible
    }

    .navbar-expand-xxl .navbar-collapse {
      display: flex !important;
      flex-basis: auto
    }

    .navbar-expand-xxl .navbar-toggler {
      display: none
    }

    .navbar-expand-xxl .offcanvas-header {
      display: none
    }

    .navbar-expand-xxl .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      transform: none
    }

    .navbar-expand-xxl .offcanvas-bottom, .navbar-expand-xxl .offcanvas-top {
      height: auto;
      border-top: 0;
      border-bottom: 0
    }

    .navbar-expand-xxl .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible
    }
  }

  .navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start
  }

  .navbar-expand .navbar-nav {
    flex-direction: row
  }

  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
  }

  .navbar-expand .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem
  }

  .navbar-expand .navbar-nav-scroll {
    overflow: visible
  }

  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto
  }

  .navbar-expand .navbar-toggler {
    display: none
  }

  .navbar-expand .offcanvas-header {
    display: none
  }

  .navbar-expand .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    transform: none
  }

  .navbar-expand .offcanvas-bottom, .navbar-expand .offcanvas-top {
    height: auto;
    border-top: 0;
    border-bottom: 0
  }

  .navbar-expand .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible
  }

  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, .9)
  }

  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: rgba(0, 0, 0, .9)
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, .55)
  }

  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0, 0, 0, .7)
  }

  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, .3)
  }

  .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show > .nav-link {
    color: rgba(0, 0, 0, .9)
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, .55);
    border-color: rgba(0, 0, 0, .1)
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, .55)
  }

  .navbar-light .navbar-text a, .navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {
    color: rgba(0, 0, 0, .9)
  }

  .navbar-dark .navbar-brand {
    color: #fff
  }

  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {
    color: #fff
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .55)
  }

  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, .75)
  }

  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, .25)
  }

  .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .show > .nav-link {
    color: #fff
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, .55);
    border-color: rgba(255, 255, 255, .1)
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, .55)
  }

  .navbar-dark .navbar-text a, .navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {
    color: #fff
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
  }

  .card > hr {
    margin-right: 0;
    margin-left: 0
  }

  .card > .list-group {
    border-top: inherit;
    border-bottom: inherit
  }

  .card > .list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px)
  }

  .card > .list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px)
  }

  .card > .card-header + .list-group, .card > .list-group + .card-footer {
    border-top: 0
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem
  }

  .card-title {
    margin-bottom: .5rem
  }

  .card-subtitle {
    margin-top: -.25rem;
    margin-bottom: 0
  }

  .card-text:last-child {
    margin-bottom: 0
  }

  .card-link + .card-link {
    margin-left: 1rem
  }

  .card-header {
    padding: .5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125)
  }

  .card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
  }

  .card-footer {
    padding: .5rem 1rem;
    background-color: rgba(0, 0, 0, .03);
    border-top: 1px solid rgba(0, 0, 0, .125)
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px)
  }

  .card-header-tabs {
    margin-right: -.5rem;
    margin-bottom: -.5rem;
    margin-left: -.5rem;
    border-bottom: 0
  }

  .card-header-pills {
    margin-right: -.5rem;
    margin-left: -.5rem
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: calc(.25rem - 1px)
  }

  .card-img, .card-img-bottom, .card-img-top {
    width: 100%
  }

  .card-img, .card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px)
  }

  .card-img, .card-img-bottom {
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px)
  }

  .card-group > .card {
    margin-bottom: .75rem
  }

  @media (min-width: 576px) {
    .card-group {
      display: flex;
      flex-flow: row wrap
    }

    .card-group > .card {
      flex: 1 0 0%;
      margin-bottom: 0
    }

    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0
    }

    .card-group > .card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0
    }

    .card-group > .card:not(:last-child) .card-header, .card-group > .card:not(:last-child) .card-img-top {
      border-top-right-radius: 0
    }

    .card-group > .card:not(:last-child) .card-footer, .card-group > .card:not(:last-child) .card-img-bottom {
      border-bottom-right-radius: 0
    }

    .card-group > .card:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0
    }

    .card-group > .card:not(:first-child) .card-header, .card-group > .card:not(:first-child) .card-img-top {
      border-top-left-radius: 0
    }

    .card-group > .card:not(:first-child) .card-footer, .card-group > .card:not(:first-child) .card-img-bottom {
      border-bottom-left-radius: 0
    }
  }

  .accordion-button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .accordion-button {
      transition: none
    }
  }

  .accordion-button:not(.collapsed) {
    color: #0c63e4;
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .125)
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    transform: rotate(-180deg)
  }

  .accordion-button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform .2s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .accordion-button::after {
      transition: none
    }
  }

  .accordion-button:hover {
    z-index: 2
  }

  .accordion-button:focus {
    z-index: 3;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .accordion-header {
    margin-bottom: 0
  }

  .accordion-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125)
  }

  .accordion-item:first-of-type {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px)
  }

  .accordion-item:not(:first-of-type) {
    border-top: 0
  }

  .accordion-item:last-of-type {
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px)
  }

  .accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem
  }

  .accordion-body {
    padding: 1rem 1.25rem
  }

  .accordion-flush .accordion-collapse {
    border-width: 0
  }

  .accordion-flush .accordion-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0
  }

  .accordion-flush .accordion-item:first-child {
    border-top: 0
  }

  .accordion-flush .accordion-item:last-child {
    border-bottom: 0
  }

  .accordion-flush .accordion-item .accordion-button {
    border-radius: 0
  }

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0;
    margin-bottom: 1rem;
    list-style: none
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: .5rem
  }

  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: .5rem;
    color: #6c757d;
    content: var(--bs-breadcrumb-divider, "/")
  }

  .breadcrumb-item.active {
    color: #6c757d
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none
  }

  .page-link {
    position: relative;
    display: block;
    color: #0d6efd;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .page-link {
      transition: none
    }
  }

  .page-link:hover {
    z-index: 2;
    color: #0a58ca;
    background-color: #e9ecef;
    border-color: #dee2e6
  }

  .page-link:focus {
    z-index: 3;
    color: #0a58ca;
    background-color: #e9ecef;
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25)
  }

  .page-item:not(:first-child) .page-link {
    margin-left: -1px
  }

  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6
  }

  .page-link {
    padding: .375rem .75rem
  }

  .page-item:first-child .page-link {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem
  }

  .page-item:last-child .page-link {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem
  }

  .pagination-lg .page-link {
    padding: .75rem 1.5rem;
    font-size: 1.25rem
  }

  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: .3rem;
    border-bottom-left-radius: .3rem
  }

  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem
  }

  .pagination-sm .page-link {
    padding: .25rem .5rem;
    font-size: .875rem
  }

  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem
  }

  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem
  }

  .badge {
    display: inline-block;
    color: #fff;
    text-align: center;
    vertical-align: baseline;
    border-radius: .25rem
  }

  .badge:empty {
    display: none
  }

  .btn .badge {
    position: relative;
    top: -1px
  }

  .alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem
  }

  .alert-heading {
    color: inherit
  }

  .alert-link {
    font-weight: 700
  }

  .alert-dismissible {
    padding-right: 3rem
  }

  .alert-dismissible .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 1.25rem 1rem
  }

  .alert-primary {
    color: #084298;
    background-color: #cfe2ff;
    border-color: #b6d4fe
  }

  .alert-primary .alert-link {
    color: #06357a
  }

  .alert-secondary {
    color: #41464b;
    background-color: #e2e3e5;
    border-color: #d3d6d8
  }

  .alert-secondary .alert-link {
    color: #34383c
  }

  .alert-success {
    color: #0f5132;
    background-color: #d1e7dd;
    border-color: #badbcc
  }

  .alert-success .alert-link {
    color: #0c4128
  }

  .alert-info {
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb
  }

  .alert-info .alert-link {
    color: #04414d
  }

  .alert-warning {
    color: #664d03;
    background-color: #fff3cd;
    border-color: #ffecb5
  }

  .alert-warning .alert-link {
    color: #523e02
  }

  .alert-danger {
    color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7
  }

  .alert-danger .alert-link {
    color: #6a1a21
  }

  .alert-light {
    color: #636464;
    background-color: #fefefe;
    border-color: #fdfdfe
  }

  .alert-light .alert-link {
    color: #4f5050
  }

  .alert-dark {
    color: #141619;
    background-color: #d3d3d4;
    border-color: #bcbebf
  }

  .alert-dark .alert-link {
    color: #101214
  }

  @-webkit-keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem
    }
  }

  @keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem
    }
  }

  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #0d6efd;
    transition: width .6s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem
  }

  .progress-bar-animated {
    -webkit-animation: 1s linear infinite progress-bar-stripes;
    animation: 1s linear infinite progress-bar-stripes
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar-animated {
      -webkit-animation: none;
      animation: none
    }
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem
  }

  .list-group-numbered {
    list-style-type: none;
    counter-reset: section
  }

  .list-group-numbered > li::before {
    content: counters(section, ".") ". ";
    counter-increment: section
  }

  .list-group-item-action {
    width: 100%;
    color: #495057;
    text-align: inherit
  }

  .list-group-item-action:focus, .list-group-item-action:hover {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa
  }

  .list-group-item-action:active {
    color: #212529;
    background-color: #e9ecef
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125)
  }

  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit
  }

  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit
  }

  .list-group-item.disabled, .list-group-item:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff
  }

  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd
  }

  .list-group-item + .list-group-item {
    border-top-width: 0
  }

  .list-group-item + .list-group-item.active {
    margin-top: -1px;
    border-top-width: 1px
  }

  .list-group-horizontal {
    flex-direction: row
  }

  .list-group-horizontal > .list-group-item:first-child {
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0
  }

  .list-group-horizontal > .list-group-item:last-child {
    border-top-right-radius: .25rem;
    border-bottom-left-radius: 0
  }

  .list-group-horizontal > .list-group-item.active {
    margin-top: 0
  }

  .list-group-horizontal > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0
  }

  .list-group-horizontal > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px
  }

  @media (min-width: 576px) {
    .list-group-horizontal-sm {
      flex-direction: row
    }

    .list-group-horizontal-sm > .list-group-item:first-child {
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0
    }

    .list-group-horizontal-sm > .list-group-item:last-child {
      border-top-right-radius: .25rem;
      border-bottom-left-radius: 0
    }

    .list-group-horizontal-sm > .list-group-item.active {
      margin-top: 0
    }

    .list-group-horizontal-sm > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0
    }

    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px
    }
  }

  @media (min-width: 768px) {
    .list-group-horizontal-md {
      flex-direction: row
    }

    .list-group-horizontal-md > .list-group-item:first-child {
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0
    }

    .list-group-horizontal-md > .list-group-item:last-child {
      border-top-right-radius: .25rem;
      border-bottom-left-radius: 0
    }

    .list-group-horizontal-md > .list-group-item.active {
      margin-top: 0
    }

    .list-group-horizontal-md > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0
    }

    .list-group-horizontal-md > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px
    }
  }

  @media (min-width: 992px) {
    .list-group-horizontal-lg {
      flex-direction: row
    }

    .list-group-horizontal-lg > .list-group-item:first-child {
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0
    }

    .list-group-horizontal-lg > .list-group-item:last-child {
      border-top-right-radius: .25rem;
      border-bottom-left-radius: 0
    }

    .list-group-horizontal-lg > .list-group-item.active {
      margin-top: 0
    }

    .list-group-horizontal-lg > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0
    }

    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px
    }
  }

  @media (min-width: 1200px) {
    .list-group-horizontal-xl {
      flex-direction: row
    }

    .list-group-horizontal-xl > .list-group-item:first-child {
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0
    }

    .list-group-horizontal-xl > .list-group-item:last-child {
      border-top-right-radius: .25rem;
      border-bottom-left-radius: 0
    }

    .list-group-horizontal-xl > .list-group-item.active {
      margin-top: 0
    }

    .list-group-horizontal-xl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0
    }

    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px
    }
  }

  @media (min-width: 1400px) {
    .list-group-horizontal-xxl {
      flex-direction: row
    }

    .list-group-horizontal-xxl > .list-group-item:first-child {
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0
    }

    .list-group-horizontal-xxl > .list-group-item:last-child {
      border-top-right-radius: .25rem;
      border-bottom-left-radius: 0
    }

    .list-group-horizontal-xxl > .list-group-item.active {
      margin-top: 0
    }

    .list-group-horizontal-xxl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0
    }

    .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px
    }
  }

  .list-group-flush {
    border-radius: 0
  }

  .list-group-flush > .list-group-item {
    border-width: 0 0 1px
  }

  .list-group-flush > .list-group-item:last-child {
    border-bottom-width: 0
  }

  .list-group-item-primary {
    color: #084298;
    background-color: #cfe2ff
  }

  .list-group-item-primary.list-group-item-action:focus, .list-group-item-primary.list-group-item-action:hover {
    color: #084298;
    background-color: #bacbe6
  }

  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #084298;
    border-color: #084298
  }

  .list-group-item-secondary {
    color: #41464b;
    background-color: #e2e3e5
  }

  .list-group-item-secondary.list-group-item-action:focus, .list-group-item-secondary.list-group-item-action:hover {
    color: #41464b;
    background-color: #cbccce
  }

  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #41464b;
    border-color: #41464b
  }

  .list-group-item-success {
    color: #0f5132;
    background-color: #d1e7dd
  }

  .list-group-item-success.list-group-item-action:focus, .list-group-item-success.list-group-item-action:hover {
    color: #0f5132;
    background-color: #bcd0c7
  }

  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #0f5132;
    border-color: #0f5132
  }

  .list-group-item-info {
    color: #055160;
    background-color: #cff4fc
  }

  .list-group-item-info.list-group-item-action:focus, .list-group-item-info.list-group-item-action:hover {
    color: #055160;
    background-color: #badce3
  }

  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #055160;
    border-color: #055160
  }

  .list-group-item-warning {
    color: #664d03;
    background-color: #fff3cd
  }

  .list-group-item-warning.list-group-item-action:focus, .list-group-item-warning.list-group-item-action:hover {
    color: #664d03;
    background-color: #e6dbb9
  }

  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #664d03;
    border-color: #664d03
  }

  .list-group-item-danger {
    color: #842029;
    background-color: #f8d7da
  }

  .list-group-item-danger.list-group-item-action:focus, .list-group-item-danger.list-group-item-action:hover {
    color: #842029;
    background-color: #dfc2c4
  }

  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #842029;
    border-color: #842029
  }

  .list-group-item-light {
    color: #636464;
    background-color: #fefefe
  }

  .list-group-item-light.list-group-item-action:focus, .list-group-item-light.list-group-item-action:hover {
    color: #636464;
    background-color: #e5e5e5
  }

  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #636464;
    border-color: #636464
  }

  .list-group-item-dark {
    color: #141619;
    background-color: #d3d3d4
  }

  .list-group-item-dark.list-group-item-action:focus, .list-group-item-dark.list-group-item-action:hover {
    color: #141619;
    background-color: #bebebf
  }

  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #141619;
    border-color: #141619
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: .25em .25em;
    color: #000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: .25rem;
    opacity: .5
  }

  .btn-close:hover {
    color: #000;
    text-decoration: none;
    opacity: .75
  }

  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);
    opacity: 1
  }

  .btn-close.disabled, .btn-close:disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    opacity: .25
  }

  .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%)
  }

  .toast {
    width: 350px;
    max-width: 100%;
    font-size: .875rem;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, .85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
    border-radius: .25rem
  }

  .toast.showing {
    opacity: 0
  }

  .toast:not(.show) {
    display: none
  }

  .toast-container {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    pointer-events: none
  }

  .toast-container > :not(:last-child) {
    margin-bottom: .75rem
  }

  .toast-header {
    display: flex;
    align-items: center;
    padding: .5rem .75rem;
    color: #6c757d;
    background-color: rgba(255, 255, 255, .85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px)
  }

  .toast-header .btn-close {
    margin-right: -.375rem;
    margin-left: .75rem
  }

  .toast-body {
    padding: .75rem;
    word-wrap: break-word
  }


  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .875rem;
    word-wrap: break-word;
    opacity: 0
  }

  .tooltip.show {
    opacity: .9
  }

  .tooltip .tooltip-arrow {
    position: absolute;
    display: block;
    width: .8rem;
    height: .4rem
  }

  .tooltip .tooltip-arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid
  }

  .bs-tooltip-auto[data-popper-placement^=top], .bs-tooltip-top {
    padding: .4rem 0
  }

  .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow, .bs-tooltip-top .tooltip-arrow {
    bottom: 0
  }

  .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before, .bs-tooltip-top .tooltip-arrow::before {
    top: -1px;
    border-width: .4rem .4rem 0;
    border-top-color: #000
  }

  .bs-tooltip-auto[data-popper-placement^=right], .bs-tooltip-end {
    padding: 0 .4rem
  }

  .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow, .bs-tooltip-end .tooltip-arrow {
    left: 0;
    width: .4rem;
    height: .8rem
  }

  .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before, .bs-tooltip-end .tooltip-arrow::before {
    right: -1px;
    border-width: .4rem .4rem .4rem 0;
    border-right-color: #000
  }

  .bs-tooltip-auto[data-popper-placement^=bottom], .bs-tooltip-bottom {
    padding: .4rem 0
  }

  .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow, .bs-tooltip-bottom .tooltip-arrow {
    top: 0
  }

  .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before, .bs-tooltip-bottom .tooltip-arrow::before {
    bottom: -1px;
    border-width: 0 .4rem .4rem;
    border-bottom-color: #000
  }

  .bs-tooltip-auto[data-popper-placement^=left], .bs-tooltip-start {
    padding: 0 .4rem
  }

  .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow, .bs-tooltip-start .tooltip-arrow {
    right: 0;
    width: .4rem;
    height: .8rem
  }

  .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before, .bs-tooltip-start .tooltip-arrow::before {
    left: -1px;
    border-width: .4rem 0 .4rem .4rem;
    border-left-color: #000
  }

  .tooltip-inner {
    max-width: 200px;
    padding: .25rem .5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: .25rem
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1070;
    display: block;
    max-width: 276px;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem
  }

  .popover .popover-arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: .5rem
  }

  .popover .popover-arrow::after, .popover .popover-arrow::before {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid
  }

  .bs-popover-auto[data-popper-placement^=top] > .popover-arrow, .bs-popover-top > .popover-arrow {
    bottom: calc(-.5rem - 1px)
  }

  .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::before {
    bottom: 0;
    border-width: .5rem .5rem 0;
    border-top-color: rgba(0, 0, 0, .25)
  }

  .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after, .bs-popover-top > .popover-arrow::after {
    bottom: 1px;
    border-width: .5rem .5rem 0;
    border-top-color: #fff
  }

  .bs-popover-auto[data-popper-placement^=right] > .popover-arrow, .bs-popover-end > .popover-arrow {
    left: calc(-.5rem - 1px);
    width: .5rem;
    height: 1rem
  }

  .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::before {
    left: 0;
    border-width: .5rem .5rem .5rem 0;
    border-right-color: rgba(0, 0, 0, .25)
  }

  .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after, .bs-popover-end > .popover-arrow::after {
    left: 1px;
    border-width: .5rem .5rem .5rem 0;
    border-right-color: #fff
  }

  .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow, .bs-popover-bottom > .popover-arrow {
    top: calc(-.5rem - 1px)
  }

  .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::before {
    top: 0;
    border-width: 0 .5rem .5rem .5rem;
    border-bottom-color: rgba(0, 0, 0, .25)
  }

  .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after, .bs-popover-bottom > .popover-arrow::after {
    top: 1px;
    border-width: 0 .5rem .5rem .5rem;
    border-bottom-color: #fff
  }

  .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before, .bs-popover-bottom .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -.5rem;
    content: "";
    border-bottom: 1px solid #f0f0f0
  }

  .bs-popover-auto[data-popper-placement^=left] > .popover-arrow, .bs-popover-start > .popover-arrow {
    right: calc(-.5rem - 1px);
    width: .5rem;
    height: 1rem
  }

  .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::before {
    right: 0;
    border-width: .5rem 0 .5rem .5rem;
    border-left-color: rgba(0, 0, 0, .25)
  }

  .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after, .bs-popover-start > .popover-arrow::after {
    right: 1px;
    border-width: .5rem 0 .5rem .5rem;
    border-left-color: #fff
  }

  .popover-header {
    padding: .5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f0f0f0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px)
  }

  .popover-header:empty {
    display: none
  }

  .popover-body {
    padding: 1rem 1rem;
    color: #212529
  }

  .carousel {
    position: relative
  }

  .carousel.pointer-event {
    touch-action: pan-y
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden
  }

  .carousel-inner::after {
    display: block;
    clear: both;
    content: ""
  }

  .carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: transform .6s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-item {
      transition: none
    }
  }

  .carousel-item-next, .carousel-item-prev, .carousel-item.active {
    display: block
  }

  .active.carousel-item-end, .carousel-item-next:not(.carousel-item-start) {
    transform: translateX(100%)
  }

  .active.carousel-item-start, .carousel-item-prev:not(.carousel-item-end) {
    transform: translateX(-100%)
  }

  .carousel-fade .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none
  }

  .carousel-fade .carousel-item-next.carousel-item-start, .carousel-fade .carousel-item-prev.carousel-item-end, .carousel-fade .carousel-item.active {
    z-index: 1;
    opacity: 1
  }

  .carousel-fade .active.carousel-item-end, .carousel-fade .active.carousel-item-start {
    z-index: 0;
    opacity: 0;
    transition: opacity 0s .6s
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-fade .active.carousel-item-end, .carousel-fade .active.carousel-item-start {
      transition: none
    }
  }

  .carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: 0 0;
    border: 0;
    opacity: .5;
    transition: opacity .15s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-control-next, .carousel-control-prev {
      transition: none
    }
  }

  .carousel-control-next:focus, .carousel-control-next:hover, .carousel-control-prev:focus, .carousel-control-prev:hover {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9
  }

  .carousel-control-prev {
    left: 0
  }

  .carousel-control-next {
    right: 0
  }

  .carousel-control-next-icon, .carousel-control-prev-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none
  }

  .carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-indicators [data-bs-target] {
      transition: none
    }
  }

  .carousel-indicators .active {
    opacity: 1
  }

  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 1.25rem;
    left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center
  }

  .carousel-dark .carousel-control-next-icon, .carousel-dark .carousel-control-prev-icon {
    filter: invert(1) grayscale(100)
  }

  .carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #000
  }

  .carousel-dark .carousel-caption {
    color: #000
  }

  @-webkit-keyframes spinner-border {
    to {
      transform: rotate(360deg)
    }
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg)
    }
  }

  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -.125em;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: .75s linear infinite spinner-border;
    animation: .75s linear infinite spinner-border
  }

  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: .2em
  }

  @-webkit-keyframes spinner-grow {
    0% {
      transform: scale(0)
    }
    50% {
      opacity: 1;
      transform: none
    }
  }

  @keyframes spinner-grow {
    0% {
      transform: scale(0)
    }
    50% {
      opacity: 1;
      transform: none
    }
  }

  .spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -.125em;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: .75s linear infinite spinner-grow;
    animation: .75s linear infinite spinner-grow
  }

  .spinner-grow-sm {
    width: 1rem;
    height: 1rem
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner-border, .spinner-grow {
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s
    }
  }

  .offcanvas {
    position: fixed;
    bottom: 0;
    z-index: 1045;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    visibility: hidden;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
    transition: transform .3s ease-in-out
  }

  @media (prefers-reduced-motion: reduce) {
    .offcanvas {
      transition: none
    }
  }

  .offcanvas-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000
  }

  .offcanvas-backdrop.fade {
    opacity: 0
  }

  .offcanvas-backdrop.show {
    opacity: .5
  }

  .offcanvas-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem
  }

  .offcanvas-header .btn-close {
    padding: .5rem .5rem;
    margin-top: -.5rem;
    margin-right: -.5rem;
    margin-bottom: -.5rem
  }

  .offcanvas-title {
    margin-bottom: 0;
    line-height: 1.5
  }

  .offcanvas-body {
    flex-grow: 1;
    padding: 1rem 1rem;
    overflow-y: auto
  }

  .offcanvas-start {
    top: 0;
    left: 0;
    width: 400px;
    border-right: 1px solid rgba(0, 0, 0, .2);
    transform: translateX(-100%)
  }

  .offcanvas-end {
    top: 0;
    right: 0;
    width: 400px;
    border-left: 1px solid rgba(0, 0, 0, .2);
    transform: translateX(100%)
  }

  .offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    transform: translateY(-100%)
  }

  .offcanvas-bottom {
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-top: 1px solid rgba(0, 0, 0, .2);
    transform: translateY(100%)
  }

  .offcanvas.show {
    transform: none
  }

  .placeholder {
    display: inline-block;
    min-height: 1em;
    vertical-align: middle;
    cursor: wait;
    background-color: currentColor;
    opacity: .5
  }

  .placeholder.btn::before {
    display: inline-block;
    content: ""
  }

  .placeholder-xs {
    min-height: .6em
  }

  .placeholder-sm {
    min-height: .8em
  }

  .placeholder-lg {
    min-height: 1.2em
  }

  .placeholder-glow .placeholder {
    -webkit-animation: placeholder-glow 2s ease-in-out infinite;
    animation: placeholder-glow 2s ease-in-out infinite
  }

  @-webkit-keyframes placeholder-glow {
    50% {
      opacity: .2
    }
  }

  @keyframes placeholder-glow {
    50% {
      opacity: .2
    }
  }

  .placeholder-wave {
    -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
    -webkit-animation: placeholder-wave 2s linear infinite;
    animation: placeholder-wave 2s linear infinite
  }

  @-webkit-keyframes placeholder-wave {
    100% {
      -webkit-mask-position: -200% 0%;
      mask-position: -200% 0%
    }
  }

  @keyframes placeholder-wave {
    100% {
      -webkit-mask-position: -200% 0%;
      mask-position: -200% 0%
    }
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: ""
  }

  .link-primary {
    color: #0d6efd
  }

  .link-primary:focus, .link-primary:hover {
    color: #0a58ca
  }

  .link-secondary {
    color: #6c757d
  }

  .link-secondary:focus, .link-secondary:hover {
    color: #565e64
  }

  .link-success {
    color: #198754
  }

  .link-success:focus, .link-success:hover {
    color: #146c43
  }

  .link-info {
    color: #0dcaf0
  }

  .link-info:focus, .link-info:hover {
    color: #3dd5f3
  }

  .link-warning {
    color: #ffc107
  }

  .link-warning:focus, .link-warning:hover {
    color: #ffcd39
  }

  .link-danger {
    color: #dc3545
  }

  .link-danger:focus, .link-danger:hover {
    color: #b02a37
  }

  .link-light {
    color: #f8f9fa
  }

  .link-light:focus, .link-light:hover {
    color: #f9fafb
  }

  .link-dark {
    color: #212529
  }

  .link-dark:focus, .link-dark:hover {
    color: #1a1e21
  }

  .ratio {
    position: relative;
    width: 100%
  }

  .ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: ""
  }

  .ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
  }

  .ratio-1x1 {
    --bs-aspect-ratio: 100%
  }

  .ratio-4x3 {
    --bs-aspect-ratio: 75%
  }

  .ratio-16x9 {
    --bs-aspect-ratio: 56.25%
  }

  .ratio-21x9 {
    --bs-aspect-ratio: 42.8571428571%
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030
  }

  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020
  }

  @media (min-width: 576px) {
    .sticky-sm-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020
    }
  }

  @media (min-width: 768px) {
    .sticky-md-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020
    }
  }

  @media (min-width: 992px) {
    .sticky-lg-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020
    }
  }

  @media (min-width: 1200px) {
    .sticky-xl-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020
    }
  }

  @media (min-width: 1400px) {
    .sticky-xxl-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020
    }
  }

  .hstack {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch
  }

  .vstack {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: stretch
  }

  .visually-hidden, .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important
  }

  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: ""
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .vr {
    display: inline-block;
    align-self: stretch;
    width: 1px;
    min-height: 1em;
    background-color: currentColor;
    opacity: .25
  }

  .align-baseline {
    vertical-align: baseline !important
  }

  .align-top {
    vertical-align: top !important
  }

  .align-middle {
    vertical-align: middle !important
  }

  .align-bottom {
    vertical-align: bottom !important
  }

  .align-text-bottom {
    vertical-align: text-bottom !important
  }

  .align-text-top {
    vertical-align: text-top !important
  }

  .float-start {
    float: left !important
  }

  .float-end {
    float: right !important
  }

  .float-none {
    float: none !important
  }

  .opacity-0 {
    opacity: 0 !important
  }

  .opacity-25 {
    opacity: .25 !important
  }

  .opacity-50 {
    opacity: .5 !important
  }

  .opacity-75 {
    opacity: .75 !important
  }

  .opacity-100 {
    opacity: 1 !important
  }

  .overflow-auto {
    overflow: auto !important
  }

  .overflow-hidden {
    overflow: hidden !important
  }

  .overflow-visible {
    overflow: visible !important
  }

  .overflow-scroll {
    overflow: scroll !important
  }

  .d-inline {
    display: inline !important
  }

  .d-inline-block {
    display: inline-block !important
  }

  .d-block {
    display: block !important
  }

  .d-grid {
    display: grid !important
  }

  .d-table {
    display: table !important
  }

  .d-table-row {
    display: table-row !important
  }

  .d-table-cell {
    display: table-cell !important
  }

  .d-flex {
    display: flex !important
  }

  .d-inline-flex {
    display: inline-flex !important
  }

  .d-none {
    display: none !important
  }

  .shadow {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important
  }

  .shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important
  }

  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important
  }

  .shadow-none {
    box-shadow: none !important
  }

  .position-static {
    position: static !important
  }

  .position-relative {
    position: relative !important
  }

  .position-absolute {
    position: absolute !important
  }

  .position-fixed {
    position: fixed !important
  }

  .position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important
  }

  .top-0 {
    top: 0 !important
  }

  .top-50 {
    top: 50% !important
  }

  .top-100 {
    top: 100% !important
  }

  .bottom-0 {
    bottom: 0 !important
  }

  .bottom-50 {
    bottom: 50% !important
  }

  .bottom-100 {
    bottom: 100% !important
  }

  .start-0 {
    left: 0 !important
  }

  .start-50 {
    left: 50% !important
  }

  .start-100 {
    left: 100% !important
  }

  .end-0 {
    right: 0 !important
  }

  .end-50 {
    right: 50% !important
  }

  .end-100 {
    right: 100% !important
  }

  .translate-middle {
    transform: translate(-50%, -50%) !important
  }

  .translate-middle-x {
    transform: translateX(-50%) !important
  }

  .translate-middle-y {
    transform: translateY(-50%) !important
  }

  .border {
    border: 1px solid #dee2e6 !important
  }

  .border-0 {
    border: 0 !important
  }

  .border-top {
    border-top: 1px solid #dee2e6 !important
  }

  .border-top-0 {
    border-top: 0 !important
  }

  .border-end {
    border-right: 1px solid #dee2e6 !important
  }

  .border-end-0 {
    border-right: 0 !important
  }

  .border-bottom {
    border-bottom: 1px solid #dee2e6 !important
  }

  .border-bottom-0 {
    border-bottom: 0 !important
  }

  .border-start {
    border-left: 1px solid #dee2e6 !important
  }

  .border-start-0 {
    border-left: 0 !important
  }

  .border-primary {
    border-color: #0d6efd !important
  }

  .border-secondary {
    border-color: #6c757d !important
  }

  .border-success {
    border-color: #198754 !important
  }

  .border-info {
    border-color: #0dcaf0 !important
  }

  .border-warning {
    border-color: #ffc107 !important
  }

  .border-danger {
    border-color: #dc3545 !important
  }

  .border-light {
    border-color: #f8f9fa !important
  }

  .border-dark {
    border-color: #212529 !important
  }

  .border-white {
    border-color: #fff !important
  }

  .border-1 {
    border-width: 1px !important
  }

  .border-2 {
    border-width: 2px !important
  }

  .border-3 {
    border-width: 3px !important
  }

  .border-4 {
    border-width: 4px !important
  }

  .border-5 {
    border-width: 5px !important
  }

  .w-25 {
    width: 25% !important
  }

  .w-50 {
    width: 50% !important
  }

  .w-75 {
    width: 75% !important
  }

  .w-100 {
    width: 100% !important
  }

  .w-auto {
    width: auto !important
  }

  .mw-100 {
    max-width: 100% !important
  }

  .vw-100 {
    width: 100vw !important
  }

  .min-vw-100 {
    min-width: 100vw !important
  }

  .h-25 {
    height: 25% !important
  }

  .h-50 {
    height: 50% !important
  }

  .h-75 {
    height: 75% !important
  }

  .h-100 {
    height: 100% !important
  }

  .h-auto {
    height: auto !important
  }

  .mh-100 {
    max-height: 100% !important
  }

  .vh-100 {
    height: 100vh !important
  }

  .min-vh-100 {
    min-height: 100vh !important
  }

  .flex-fill {
    flex: 1 1 auto !important
  }

  .flex-row {
    flex-direction: row !important
  }

  .flex-column {
    flex-direction: column !important
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important
  }

  .flex-grow-0 {
    flex-grow: 0 !important
  }

  .flex-grow-1 {
    flex-grow: 1 !important
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important
  }

  .flex-wrap {
    flex-wrap: wrap !important
  }

  .flex-nowrap {
    flex-wrap: nowrap !important
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important
  }

  .gap-0 {
    gap: 0 !important
  }

  .gap-1 {
    gap: .25rem !important
  }

  .gap-2 {
    gap: .5rem !important
  }

  .gap-3 {
    gap: 1rem !important
  }

  .gap-4 {
    gap: 1.5rem !important
  }

  .gap-5 {
    gap: 3rem !important
  }

  .justify-content-start {
    justify-content: flex-start !important
  }

  .justify-content-end {
    justify-content: flex-end !important
  }

  .justify-content-center {
    justify-content: center !important
  }

  .justify-content-between {
    justify-content: space-between !important
  }

  .justify-content-around {
    justify-content: space-around !important
  }

  .justify-content-evenly {
    justify-content: space-evenly !important
  }

  .align-items-start {
    align-items: flex-start !important
  }

  .align-items-end {
    align-items: flex-end !important
  }

  .align-items-center {
    align-items: center !important
  }

  .align-items-baseline {
    align-items: baseline !important
  }

  .align-items-stretch {
    align-items: stretch !important
  }

  .align-content-start {
    align-content: flex-start !important
  }

  .align-content-end {
    align-content: flex-end !important
  }

  .align-content-center {
    align-content: center !important
  }

  .align-content-between {
    align-content: space-between !important
  }

  .align-content-around {
    align-content: space-around !important
  }

  .align-content-stretch {
    align-content: stretch !important
  }

  .align-self-auto {
    align-self: auto !important
  }

  .align-self-start {
    align-self: flex-start !important
  }

  .align-self-end {
    align-self: flex-end !important
  }

  .align-self-center {
    align-self: center !important
  }

  .align-self-baseline {
    align-self: baseline !important
  }

  .align-self-stretch {
    align-self: stretch !important
  }

  .order-first {
    order: -1 !important
  }

  .order-0 {
    order: 0 !important
  }

  .order-1 {
    order: 1 !important
  }

  .order-2 {
    order: 2 !important
  }

  .order-3 {
    order: 3 !important
  }

  .order-4 {
    order: 4 !important
  }

  .order-5 {
    order: 5 !important
  }

  .order-last {
    order: 6 !important
  }

  .m-0 {
    margin: 0 !important
  }

  .m-1 {
    margin: .25rem !important
  }

  .m-2 {
    margin: .5rem !important
  }

  .m-3 {
    margin: 1rem !important
  }

  .m-4 {
    margin: 1.5rem !important
  }

  .m-5 {
    margin: 3rem !important
  }

  .m-auto {
    margin: auto !important
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important
  }

  .mx-1 {
    margin-right: .25rem !important;
    margin-left: .25rem !important
  }

  .mx-2 {
    margin-right: .5rem !important;
    margin-left: .5rem !important
  }

  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important
  }

  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important
  }

  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important
  }

  .my-1 {
    margin-top: .25rem !important;
    margin-bottom: .25rem !important
  }

  .my-2 {
    margin-top: .5rem !important;
    margin-bottom: .5rem !important
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important
  }

  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important
  }

  .mt-0 {
    margin-top: 0 !important
  }

  .mt-1 {
    margin-top: .25rem !important
  }

  .mt-2 {
    margin-top: .5rem !important
  }

  .mt-3 {
    margin-top: 1rem !important
  }

  .mt-4 {
    margin-top: 1.5rem !important
  }

  .mt-5 {
    margin-top: 3rem !important
  }

  .mt-auto {
    margin-top: auto !important
  }

  .me-0 {
    margin-right: 0 !important
  }

  .me-1 {
    margin-right: .25rem !important
  }

  .me-2 {
    margin-right: .5rem !important
  }

  .me-3 {
    margin-right: 1rem !important
  }

  .me-4 {
    margin-right: 1.5rem !important
  }

  .me-5 {
    margin-right: 3rem !important
  }

  .me-auto {
    margin-right: auto !important
  }

  .mb-0 {
    margin-bottom: 0 !important
  }

  .mb-1 {
    margin-bottom: .25rem !important
  }

  .mb-2 {
    margin-bottom: .5rem !important
  }

  .mb-3 {
    margin-bottom: 1rem !important
  }

  .mb-4 {
    margin-bottom: 1.5rem !important
  }

  .mb-5 {
    margin-bottom: 3rem !important
  }

  .mb-auto {
    margin-bottom: auto !important
  }

  .ms-0 {
    margin-left: 0 !important
  }

  .ms-1 {
    margin-left: .25rem !important
  }

  .ms-2 {
    margin-left: .5rem !important
  }

  .ms-3 {
    margin-left: 1rem !important
  }

  .ms-4 {
    margin-left: 1.5rem !important
  }

  .ms-5 {
    margin-left: 3rem !important
  }

  .ms-auto {
    margin-left: auto !important
  }

  .p-0 {
    padding: 0 !important
  }

  .p-1 {
    padding: .25rem !important
  }

  .p-2 {
    padding: .5rem !important
  }

  .p-3 {
    padding: 1rem !important
  }

  .p-4 {
    padding: 1.5rem !important
  }

  .p-5 {
    padding: 3rem !important
  }

  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important
  }

  .px-1 {
    padding-right: .25rem !important;
    padding-left: .25rem !important
  }

  .px-2 {
    padding-right: .5rem !important;
    padding-left: .5rem !important
  }

  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important
  }

  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important
  }

  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important
  }

  .py-1 {
    padding-top: .25rem !important;
    padding-bottom: .25rem !important
  }

  .py-2 {
    padding-top: .5rem !important;
    padding-bottom: .5rem !important
  }

  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important
  }

  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important
  }

  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important
  }

  .pt-0 {
    padding-top: 0 !important
  }

  .pt-1 {
    padding-top: .25rem !important
  }

  .pt-2 {
    padding-top: .5rem !important
  }

  .pt-3 {
    padding-top: 1rem !important
  }

  .pt-4 {
    padding-top: 1.5rem !important
  }

  .pt-5 {
    padding-top: 3rem !important
  }

  .pe-0 {
    padding-right: 0 !important
  }

  .pe-1 {
    padding-right: .25rem !important
  }

  .pe-2 {
    padding-right: .5rem !important
  }

  .pe-3 {
    padding-right: 1rem !important
  }

  .pe-4 {
    padding-right: 1.5rem !important
  }

  .pe-5 {
    padding-right: 3rem !important
  }

  .pb-0 {
    padding-bottom: 0 !important
  }

  .pb-1 {
    padding-bottom: .25rem !important
  }

  .pb-2 {
    padding-bottom: .5rem !important
  }

  .pb-3 {
    padding-bottom: 1rem !important
  }

  .pb-4 {
    padding-bottom: 1.5rem !important
  }

  .pb-5 {
    padding-bottom: 3rem !important
  }

  .ps-0 {
    padding-left: 0 !important
  }

  .ps-1 {
    padding-left: .25rem !important
  }

  .ps-2 {
    padding-left: .5rem !important
  }

  .ps-3 {
    padding-left: 1rem !important
  }

  .ps-4 {
    padding-left: 1.5rem !important
  }

  .ps-5 {
    padding-left: 3rem !important
  }

  .font-monospace {
    font-family: var(--bs-font-monospace) !important
  }

  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important
  }

  .fs-2 {
    font-size: calc(1.325rem + .9vw) !important
  }

  .fs-3 {
    font-size: calc(1.3rem + .6vw) !important
  }

  .fs-4 {
    font-size: calc(1.275rem + .3vw) !important
  }

  .fs-5 {
    font-size: 1.25rem !important
  }

  .fs-6 {
    font-size: 1rem !important
  }

  .fst-italic {
    font-style: italic !important
  }

  .fst-normal {
    font-style: normal !important
  }

  .fw-light {
    font-weight: 300 !important
  }

  .fw-lighter {
    font-weight: lighter !important
  }

  .fw-normal {
    font-weight: 400 !important
  }

  .fw-bold {
    font-weight: 700 !important
  }

  .fw-bolder {
    font-weight: bolder !important
  }

  .lh-1 {
    line-height: 1 !important
  }

  .lh-sm {
    line-height: 1.25 !important
  }

  .lh-base {
    line-height: 1.5 !important
  }

  .lh-lg {
    line-height: 2 !important
  }

  .text-start {
    text-align: left !important
  }

  .text-end {
    text-align: right !important
  }

  .text-center {
    text-align: center !important
  }

  .text-decoration-none {
    text-decoration: none !important
  }

  .text-decoration-underline {
    text-decoration: underline !important
  }

  .text-decoration-line-through {
    text-decoration: line-through !important
  }

  .text-lowercase {
    text-transform: lowercase !important
  }

  .text-uppercase {
    text-transform: uppercase !important
  }

  .text-capitalize {
    text-transform: capitalize !important
  }

  .text-wrap {
    white-space: normal !important
  }

  .text-nowrap {
    white-space: nowrap !important
  }

  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important
  }

  .text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important
  }

  .text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important
  }

  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important
  }

  .text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important
  }

  .text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important
  }

  .text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important
  }

  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important
  }

  .text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important
  }

  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important
  }

  .text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important
  }

  .text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important
  }

  .text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, .5) !important
  }

  .text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, .5) !important
  }

  .text-reset {
    --bs-text-opacity: 1;
    color: inherit !important
  }

  .text-opacity-25 {
    --bs-text-opacity: 0.25
  }

  .text-opacity-50 {
    --bs-text-opacity: 0.5
  }

  .text-opacity-75 {
    --bs-text-opacity: 0.75
  }

  .text-opacity-100 {
    --bs-text-opacity: 1
  }

  .bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important
  }

  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important
  }

  .bg-opacity-10 {
    --bs-bg-opacity: 0.1
  }

  .bg-opacity-25 {
    --bs-bg-opacity: 0.25
  }

  .bg-opacity-50 {
    --bs-bg-opacity: 0.5
  }

  .bg-opacity-75 {
    --bs-bg-opacity: 0.75
  }

  .bg-opacity-100 {
    --bs-bg-opacity: 1
  }

  .bg-gradient {
    background-image: var(--bs-gradient) !important
  }

  .user-select-all {
    -webkit-user-select: all !important;
    -moz-user-select: all !important;
    user-select: all !important
  }

  .user-select-auto {
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    user-select: auto !important
  }

  .user-select-none {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    user-select: none !important
  }

  .pe-none {
    pointer-events: none !important
  }

  .pe-auto {
    pointer-events: auto !important
  }

  .rounded {
    border-radius: .25rem !important
  }

  .rounded-0 {
    border-radius: 0 !important
  }

  .rounded-1 {
    border-radius: .2rem !important
  }

  .rounded-2 {
    border-radius: .25rem !important
  }

  .rounded-3 {
    border-radius: .3rem !important
  }

  .rounded-circle {
    border-radius: 50% !important
  }

  .rounded-pill {
    border-radius: 50rem !important
  }

  .rounded-top {
    border-top-left-radius: .25rem !important;
    border-top-right-radius: .25rem !important
  }

  .rounded-end {
    border-top-right-radius: .25rem !important;
    border-bottom-right-radius: .25rem !important
  }

  .rounded-bottom {
    border-bottom-right-radius: .25rem !important;
    border-bottom-left-radius: .25rem !important
  }

  .rounded-start {
    border-bottom-left-radius: .25rem !important;
    border-top-left-radius: .25rem !important
  }

  .visible {
    visibility: visible !important
  }

  .invisible {
    visibility: hidden !important
  }

  @media (min-width: 576px) {
    .float-sm-start {
      float: left !important
    }

    .float-sm-end {
      float: right !important
    }

    .float-sm-none {
      float: none !important
    }

    .d-sm-inline {
      display: inline !important
    }

    .d-sm-inline-block {
      display: inline-block !important
    }

    .d-sm-block {
      display: block !important
    }

    .d-sm-grid {
      display: grid !important
    }

    .d-sm-table {
      display: table !important
    }

    .d-sm-table-row {
      display: table-row !important
    }

    .d-sm-table-cell {
      display: table-cell !important
    }

    .d-sm-flex {
      display: flex !important
    }

    .d-sm-inline-flex {
      display: inline-flex !important
    }

    .d-sm-none {
      display: none !important
    }

    .flex-sm-fill {
      flex: 1 1 auto !important
    }

    .flex-sm-row {
      flex-direction: row !important
    }

    .flex-sm-column {
      flex-direction: column !important
    }

    .flex-sm-row-reverse {
      flex-direction: row-reverse !important
    }

    .flex-sm-column-reverse {
      flex-direction: column-reverse !important
    }

    .flex-sm-grow-0 {
      flex-grow: 0 !important
    }

    .flex-sm-grow-1 {
      flex-grow: 1 !important
    }

    .flex-sm-shrink-0 {
      flex-shrink: 0 !important
    }

    .flex-sm-shrink-1 {
      flex-shrink: 1 !important
    }

    .flex-sm-wrap {
      flex-wrap: wrap !important
    }

    .flex-sm-nowrap {
      flex-wrap: nowrap !important
    }

    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important
    }

    .gap-sm-0 {
      gap: 0 !important
    }

    .gap-sm-1 {
      gap: .25rem !important
    }

    .gap-sm-2 {
      gap: .5rem !important
    }

    .gap-sm-3 {
      gap: 1rem !important
    }

    .gap-sm-4 {
      gap: 1.5rem !important
    }

    .gap-sm-5 {
      gap: 3rem !important
    }

    .justify-content-sm-start {
      justify-content: flex-start !important
    }

    .justify-content-sm-end {
      justify-content: flex-end !important
    }

    .justify-content-sm-center {
      justify-content: center !important
    }

    .justify-content-sm-between {
      justify-content: space-between !important
    }

    .justify-content-sm-around {
      justify-content: space-around !important
    }

    .justify-content-sm-evenly {
      justify-content: space-evenly !important
    }

    .align-items-sm-start {
      align-items: flex-start !important
    }

    .align-items-sm-end {
      align-items: flex-end !important
    }

    .align-items-sm-center {
      align-items: center !important
    }

    .align-items-sm-baseline {
      align-items: baseline !important
    }

    .align-items-sm-stretch {
      align-items: stretch !important
    }

    .align-content-sm-start {
      align-content: flex-start !important
    }

    .align-content-sm-end {
      align-content: flex-end !important
    }

    .align-content-sm-center {
      align-content: center !important
    }

    .align-content-sm-between {
      align-content: space-between !important
    }

    .align-content-sm-around {
      align-content: space-around !important
    }

    .align-content-sm-stretch {
      align-content: stretch !important
    }

    .align-self-sm-auto {
      align-self: auto !important
    }

    .align-self-sm-start {
      align-self: flex-start !important
    }

    .align-self-sm-end {
      align-self: flex-end !important
    }

    .align-self-sm-center {
      align-self: center !important
    }

    .align-self-sm-baseline {
      align-self: baseline !important
    }

    .align-self-sm-stretch {
      align-self: stretch !important
    }

    .order-sm-first {
      order: -1 !important
    }

    .order-sm-0 {
      order: 0 !important
    }

    .order-sm-1 {
      order: 1 !important
    }

    .order-sm-2 {
      order: 2 !important
    }

    .order-sm-3 {
      order: 3 !important
    }

    .order-sm-4 {
      order: 4 !important
    }

    .order-sm-5 {
      order: 5 !important
    }

    .order-sm-last {
      order: 6 !important
    }

    .m-sm-0 {
      margin: 0 !important
    }

    .m-sm-1 {
      margin: .25rem !important
    }

    .m-sm-2 {
      margin: .5rem !important
    }

    .m-sm-3 {
      margin: 1rem !important
    }

    .m-sm-4 {
      margin: 1.5rem !important
    }

    .m-sm-5 {
      margin: 3rem !important
    }

    .m-sm-auto {
      margin: auto !important
    }

    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important
    }

    .mx-sm-1 {
      margin-right: .25rem !important;
      margin-left: .25rem !important
    }

    .mx-sm-2 {
      margin-right: .5rem !important;
      margin-left: .5rem !important
    }

    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important
    }

    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important
    }

    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important
    }

    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important
    }

    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important
    }

    .my-sm-1 {
      margin-top: .25rem !important;
      margin-bottom: .25rem !important
    }

    .my-sm-2 {
      margin-top: .5rem !important;
      margin-bottom: .5rem !important
    }

    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important
    }

    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important
    }

    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important
    }

    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important
    }

    .mt-sm-0 {
      margin-top: 0 !important
    }

    .mt-sm-1 {
      margin-top: .25rem !important
    }

    .mt-sm-2 {
      margin-top: .5rem !important
    }

    .mt-sm-3 {
      margin-top: 1rem !important
    }

    .mt-sm-4 {
      margin-top: 1.5rem !important
    }

    .mt-sm-5 {
      margin-top: 3rem !important
    }

    .mt-sm-auto {
      margin-top: auto !important
    }

    .me-sm-0 {
      margin-right: 0 !important
    }

    .me-sm-1 {
      margin-right: .25rem !important
    }

    .me-sm-2 {
      margin-right: .5rem !important
    }

    .me-sm-3 {
      margin-right: 1rem !important
    }

    .me-sm-4 {
      margin-right: 1.5rem !important
    }

    .me-sm-5 {
      margin-right: 3rem !important
    }

    .me-sm-auto {
      margin-right: auto !important
    }

    .mb-sm-0 {
      margin-bottom: 0 !important
    }

    .mb-sm-1 {
      margin-bottom: .25rem !important
    }

    .mb-sm-2 {
      margin-bottom: .5rem !important
    }

    .mb-sm-3 {
      margin-bottom: 1rem !important
    }

    .mb-sm-4 {
      margin-bottom: 1.5rem !important
    }

    .mb-sm-5 {
      margin-bottom: 3rem !important
    }

    .mb-sm-auto {
      margin-bottom: auto !important
    }

    .ms-sm-0 {
      margin-left: 0 !important
    }

    .ms-sm-1 {
      margin-left: .25rem !important
    }

    .ms-sm-2 {
      margin-left: .5rem !important
    }

    .ms-sm-3 {
      margin-left: 1rem !important
    }

    .ms-sm-4 {
      margin-left: 1.5rem !important
    }

    .ms-sm-5 {
      margin-left: 3rem !important
    }

    .ms-sm-auto {
      margin-left: auto !important
    }

    .p-sm-0 {
      padding: 0 !important
    }

    .p-sm-1 {
      padding: .25rem !important
    }

    .p-sm-2 {
      padding: .5rem !important
    }

    .p-sm-3 {
      padding: 1rem !important
    }

    .p-sm-4 {
      padding: 1.5rem !important
    }

    .p-sm-5 {
      padding: 3rem !important
    }

    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important
    }

    .px-sm-1 {
      padding-right: .25rem !important;
      padding-left: .25rem !important
    }

    .px-sm-2 {
      padding-right: .5rem !important;
      padding-left: .5rem !important
    }

    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important
    }

    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important
    }

    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important
    }

    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important
    }

    .py-sm-1 {
      padding-top: .25rem !important;
      padding-bottom: .25rem !important
    }

    .py-sm-2 {
      padding-top: .5rem !important;
      padding-bottom: .5rem !important
    }

    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important
    }

    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important
    }

    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important
    }

    .pt-sm-0 {
      padding-top: 0 !important
    }

    .pt-sm-1 {
      padding-top: .25rem !important
    }

    .pt-sm-2 {
      padding-top: .5rem !important
    }

    .pt-sm-3 {
      padding-top: 1rem !important
    }

    .pt-sm-4 {
      padding-top: 1.5rem !important
    }

    .pt-sm-5 {
      padding-top: 3rem !important
    }

    .pe-sm-0 {
      padding-right: 0 !important
    }

    .pe-sm-1 {
      padding-right: .25rem !important
    }

    .pe-sm-2 {
      padding-right: .5rem !important
    }

    .pe-sm-3 {
      padding-right: 1rem !important
    }

    .pe-sm-4 {
      padding-right: 1.5rem !important
    }

    .pe-sm-5 {
      padding-right: 3rem !important
    }

    .pb-sm-0 {
      padding-bottom: 0 !important
    }

    .pb-sm-1 {
      padding-bottom: .25rem !important
    }

    .pb-sm-2 {
      padding-bottom: .5rem !important
    }

    .pb-sm-3 {
      padding-bottom: 1rem !important
    }

    .pb-sm-4 {
      padding-bottom: 1.5rem !important
    }

    .pb-sm-5 {
      padding-bottom: 3rem !important
    }

    .ps-sm-0 {
      padding-left: 0 !important
    }

    .ps-sm-1 {
      padding-left: .25rem !important
    }

    .ps-sm-2 {
      padding-left: .5rem !important
    }

    .ps-sm-3 {
      padding-left: 1rem !important
    }

    .ps-sm-4 {
      padding-left: 1.5rem !important
    }

    .ps-sm-5 {
      padding-left: 3rem !important
    }

    .text-sm-start {
      text-align: left !important
    }

    .text-sm-end {
      text-align: right !important
    }

    .text-sm-center {
      text-align: center !important
    }
  }

  @media (min-width: 768px) {
    .float-md-start {
      float: left !important
    }

    .float-md-end {
      float: right !important
    }

    .float-md-none {
      float: none !important
    }

    .d-md-inline {
      display: inline !important
    }

    .d-md-inline-block {
      display: inline-block !important
    }

    .d-md-block {
      display: block !important
    }

    .d-md-grid {
      display: grid !important
    }

    .d-md-table {
      display: table !important
    }

    .d-md-table-row {
      display: table-row !important
    }

    .d-md-table-cell {
      display: table-cell !important
    }

    .d-md-flex {
      display: flex !important
    }

    .d-md-inline-flex {
      display: inline-flex !important
    }

    .d-md-none {
      display: none !important
    }

    .flex-md-fill {
      flex: 1 1 auto !important
    }

    .flex-md-row {
      flex-direction: row !important
    }

    .flex-md-column {
      flex-direction: column !important
    }

    .flex-md-row-reverse {
      flex-direction: row-reverse !important
    }

    .flex-md-column-reverse {
      flex-direction: column-reverse !important
    }

    .flex-md-grow-0 {
      flex-grow: 0 !important
    }

    .flex-md-grow-1 {
      flex-grow: 1 !important
    }

    .flex-md-shrink-0 {
      flex-shrink: 0 !important
    }

    .flex-md-shrink-1 {
      flex-shrink: 1 !important
    }

    .flex-md-wrap {
      flex-wrap: wrap !important
    }

    .flex-md-nowrap {
      flex-wrap: nowrap !important
    }

    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important
    }

    .gap-md-0 {
      gap: 0 !important
    }

    .gap-md-1 {
      gap: .25rem !important
    }

    .gap-md-2 {
      gap: .5rem !important
    }

    .gap-md-3 {
      gap: 1rem !important
    }

    .gap-md-4 {
      gap: 1.5rem !important
    }

    .gap-md-5 {
      gap: 3rem !important
    }

    .justify-content-md-start {
      justify-content: flex-start !important
    }

    .justify-content-md-end {
      justify-content: flex-end !important
    }

    .justify-content-md-center {
      justify-content: center !important
    }

    .justify-content-md-between {
      justify-content: space-between !important
    }

    .justify-content-md-around {
      justify-content: space-around !important
    }

    .justify-content-md-evenly {
      justify-content: space-evenly !important
    }

    .align-items-md-start {
      align-items: flex-start !important
    }

    .align-items-md-end {
      align-items: flex-end !important
    }

    .align-items-md-center {
      align-items: center !important
    }

    .align-items-md-baseline {
      align-items: baseline !important
    }

    .align-items-md-stretch {
      align-items: stretch !important
    }

    .align-content-md-start {
      align-content: flex-start !important
    }

    .align-content-md-end {
      align-content: flex-end !important
    }

    .align-content-md-center {
      align-content: center !important
    }

    .align-content-md-between {
      align-content: space-between !important
    }

    .align-content-md-around {
      align-content: space-around !important
    }

    .align-content-md-stretch {
      align-content: stretch !important
    }

    .align-self-md-auto {
      align-self: auto !important
    }

    .align-self-md-start {
      align-self: flex-start !important
    }

    .align-self-md-end {
      align-self: flex-end !important
    }

    .align-self-md-center {
      align-self: center !important
    }

    .align-self-md-baseline {
      align-self: baseline !important
    }

    .align-self-md-stretch {
      align-self: stretch !important
    }

    .order-md-first {
      order: -1 !important
    }

    .order-md-0 {
      order: 0 !important
    }

    .order-md-1 {
      order: 1 !important
    }

    .order-md-2 {
      order: 2 !important
    }

    .order-md-3 {
      order: 3 !important
    }

    .order-md-4 {
      order: 4 !important
    }

    .order-md-5 {
      order: 5 !important
    }

    .order-md-last {
      order: 6 !important
    }

    .m-md-0 {
      margin: 0 !important
    }

    .m-md-1 {
      margin: .25rem !important
    }

    .m-md-2 {
      margin: .5rem !important
    }

    .m-md-3 {
      margin: 1rem !important
    }

    .m-md-4 {
      margin: 1.5rem !important
    }

    .m-md-5 {
      margin: 3rem !important
    }

    .m-md-auto {
      margin: auto !important
    }

    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important
    }

    .mx-md-1 {
      margin-right: .25rem !important;
      margin-left: .25rem !important
    }

    .mx-md-2 {
      margin-right: .5rem !important;
      margin-left: .5rem !important
    }

    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important
    }

    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important
    }

    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important
    }

    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important
    }

    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important
    }

    .my-md-1 {
      margin-top: .25rem !important;
      margin-bottom: .25rem !important
    }

    .my-md-2 {
      margin-top: .5rem !important;
      margin-bottom: .5rem !important
    }

    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important
    }

    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important
    }

    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important
    }

    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important
    }

    .mt-md-0 {
      margin-top: 0 !important
    }

    .mt-md-1 {
      margin-top: .25rem !important
    }

    .mt-md-2 {
      margin-top: .5rem !important
    }

    .mt-md-3 {
      margin-top: 1rem !important
    }

    .mt-md-4 {
      margin-top: 1.5rem !important
    }

    .mt-md-5 {
      margin-top: 3rem !important
    }

    .mt-md-auto {
      margin-top: auto !important
    }

    .me-md-0 {
      margin-right: 0 !important
    }

    .me-md-1 {
      margin-right: .25rem !important
    }

    .me-md-2 {
      margin-right: .5rem !important
    }

    .me-md-3 {
      margin-right: 1rem !important
    }

    .me-md-4 {
      margin-right: 1.5rem !important
    }

    .me-md-5 {
      margin-right: 3rem !important
    }

    .me-md-auto {
      margin-right: auto !important
    }

    .mb-md-0 {
      margin-bottom: 0 !important
    }

    .mb-md-1 {
      margin-bottom: .25rem !important
    }

    .mb-md-2 {
      margin-bottom: .5rem !important
    }

    .mb-md-3 {
      margin-bottom: 1rem !important
    }

    .mb-md-4 {
      margin-bottom: 1.5rem !important
    }

    .mb-md-5 {
      margin-bottom: 3rem !important
    }

    .mb-md-auto {
      margin-bottom: auto !important
    }

    .ms-md-0 {
      margin-left: 0 !important
    }

    .ms-md-1 {
      margin-left: .25rem !important
    }

    .ms-md-2 {
      margin-left: .5rem !important
    }

    .ms-md-3 {
      margin-left: 1rem !important
    }

    .ms-md-4 {
      margin-left: 1.5rem !important
    }

    .ms-md-5 {
      margin-left: 3rem !important
    }

    .ms-md-auto {
      margin-left: auto !important
    }

    .p-md-0 {
      padding: 0 !important
    }

    .p-md-1 {
      padding: .25rem !important
    }

    .p-md-2 {
      padding: .5rem !important
    }

    .p-md-3 {
      padding: 1rem !important
    }

    .p-md-4 {
      padding: 1.5rem !important
    }

    .p-md-5 {
      padding: 3rem !important
    }

    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important
    }

    .px-md-1 {
      padding-right: .25rem !important;
      padding-left: .25rem !important
    }

    .px-md-2 {
      padding-right: .5rem !important;
      padding-left: .5rem !important
    }

    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important
    }

    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important
    }

    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important
    }

    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important
    }

    .py-md-1 {
      padding-top: .25rem !important;
      padding-bottom: .25rem !important
    }

    .py-md-2 {
      padding-top: .5rem !important;
      padding-bottom: .5rem !important
    }

    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important
    }

    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important
    }

    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important
    }

    .pt-md-0 {
      padding-top: 0 !important
    }

    .pt-md-1 {
      padding-top: .25rem !important
    }

    .pt-md-2 {
      padding-top: .5rem !important
    }

    .pt-md-3 {
      padding-top: 1rem !important
    }

    .pt-md-4 {
      padding-top: 1.5rem !important
    }

    .pt-md-5 {
      padding-top: 3rem !important
    }

    .pe-md-0 {
      padding-right: 0 !important
    }

    .pe-md-1 {
      padding-right: .25rem !important
    }

    .pe-md-2 {
      padding-right: .5rem !important
    }

    .pe-md-3 {
      padding-right: 1rem !important
    }

    .pe-md-4 {
      padding-right: 1.5rem !important
    }

    .pe-md-5 {
      padding-right: 3rem !important
    }

    .pb-md-0 {
      padding-bottom: 0 !important
    }

    .pb-md-1 {
      padding-bottom: .25rem !important
    }

    .pb-md-2 {
      padding-bottom: .5rem !important
    }

    .pb-md-3 {
      padding-bottom: 1rem !important
    }

    .pb-md-4 {
      padding-bottom: 1.5rem !important
    }

    .pb-md-5 {
      padding-bottom: 3rem !important
    }

    .ps-md-0 {
      padding-left: 0 !important
    }

    .ps-md-1 {
      padding-left: .25rem !important
    }

    .ps-md-2 {
      padding-left: .5rem !important
    }

    .ps-md-3 {
      padding-left: 1rem !important
    }

    .ps-md-4 {
      padding-left: 1.5rem !important
    }

    .ps-md-5 {
      padding-left: 3rem !important
    }

    .text-md-start {
      text-align: left !important
    }

    .text-md-end {
      text-align: right !important
    }

    .text-md-center {
      text-align: center !important
    }
  }

  @media (min-width: 992px) {
    .float-lg-start {
      float: left !important
    }

    .float-lg-end {
      float: right !important
    }

    .float-lg-none {
      float: none !important
    }

    .d-lg-inline {
      display: inline !important
    }

    .d-lg-inline-block {
      display: inline-block !important
    }

    .d-lg-block {
      display: block !important
    }

    .d-lg-grid {
      display: grid !important
    }

    .d-lg-table {
      display: table !important
    }

    .d-lg-table-row {
      display: table-row !important
    }

    .d-lg-table-cell {
      display: table-cell !important
    }

    .d-lg-flex {
      display: flex !important
    }

    .d-lg-inline-flex {
      display: inline-flex !important
    }

    .d-lg-none {
      display: none !important
    }

    .flex-lg-fill {
      flex: 1 1 auto !important
    }

    .flex-lg-row {
      flex-direction: row !important
    }

    .flex-lg-column {
      flex-direction: column !important
    }

    .flex-lg-row-reverse {
      flex-direction: row-reverse !important
    }

    .flex-lg-column-reverse {
      flex-direction: column-reverse !important
    }

    .flex-lg-grow-0 {
      flex-grow: 0 !important
    }

    .flex-lg-grow-1 {
      flex-grow: 1 !important
    }

    .flex-lg-shrink-0 {
      flex-shrink: 0 !important
    }

    .flex-lg-shrink-1 {
      flex-shrink: 1 !important
    }

    .flex-lg-wrap {
      flex-wrap: wrap !important
    }

    .flex-lg-nowrap {
      flex-wrap: nowrap !important
    }

    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important
    }

    .gap-lg-0 {
      gap: 0 !important
    }

    .gap-lg-1 {
      gap: .25rem !important
    }

    .gap-lg-2 {
      gap: .5rem !important
    }

    .gap-lg-3 {
      gap: 1rem !important
    }

    .gap-lg-4 {
      gap: 1.5rem !important
    }

    .gap-lg-5 {
      gap: 3rem !important
    }

    .justify-content-lg-start {
      justify-content: flex-start !important
    }

    .justify-content-lg-end {
      justify-content: flex-end !important
    }

    .justify-content-lg-center {
      justify-content: center !important
    }

    .justify-content-lg-between {
      justify-content: space-between !important
    }

    .justify-content-lg-around {
      justify-content: space-around !important
    }

    .justify-content-lg-evenly {
      justify-content: space-evenly !important
    }

    .align-items-lg-start {
      align-items: flex-start !important
    }

    .align-items-lg-end {
      align-items: flex-end !important
    }

    .align-items-lg-center {
      align-items: center !important
    }

    .align-items-lg-baseline {
      align-items: baseline !important
    }

    .align-items-lg-stretch {
      align-items: stretch !important
    }

    .align-content-lg-start {
      align-content: flex-start !important
    }

    .align-content-lg-end {
      align-content: flex-end !important
    }

    .align-content-lg-center {
      align-content: center !important
    }

    .align-content-lg-between {
      align-content: space-between !important
    }

    .align-content-lg-around {
      align-content: space-around !important
    }

    .align-content-lg-stretch {
      align-content: stretch !important
    }

    .align-self-lg-auto {
      align-self: auto !important
    }

    .align-self-lg-start {
      align-self: flex-start !important
    }

    .align-self-lg-end {
      align-self: flex-end !important
    }

    .align-self-lg-center {
      align-self: center !important
    }

    .align-self-lg-baseline {
      align-self: baseline !important
    }

    .align-self-lg-stretch {
      align-self: stretch !important
    }

    .order-lg-first {
      order: -1 !important
    }

    .order-lg-0 {
      order: 0 !important
    }

    .order-lg-1 {
      order: 1 !important
    }

    .order-lg-2 {
      order: 2 !important
    }

    .order-lg-3 {
      order: 3 !important
    }

    .order-lg-4 {
      order: 4 !important
    }

    .order-lg-5 {
      order: 5 !important
    }

    .order-lg-last {
      order: 6 !important
    }

    .m-lg-0 {
      margin: 0 !important
    }

    .m-lg-1 {
      margin: .25rem !important
    }

    .m-lg-2 {
      margin: .5rem !important
    }

    .m-lg-3 {
      margin: 1rem !important
    }

    .m-lg-4 {
      margin: 1.5rem !important
    }

    .m-lg-5 {
      margin: 3rem !important
    }

    .m-lg-auto {
      margin: auto !important
    }

    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important
    }

    .mx-lg-1 {
      margin-right: .25rem !important;
      margin-left: .25rem !important
    }

    .mx-lg-2 {
      margin-right: .5rem !important;
      margin-left: .5rem !important
    }

    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important
    }

    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important
    }

    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important
    }

    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important
    }

    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important
    }

    .my-lg-1 {
      margin-top: .25rem !important;
      margin-bottom: .25rem !important
    }

    .my-lg-2 {
      margin-top: .5rem !important;
      margin-bottom: .5rem !important
    }

    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important
    }

    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important
    }

    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important
    }

    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important
    }

    .mt-lg-0 {
      margin-top: 0 !important
    }

    .mt-lg-1 {
      margin-top: .25rem !important
    }

    .mt-lg-2 {
      margin-top: .5rem !important
    }

    .mt-lg-3 {
      margin-top: 1rem !important
    }

    .mt-lg-4 {
      margin-top: 1.5rem !important
    }

    .mt-lg-5 {
      margin-top: 3rem !important
    }

    .mt-lg-auto {
      margin-top: auto !important
    }

    .me-lg-0 {
      margin-right: 0 !important
    }

    .me-lg-1 {
      margin-right: .25rem !important
    }

    .me-lg-2 {
      margin-right: .5rem !important
    }

    .me-lg-3 {
      margin-right: 1rem !important
    }

    .me-lg-4 {
      margin-right: 1.5rem !important
    }

    .me-lg-5 {
      margin-right: 3rem !important
    }

    .me-lg-auto {
      margin-right: auto !important
    }

    .mb-lg-0 {
      margin-bottom: 0 !important
    }

    .mb-lg-1 {
      margin-bottom: .25rem !important
    }

    .mb-lg-2 {
      margin-bottom: .5rem !important
    }

    .mb-lg-3 {
      margin-bottom: 1rem !important
    }

    .mb-lg-4 {
      margin-bottom: 1.5rem !important
    }

    .mb-lg-5 {
      margin-bottom: 3rem !important
    }

    .mb-lg-auto {
      margin-bottom: auto !important
    }

    .ms-lg-0 {
      margin-left: 0 !important
    }

    .ms-lg-1 {
      margin-left: .25rem !important
    }

    .ms-lg-2 {
      margin-left: .5rem !important
    }

    .ms-lg-3 {
      margin-left: 1rem !important
    }

    .ms-lg-4 {
      margin-left: 1.5rem !important
    }

    .ms-lg-5 {
      margin-left: 3rem !important
    }

    .ms-lg-auto {
      margin-left: auto !important
    }

    .p-lg-0 {
      padding: 0 !important
    }

    .p-lg-1 {
      padding: .25rem !important
    }

    .p-lg-2 {
      padding: .5rem !important
    }

    .p-lg-3 {
      padding: 1rem !important
    }

    .p-lg-4 {
      padding: 1.5rem !important
    }

    .p-lg-5 {
      padding: 3rem !important
    }

    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important
    }

    .px-lg-1 {
      padding-right: .25rem !important;
      padding-left: .25rem !important
    }

    .px-lg-2 {
      padding-right: .5rem !important;
      padding-left: .5rem !important
    }

    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important
    }

    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important
    }

    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important
    }

    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important
    }

    .py-lg-1 {
      padding-top: .25rem !important;
      padding-bottom: .25rem !important
    }

    .py-lg-2 {
      padding-top: .5rem !important;
      padding-bottom: .5rem !important
    }

    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important
    }

    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important
    }

    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important
    }

    .pt-lg-0 {
      padding-top: 0 !important
    }

    .pt-lg-1 {
      padding-top: .25rem !important
    }

    .pt-lg-2 {
      padding-top: .5rem !important
    }

    .pt-lg-3 {
      padding-top: 1rem !important
    }

    .pt-lg-4 {
      padding-top: 1.5rem !important
    }

    .pt-lg-5 {
      padding-top: 3rem !important
    }

    .pe-lg-0 {
      padding-right: 0 !important
    }

    .pe-lg-1 {
      padding-right: .25rem !important
    }

    .pe-lg-2 {
      padding-right: .5rem !important
    }

    .pe-lg-3 {
      padding-right: 1rem !important
    }

    .pe-lg-4 {
      padding-right: 1.5rem !important
    }

    .pe-lg-5 {
      padding-right: 3rem !important
    }

    .pb-lg-0 {
      padding-bottom: 0 !important
    }

    .pb-lg-1 {
      padding-bottom: .25rem !important
    }

    .pb-lg-2 {
      padding-bottom: .5rem !important
    }

    .pb-lg-3 {
      padding-bottom: 1rem !important
    }

    .pb-lg-4 {
      padding-bottom: 1.5rem !important
    }

    .pb-lg-5 {
      padding-bottom: 3rem !important
    }

    .ps-lg-0 {
      padding-left: 0 !important
    }

    .ps-lg-1 {
      padding-left: .25rem !important
    }

    .ps-lg-2 {
      padding-left: .5rem !important
    }

    .ps-lg-3 {
      padding-left: 1rem !important
    }

    .ps-lg-4 {
      padding-left: 1.5rem !important
    }

    .ps-lg-5 {
      padding-left: 3rem !important
    }

    .text-lg-start {
      text-align: left !important
    }

    .text-lg-end {
      text-align: right !important
    }

    .text-lg-center {
      text-align: center !important
    }
  }

  @media (min-width: 1200px) {
    .float-xl-start {
      float: left !important
    }

    .float-xl-end {
      float: right !important
    }

    .float-xl-none {
      float: none !important
    }

    .d-xl-inline {
      display: inline !important
    }

    .d-xl-inline-block {
      display: inline-block !important
    }

    .d-xl-block {
      display: block !important
    }

    .d-xl-grid {
      display: grid !important
    }

    .d-xl-table {
      display: table !important
    }

    .d-xl-table-row {
      display: table-row !important
    }

    .d-xl-table-cell {
      display: table-cell !important
    }

    .d-xl-flex {
      display: flex !important
    }

    .d-xl-inline-flex {
      display: inline-flex !important
    }

    .d-xl-none {
      display: none !important
    }

    .flex-xl-fill {
      flex: 1 1 auto !important
    }

    .flex-xl-row {
      flex-direction: row !important
    }

    .flex-xl-column {
      flex-direction: column !important
    }

    .flex-xl-row-reverse {
      flex-direction: row-reverse !important
    }

    .flex-xl-column-reverse {
      flex-direction: column-reverse !important
    }

    .flex-xl-grow-0 {
      flex-grow: 0 !important
    }

    .flex-xl-grow-1 {
      flex-grow: 1 !important
    }

    .flex-xl-shrink-0 {
      flex-shrink: 0 !important
    }

    .flex-xl-shrink-1 {
      flex-shrink: 1 !important
    }

    .flex-xl-wrap {
      flex-wrap: wrap !important
    }

    .flex-xl-nowrap {
      flex-wrap: nowrap !important
    }

    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important
    }

    .gap-xl-0 {
      gap: 0 !important
    }

    .gap-xl-1 {
      gap: .25rem !important
    }

    .gap-xl-2 {
      gap: .5rem !important
    }

    .gap-xl-3 {
      gap: 1rem !important
    }

    .gap-xl-4 {
      gap: 1.5rem !important
    }

    .gap-xl-5 {
      gap: 3rem !important
    }

    .justify-content-xl-start {
      justify-content: flex-start !important
    }

    .justify-content-xl-end {
      justify-content: flex-end !important
    }

    .justify-content-xl-center {
      justify-content: center !important
    }

    .justify-content-xl-between {
      justify-content: space-between !important
    }

    .justify-content-xl-around {
      justify-content: space-around !important
    }

    .justify-content-xl-evenly {
      justify-content: space-evenly !important
    }

    .align-items-xl-start {
      align-items: flex-start !important
    }

    .align-items-xl-end {
      align-items: flex-end !important
    }

    .align-items-xl-center {
      align-items: center !important
    }

    .align-items-xl-baseline {
      align-items: baseline !important
    }

    .align-items-xl-stretch {
      align-items: stretch !important
    }

    .align-content-xl-start {
      align-content: flex-start !important
    }

    .align-content-xl-end {
      align-content: flex-end !important
    }

    .align-content-xl-center {
      align-content: center !important
    }

    .align-content-xl-between {
      align-content: space-between !important
    }

    .align-content-xl-around {
      align-content: space-around !important
    }

    .align-content-xl-stretch {
      align-content: stretch !important
    }

    .align-self-xl-auto {
      align-self: auto !important
    }

    .align-self-xl-start {
      align-self: flex-start !important
    }

    .align-self-xl-end {
      align-self: flex-end !important
    }

    .align-self-xl-center {
      align-self: center !important
    }

    .align-self-xl-baseline {
      align-self: baseline !important
    }

    .align-self-xl-stretch {
      align-self: stretch !important
    }

    .order-xl-first {
      order: -1 !important
    }

    .order-xl-0 {
      order: 0 !important
    }

    .order-xl-1 {
      order: 1 !important
    }

    .order-xl-2 {
      order: 2 !important
    }

    .order-xl-3 {
      order: 3 !important
    }

    .order-xl-4 {
      order: 4 !important
    }

    .order-xl-5 {
      order: 5 !important
    }

    .order-xl-last {
      order: 6 !important
    }

    .m-xl-0 {
      margin: 0 !important
    }

    .m-xl-1 {
      margin: .25rem !important
    }

    .m-xl-2 {
      margin: .5rem !important
    }

    .m-xl-3 {
      margin: 1rem !important
    }

    .m-xl-4 {
      margin: 1.5rem !important
    }

    .m-xl-5 {
      margin: 3rem !important
    }

    .m-xl-auto {
      margin: auto !important
    }

    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important
    }

    .mx-xl-1 {
      margin-right: .25rem !important;
      margin-left: .25rem !important
    }

    .mx-xl-2 {
      margin-right: .5rem !important;
      margin-left: .5rem !important
    }

    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important
    }

    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important
    }

    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important
    }

    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important
    }

    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important
    }

    .my-xl-1 {
      margin-top: .25rem !important;
      margin-bottom: .25rem !important
    }

    .my-xl-2 {
      margin-top: .5rem !important;
      margin-bottom: .5rem !important
    }

    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important
    }

    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important
    }

    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important
    }

    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important
    }

    .mt-xl-0 {
      margin-top: 0 !important
    }

    .mt-xl-1 {
      margin-top: .25rem !important
    }

    .mt-xl-2 {
      margin-top: .5rem !important
    }

    .mt-xl-3 {
      margin-top: 1rem !important
    }

    .mt-xl-4 {
      margin-top: 1.5rem !important
    }

    .mt-xl-5 {
      margin-top: 3rem !important
    }

    .mt-xl-auto {
      margin-top: auto !important
    }

    .me-xl-0 {
      margin-right: 0 !important
    }

    .me-xl-1 {
      margin-right: .25rem !important
    }

    .me-xl-2 {
      margin-right: .5rem !important
    }

    .me-xl-3 {
      margin-right: 1rem !important
    }

    .me-xl-4 {
      margin-right: 1.5rem !important
    }

    .me-xl-5 {
      margin-right: 3rem !important
    }

    .me-xl-auto {
      margin-right: auto !important
    }

    .mb-xl-0 {
      margin-bottom: 0 !important
    }

    .mb-xl-1 {
      margin-bottom: .25rem !important
    }

    .mb-xl-2 {
      margin-bottom: .5rem !important
    }

    .mb-xl-3 {
      margin-bottom: 1rem !important
    }

    .mb-xl-4 {
      margin-bottom: 1.5rem !important
    }

    .mb-xl-5 {
      margin-bottom: 3rem !important
    }

    .mb-xl-auto {
      margin-bottom: auto !important
    }

    .ms-xl-0 {
      margin-left: 0 !important
    }

    .ms-xl-1 {
      margin-left: .25rem !important
    }

    .ms-xl-2 {
      margin-left: .5rem !important
    }

    .ms-xl-3 {
      margin-left: 1rem !important
    }

    .ms-xl-4 {
      margin-left: 1.5rem !important
    }

    .ms-xl-5 {
      margin-left: 3rem !important
    }

    .ms-xl-auto {
      margin-left: auto !important
    }

    .p-xl-0 {
      padding: 0 !important
    }

    .p-xl-1 {
      padding: .25rem !important
    }

    .p-xl-2 {
      padding: .5rem !important
    }

    .p-xl-3 {
      padding: 1rem !important
    }

    .p-xl-4 {
      padding: 1.5rem !important
    }

    .p-xl-5 {
      padding: 3rem !important
    }

    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important
    }

    .px-xl-1 {
      padding-right: .25rem !important;
      padding-left: .25rem !important
    }

    .px-xl-2 {
      padding-right: .5rem !important;
      padding-left: .5rem !important
    }

    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important
    }

    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important
    }

    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important
    }

    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important
    }

    .py-xl-1 {
      padding-top: .25rem !important;
      padding-bottom: .25rem !important
    }

    .py-xl-2 {
      padding-top: .5rem !important;
      padding-bottom: .5rem !important
    }

    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important
    }

    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important
    }

    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important
    }

    .pt-xl-0 {
      padding-top: 0 !important
    }

    .pt-xl-1 {
      padding-top: .25rem !important
    }

    .pt-xl-2 {
      padding-top: .5rem !important
    }

    .pt-xl-3 {
      padding-top: 1rem !important
    }

    .pt-xl-4 {
      padding-top: 1.5rem !important
    }

    .pt-xl-5 {
      padding-top: 3rem !important
    }

    .pe-xl-0 {
      padding-right: 0 !important
    }

    .pe-xl-1 {
      padding-right: .25rem !important
    }

    .pe-xl-2 {
      padding-right: .5rem !important
    }

    .pe-xl-3 {
      padding-right: 1rem !important
    }

    .pe-xl-4 {
      padding-right: 1.5rem !important
    }

    .pe-xl-5 {
      padding-right: 3rem !important
    }

    .pb-xl-0 {
      padding-bottom: 0 !important
    }

    .pb-xl-1 {
      padding-bottom: .25rem !important
    }

    .pb-xl-2 {
      padding-bottom: .5rem !important
    }

    .pb-xl-3 {
      padding-bottom: 1rem !important
    }

    .pb-xl-4 {
      padding-bottom: 1.5rem !important
    }

    .pb-xl-5 {
      padding-bottom: 3rem !important
    }

    .ps-xl-0 {
      padding-left: 0 !important
    }

    .ps-xl-1 {
      padding-left: .25rem !important
    }

    .ps-xl-2 {
      padding-left: .5rem !important
    }

    .ps-xl-3 {
      padding-left: 1rem !important
    }

    .ps-xl-4 {
      padding-left: 1.5rem !important
    }

    .ps-xl-5 {
      padding-left: 3rem !important
    }

    .text-xl-start {
      text-align: left !important
    }

    .text-xl-end {
      text-align: right !important
    }

    .text-xl-center {
      text-align: center !important
    }
  }

  @media (min-width: 1400px) {
    .float-xxl-start {
      float: left !important
    }

    .float-xxl-end {
      float: right !important
    }

    .float-xxl-none {
      float: none !important
    }

    .d-xxl-inline {
      display: inline !important
    }

    .d-xxl-inline-block {
      display: inline-block !important
    }

    .d-xxl-block {
      display: block !important
    }

    .d-xxl-grid {
      display: grid !important
    }

    .d-xxl-table {
      display: table !important
    }

    .d-xxl-table-row {
      display: table-row !important
    }

    .d-xxl-table-cell {
      display: table-cell !important
    }

    .d-xxl-flex {
      display: flex !important
    }

    .d-xxl-inline-flex {
      display: inline-flex !important
    }

    .d-xxl-none {
      display: none !important
    }

    .flex-xxl-fill {
      flex: 1 1 auto !important
    }

    .flex-xxl-row {
      flex-direction: row !important
    }

    .flex-xxl-column {
      flex-direction: column !important
    }

    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important
    }

    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important
    }

    .flex-xxl-grow-0 {
      flex-grow: 0 !important
    }

    .flex-xxl-grow-1 {
      flex-grow: 1 !important
    }

    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important
    }

    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important
    }

    .flex-xxl-wrap {
      flex-wrap: wrap !important
    }

    .flex-xxl-nowrap {
      flex-wrap: nowrap !important
    }

    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important
    }

    .gap-xxl-0 {
      gap: 0 !important
    }

    .gap-xxl-1 {
      gap: .25rem !important
    }

    .gap-xxl-2 {
      gap: .5rem !important
    }

    .gap-xxl-3 {
      gap: 1rem !important
    }

    .gap-xxl-4 {
      gap: 1.5rem !important
    }

    .gap-xxl-5 {
      gap: 3rem !important
    }

    .justify-content-xxl-start {
      justify-content: flex-start !important
    }

    .justify-content-xxl-end {
      justify-content: flex-end !important
    }

    .justify-content-xxl-center {
      justify-content: center !important
    }

    .justify-content-xxl-between {
      justify-content: space-between !important
    }

    .justify-content-xxl-around {
      justify-content: space-around !important
    }

    .justify-content-xxl-evenly {
      justify-content: space-evenly !important
    }

    .align-items-xxl-start {
      align-items: flex-start !important
    }

    .align-items-xxl-end {
      align-items: flex-end !important
    }

    .align-items-xxl-center {
      align-items: center !important
    }

    .align-items-xxl-baseline {
      align-items: baseline !important
    }

    .align-items-xxl-stretch {
      align-items: stretch !important
    }

    .align-content-xxl-start {
      align-content: flex-start !important
    }

    .align-content-xxl-end {
      align-content: flex-end !important
    }

    .align-content-xxl-center {
      align-content: center !important
    }

    .align-content-xxl-between {
      align-content: space-between !important
    }

    .align-content-xxl-around {
      align-content: space-around !important
    }

    .align-content-xxl-stretch {
      align-content: stretch !important
    }

    .align-self-xxl-auto {
      align-self: auto !important
    }

    .align-self-xxl-start {
      align-self: flex-start !important
    }

    .align-self-xxl-end {
      align-self: flex-end !important
    }

    .align-self-xxl-center {
      align-self: center !important
    }

    .align-self-xxl-baseline {
      align-self: baseline !important
    }

    .align-self-xxl-stretch {
      align-self: stretch !important
    }

    .order-xxl-first {
      order: -1 !important
    }

    .order-xxl-0 {
      order: 0 !important
    }

    .order-xxl-1 {
      order: 1 !important
    }

    .order-xxl-2 {
      order: 2 !important
    }

    .order-xxl-3 {
      order: 3 !important
    }

    .order-xxl-4 {
      order: 4 !important
    }

    .order-xxl-5 {
      order: 5 !important
    }

    .order-xxl-last {
      order: 6 !important
    }

    .m-xxl-0 {
      margin: 0 !important
    }

    .m-xxl-1 {
      margin: .25rem !important
    }

    .m-xxl-2 {
      margin: .5rem !important
    }

    .m-xxl-3 {
      margin: 1rem !important
    }

    .m-xxl-4 {
      margin: 1.5rem !important
    }

    .m-xxl-5 {
      margin: 3rem !important
    }

    .m-xxl-auto {
      margin: auto !important
    }

    .mx-xxl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important
    }

    .mx-xxl-1 {
      margin-right: .25rem !important;
      margin-left: .25rem !important
    }

    .mx-xxl-2 {
      margin-right: .5rem !important;
      margin-left: .5rem !important
    }

    .mx-xxl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important
    }

    .mx-xxl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important
    }

    .mx-xxl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important
    }

    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important
    }

    .my-xxl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important
    }

    .my-xxl-1 {
      margin-top: .25rem !important;
      margin-bottom: .25rem !important
    }

    .my-xxl-2 {
      margin-top: .5rem !important;
      margin-bottom: .5rem !important
    }

    .my-xxl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important
    }

    .my-xxl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important
    }

    .my-xxl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important
    }

    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important
    }

    .mt-xxl-0 {
      margin-top: 0 !important
    }

    .mt-xxl-1 {
      margin-top: .25rem !important
    }

    .mt-xxl-2 {
      margin-top: .5rem !important
    }

    .mt-xxl-3 {
      margin-top: 1rem !important
    }

    .mt-xxl-4 {
      margin-top: 1.5rem !important
    }

    .mt-xxl-5 {
      margin-top: 3rem !important
    }

    .mt-xxl-auto {
      margin-top: auto !important
    }

    .me-xxl-0 {
      margin-right: 0 !important
    }

    .me-xxl-1 {
      margin-right: .25rem !important
    }

    .me-xxl-2 {
      margin-right: .5rem !important
    }

    .me-xxl-3 {
      margin-right: 1rem !important
    }

    .me-xxl-4 {
      margin-right: 1.5rem !important
    }

    .me-xxl-5 {
      margin-right: 3rem !important
    }

    .me-xxl-auto {
      margin-right: auto !important
    }

    .mb-xxl-0 {
      margin-bottom: 0 !important
    }

    .mb-xxl-1 {
      margin-bottom: .25rem !important
    }

    .mb-xxl-2 {
      margin-bottom: .5rem !important
    }

    .mb-xxl-3 {
      margin-bottom: 1rem !important
    }

    .mb-xxl-4 {
      margin-bottom: 1.5rem !important
    }

    .mb-xxl-5 {
      margin-bottom: 3rem !important
    }

    .mb-xxl-auto {
      margin-bottom: auto !important
    }

    .ms-xxl-0 {
      margin-left: 0 !important
    }

    .ms-xxl-1 {
      margin-left: .25rem !important
    }

    .ms-xxl-2 {
      margin-left: .5rem !important
    }

    .ms-xxl-3 {
      margin-left: 1rem !important
    }

    .ms-xxl-4 {
      margin-left: 1.5rem !important
    }

    .ms-xxl-5 {
      margin-left: 3rem !important
    }

    .ms-xxl-auto {
      margin-left: auto !important
    }

    .p-xxl-0 {
      padding: 0 !important
    }

    .p-xxl-1 {
      padding: .25rem !important
    }

    .p-xxl-2 {
      padding: .5rem !important
    }

    .p-xxl-3 {
      padding: 1rem !important
    }

    .p-xxl-4 {
      padding: 1.5rem !important
    }

    .p-xxl-5 {
      padding: 3rem !important
    }

    .px-xxl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important
    }

    .px-xxl-1 {
      padding-right: .25rem !important;
      padding-left: .25rem !important
    }

    .px-xxl-2 {
      padding-right: .5rem !important;
      padding-left: .5rem !important
    }

    .px-xxl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important
    }

    .px-xxl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important
    }

    .px-xxl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important
    }

    .py-xxl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important
    }

    .py-xxl-1 {
      padding-top: .25rem !important;
      padding-bottom: .25rem !important
    }

    .py-xxl-2 {
      padding-top: .5rem !important;
      padding-bottom: .5rem !important
    }

    .py-xxl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important
    }

    .py-xxl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important
    }

    .py-xxl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important
    }

    .pt-xxl-0 {
      padding-top: 0 !important
    }

    .pt-xxl-1 {
      padding-top: .25rem !important
    }

    .pt-xxl-2 {
      padding-top: .5rem !important
    }

    .pt-xxl-3 {
      padding-top: 1rem !important
    }

    .pt-xxl-4 {
      padding-top: 1.5rem !important
    }

    .pt-xxl-5 {
      padding-top: 3rem !important
    }

    .pe-xxl-0 {
      padding-right: 0 !important
    }

    .pe-xxl-1 {
      padding-right: .25rem !important
    }

    .pe-xxl-2 {
      padding-right: .5rem !important
    }

    .pe-xxl-3 {
      padding-right: 1rem !important
    }

    .pe-xxl-4 {
      padding-right: 1.5rem !important
    }

    .pe-xxl-5 {
      padding-right: 3rem !important
    }

    .pb-xxl-0 {
      padding-bottom: 0 !important
    }

    .pb-xxl-1 {
      padding-bottom: .25rem !important
    }

    .pb-xxl-2 {
      padding-bottom: .5rem !important
    }

    .pb-xxl-3 {
      padding-bottom: 1rem !important
    }

    .pb-xxl-4 {
      padding-bottom: 1.5rem !important
    }

    .pb-xxl-5 {
      padding-bottom: 3rem !important
    }

    .ps-xxl-0 {
      padding-left: 0 !important
    }

    .ps-xxl-1 {
      padding-left: .25rem !important
    }

    .ps-xxl-2 {
      padding-left: .5rem !important
    }

    .ps-xxl-3 {
      padding-left: 1rem !important
    }

    .ps-xxl-4 {
      padding-left: 1.5rem !important
    }

    .ps-xxl-5 {
      padding-left: 3rem !important
    }

    .text-xxl-start {
      text-align: left !important
    }

    .text-xxl-end {
      text-align: right !important
    }

    .text-xxl-center {
      text-align: center !important
    }
  }

  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 2.5rem !important
    }

    .fs-2 {
      font-size: 2rem !important
    }

    .fs-3 {
      font-size: 1.75rem !important
    }

    .fs-4 {
      font-size: 1.5rem !important
    }
  }

  @media print {
    .d-print-inline {
      display: inline !important
    }

    .d-print-inline-block {
      display: inline-block !important
    }

    .d-print-block {
      display: block !important
    }

    .d-print-grid {
      display: grid !important
    }

    .d-print-table {
      display: table !important
    }

    .d-print-table-row {
      display: table-row !important
    }

    .d-print-table-cell {
      display: table-cell !important
    }

    .d-print-flex {
      display: flex !important
    }

    .d-print-inline-flex {
      display: inline-flex !important
    }

    .d-print-none {
      display: none !important
    }
  }
  .custom--table {
    width: 100%;
  }
</style>
