<template>
	<div class="Body page-wrap" id="common-app">
<!--    <van-notice-bar-->
<!--      style="position: absolute;left: 0;width: 100%;z-index: 99;"-->
<!--      mode="closeable"-->
<!--      :scrollable="true"-->
<!--      v-if="$store.state.MessageInfo"-->
<!--      left-icon="volume-o"-->
<!--      :text="$t('messageInfo[0]')"-->
<!--      color="rgb(255, 193, 78)" background="rgb(0,0,0,0.7)"-->
<!--      @click="readMessage"-->
<!--    />-->
		<router-view v-if="isRouterAlive" />

    <div id="Service">
    </div>
    <nav class="navbar fixed-bottom py-0 d-lg-none" style="background-color: #0c0c0c;">
      <div class="container pt-1 justify-content-between px-4 py-1 pt-2 " id="foot" style="margin-top: 0px !important; background-color: #0c0c0c;">
        <a :class="'nav-link d-flex flex-column justify-content-center '+(footIndex=='/'?'active':'')" href="javascript:;" @click="$router.push('/')" style="padding: 0px !important;">
          <img v-if="footIndex=='/'" class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/home2.png'">
          <img v-else class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/home1.png'">
          <span  v-if="footIndex=='/'" class="navbar-text py-0 text-zs" style="font-size: 12px;">Home</span>
          <span v-else class="navbar-text py-0 text-light" style="font-size: 12px;">Home</span>
        </a>
        <a :class="'nav-link d-flex flex-column justify-content-center '+(footIndex=='/contracts'?'active':'')" href="javascript:;" @click="$router.push('/contracts')" style="padding: 0px !important;">
          <img  v-if="footIndex=='/contracts'" class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/plans2.png'">
          <img v-else class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/plans1.png'">
          <span v-if="footIndex=='/contracts'" class="navbar-text py-0 text-zs" style="font-size: 12px;">Contracts</span>
          <span v-else class="navbar-text py-0 text-light" style="font-size: 12px;">Contracts</span>
        </a>
        <a :class="'nav-link d-flex flex-column justify-content-center '+(footIndex=='/dashboard'?'active':'')" href="javascript:;" @click="$router.push('/dashboard')" style="padding: 0px !important;">
          <img v-if="footIndex=='/dashboard'" class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/dash2.png'">
          <img v-else class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/dash1.png'">
          <span v-if="footIndex=='/dashboard'"  class="navbar-text py-0 text-zs" style="font-size: 12px;">Dashboard</span>
          <span v-else class="navbar-text py-0 text-light" style="font-size: 12px;">Dashboard</span>
        </a>
        <a :class="'nav-link d-flex flex-column justify-content-center '+(footIndex=='/affiliates'?'active':'')" href="javascript:;" @click="$router.push('/affiliates')" style="padding: 0px !important;">
          <img v-if="footIndex=='/affiliates'" class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/aff2.png'">
          <img v-else class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/aff1.png'">
          <span v-if="footIndex=='/affiliates'" class="navbar-text py-0 text-zs" style="font-size: 12px;">Team</span>
          <span v-else class="navbar-text py-0 text-light" style="font-size: 12px;">Team</span>
        </a>
        <a :class="'nav-link d-flex flex-column justify-content-center '+(footIndex=='/FAQ'?'active':'')" href="javascript:;" @click="$router.push('/FAQ')" style="padding: 0px !important;">
          <img v-if="footIndex=='/FAQ'" class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/faq2.png'">
          <img v-else class="mx-auto d-block" style="width: 26px;" :src="'./static/images/img/faq1.png'">
          <span v-if="footIndex=='/FAQ'" class="navbar-text py-0 text-zs" style="font-size: 12px;">FAQs</span>
          <span v-else class="navbar-text py-0 text-light" style="font-size: 12px;">FAQs</span>
        </a>
      </div>
    </nav>
  </div>

</template>



