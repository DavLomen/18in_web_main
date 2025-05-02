<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<!-- 		<div data-v-59c1480e="" class="banner">
						<div data-v-59c1480e="" class="banner__content">
							<div data-v-59c1480e="" class="container">
								<div data-v-59c1480e="" class="row g-3 justify-content-center">
									<div data-v-59c1480e="" class="col-lg-10 text-center">
										<h2 data-v-59c1480e="" class="m-0 banner-title">{{$t("login.UserLogin")}}</h2>
									</div>
								</div>
							</div>
						</div>
					</div> -->
					<div data-v-59c1480e="" class="user-login section overflow-hidden login-aaa">
						<div data-v-59c1480e="" class="container p-3">
							<div data-v-59c1480e="" class="row g-3 mobiler">
								<div data-v-59c1480e="" class="col-lg-6">
									<form data-v-59c1480e="" class="row g-3 gy-lg-4 login-form verify-gcaptcha">
										<div data-v-59c1480e="" class="col-12 mt-0">
											<h4 data-v-59c1480e="" class="my-0">{{$t("login.Login")}}</h4>
										</div>
										<div data-v-59c1480e="" class="col-12"><label data-v-59c1480e=""
												class="mb-2 t-heading-font">{{$t("login.UsernameorEmail")}}</label>
											<input data-v-59c1480e="" type="text" autocomplete="off"
												v-model="FormData.username"
												:placeholder="$t('login.PleaseinputUsernameorEmail')" name="username"
												class="form-control form--control" style="color: #000;">
										</div>
										<div data-v-59c1480e="" class="col-md-12"><label data-v-59c1480e=""
												class="mb-2 t-heading-font">{{$t("login.Password")}} </label>
											<div data-v-59c1480e="" class="input-group">
												<div data-v-59c1480e="" class="el-form-item__content"
													style="width: 100%;">
													<div data-v-59c1480e="" class="el-input el-input--suffix"><input
															v-model="FormData.password" data-v-59c1480e=""
															autocomplete="off"
															:placeholder="$t('register.PleaseinputPassword')"
															type="password" class=" form-control form--control"
															style="color: #000;">
														<span data-v-59c1480e="" class="el-input__suffix"><span
																data-v-59c1480e="" class="el-input__suffix-inner">
																<!-- 	<i
																	data-v-59c1480e=""
																	class="van-icon van-icon-closed-eye"></i> -->
															</span></span>
													</div>
												</div>
											</div>
										</div>
										<div data-v-59c1480e="" class="col-md-6">
											<div data-v-59c1480e="" class="form-check">
												<input data-v-59c1480e="" name="remember" type="checkbox"
													v-model="checked" id="flexCheckDefault"
													class="form-check-input custom-form-check-input">
												<label data-v-59c1480e="" for="flexCheckDefault"
													class="form-check-label t-heading-font">
													{{$t("login.RememberMe")}} </label>
											</div>
										</div>
										<div data-v-59c1480e="" class="col-md-6">
											<p data-v-59c1480e="" class="mb-0 t-heading-font text-end"><a
													data-v-59c1480e="" href="javascript:;"
													@click="$router.push('contact')"
													class="t-link t-link--base text--base1 t-heading-font"
													style="color: rgb(255, 255, 255) !important;">{{$t("login.forgetthepassword")}}?
												</a> <a data-v-59c1480e="" href="javascript:;"
													@click="$router.push('register')"
													class="t-link t-link--base text--base1 t-heading-font">{{$t("login.RegisterNow")}}
												</a></p>
										</div>
										<div data-v-59c1480e="" class="col-12"><button data-v-59c1480e="" type="button"
												id="recaptcha" class="btn btn--xl btn--base btn-block"
												@click="handleLogin()">{{$t("login.LoginNow")}}
											</button></div>
									</form>
								</div>
								<div data-v-59c1480e="" class="col-xl-6">
									<div data-v-59c1480e="" style="padding: 0px 20px;">
										<h2 data-v-59c1480e="" style="color: white;text-align: center;">
											{{$t("login.HelloWelcomeBack")}}!
										</h2>
										<h3 data-v-59c1480e="" style="color: white;text-align: center;">
											{{$t("login.Enteryourdetailstologin")}}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>


					<FooterView></FooterView>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		login,
		getInfo
	} from '@/api/common'

	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'AppView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					username: '',
					password: '',
				},
				checked: false,
				checkboxGroup1: [],
			}
		},
		mounted() {
			const username = localStorage.getItem('username');
			const password = localStorage.getItem('password');
			const checked = localStorage.getItem('checked');
			if (checked && username && password) {
				this.FormData = {
					username: username,
					password: password
				};
				this.checked = true
			}
		},
		methods: {
			handleLogin() {
				if (!this.FormData.username || this.FormData.username === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('login.PleaseinputUsernameorEmail'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.password || this.FormData.password === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('login.EnteryourPassword'),
						type: 'error'
					});
					return false;
				}
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				login(this.FormData).then((res) => {
					loading.close();
					localStorage.setItem('token', res.info.token);
					this.$store.commit('setUserInfo', res.info)
					if (this.checked) {
						localStorage.setItem('username', this.FormData.username);
						localStorage.setItem('password', this.FormData.password);
						localStorage.setItem('checked', this.checked);
					} else {
						localStorage.removeItem('username');
						localStorage.removeItem('password');
						localStorage.removeItem('checked');
					}
					this.$message({
						showClose: true,
						offset: 20,
						message: res.code_dec,
						type: 'success'
					});
					this.$router.push("/");
				}).catch((res) => {
					loading.close();
					console.log(res)

				});
			},

			async getUserInfo() {
				const {
					data
				} = await getInfo()
				// 处理用户信息
				console.log(data)
			}

		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
	.user-login {
		background-image: url(@/static/images/loginbg.jpg);
	}

	.login-aaa {
		padding-top: 8rem;
	}

	/* 	@media only screen and (min-width:1024px) {
		.login-aaa{
			padding-top: 8rem;
		}
	}
	@media only screen and (max-width:1024px) {
		.login-aaa{
			padding-top: 10rem;
		}
	} */
</style>