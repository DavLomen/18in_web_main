<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container  my-5">
      <div class="mt-3 text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">Mobile APP</span></h6>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6">
          <h1 class="text-z-fs fw-bold mt-3">Let's start the mining journey!</h1>
          <p class="col-8 mt-3" style="font-size: 0.8rem;">JAMINING is dedicated to providing a reliable and secure top-tier mining experience for users worldwide.</p>
          <p class="col-8 mt-3" style="font-size: 0.8rem;">Join JAMINING and let your digital assets work for you while you enjoy mining rewards!</p>
          <!--<a href="/assets/index/app/fullsign.mobileconfig" class="col-8 mt-3" style="font-size: 0.8rem;">下载</a>-->
          <div class="row ">
            <div class="col-6 ">
              <a href="javascript:;" target="_blank">
                <img :src="'./static/images/img/android.png'" class="img-fluid rounded-3 mt-4" style="width:80%;" alt="">
              </a>
              <a href="javascript:;">
                <img :src="'./static/images/img/iphone.png'" class="img-fluid rounded-3 mt-4" style="width:80%;" alt="">
              </a>
            </div>
            <div class="col-6 ">
              <img :src="'./static/images/img/ab1.jpg'" class="img-fluid rounded-3 mt-4" style="width: 200px; height: 200px;" alt="">
            </div>
          </div>

        </div>
        <div class="col-lg-6 ">
          <img :src="'./static/images/img/jaapp.png'" class="rounded-3 mt-4 " alt="" style="width: 100% !important;">
          <!-- <img :src="'./static/images/img/app2.png'" class="rounded-3 mt-4 " style="margin-top: 100px;" alt=""></img> -->
        </div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>
<script>

  export default {
    name: 'appDown',
    components: {
    },
    data() {
      return {
        showIndex:-1
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      downloadApp (app) {
        if(app == 'ios')
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_ios)
        }
        else
        {
          this.$Util.OpenUrl(this.InitData.setting.app_down_android)
        }
      },
    }
  }
</script>
<style scoped>

</style>
