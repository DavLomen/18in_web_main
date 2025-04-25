<template>
	<div class="Body" id="common-app" >
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
        <div @click="$router.push('/')" :class="'mobile-tab '+(footIndex==0?'active':'')"><i class="el-icon-house"></i>
          <div class="name">{{$t('head[0]')}}</div>
        </div>
        <div @click="$router.push('/product')" :class="'mobile-tab '+(footIndex==1?'active':'')"><i class="el-icon-files"></i>
          <div class="name">{{$t('foot[2]')}}</div>
        </div>
        <div @click="$router.push('/affiliate')" :class="'mobile-tab '+(footIndex==2?'active':'')"><i class="el-icon-office-building"></i>
          <div class="name">{{$t('foot[5]')}}</div>
        </div>
        <div @click="$router.push('/dashboard')" :class="'mobile-tab '+(footIndex==3?'active':'')"><i class="el-icon-user"></i>
          <div class="name">{{$t('head[4]')}}</div>
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
        if (to.path == '/product') {
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
        })
      }, 300000);
		},

		mounted() {


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
