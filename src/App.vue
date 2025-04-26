<template>

	<div class="Body" id="common-app">
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
    <div class="footer-bar-wrap">
      <div id="footer-bar" class="footer-bar-5">
        <a @click="$router.push('/')" id="fhome" href="javascript:;" :class="footIndex==0?'active':''">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>{{$t('head[0]')}}</span></a>
        <a id="ffaqs" href="javascript:;" @click="$router.push('/product')" :class="footIndex==1?'active':''">
          <svg   class="svg-icon feather feather-help-circle" aria-hidden="true">
            <use  xlink:href="#icon-collections"></use>
          </svg>
          <span>{{$t('foot[2]')}}</span></a>
        <a href="javascript:;" @click="$router.push('/dashboard')" :class="footIndex==3?'router-link-exact-active router-link-active active':'router-link-exact-active router-link-active'" id="fdashboard" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-command">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          <span>{{$t('head[4]')}}</span></a>

<!--        <a v-else href="javascript:;" @click="$router.push('/withdraw')" :class="footIndex==5?'active':''" id="fwithdraws">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--               class="feather feather-credit-card">-->
<!--            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>-->
<!--            <line x1="1" y1="10" x2="23" y2="10"></line>-->
<!--          </svg>-->
<!--          <span id="fwithdraws2" class="foot-bar-span">{{$t('head[8]')}}</span></a>-->
        <a id="freferral" @click="$router.push('/affiliates')" href="javascript:;" :class="footIndex==2?'active':''">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{{$t('foot[5]')}}</span></a>
        <a href="javascript:;" @click="$router.push('/setting')" :class="footIndex==7?'active':''" id="fdeposit">
          <i class="el-icon-setting" style="width: 24px;height: 24px;"></i>
          <span  id="fdeposit2" class="foot-bar-span">{{$t('head[14]')}}</span></a>

      </div>
    </div>
  </div>

</template>



<script>
  import $ from 'jquery'
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
        if (to.path == '/') {
          this.footIndex = 0;
        }
        if (to.path == '/product') {
          this.footIndex = 1;
        }
        if (to.path == '/affiliates') {
          this.footIndex = 2;
        }
        if (to.path == '/dashboard') {
          this.footIndex = 3;
        }
        if (to.path == '/deposit') {
          this.footIndex = 4;
        }
        if (to.path == '/withdraw') {
          this.footIndex = 5;
        }
        if (to.path == '/FAQ') {
          this.footIndex = 6;
        }
        if (to.path == '/setting') {
          this.footIndex = 7;
        }
			},
		},

		created() {
      let that = this;
      that.$Model.HasNewMessage(data=>{
        if (data.data == 1) {
          that.$Dialog.Confirm(that.$t('messageInfo[0]'), () => {
            that.$router.push(`/message`)
          }, that.$t('messageInfo[1]'));
        }
      })
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

</style>
