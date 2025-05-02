<template>
	<div class="page ">
		<header data-v-2c1eb916="" class="header"><!----> <!---->
			<div data-v-6b444513="" v-show="is_menu" @click="menu()"
				style="z-index: 99;position: fixed;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);"></div>
			<div data-v-2c1eb916="" class="container">
				<div data-v-2c1eb916="" class="row g-0 align-items-center">
					<div data-v-2c1eb916="" class="col-6 col-lg-2"><router-link to="/" class="t-link logo"><img
								data-v-2c1eb916="" src="@/static/images/logo.jpg"
								class="img-fluid logo__is"></router-link>
					</div>
					<div data-v-2c1eb916="" class="col-6 col-lg-10">
						<div data-v-131640be="" class="nav-container " :class="is_menu ? 'nav-toggler' : ''">
							<div data-v-131640be="" class="d-flex justify-content-end align-items-center d-lg-none">
								<button data-v-131640be="" type="button" @click="menu()"
									class="btn btn--sqr btn--base nav--toggle text--white">
									{{$t('common.Menu')}}
								</button>
							</div>
							<nav data-v-131640be="" class="navs  " :class="is_menu ? 'primary-submenu-toggler' : ''">
								<ul data-v-131640be="" class="list primary-menu">
									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/message"
											class="primary-menu__link text-capitalize">{{$t('common.Message')}}</router-link>
									</li>
									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/dashboard"
											class="primary-menu__link text-capitalize">{{$t('common.Dashboard')}}</router-link>
									</li>
									<li data-v-131640be="" class="primary-menu__list has-sub "
										:class="show_data.Contract ? 'active' : ''" @click="clickShowData('Contract')">
										<a data-v-131640be="" href="javascript:void(0)"
											class="primary-menu__link text-capitalize">{{$t('common.Contract')}}
											<i class="el-icon-arrow-down"></i>
										</a>
										<ul data-v-131640be="" class="primary-menu__sub">
											<li data-v-131640be="" class="primary-menu__sub-list">

												<router-link to="/product"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.AllContract')}}</router-link>
											</li>
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/myPackages"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.MyContract')}}</router-link>
											</li>
										</ul>
									</li>
									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/deposit"
											class="primary-menu__link text-capitalize">{{$t('common.Deposit')}}</router-link>
									</li>
									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/withdraw"
											class="primary-menu__link text-capitalize">{{$t('common.WithdrawMoney')}}</router-link>
									<li data-v-131640be="" class="primary-menu__list has-sub"
										:class="show_data.MyBill ? 'active' : ''" @click="clickShowData('MyBill')"><a
											data-v-131640be="" href="javascript:void(0)"
											class="primary-menu__link text-capitalize">{{$t('common.MyBill')}} <i
												class="el-icon-arrow-down"></i></a>
										<ul data-v-131640be="" class="primary-menu__sub">
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/transactions?type=all"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.Transactions')}}</router-link>
											</li>
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/transactions?type=8"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.Commissions')}}</router-link>
											</li>
										</ul>
									</li>

									<li data-v-131640be="" class="primary-menu__list has-sub"
										:class="show_data.Settings ? 'active' : ''" @click="clickShowData('Settings')">
										<a data-v-131640be="" href="javascript:void(0)"
											class="primary-menu__link text-capitalize">{{$t('common.Settings')}} <i
												class="el-icon-arrow-down"></i></a>
										<ul data-v-131640be="" class="primary-menu__sub">
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/walletAddress"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.WalletAddress')}}</router-link>
											</li>
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/loginPassword"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.LoginPassword')}}</router-link>
											</li>
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/payPassword"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.PaymentPassword')}}</router-link>
											</li>
											<li data-v-131640be="" class="primary-menu__sub-list">
												<router-link to="/affiliates"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.Referrals')}}</router-link>
											</li>
											<!-- <li data-v-131640be="" class="primary-menu__sub-list"><a data-v-131640be=""
													href="javascript:;"
													class="t-link primary-menu__sub-link text-capitalize">{{$t('common.Logout')}}</a>
											</li> -->
										</ul>
									</li>

									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/tutorial"
											class="primary-menu__link text-capitalize">{{$t('common.Tutorial')}}</router-link>
									</li>
									<li data-v-131640be="" class="primary-menu__list">
										<router-link to="/app"
											class="primary-menu__link text-capitalize">{{$t('common.APP')}}</router-link>
									</li>
									<li data-v-2c1eb916="" class="primary-menu__list ">
										<el-dropdown @command="handleCommand">
											<span class="el-dropdown-link">
												{{lang_text}}<i class="el-icon-arrow-down el-icon--right"></i>
											</span>
											<el-dropdown-menu slot="dropdown">
												<el-dropdown-item v-for="(item,index) in languages" :key="index"
													:command="item.code">{{item.home_name}}</el-dropdown-item>
											</el-dropdown-menu>
										</el-dropdown>
									</li>
								</ul>
								<div data-v-131640be="" class="mx-3 ms-lg-auto me-lg-0">
									<ul data-v-131640be=""
										class="list justify-content-center primary-menu primary-menu--alt">

										<li data-v-131640be="" class="list--row__item text-center">
											<el-button type="info" round @click="logout()"
												class="custom-button">{{$t('common.Logout')}}</el-button>
											<!-- <a data-v-131640be=""
												href="javascript:;" class="btn btn--md btn--base fw-md w-100"
												@click="logout()"> {{$t('common.Logout')}} </a> -->
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
	export default {
		name: 'DaHeaderView',
		// props: {
		//   msg: String
		// }
		computed: {
			...mapState(['BackData']),
		},
		data() {
			return {
				is_menu: false,
				lang: "",
				lang_text: '',
				languages: [],
				show_data: {
					Contract: 0,
					MyBill: 0,
					Settings: 0,
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
			window.addEventListener('resize', this.handleResize);
			this.initLang()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize);
		},
		methods: {
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
				console.log(this.lang, '语言列表')

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
	.custom-button {
		/* color:white;background-color:rgba(116, 65, 228, 1);border: 1px solid rgba(116, 65, 228, 1); */
		background-color: rgba(116, 65, 228, 1);
		/* 自定义颜色 */
		border-color: rgba(116, 65, 228, 1);
		/* 自定义边框颜色 */
		color: #ffffff;
		/* 文字颜色 */
	}

</style>