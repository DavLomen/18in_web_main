<template>
	<div class=" ">
		<!-- 	<div data-v-1838d61e="" role="alert" class="van-notice-bar" v-show="NewInbox && NewInbox.count>0"
			@click="toMessage(NewInbox ? NewInbox.info_t.id : '')" style="color: red;position: absolute;width: 100%;">
			<i class="el-icon-warning-outline" style="margin-right: 10px;"></i>
			<div role="marquee123" class="van-notice-bar__wrap">
				<div class="van-notice-bar__content">
					<div class="marquee-container">
						<div class="marquee-content">
							{{NewInbox ? NewInbox.info : ''}}
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<header data-v-2c1eb916="" class="header11"><!----> <!---->

			<div data-v-1bce91fb="" data-v-70329a5a="">
				<div data-v-1bce91fb="" class="app-nav" style="width: 25rem;">
					<div data-v-1bce91fb="" class="mav-top"
						style="display: flex;justify-content: center;align-items: center;">
						<img data-v-1bce91fb="" src="@/static/images/logo.jpg" class="" style="height: 50px;">
					</div>
					<ul data-v-1bce91fb="" role="menubar" class="nav-menu el-menu">
						<li data-v-1bce91fb="" class="el-menu-item " style="padding-left: 20px;"
							@click="$router.push('/')">
							<!-- <i data-v-1bce91fb="" class="el-icon-house"></i> -->
							<img src="@/static/images/dashboard/家.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Home')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item "
							:class="$route.path=='/dashboard' ? 'is-active' : ''" style="padding-left: 20px;"
							@click="$router.push('/dashboard')">
							<!-- <i data-v-1bce91fb="" class="el-icon-discover"></i> -->
							<img src="@/static/images/dashboard/仪表盘.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Dashboard')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" :class="$route.path=='/deposit' ? 'is-active' : ''"
							style="padding-left: 20px;" @click="$router.push('/deposit')">
							<!-- <i data-v-1bce91fb="" class="el-icon-folder-add"></i> -->
							<img src="@/static/images/dashboard/订金.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Deposit')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item "
							:class="$route.path=='/withdraw' ? 'is-active' : ''" style="padding-left: 20px;"
							@click="$router.push('/withdraw')">
							<!-- <i data-v-1bce91fb="" class="el-icon-coin"></i> -->
							<img src="@/static/images/dashboard/提现.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Withdraw')}}</span>
						</li>
						<li data-v-1bce91fb="" aria-haspopup="true" class="el-submenu">
							<div data-v-1bce91fb="" class="el-submenu__title" style="padding-left: 20px;"
								@click="clickShowData('MyBill')">
								<!-- <i data-v-1bce91fb="" class="el-icon-document"></i> -->
								<img src="@/static/images/dashboard/套餐.png" style="width: 20px;margin: 0 10px;">
								<span data-v-1bce91fb="" slot="title">{{$t('common.Packages')}}</span>
								<i data-v-1bce91fb="" class="el-submenu__icon-arrow "
									:class="show_data.MyBill ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
							</div>
							<ul data-v-1bce91fb="" role="menu" class="el-menu el-menu--inline"
								v-show="show_data.MyBill==true">
								<li data-v-1bce91fb="" class="el-menu-item-group">
									<div data-v-1bce91fb="" class="el-menu-item-group__title"
										style="padding-left: 40px;"></div>
									<ul data-v-1bce91fb="">
										<li data-v-1bce91fb="" class="el-menu-item "
											:class="$route.path=='/packageList' ? 'is-active' : ''"
											style="padding-left: 40px;" @click="$router.push('/packageList')">
											<i data-v-1bce91fb="" class="el-icon-files"></i>
											{{$t('common.MiningPackages')}}
										</li>
										<li data-v-1bce91fb="" class="el-menu-item "
											:class="$route.path=='/myPackages' ? 'is-active' : ''"
											style="padding-left: 40px;" @click="$router.push('/myPackages')">
											<i data-v-1bce91fb="" class="el-icon-folder-opened"></i>
											{{$t('common.MyPackages')}}
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item "
							:class="$route.path=='/transactions' ? 'is-active' : ''" style="padding-left: 20px;"
							@click="$router.push('/transactions')">
							<img src="@/static/images/dashboard/交易.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-sort"></i> -->
							<span data-v-1bce91fb="">{{$t('common.Transactions')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item "
							:class="$route.path=='/affiliates' ? 'is-active' : ''" style="padding-left: 20px;"
							@click="$router.push('/affiliates')">
							<img src="@/static/images/dashboard/附属机构.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-office-building"></i> -->
							<span data-v-1bce91fb="">{{$t('common.Affiliate')}}</span>
						</li>
						<!---->
						<li data-v-1bce91fb="" class="el-menu-item " :class="$route.path=='/message' ? 'is-active' : ''"
							style="padding-left: 20px;" @click="$router.push('/message')">
							<img src="@/static/images/dashboard/信息.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-message-solid"></i> -->
							<span data-v-1bce91fb="">{{$t('common.Message')}}</span>
						</li>
						<li data-v-1bce91fb="" aria-haspopup="true" class="el-submenu">
							<div data-v-1bce91fb="" class="el-submenu__title" style="padding-left: 20px;"
								@click="clickShowData('Settings')">
								<img src="@/static/images/dashboard/设置.png" style="width: 20px;margin: 0 10px;">
								<!-- <i data-v-1bce91fb="" class="el-icon-setting"></i> -->
								<span data-v-1bce91fb="" slot="title">{{$t('common.Settings')}}</span>
								<i data-v-1bce91fb="" class="el-submenu__icon-arrow"
									:class="show_data.MyBill ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
							</div>
							<ul data-v-1bce91fb="" role="menu" class="el-menu el-menu--inline"
								v-show="show_data.Settings==true">
								<li data-v-1bce91fb="" class="el-menu-item-group">
									<div data-v-1bce91fb="" class="el-menu-item-group__title"
										style="padding-left: 40px;"></div>
									<ul data-v-1bce91fb="">
										<li data-v-1bce91fb="" class="el-menu-item "
											:class="$route.path=='/walletAddress' ? 'is-active' : ''"
											style="padding-left: 40px;" @click="$router.push('walletAddress')">
											<i data-v-1bce91fb="" class="el-icon-wallet"></i>
											{{$t('common.WalletAddress')}}
										</li>
										<li data-v-1bce91fb="" class="el-menu-item "
											:class="$route.path=='/loginPassword' ? 'is-active' : ''"
											style="padding-left: 40px;" @click="$router.push('loginPassword')">
											<i data-v-1bce91fb="" class="el-icon-lock"></i>
											{{$t('common.LoginPassword')}}
										</li>
										<li data-v-1bce91fb="" class="el-menu-item "
											:class="$route.path=='/payPassword' ? 'is-active' : ''"
											style="padding-left: 40px;" @click="$router.push('payPassword')">
											<i data-v-1bce91fb="" class="el-icon-lock"></i>
											{{$t('common.PaymentPassword')}}
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;"
							@click="$router.push('/privacy')">
							<img src="@/static/images/dashboard/隐私和政策.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-warning-outline"></i> -->
							<span data-v-1bce91fb="">{{$t('register.PrivacyandPolicy')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;"
							@click="$router.push('/termsService')">
							<img src="@/static/images/dashboard/服务协议.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-warning-outline"></i> -->
							<span data-v-1bce91fb="">{{$t('register.TermsofServices')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;" @click="logout()">
							<img src="@/static/images/dashboard/登出.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-switch-button"></i> -->
							<span data-v-1bce91fb="">{{$t('common.Logout')}}</span>
						</li>
					</ul>
				</div>


				<div data-v-1bce91fb="" class="app-nav-h5">
					<img data-v-1bce91fb="" src="@/static/images/logo.jpg" class="logo">
					<div data-v-1bce91fb="" class="menu" @click="is_app_mask = !is_app_mask"><i data-v-1bce91fb=""
							class="el-icon-s-operation"></i> {{$t('common.Menu')}}
					</div>
				</div>
				<div data-v-1bce91fb="" class="app-nav-mask" v-show="is_app_mask">
					<ul data-v-1bce91fb="" role="menubar" class="nav-menu el-menu">
						<li data-v-1bce91fb="" class="el-menu-item " style="padding-left: 20px;"
							@click="$router.push('/')">
							<img src="@/static/images/dashboard/家.png" style="width: 20px;margin: 0 10px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-house"></i> -->
							<span data-v-1bce91fb="">{{$t('common.Home')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" @click="$router.push('/dashboard')"
							:class="$route.path=='/dashboard' ? 'is-active' : ''" style="padding-left: 20px;">
							<!-- <i data-v-1bce91fb="" class="el-icon-discover"></i> -->
							<img src="@/static/images/dashboard/仪表盘.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Dashboard')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item " @click="$router.push('/deposit')"
							:class="$route.path=='/deposit' ? 'is-active' : ''" style="padding-left: 20px;">
							<img src="@/static/images/dashboard/订金.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Deposit')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item " @click="$router.push('/withdraw')"
							:class="$route.path=='/withdraw' ? 'is-active' : ''" style="padding-left: 20px;">
							<img src="@/static/images/dashboard/提现.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Withdraw')}}</span>
						</li>
						<li data-v-1bce91fb="" aria-haspopup="true" class="el-submenu">
							<div data-v-1bce91fb="" class="el-submenu__title" style="padding-left: 20px;"
								@click="clickShowData('MyBill')">
								<img src="@/static/images/dashboard/套餐.png" style="width: 20px;margin: 0 10px;">
								<span data-v-1bce91fb="" slot="title">{{$t('common.Packages')}}</span>
								<i data-v-1bce91fb="" class="el-submenu__icon-arrow el-icon-arrow-down"></i>
							</div>
							<ul data-v-1bce91fb="" role="menu" class="el-menu el-menu--inline"
								v-show="show_data.MyBill==true">
								<li data-v-1bce91fb="" class="el-menu-item-group">
									<div data-v-1bce91fb="" class="el-menu-item-group__title"
										style="padding-left: 40px;"></div>
									<ul data-v-1bce91fb="">
										<li data-v-1bce91fb="" class="el-menu-item "
											@click="$router.push('/packageList')"
											:class="$route.path=='/packageList' ? 'is-active' : ''"
											style="padding-left: 40px;">
											<i data-v-1bce91fb="" class="el-icon-files"></i>
											{{$t('common.MiningPackages')}}
										</li>
										<li data-v-1bce91fb="" class="el-menu-item "
											@click="$router.push('/myPackages')"
											:class="$route.path=='/myPackages' ? 'is-active' : ''"
											style="padding-left: 40px;">
											<i data-v-1bce91fb="" class="el-icon-folder-opened"></i>
											{{$t('common.MyPackages')}}
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item " @click="$router.push('/transactions')"
							:class="$route.path=='/transactions' ? 'is-active' : ''" style="padding-left: 20px;">
							<img src="@/static/images/dashboard/交易.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Transactions')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item " @click="$router.push('/affiliates')"
							:class="$route.path=='/affiliates' ? 'is-active' : ''" style="padding-left: 20px;">
							<img src="@/static/images/dashboard/附属机构.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Affiliate')}}</span>
						</li>
						<!---->
						<li data-v-1bce91fb="" class="el-menu-item " @click="$router.push('/message')"
							:class="$route.path=='/message' ? 'is-active' : ''" style="padding-left: 20px;">
							<img src="@/static/images/dashboard/信息.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Message')}}</span>
						</li>
						<li data-v-1bce91fb="" aria-haspopup="true" class="el-submenu">
							<div data-v-1bce91fb="" class="el-submenu__title" style="padding-left: 20px;"
								@click="clickShowData('Settings')">
								<img src="@/static/images/dashboard/设置.png" style="width: 20px;margin: 0 10px;">
								<span data-v-1bce91fb="" slot="title">{{$t('common.Settings')}}</span>
								<i data-v-1bce91fb="" class="el-submenu__icon-arrow el-icon-arrow-down"></i>
							</div>
							<ul data-v-1bce91fb="" role="menu" class="el-menu el-menu--inline"
								v-show="show_data.Settings==true">
								<li data-v-1bce91fb="" class="el-menu-item-group">
									<div data-v-1bce91fb="" class="el-menu-item-group__title"
										style="padding-left: 40px;"></div>
									<ul data-v-1bce91fb="">
										<li data-v-1bce91fb="" class="el-menu-item "
											@click="$router.push('/walletAddress')"
											:class="$route.path=='/walletAddress' ? 'is-active' : ''"
											style="padding-left: 40px;"><i data-v-1bce91fb=""
												class="el-icon-wallet"></i>{{$t('common.WalletAddress')}} </li>
										<li data-v-1bce91fb="" class="el-menu-item "
											@click="$router.push('/loginPassword')"
											:class="$route.path=='/loginPassword' ? 'is-active' : ''"
											style="padding-left: 40px;"><i data-v-1bce91fb="" class="el-icon-lock"></i>
											{{$t('common.LoginPassword')}}
										</li>
										<li data-v-1bce91fb="" class="el-menu-item "
											@click="$router.push('/payPassword')"
											:class="$route.path=='/payPassword' ? 'is-active' : ''"
											style="padding-left: 40px;"><i data-v-1bce91fb=""
												class="el-icon-lock"></i>{{$t('common.PaymentPassword')}} </li>
									</ul>
								</li>
							</ul>
						</li>


						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;"
							@click="$router.push('/privacy')">
							<img src="@/static/images/dashboard/隐私和政策.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.PrivacyandPolicy')}}</span>
						</li>
						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;"
							@click="$router.push('/termsService')">
							<img src="@/static/images/dashboard/服务协议.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.TermsofServices')}}</span>
						</li>


						<li data-v-1bce91fb="" class="el-menu-item" style="padding-left: 20px;" @click="logout()">
							<img src="@/static/images/dashboard/登出.png" style="width: 20px;margin: 0 10px;">
							<span data-v-1bce91fb="">{{$t('common.Logout')}}</span>
						</li>
					</ul>
					<div data-v-1bce91fb="" class="close-box"><i data-v-1bce91fb="" class="el-icon-error nav-close"
							@click="is_app_mask = !is_app_mask"></i>
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
		name: 'DaHeaderView2',
		// props: {
		//   msg: String
		// }
		computed: {
			...mapState(['BackData', 'NewInbox']),
		},
		data() {
			return {
				is_menu: false,
				is_app_mask: false,
				lang: "",
				lang_text: '',
				languages: [],
				show_data: {
					Contract: false,
					MyBill: false,
					Settings: false,
				}
			};
		},
		watch: {
			lang(newVal) {
				var that = this;
				this.languages.forEach(function(item) {
					if (item.code == newVal) {
						that.lang_text = item.home_name;
					}
				});
			},
			BackData() {
				this.initLang()
			}
		},
		mounted() {
			document.documentElement.style.fontSize = '10px';
			this.initMenu()
			// 监听路由变化事件
			this.$router.afterEach(() => {
				// console.log('路由变化:', from.path, '->', to.path)
				this.initMenu()
			})
			window.addEventListener('resize', this.handleResize);
			this.initLang()
		},
		beforeDestroy() {
			document.documentElement.style.fontSize = '';
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
			initMenu() {
				var path = this.$route.path;
				const array = [
					'/walletAddress',
					'/loginPassword',
					'/payPassword',
				];
				const result = array.find(element => element === path);
				if (result !== undefined) {
					this.show_data.Settings = true
				} else {
					this.show_data.Settings = false
				}


				const array2 = [
					'/packageList',
					'/myPackages',
				];
				const result2 = array2.find(element => element === path);
				if (result2 !== undefined) {
					this.show_data.MyBill = true
				} else {
					this.show_data.MyBill = false
				}

			},
			handleResize() {
				this.is_menu = false
				console.log('窗口大小变化了');
				// 在这里添加你的处理逻辑，比如计算新的窗口大小等
			},
			toUlr(url) {
				this.$router.push(url);
				// 使用name进行跳转，也可以使用path或完整的对象形式（如：{ path: '/about' }）
			},
			menu() {
				this.is_menu = !this.is_menu
			},
			clickShowData(value) {
				if (value == 'Contract') {
					this.show_data.Contract = !this.show_data.Contract
				}
				if (value == 'MyBill') {
					this.show_data.MyBill = !this.show_data.MyBill
				}
				if (value == 'Settings') {
					this.show_data.Settings = !this.show_data.Settings
				}
			},
			logout() {
				this.$store.dispatch('logout')
			},
			initLang() {
				//默认语言
				const mr_lang = localStorage.getItem("lang")
				if (this.BackData) {
					this.languages = this.BackData.setting.langs


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
			toHome(url) {
				// 完全刷新页面并跳转
				this.$router.push(url).then(() => {
					window.location.reload()
				})
			}
		}
	}
</script>

<style>
	.el-menu-item.is-active {
		/* color: #0d6efd; */
		color: white;
	}

	/* @import url('@/static/css/app.0b23ee1c66.css'); */
</style>