<template>
  <div class="HomePage">
    <Header></Header>
    <section class="section-space-b">
      <div class="container">
        <div class="section-head text-center">
          <h2 class="mb-3 mt-5">{{$t('help[2]')}}</h2>
          <p>{{$t('help[3]')}}</p>
        </div>
        <div class="list-box">
          <div class="list-item" v-for="(item,index) in listData" :key="index">
            <div class="label">{{item.title}}</div>
            <div class="value mt-2" v-html="item.content">
            </div>
          </div>
          <!--          <div class="list-item">-->
          <!--            <div class="label">{{$t('help[4]')}}</div>-->
          <!--            <div class="value mt-2">{{$t('help[5]')}}-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="list-item">-->
          <!--            <div class="label" v-html="$t('help[6]')"></div>-->
          <!--            <div class="value mt-2">-->
          <!--              {{$t('help[7]')}}-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="list-item">-->
          <!--            <div class="label" v-html="$t('help[8]')"></div>-->
          <!--            <div class="value mt-2" v-html="$t('help[9]')">-->
          <!--            </div>-->
          <!--          </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[10]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[11]')}}-->
          <!--        </div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[12]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[13]')}}</div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[14]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[15]')}}-->
          <!--        </div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[16]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[17]')}}-->
          <!--        </div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[18]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[19]')}}</div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[20]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[21]')}}-->
          <!--        </div>-->
          <!--      </div>-->
          <!--      <div  class="list-item">-->
          <!--        <div  class="label">{{$t('help[22]')}}</div>-->
          <!--        <div  class="value mt-2">{{$t('help[23]')}}-->
          <!--        </div>-->
          <!--      </div>-->
        </div>
      </div>
    </section>
    <section  class="section-space-b">
      <div  class="container">
        <div  class="section-head text-center">
          <h2 class="mb-3">{{$t('about[5]')}}</h2>
        </div>
        <div  class="row">
          <section  class="contact-section section-space-b">
            <div class="container">
              <div class="row section-space-b">
                <div class="col-lg-7">
                  <div class="contact-form-wrap">
                    <div class="section-head-sm">
                      <h2 class="mb-2">{{$t('about[6]')}}</h2>
                      <p>{{$t('about[7]')}}</p>
                    </div>
                    <div class="form">
                      <div class="row g-gs">
                        <div class="col-lg-6">
                          <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputName" :placeholder="$t('about[8]')">
                            <label for="floatingInputName">{{$t('about[8]')}}</label></div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                            <label for="floatingInputEmail">{{$t('about[9]')}}</label></div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-floating">
                            <textarea class="form-control" :placeholder="$t('about[10]')" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">{{$t('about[10]')}}</label></div>
                        </div>
                        <div class="col-lg-12">
                          <button class="btn btn-dark" disabled="">{{$t('about[11]')}}</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="contact-info ps-lg-4 ps-xl-5">
                    <div class="section-head-sm">
                      <h2 class="mb-2">{{$t('about[12]')}}</h2></div>
                    <ul class="contact-details">
                      <li class="d-flex align-items-center">
                        <em class="ni icon-btn icon-btn-s1 ni-mail"></em>
                        <div class="ms-4">
                          <strong class="d-block text-black">{{$t('about[13]')}}:</strong>
<!--                          <span>simpleminers3@gmail.com</span>-->
                        </div>
                      </li>
                      <li class="d-flex align-items-center">
                        <em class="ni icon-btn icon-btn-s1 ni-globe"></em>
                        <div class="ms-4">
                          <strong class="d-block text-black">{{$t('about[14]')}}:</strong>
                          <span>{{$t('about[15]')}}</span></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'about',
    components: {
    },
    data() {
      return {
        showInfo:{
          title: '',
          content:'',
        },
        showIndex:-1,
        listData: [],
        isLoad: false,
        isFinished: false,
        isRefresh: false,
        pageNo: 1,
        data_current_page:"1",
        data_total_page:"1",
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.getListData('init');
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getListData(type) {
        this.isLoad = true
        this.isRefresh = false
        if(type=='load'){
          this.pageNo += 1;
        }else{
          this.pageNo = 1;
          this.isFinished = false
        }
        this.$Model.noticeList({gropid: 9,page_no: this.pageNo,page_size:100},data=>{
          this.isLoad = false
          if(data.code==1){
            if(data.info.length<=0){
              this.listData =[];
              this.isFinished = true
            }else {
              this.data_current_page = data.data_current_page;
              this.data_total_page = data.data_total_page;
              if(type=='load'){
                this.listData = this.listData.concat(data.info);
              }else{
                this.listData = data.info;
              }
            }
            if(data.data_total_nums ==0 || this.pageNo == data.data_total_page){
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
    }
  }
</script>
<style scoped>
  .list-box {
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.14);
    border-radius: 8px
  }

  .list-box .list-item {
    padding: 1rem 1.8125rem
  }

  .list-box .list-item .label {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0,0,0,.9);
    line-height: 1.5rem
  }

  .list-box .list-item .value {
    font-size: .875rem;
    font-weight: 400;
    color: rgba(0,0,0,.9);
    line-height: 1.375rem
  }

</style>