<script>

	export default {

		name: 'App',

		provide() {

			return {

				reloadHtml: this.reloadHtml

			}

		},

		components: {



		},

		props: [],

		data() {

			return {

				percentNum: 0,
        serviceUrl: '',
        serviceList: [],
        isMobile: true,
				showEntrance: false,

				networkState: 1,

				isQuit: false,

				isView: true,

				isRouterAlive: true,

				isNotice: false,

				translateX: '0',

				translateY: '-150',

				isCancel: false,

				showService: true,

				showActivity: false,

        footIndex:0,

			}

		},

		computed: {



		},

		watch: {
			'$route'(to, from) {
        localStorage.setItem("pageIndex", to.path);
        localStorage.setItem("userIndex", to.path);
        this.footIndex = to.path;
			},
		},

		created() {
		  let _this = this;
        let is_self_change = localStorage['is_self_change'] || 0
        if(!is_self_change){
          _this.$Model.GetLanguage();
        }
      let model = this.$Model;
      setInterval(function() {
        model.HasNewMessage(data=>{
          localStorage.setItem("noReadNum",data.data);
        })
      }, 300000);
		},

		mounted() {


			document.addEventListener("plusready", () => {

				document.addEventListener("pause", () => {

					this.isView = false


				}, false);

				document.addEventListener("resume", () => {

					this.isView = true


				}, false);

				document.addEventListener("newintent", () => {

					var args = plus.runtime.arguments;

					if (args) {

						this.$router.push(args)

					}


				}, false);

				this.winH = document.body.clientHeight;

				plus.runtime.getProperty(plus.runtime.appid, wgtinfo => {

					localStorage["AppVersion"] = wgtinfo.version;

					checkUpdate(wgtinfo.version);

				});

				// document.addEventListener("netchange",() => {

				//   var nt = plus.networkinfo.getCurrentType();

				//   switch (nt) {

				//     case plus.networkinfo.CONNECTION_ETHERNET:

				//     case plus.networkinfo.CONNECTION_WIFI:

				//     case plus.networkinfo.CONNECTION_CELL2G:

				//     case plus.networkinfo.CONNECTION_CELL3G:

				//     case plus.networkinfo.CONNECTION_CELL4G:

				//       this.networkState = 1;

				//       break;

				//     case plus.networkinfo.CONNECTION_UNKNOW:

				//     case plus.networkinfo.CONNECTION_NONE:

				//       this.networkState = 0;

				//       break;

				//     default:

				//       this.networkState = 2;

				//       break;

				//   }

				// },false);

				if (plus.os.name == "iOS") {

					iosBack();

				}

				plus.key.addEventListener("backbutton", () => {

					appBack();

				});

			});

			var obj = document.getElementById('Service');

			var drag = false;

			var screenHeight = document.documentElement.clientHeight;

			var screenWidth = document.documentElement.clientWidth;

			var pageX = screenWidth;

			obj.addEventListener('touchstart', (ev) => {

				drag = true;

				if (obj.setCapture) {

					obj.setCapture();

				}

				$('#Service').removeClass('move')

			});

			obj.addEventListener('touchmove', (ev) => {

				$('#Service').removeClass('move')

				ev.preventDefault();

				ev = ev.touches ? ev.touches[0] : event;

				if (drag) {

					if (ev.pageY < obj.clientHeight / 2) {

						obj.style.bottom = screenHeight - obj.clientHeight + 'px';

					} else if (ev.pageY > screenHeight - 5 - obj.clientHeight / 2) {

						obj.style.bottom = '5px';

					} else {

						obj.style.bottom = screenHeight - ev.pageY - obj.clientHeight / 2 + 'px';

					}

					if (ev.pageX < obj.clientWidth / 2) {

						obj.style.right = screenWidth - obj.clientWidth + 'px';

					} else if (ev.pageX > screenWidth - obj.clientWidth / 2) {

						obj.style.right = '0px';

					} else {

						obj.style.right = screenWidth - ev.pageX - obj.clientWidth / 2 + 'px';

					}

					pageX = ev.pageX

				}

			});

			obj.addEventListener('touchend', (ev) => {

				drag = false;

				$('#Service').addClass('move')

				if (pageX > screenWidth / 2) {

					obj.style.right = 0;

				} else {

					obj.style.right = screenWidth - obj.clientWidth + 'px';

				}

			})


		},

		activated() {



		},

		destroyed() {



		},

		methods: {

			reloadHtml() {

				this.isRouterAlive = false

				this.$nextTick(function() {

					this.isRouterAlive = true

				})

			},

      readMessage(){
        this.$store.dispatch('UpdateMessageInfo', '');
        this.$router.push(`/message`)
      },
		}

	}

