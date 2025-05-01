<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container  my-5">
      <div class="mt-3 text-center">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">JAMining</span></h6>
        <h2 class="text-lh pt-2">Contact Us</h2>
      </div>
      <div class="m-3 p-4 border rounded-4 border-0 bg-hs mt-5 light-border" style="--x: 14.200949367088608%;">
        <input class="w-100 border rounded-3 border-0 ps-3 my-3" style="line-height: 28px; height: 60px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="text" placeholder="Full Name" name="name" id="name" data-sharkid="__0" data-sharklabel="name">
        <input class="w-100 border rounded-3 border-0 ps-3 my-3" style="line-height: 28px; height: 60px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="email" placeholder="Email" name="email" id="email" data-sharkid="__1" data-sharklabel="email">
        <input class="w-100 border rounded-3 border-0 ps-3 my-3" style="line-height: 28px; height: 60px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="text" placeholder="Subject" name="theme" id="theme" data-sharkid="__2">

        <textarea class="w-100  border rounded-3 border-0 ps-3 my-3" style="line-height: 28px; height: 300px; font-size: 15px; color: rgb(163,163,163); background-color: rgb(51, 51, 51);" type="text" placeholder="Type Message Here" name="content" id="content" data-sharkid="__3"></textarea>

        <div class="text-center">
          <button id="submit" style="width: 200px; height: 60px;" class="btn staking-btn bg-zs rounded-3 text-light">Send Now</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: 'contact',
    components: {
    },
    data() {
      return {
        mname:'',
        memail:'',
        title:'',
        message:'',
        code:'',
        code_rand:'',
        codeImg:'',
      }
    },
    computed: {
    },
    watch: {
    },
    created() {
      this.getCode()
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      getCode() {
        this.code_rand = new Date().getTime()
        this.codeImg = this.ApiUrl+'/api/Account/code?code_rand='+this.code_rand
      },
      subimt() {
        let that = this;
        if (that.mname == '') {
          return;
        }
        if (that.memail == '') {
          return;
        }
        if (that.title == '') {
          return;
        }
        if (that.message == '') {
          return;
        }
        if (that.code == '') {
          return;
        }
        this.$Model.makeMessage({mname:that.mname,memail:that.memail,title:that.title,message:that.message,code:that.code,code_rand:that.code_rand}, function (data) {

        });
      }
    }
  }
</script>
<style scoped>
input:focus,textarea:focus {
  border: 1px solid #fff !important;
}
</style>

