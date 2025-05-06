<template>
	<div class="Body" id="common-app">
    <van-notice-bar
      style="position: absolute;left: 0;width: 100%;z-index: 99;"
      mode="closeable"
      :scrollable="true"
      v-if="$store.state.MessageInfo"
      left-icon="volume-o"
      :text="$t('messageInfo[0]')"
      color="rgb(255, 193, 78)" background="rgb(0,0,0,0.7)"
      @click="readMessage"
    />
		<router-view v-if="isRouterAlive" />

    <div id="Service">
<!--      <a :href="serviceList[0].url"  v-if="serviceList.length == 1" style="color: #999999">-->
<!--        <img :src="`./static/icon/customer.png`" width="55">-->
<!--        {{$t('common[0]')}}-->
<!--      </a>-->
<!--      <router-link to="/kefu_list" v-if="serviceList.length > 1" style="color: #999999">-->
<!--        <img :src="`./static/icon/customer.png`" width="55">-->
<!--        {{$t('common[0]')}}-->
<!--      </router-link>-->
    </div>
    <div class="mobile-bottom-tabs">
      <div @click="$router.push('/')" :class="'mobile-tab '+(footIndex==0?'active':'')">
        <img :src="`./static/image/f_index_select.png`" style="height: 2rem;" v-if="footIndex==0">
        <img :src="`./static/image/f_index.png`" style="height: 2rem;" v-else>
        <div class="name">{{$t('head[0]')}}</div>
      </div>
      <div @click="$router.push('/contract')" :class="'mobile-tab '+(footIndex==1?'active':'')">
        <img :src="`./static/image/f_hy_select.png`" style="height: 2rem;" v-if="footIndex==1">
        <img :src="`./static/image/f_hy.png`" style="height: 2rem;" v-else>
        <div class="name">{{$t('foot[2]')}}</div>
      </div>
      <div @click="$router.push('/dashboard')" :class="'mobile-tab '+(footIndex==3?'active':'')">
        <img :src="`./static/image/f_dash_select.png`" style="height: 2rem;" v-if="footIndex==3">
        <img :src="`./static/image/f_dash.png`" style="height: 2rem;" v-else>
        <div class="name">{{$t('head[4]')}}</div>
      </div>
      <div @click="$router.push('/affiliate')" :class="'mobile-tab '+(footIndex==2?'active':'')">
        <img :src="`./static/image/f_re_select.png`" style="height: 2rem;" v-if="footIndex==2">
        <img :src="`./static/image/f_re.png`" style="height: 2rem;" v-else>
        <div class="name">{{$t('foot[5]')}}</div>
      </div>
    </div>
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
        if (to.path == '/') {
          this.footIndex = 0;
        }
        if (to.path == '/contract') {
          this.footIndex = 1;
        }
        if (to.path == '/affiliate') {
          this.footIndex = 2;
        }
        if (to.path == '/dashboard') {
          this.footIndex = 3;
        }
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
          if(data.data>0){
            _this.$Dialog.Confirm1(_this.$t('messageInfo[0]'), () => {
              _this.$router.push(`/message`)
            }, _this.$t('messageInfo[1]'));
          }
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

</style>
