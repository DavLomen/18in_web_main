<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<!-- <div data-v-52254644="" class="banner">
						<div data-v-52254644="" class="banner__content">
							<div data-v-52254644="" class="container">
								<div data-v-52254644="" class="row g-3 justify-content-center">
									<div data-v-52254644="" class="col-lg-10 text-center">
										<h2 data-v-52254644="" class="m-0 banner-title">{{$t("register.SignUp")}}</h2>
									</div>
								</div>
							</div>
						</div>
					</div> -->
					<div data-v-52254644="" class="user-login section overflow-hidden login-aaa">
						<div data-v-52254644="" class="container p-3">
							<div data-v-52254644="" class="row g-3 ">
								<div data-v-52254644="" class="col-xl-6">
									<form data-v-52254644="" class="row g-3 gy-lg-4 login-form verify-gcaptcha"
										style="min-height: 60rem;">
										<div data-v-52254644="" class="col-12 mt-0">
											<h4 data-v-52254644="" class="my-0">{{$t("register.SignUp")}}</h4>
										</div>
										<div data-v-52254644="" class="col-md-6"><label data-v-52254644=""
												class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.Username")}} </label>
											<input data-v-52254644="" type="text" name="username"
												v-model="FormData.username" autocomplete="off"
												:placeholder="$t('register.PleaseinputUsername')"
												class="form-control form--control checkUser" style="color: #000;">
											<small data-v-52254644="" class="text-danger usernameExist"></small>
										</div>
										<div data-v-52254644="" class="col-md-6"><label data-v-52254644=""
												class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.Email")}} </label>
											<input data-v-52254644="" type="email" name="email" v-model="FormData.email"
												autocomplete="off" :placeholder="$t('register.Pleaseinputemail')"
												class="form-control form--control checkUser" style="color: #000;">
										</div>
										<div data-v-52254644="" class="col-md-6 hover-input-popup"><label
												data-v-52254644="" class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.Password")}} </label>
											<div data-v-52254644="" class="input-group">
												<div data-v-52254644="" class="el-form-item__content"
													style="width: 100%;">
													<div data-v-52254644="" class="el-input el-input--suffix">
														<input data-v-52254644="" autocomplete="off"
															:placeholder="$t('register.PleaseinputPassword')"
															type="password" v-model="FormData.password"
															class="form-control form--control checkUser"
															style="background: rgba(0, 0, 0, 0); width: 100%;color: #000;">
													</div>
												</div>
											</div>
										</div>
										<div data-v-52254644="" class="col-md-6"><label data-v-52254644=""
												class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.ConfirmPassword")}} </label>
											<div data-v-52254644="" class="input-group">
												<div data-v-52254644="" class="el-form-item__content"
													style="width: 100%;">
													<div data-v-52254644="" class="el-input el-input--suffix">
														<input data-v-52254644="" autocomplete="off"
															:placeholder="$t('register.PleaseinputPassword')"
															type="password" v-model="FormData.re_password"
															class=" form-control form--control checkUser"
															style="background: rgba(0, 0, 0, 0); width: 100%;color: #000;">
													</div>
												</div>
											</div>
										</div>
										<div data-v-52254644="" class="col-md-6 hover-input-popup"><label
												data-v-52254644="" class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.PaymentPassword")}} </label>
											<div data-v-52254644="" class="input-group">
												<div data-v-52254644="" class="el-form-item__content"
													style="width: 100%;">
													<div data-v-52254644="" class="el-input el-input--suffix">
														<input data-v-52254644="" autocomplete="off"
															:placeholder="$t('register.PleaseinputPaymentPassword')"
															type="password" v-model="FormData.fund_password"
															class="checkUser form-control form--control"
															style="background: rgba(0, 0, 0, 0); width: 100%;color: #000;">

													</div>
												</div>
											</div>
										</div>
										<div data-v-52254644="" class="col-md-6"><label data-v-52254644=""
												class="mb-2 t-heading-font"><span data-v-52254644=""
													class="xx">*</span>{{$t("register.ConfirmPaymentPassword")}}</label>
											<div data-v-52254644="" class="input-group">
												<div data-v-52254644="" class="el-form-item__content"
													style="width: 100%;">
													<div data-v-52254644="" class="el-input el-input--suffix">
														<input data-v-52254644="" autocomplete="off"
															:placeholder="$t('register.PleaseinputPaymentPassword')"
															type="password" v-model="FormData.re_fund_password"
															class="checkUser form-control form--control"
															style="background: rgba(0, 0, 0, 0); width: 100%;color: #000;">
													</div>
												</div>
											</div>
										</div>
										<div data-v-52254644="" class="col-md-12">
											<div data-v-52254644="" class="form-group"><label
													data-v-52254644="">{{$t("register.ReferralCode")}}({{$t("register.Optional")}})</label>
												<input data-v-52254644="" type="text" name="referBy"
													v-model="FormData.recommend" autocomplete="off"
													class="form-control form--control" style="color: #000;">
											</div>
										</div>
										<div data-v-52254644="" class="col-md-12">
											<div data-v-52254644="" class="form-group"><label data-v-52254644=""><span
														data-v-52254644=""
														class="xx">*</span>{{$t("register.EnterCaptcha")}}</label>
												<div data-v-52254644="" class="el-form-item__content">
													<div data-v-52254644="" class="code-box">
														<div data-v-52254644="" class="el-input">
															<input data-v-52254644="" type="text" autocomplete="off"
																v-model="FormData.code"
																:placeholder="$t('register.PleaseEnterCaptcha')"
																class="form-control form--control" style="color: #000;">
														</div>
														<img data-v-52254644="" @click="init()" :src="code_image_url"
															class="code-img">
													</div>
												</div>
											</div>
										</div>
										<div data-v-52254644="" class="col-md-12">
											<div data-v-52254644="" class="form-check">
												<input data-v-52254644="" type="checkbox" name="agree"
													id="flexCheckDefault" v-model="checked"
													class="form-check-input custom-form-check-input"> <label
													data-v-52254644="" for="flexCheckDefault"
													class="form-check-label t-heading-font">
													{{$t("register.Iaccept")}} <a data-v-52254644=""
														@click="$router.push('privacy')"
														class="text--base1">{{$t("register.PrivacyandPolicy")}}</a> ,
													<a data-v-52254644="" @click="$router.push('termsService')"
														class="text--base1">{{$t("register.TermsofServices")}}</a></label>
											</div>
										</div>
										<div data-v-52254644="" class="col-12" @click="submit()"><button
												data-v-52254644="" type="button"
												class="btn btn--xl btn--base btn-block">{{$t("register.RegisterNow")}}</button>
										</div>
									</form>
								</div>
								<div data-v-52254644="" class="col-xl-6">
									<form data-v-52254644="" class="row g-3 gy-lg-4 login-form verify-gcaptcha"
										style="min-height: 60rem;">
										<h4 data-v-52254644="" class="my-0">
											{{$t('common.AndroidandApplecompatible')}}
										</h4>
										<div style=" border-radius: 20px;background-color: white;padding: 0 40px;">
											<div style="display: flex;justify-content: center;">
												<!-- <img src="../assets/logo.png" /> -->
													<img src="@/static/ewm.jpg" style="width: 100%;"/>
											</div>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												①: {{$t("register.registerText1")}}
											</h5>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												②: {{$t("register.registerText2")}}
											</h5>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												③: {{$t("register.registerText3")}}
											</h5>

										</div>
									</form>
								</div>

								<div data-v-52254644="" class="col-xl-6" v-show="false">
									<div data-v-52254644="" style="padding: 0px 20px;">
										<!-- <h1 data-v-52254644="" style="color: rgb(0, 0, 0);">
											{{$t("register.registerText")}}
										</h1> -->
										
										<div
											style="border: 1px solid #ccc; border-radius: 20px;background-color: white;padding: 40px 40px;">
											<div style="display: flex;justify-content: center;margin-bottom: 100px;">
												<!-- <img src="../assets/logo.png" /> -->
											</div>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												①: {{$t("register.registerText1")}}
											</h5>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												②: {{$t("register.registerText2")}}
											</h5>
											<h5 data-v-52254644="" style="color: rgb(0, 0, 0);">
												③: {{$t("register.registerText3")}}
											</h5>

										</div>
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
		baseUrl
	} from '@/api/config.js'
	import {
		Register
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
				code_image_url: "",
				checked: true,
				FormData: {
					dest: "1",
					username: "",
					password: "",
					re_password: "",
					smscode: "",
					code: "",
					code_rand: "",
					fund_password: "",
					re_fund_password: "",
					recommend: "",
					email: "",
				}
			}
		},
		mounted() {
			this.init();

			if (this.$route.query.code) {
				this.FormData.recommend = this.$route.query.code
			}
		},
		methods: {
			init() {
				const code_rand = new Date().getTime();
				this.FormData.code_rand = code_rand;
				this.code_image_url = baseUrl + '/api/Account/code' + '?code_rand=' + code_rand;
				// RegisterCode({
				// 	code_rand
				// }).then((res) => {
				// 	console.log(res)
				// 	this.code_image = res;
				// }).catch((res) => {
				// 	console.log(res)

				// });
			},
			submit() {
				if (!this.FormData.username || this.FormData.username === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.PleaseinputUsername'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.email || this.FormData.email === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.Pleaseinputemail'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.password || this.FormData.password === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.PleaseinputPassword'),
						type: 'error'
					});
					return false;
				}
				if (this.FormData.password !== this.FormData.re_password) {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.LoginPasswordEnteredTwice'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.fund_password || this.FormData.fund_password === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.PleaseinputPaymentPassword'),
						type: 'error'
					});
					return false;
				}
				if (this.FormData.fund_password !== this.FormData.re_fund_password) {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.FundPasswordEnteredTwice'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.code || this.FormData.code === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('register.PleaseEnterCaptcha'),
						type: 'error'
					});
					return false;
				}
				Register(this.FormData).then((res) => {
					this.$message({
						showClose: true,
						offset: 20,
						message: res.code_dec,
						type: 'success'
					});
					//记住密码
					localStorage.setItem('username', this.FormData.username);
					localStorage.setItem('password', this.FormData.password);
					localStorage.setItem('checked', true);
					//自动
					localStorage.setItem('token', res.info.token);
					this.$store.commit('setUserInfo', res.info)
					this.$router.push("/dashboard");
				}).catch((res) => {
					console.log(res)
					this.init()
				});
			},
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
	.user-login {
		background-image: url(@/static/images/login_bg2.png);
	}

	/* @media only screen and (min-width:1024px) { */
	.login-aaa {
		padding-top: 8rem;
	}

	/* }
	@media only screen and (max-width:600px) {
		.login-aaa{
			padding-top: 10rem;
		}
	} */
</style>