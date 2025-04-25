<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="app-wrapper" style="width: calc(100% - 25rem);max-width: 100%;overflow: hidden">
      <div class="page-header">
        <div class="page-title"></div>
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
        <div class="container-fluid">
          <div class="user-title">Change Avatar</div>
          <div class="user-box">
            <div class="block_img">
              <img :src="InitData.setting.up_url +'/'+ url" class="user_photo" id="preview">
            </div>
            <div>
              <div class="centered" style="gap: 10px;">
                <button class="main-btnNew longbtn" type="button" @click="doUpdate">Submit</button>
                <van-uploader :preview-image="false" class="upload" v-model="fileList" :max-count="1" :multiple="false" :after-read="afterRead" >
                  <div class="main-btnNew aaa outlined longbtn" type="submit" style="margin: 0;width: 100%;">Upload New</div>
                </van-uploader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import UserHeader from '@/components/UserHeader';
  import QRCode from "qrcodejs2";
  export default {
    name: 'loginPassword',
    components: {
      UserHeader
    },
    data() {
      return {
        showUserDown:false,
        url:'',
        fileList: [],
        upiData: {
          pay_name: '',
          pay_mobile: '',
          pay_account: '',
          pay_email: ''
        },
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.url = this.UserInfo.header;
      this.$Model.GetUserInfo();
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      doUpdate() {
        this.$Model.SetUserInfo({header:this.url},data=>{
          if(data.code==1){
          }
        })
      },
      afterRead(file) {
        file.status = 'uploading'
        file.message = this.$t('upload[0]')
        this.uploadImgs(file)
      },
      compressImg(file) {
        let that = this;
        // this.$Util.CompressImg(file.file.type,file.content,750,(image)=>{
        let param = new FormData();
        param.append('token',localStorage['Token']);
        param.append('type',4);
        param.append('image',file.file,file.file.name);
        this.$Model.UploadImg(param,(data)=>{
          if(data.code==1){
            file.message = this.$t('upload[2]')
            file.status = 'success'
            file.url = data.url;
            that.url = data.url;
          }else{
            file.status = 'failed'
            file.message = this.$t('upload[3]')
          }
        });
        // })
      },
      uploadImgs(file){
        if(file.length){
          file.forEach(item=>{
            if (!item.file.type.match(/image/)){
              item.status = 'failed'
              item.message = this.$t('upload[1]')
              return;
            }
            this.compressImg(item)
          })
        }else{
          if (!file.file.type.match(/image/)){
            file.status = 'failed'
            file.message = this.$t('upload[1]')
            return;
          }
          this.compressImg(file)
        }
      },
    }
  }
</script>
<style scoped>
  .user-title {
    color: #662282;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .user-box {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 45px 40px 45px 40px;
  }

  .user-input {
    height: 64px;
    font-family: 'Roboto';
    font-size: 18px;
    padding-left: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .input-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 40px;
  }

  .user-block-input {
    font-size: 20px;
    height: 64px;
    cursor: pointer;
  }

  .user-text {
    max-width: 60%;
    padding-top: 20px;
    font-size: 18px;
  }

  .new-p {
    margin-bottom: 30px;
  }

  .longbtn {
    border: none;
    padding: 1rem 0;
    width: 50%;
    max-width: 20rem;
    min-width: 16rem;
  }

  .item-s {
    height: 60px;
    cursor: pointer;
  }

  .select .item-s img {

    width: 32px;
    height: 32px;
    border-radius: 10px;

  }

  .select .item-s p {
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.722%;
  }

  .network-setup {
    border-radius: 10px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: 10px center;
    transition: .2s ease;
  }


  .ref-desc {
    color: #FFF;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .ref-desc p {
    font-size: 20px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 0px;
  }

  .block-part {
    height: auto;
    padding: 24px 19px 24px 19px;
    width: 50%;
    border: 1px solid #EAE8E8;
    box-shadow: none;
  }

  .block-part p  {
    color: #662282;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 15px;
  }

  .block-part .flex-text h6 {
    color: #020202;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 15px;
  }
  .block_img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .block_img img {
    height: 100%;
    border-radius: 10px;
  }
  .centered {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .main-btnNew {
    display: inline-block;
    border-radius: 10px;
    background: linear-gradient(180deg, #B62283 0%, #722283 100%);
    text-align: center;
    color: #fff;
    font-family: 'Poppins';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .longbtn {
    border: none;
  }
  .outlined {
    border: 2px solid #662282 !important;
    background: none !important;
    color: #662282 !important;
    transition: .5s ease;
  }
  .aaa:hover {
    background: linear-gradient(180deg, #B62283 0%, #722283 100%) !important;
    color: #fff !important;
  }
</style>



