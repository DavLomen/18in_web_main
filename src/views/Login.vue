<template>
  <div class="HomePage">
    <Header></Header>
    <section  class="login-section section-space-b pt-4 pt-md-5 " style="background: url(./static/images/login.jpg) no-repeat #fff;background-size:cover;">
      <div  class="container">
        <div  class="row align-items-center justify-content-center">
          <div  class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
<!--            <img  :src="'./static/img/sign-up.91a6ff14.png'" alt="" class="img-fluid">-->
          </div>
          <div  class="col-lg-6">
            <div  class="section-head-sm">
              <h2 style="color: #fff"  class="mb-1" v-html="$t('home[0]',{WT:InitData.setting.web_title})"></h2>
              <p style="color: #fff">{{$t('regLogin[22]')}}</p></div>
            <form  action="#">
              <div>
                <div class="Input-title">
                  <span style="color: red;">*</span>
                  {{ $t('regLogin[24]') }}
                </div>
                <div  class="form-floating mb-4">
                  <input autocomplete="off" v-model.trim="postData.username" id="emailAddress" type="email" class="form-control" :placeholder="$t('regLogin[4]')">
                  <label for="emailAddress">{{$t('regLogin[4]')}}</label>
                  <div style="color: #ffffff" class="invalid-feedback">{{$t('regLogin[23]')}}</div>
                </div>
              </div>
              <div>
                <div class="Input-title">
                  <span style="color: red;">*</span>
                  {{ $t('regLogin[25]') }}
                </div>
                <div  class="form-floating mb-4">
                <input autocomplete="off" v-model.trim="postData.password" :type="passwords?'password':'text'"  class="form-control password" id="password" :placeholder="$t('regLogin[6]')">
                <label  for="password">{{$t('regLogin[5]')}}</label>
                <a  href="javascript:;" class="password-toggle" title="Toggle show/hide password" @click="passwords = !passwords">
                  <em v-if="passwords"  class="password-shown ni ni-eye-off"></em>
                  <em v-else class="password-hidden ni ni-eye"></em>
                </a>
                <div  class="invalid-feedback"></div>
              </div>
              </div>
              <div  class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div  class="form-check">
                  <input v-model="keepUser" class="form-check-input" type="checkbox" id="logMeIn">
                  <label  class="form-check-label form-check-label-s1" for="logMeIn">{{$t('login.text[0]')}}</label></div>
<!--                <a  href="javascript:;" class="btn-link form-forget-password">Forgot Password?</a>-->
              </div>
              <button  class="btn btn-dark w-100" type="button" @click="onSubmit">
                {{$t('regLogin[21]')}}</button>
              <p  class="mt-3 form-text" style="color: #fff">{{$t('login.i18n[0]')}}
                <a style="color: red" href="javascript:;" @click="$router.push('/register')" class="btn-link">{{$t('regLogin[11]')}}</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {

  },
  props: [],
  data() {
    return {
      passwords:true,
      postData: {
      	username: localStorage['UserName']||'',
      	password: localStorage['PassWord']||''
      },
      keepUser: localStorage['KeepUser']=='1'?true:false,
      isSubmit: false,
      showPass: false,
      docTitle: document.title,
      areaList: areaList,
      areaCode: areaList[0].id,
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.$Model.SmsCode((data) => {
      this.areaList = data
      this.areaCode = data[0].id
    })
  },
  mounted() {

  },
  activated() {

  },
  destroyed() {

  },
  methods: {
    onSubmit() {
    	if(!this.postData.username){
        this.$Dialog.Toast(this.$t('regLogin[2]'))
        return;
      }
      if(!this.postData.password){
        this.$Dialog.Toast(this.$t('login.placeholder[1]'));
        return;
      }
      this.isSubmit = true;
    	this.$Model.Login(this.postData,(data)=>{
        this.isSubmit = false;
        if(this.keepUser){
          localStorage['UserName'] = this.postData.username;
          localStorage['PassWord'] = this.postData.password;
        }else{
          localStorage.removeItem('UserName');
          localStorage.removeItem('PassWord');
        }
    	})
    },
    changeKeepUser() {
    	if(this.keepUser){
    		localStorage['KeepUser'] = 1;
    	}else{
    		localStorage.removeItem('KeepUser');
    	}
    }
  }
}
</script>
<style scoped>
  @media only screen and (max-width: 992px) {
    .login-section {
      background-size:cover !important;
    }
  }
  .Input-title{
    color: #fff;
  }
</style>
