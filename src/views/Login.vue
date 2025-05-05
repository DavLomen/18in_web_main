<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container col-lg-6 col-11">
      <div class="border border-0 rounded-3 col-lg-6 mx-auto my-5 light-border" style="--x: 0.4%;">
        <img :src="'./static/images/img/login-1.png?t=2'" class="rounded-top" style="width: 100%;" alt="">
        <div class="separator-animated animated-true"></div>
        <div class="text-center p-4">
          <h3 class="mb-4">{{$t('logpage[0]')}}</h3>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-envelope"></i>
              <input v-model.trim="postData.username" type="email" class="form-control custom-input" id="username"
                     :placeholder="$t('login.placeholder[0]')" data-sharkid="__0" data-sharklabel="email">
            </div>
          </div>
          <div class="form-group mb-3">
            <div class="input-wrapper">
              <i class="bi bi-lock"></i>
              <input v-model.trim="postData.password" type="password" class="form-control custom-input" id="password" :placeholder="$t('logpage[2]')" data-sharkid="__1">
            </div>
          </div>
          <!-- <div class="text-end">
              <a href="#" class="fs-6 text-red" ><span class="text-primary">Forget Password?</span> Service</a>
          </div> -->
          <div class="text-end">
            <van-checkbox shape="square" v-model="keepUser" @change="changeKeepUser" checked-color="#5c9fe7"  icon-size="14">{{$t('login.text[0]')}}</van-checkbox>
          </div>
          <div class="text-center py-4">
            <button @click="onSubmit" class="login-btn" id="sm">
              <span>{{$t('logpage[3]')}}</span>
            </button>
          </div>
          <h6 class="text-bhs">{{$t('logpage[4]')}} <a href="javascript:;" @click="$router.push('/register')" class="fs-6">{{$t('logpage[5]')}}</a></h6>
        </div>
      </div>
    </div>
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
      this.postData.email = this.postData.username;
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
  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #7376aa;
    font-size: 1.1rem;
  }

  .custom-input {
    width: 100%;
    padding: 12px 15px 12px 45px;
    border: 1px solid rgba(139, 42, 184, 0.2);
    border-radius: 8px;
    background: #fff;
    color: #000;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .custom-input:focus {
    outline: none;
    border-color: #E535AB;
    box-shadow: 0 0 0 3px rgba(229, 53, 171, 0.1);
    background: #fff;
    color: #000;
  }

  .custom-input::placeholder {
    color: #7376aa;
  }

  .form-group {
    margin: 0 auto;
    max-width: 400px;
  }

  .login-btn {
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(90deg, #0d6efd 0%, #ebedf0 100%);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .login-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #0d6efd 0%, #ebedf0 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .login-btn:hover::before {
    opacity: 1;
  }

  .login-btn span {
    position: relative;
    z-index: 1;
  }

  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(53, 103, 229, 0.3);
  }

  .login-btn:active {
    transform: translateY(0);
  }
</style>
