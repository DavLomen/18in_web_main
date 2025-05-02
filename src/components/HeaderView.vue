<template>
	<div class="page ">
		<div data-v-1838d61e="" role="alert" class="van-notice-bar" v-show="NewInbox && NewInbox.count>0"
			@click="toMessage(NewInbox ? NewInbox.info_t.id : '')"
			style="color: red;position: absolute;width: 100%;z-index: 9999;top: 0;">
			<i class="el-icon-warning-outline" style="margin-right: 10px;"></i>
			<div role="marquee123" class="van-notice-bar__wrap">
				<div class="van-notice-bar__content">
					<div class="marquee-container">
						<div class="marquee-content">
							<!--{{NewInbox ? NewInbox.info : ''}}-->
							{{$t('common.newMessage')}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<header data-v-2c1eb916="" class="header"><!----> <!---->
			<div data-v-6b444513="" v-show="is_menu" @click="menu()"
				style="z-index: 99;position: fixed;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);top:0"></div>
			<div data-v-2c1eb916="" class="container">
				<div data-v-2c1eb916="" class="row g-0 align-items-center">
					<div data-v-2c1eb916="" class="col-7 col-lg-2" style="display: flex;align-items: center;">
						<div class="t-link logo">
							<img data-v-2c1eb916="" :src="require('../static/images/logo.jpg')" class="img-fluid logo__is">
							<el-dropdown @command="handleCommand">
								<span class="el-dropdown-link" style="display: flex;align-items: center;width: 100px;">
									{{lang_info.home_name}}<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item v-for="(item,index) in languages" :key="index"
										:command="item.code">
										<img :src="require(`../static/images/head/${item.code}.png`)" style="width: 30px;height: 30px;margin: 5px 0;">
										{{item.home_name}}</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>

					</div>

					<div data-v-2c1eb916="" class="col-5 col-lg-10">
						<div data-v-2c1eb916="" class="nav-container " :class="is_menu ? 'nav-toggler' : ''">
							<div data-v-2c1eb916="" class=" align-items-center d-lg-none"
								style="	display: flex;justify-content: space-between;">
								<div
									style="border: 1px solid rgb(202, 45, 134);border-radius: 10px;padding: 5px;display: flex;justify-content: center;align-items: center;flex-direction: column;">
									<!-- <h6 style="color: rgb(202, 45, 134);margin: 0px;">
										{{$t('common.onlinePum')}}
									</h6>
									<h6 style="color: rgb(202, 45, 134);margin: 0px;">
										{{onlinePum}}
									</h6> -->
									<span style="font-size: 0.5rem;text-align: center;white-space: nowrap;color: rgb(202, 45, 134);">
										{{$t('common.onlinePum')}}</span>
									<span style="font-size: 0.5rem;text-align: center;white-space: nowrap;color: rgb(202, 45, 134);">
										{{onlinePum}}</span>
								</div>
								<el-button type="info" @click="menu()" style="color:white;background-color:#0d6efd;
									border: 1px solid #0d6efd;">{{$t('common.Menu')}}</el-button>
								<!-- <button data-v-2c1eb916="" type="button" @click="menu()"
									class="btn btn--sqr btn--base nav--toggle text--white">
									{{$t('common.Menu')}}
								</button> -->
							</div>

							<nav data-v-2c1eb916="" class="navs">
								<ul data-v-2c1eb916="" class="list primary-menu" style="padding: 20px;">
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/"
											class="primary-menu__link text-capitalize">{{$t('common.Home')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/product"
											class="primary-menu__link text-capitalize">{{$t('common.Contract')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/affiliate"
											class="primary-menu__link text-capitalize">{{$t('common.Affiliate')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/faq"
											class="primary-menu__link text-capitalize">{{$t('common.FAQ')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/blog"
											class="primary-menu__link text-capitalize">{{$t('common.Blog')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/about"
											class="primary-menu__link text-capitalize">{{$t('common.About')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/welfare"
											class="primary-menu__link text-capitalize">{{$t('common.VipClub')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/tutorial"
											class="primary-menu__link text-capitalize">{{$t('common.Tutorial')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list">
										<router-link to="/app"
											class="primary-menu__link text-capitalize">{{$t('common.APP')}}</router-link>

									</li>
									<!-- <li data-v-2c1eb916="" class="primary-menu__list ">
										<el-dropdown @command="handleCommand">
											<span class="el-dropdown-link">
												{{lang_text}}<i class="el-icon-arrow-down el-icon--right"></i>
											</span>
											<el-dropdown-menu slot="dropdown">
												<el-dropdown-item v-for="(item,index) in languages" :key="index"
													:command="item.code">{{item.home_name}}</el-dropdown-item>
											</el-dropdown-menu>
										</el-dropdown>
									</li> -->
								</ul>
								<div data-v-2c1eb916="" class="mx-3 ms-lg-auto me-lg-0">
									<ul data-v-2c1eb916="" style="margin: 0 10px;" v-show="!isMobile"
										class="list justify-content-center primary-menu primary-menu--alt">
										<li data-v-2c1eb916="" class="list--row__item text-center"
											style="border: 1px solid rgb(202, 45, 134);border-radius: 10px;padding: 5px;display: flex;justify-content: center;align-items: center;flex-direction: column;">
											<!-- <h6 style="color: rgb(202, 45, 134);font-weight: bold;margin: 0px;">
												{{$t('common.onlinePum')}}
											</h6>
											<h6 style="color: rgb(202, 45, 134);font-weight: bold;margin: 0px;">
												{{onlinePum}}
											</h6> -->
											<div
												style="color: rgb(202, 45, 134);font-size: 16px;font-weight: 700;text-align: center;white-space: nowrap">
												{{$t('common.onlinePum')}}
											</div>
											<div
												style="color: rgb(202, 45, 134);font-size: 16px;font-weight: 700;text-align: center;white-space: nowrap">
												{{onlinePum}}
											</div>
										</li>

									</ul>
									<!-- 已登陆 -->
									<ul data-v-2c1eb916="" v-if="loginUserInfo.userid"
										class="list justify-content-center primary-menu primary-menu--alt">
										<li data-v-2c1eb916="" class="list--row__item text-center">
											<el-button type="info" @click="$router.push('/dashboard')"
												style="color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">{{$t('common.Dashboard')}}</el-button>
											<!-- <router-link to="/dashboard"
												class="btn btn--md btn--base fw-md w-100">{{$t('common.Dashboard')}}</router-link> -->
										</li>
										<li data-v-2c1eb916="" class="list--row__item text-center">
											<el-button type="info" @click="logout()"
												style="color:white;background-color:red;border: 1px solid red;">{{$t('common.Logout')}}</el-button>
										</li>
									</ul>
									<ul data-v-2c1eb916="" v-else
										class="list justify-content-center primary-menu primary-menu--alt">
										<li class="list--row__item text-center">
											<el-button type="info" @click="$router.push('/login')"
												style="color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">{{$t('common.Login')}}</el-button>
										</li>
										<li class="list--row__item text-center">
											<el-button type="info" @click="$router.push('/register')"
												style="color:white;background-color:#0d6efd;border: 1px solid #0d6efd;">{{$t('common.SignUp')}}</el-button>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	import {
		inboxDetail
	} from '@/api/common'
	export default {
		computed: {
			...mapState(['loginUserInfo', 'BackData', 'NewInbox','onlinePum']),
		},
		name: 'HeaderView',
		// props: {
		//   msg: String
		// }
		data() {
			return {
				is_menu: false,
				isMobile: false,
				lang: "",
				lang_info: "",
				languages: [],
			};
		},
		watch: {
			lang(newVal) {
				var that = this;
				this.languages.forEach(function(item) {
					if (item.code == newVal) {
						that.lang_info = item;
					}
				});
			},
			BackData() {
				this.initLang()
			}
		},
		mounted() {
			this.handleResize();
			window.addEventListener('resize', this.handleResize);
			this.initLang()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize);
		},
		methods: {
			toMessage(id) {
				inboxDetail({
					id: id
				}).then((res) => {
					console.log('err', res)
				}).catch((res) => {
					console.log('err', res)
				});
				this.$store.commit('setNewInbox', null);
				if (this.$route.path != '/message') {
					this.$router.push('message')
				}
			},
			handleResize() {
				this.is_menu = false
				console.log('窗口大小变化了');
				this.Mobile();
				// 在这里添加你的处理逻辑，比如计算新的窗口大小等
			},
			Mobile() {
				this.isMobile = window.innerWidth < 768; // 通常认为小于768px是移动设备
			},
			toUlr(url) {
				this.$router.push(url);
				// 使用name进行跳转，也可以使用path或完整的对象形式（如：{ path: '/about' }）
			},
			menu() {
				this.is_menu = !this.is_menu
			},
			logout() {
				this.$store.dispatch('logout')
			},
			initLang() {
				//默认语言
				const mr_lang = localStorage.getItem("lang")
				if (this.BackData) {
					const languagesList = this.BackData.setting.langs
					this.languages = languagesList
					if (mr_lang == null) {
						//设置后端的默认语言
						const default_language = this.BackData.setting.default_language;
						this.lang = default_language;
						this.$i18n.locale = default_language;
						// this.lang = 
						// this.handleCommand(this.BackData.setting.default_language);
					} else {
						this.lang = this.$i18n.locale || "en";
					}
				}
			},
			handleCommand(lang) {
				console.log(lang)
				this.lang = lang;
				this.$i18n.locale = lang;
				localStorage.setItem("lang", lang);

				// Fetch("/index/changeLang").then((r) => {
				// 	localStorage.setItem('currency', "");
				// 	localStorage.setItem('precision', r.data.precision);
				// 	localStorage.setItem("language_logo", r.data.language_logo);
				// this.$router.go(-1);
				// });
				window.location.reload();
				// this.$router.replace({ path: this.$route.path });
			},
		}
	}
</script>

<style>
	/* @import url('@/static/css/1cs.css'); */
	.el-dropdown-link {
		cursor: pointer;
		color: white;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.el-dropdown {
		border: none;
	}


	.el-dropdown-menu__item {
		font-size: none;
	}

	/* .el-dropdown .van-icon,
	.el-dropdown span {
		color: white;
	} */
</style>