</script>

<style scoped>
  .footer-bar-wrap {
    width: 100%
  }

  #footer-bar {
    max-width: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 98;
    background-color: hsla(0,0%,97.6%,.98);
    box-shadow: 0 -5px 10px 0 rgba(0,0,0,.06);
    height: 60px;
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transition: all .3s ease;
    display: none
  }

  #footer-bar a {
    color: #1f1f1f;
    padding-top: 12px;
    position: relative;
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  #footer-bar a .icon-svg {
    color: #444
  }

  /*#footer-bar a.active {*/
  /*  color: #7952b3!important*/
  /*}*/

  /*#footer-bar a.active .icon-svg {*/
  /*  color: #7952b3*/
  /*}*/

  #footer-bar a.active .img-n {
    display: none
  }

  #footer-bar a.active .img-y {
    display: inline-block
  }

  #footer-bar a span {
    position: relative;
    z-index: 2;
    display: block;
    font-size: 10px;
    font-weight: 600;
    margin-top: -6px;
    opacity: .7;
    font-family: roboto, sans-serif !important;
    color: #d77600;
  }

  #footer-bar a svg {
    margin-top: -8px
  }

  #footer-bar a i {
    margin-top: -3px;
    font-size: 18px;
    position: relative;
    z-index: 2
  }

  #footer-bar .badge {
    font-style: normal;
    z-index: 5;
    top: 0;
    position: absolute;
    margin-left: 3px;
    color: #fff!important;
    width: 18px;
    text-align: center;
    line-height: 18px;
    padding: 0;
    padding-left: 0!important;
    border-radius: 18px;
    margin-top: 7px;
    font-size: 11px
  }

  .footer-bar-2 .active-nav {
    color: #fff!important
  }

  .footer-bar-2 .active-nav strong {
    position: absolute;
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0
  }

  .footer-bar-4 .active-nav {
    color: #fff!important
  }

  .footer-bar-4 .active-nav strong {
    position: absolute;
    width: 47px;
    height: 47px;
    border-radius: 60px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    bottom: 0
  }

  .footer-bar-4 span {
    display: none!important
  }

  .footer-bar-4 i {
    padding-top: 10px
  }

  .footer-bar-5 .active-nav strong {
    position: absolute;
    width: 50px;
    height: 4px;
    border-radius: 60px;
    left: 50%;
    bottom: 0.5rem;
    transform: translateX(-50%)
  }

  .footer-bar-3 span {
    display: none!important
  }

  .footer-bar-3 .active-nav {
    padding-top: 11px!important
  }

  .footer-bar-3 .active-nav span {
    display: block!important
  }

  .footer-bar-3 a {
    padding-top: 18px!important
  }

  .footer-menu-hidden {
    transition: all .1s ease;
    transform: translateY(100%)!important
  }

  .footer-bar-white  {
    color: #fff
  }

  #footer-bar.position-relative {
    z-index: 2!important
  }

  #footer-bar {
    height: 4rem;
  }

  .footer-bar-5.position-relative .active-nav strong {
    bottom: 0!important
  }

  @media only screen and (max-width: 992px) {
    .footer-bar-wrap {
      padding:30px
    }

    #footer-bar {
      display: flex
    }

    #footer-bar .foot-bar-span {
      font-size: 10px;
      font-weight: 600
    }
  }
  #footer-bar {
    z-index: 10000;
  }
</style>
