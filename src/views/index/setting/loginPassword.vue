<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>

					<div data-v-63e531e4="" class="banner">
						<div data-v-63e531e4="" class="banner__content">
							<div data-v-63e531e4="" class="container">
								<div data-v-63e531e4="" class="row g-3 justify-content-center">
									<div data-v-63e531e4="" class="col-lg-10 text-center">
										<h2 data-v-63e531e4="" class="m-0 banner-title">{{$t('settings.LoginPassword')}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-63e531e4="" class="section">
						<div data-v-63e531e4="" class="container">
							<div data-v-63e531e4="" class="row justify-content-center mt-4">
								<div data-v-63e531e4="" class="col-md-8">
									<div data-v-63e531e4="" class="card custom--card">
										<form data-v-63e531e4="" class="register">
											<div data-v-63e531e4="" class="card-body">
												<div data-v-63e531e4="" class="form-group hover-input-popup"><label
														data-v-63e531e4="" style="color: white;"
														for="passwordo">{{$t('settings.CurrentPassword')}}</label>
													<input data-v-63e531e4="" id="passwordo" type="password"
														style="color: #000;" v-model="FormData.o_password"
														name="password" autocomplete="off"
														class="form--control form-control">
												</div>
												<div data-v-63e531e4="" class="form-group hover-input-popup"><label
														data-v-63e531e4="" style="color: white;"
														for="password">{{$t('settings.NewPassword')}}</label>
													<input data-v-63e531e4="" id="password" type="password"
														style="color: #000;" name="password" autocomplete="off"
														v-model="FormData.n_password"
														class="form--control form-control">
												</div>
												<div data-v-63e531e4="" class="form-group"><label data-v-63e531e4=""
														for="confirm_password"
														style="color: white;">{{$t('settings.ConfirmPassword')}}</label>
													<input data-v-63e531e4="" id="confirm_password" type="password"
														name="password_confirmation" autocomplete="off"
														v-model="FormData.r_password" style="color: #000;"
														class="form--control form-control">
												</div>
											</div>
											<div data-v-63e531e4="" class="card-footer">
												<button data-v-63e531e4="" type="button" @click="submit()"
													class="btn btn--base btn-block">Confirm
													changes</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>

					<FooterView></FooterView>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		setuserinfo
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'loginPasswordView',
		components: {
			DaHeaderView,
			FooterView
		},
		data() {
			return {
				FormData: {
					o_password: '',
					n_password: '',
					r_password: '',
				},

			};
		},
		mounted() {},
		methods: {

			submit() {
				if (!this.FormData.o_password || this.FormData.o_password === "") {
					this.$message({
						showClose: true,
						offset: 750,
						message: this.$t('settings.PleaseEnterTheCurrentPassword'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.n_password || this.FormData.n_password === "") {
					this.$message({
						showClose: true,
						offset: 750,
						message: this.$t('settings.PleaseEnterNewPassword'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.r_password || this.FormData.r_password === "") {
					this.$message({
						showClose: true,
						offset: 750,
						message: this.$t('settings.PleaseEnterConfirmationPassword'),
						type: 'error'
					});
					return false;
				}
				const loading = this.$loading({
					lock: true,
					text: this.$t('common.Submitting') + '...',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				var FormData = this.FormData;

				setuserinfo(FormData).then((res) => {
					loading.close();
					this.$message({
						showClose: true,
						offset: 750,
						message: res.code_dec,
						type: 'success'
					});
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			}
		}
	}
</script>
<style>

</style>