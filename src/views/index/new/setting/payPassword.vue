<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-2fcabc7a="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-2fcabc7a="" class="page-header">
					<div data-v-2fcabc7a="" class="page-title">{{$t("settings.PaymentPassword")}}</div>
					<div data-v-6b48c1cb="" class="el-dropdown">

						<div data-v-6b48c1cb="" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button"
							tabindex="0" x-placement="bottom-end" class="right-icon el-dropdown-selfdefine"
							@click="is_dropdown=!is_dropdown"><i data-v-6b48c1cb="" class="el-icon-user"></i></div>
						<ul data-v-6b48c1cb="" id="dropdown-menu-8265" class="el-dropdown-menu el-popper"
							v-show="is_dropdown">
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/walletAddress')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-wallet"></i>
								{{$t('common.WalletAddress')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/loginPassword')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-lock"></i>
								{{$t('common.LoginPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/payPassword')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-lock"></i>
								{{$t('common.PaymentPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$store.dispatch('logout')" style="font-weight: bold;"><i data-v-6b48c1cb=""
									class="el-icon-switch-button"></i>
								{{$t('common.Logout')}}
							</li>
							<div data-v-6b48c1cb="" x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
						</ul>
					</div>
				</div>
				<div data-v-2fcabc7a="" class="container222">
					<form data-v-2fcabc7a="" class="el-form form el-form--label-top">
						<div data-v-2fcabc7a="" class="el-row">
							<div data-v-2fcabc7a="" class="el-col el-col-24">
								<div data-v-2fcabc7a="" class="el-form-item is-required is-no-asterisk"><label
										data-v-2fcabc7a="" for="originalPassword" class="el-form-item__label">
										{{$t("settings.CurrentPassword")}}
									</label>
									<div data-v-2fcabc7a="" class="el-form-item__content">
										<div data-v-2fcabc7a="" class="el-input el-input--suffix">
											<input v-model="FormData.o_payword" data-v-2fcabc7a="" type="password"
												autocomplete="off" placeholder="" class="el-input__inner"> <span
												data-v-2fcabc7a="" class="el-input__suffix"><span data-v-2fcabc7a=""
													class="el-input__suffix-inner"></span></span>
										</div>
									</div>
								</div>
							</div>
							<div data-v-2fcabc7a="" class="el-col el-col-24">
								<div data-v-2fcabc7a="" class="el-form-item is-required is-no-asterisk"><label
										data-v-2fcabc7a="" for="password" class="el-form-item__label">
										{{$t("settings.NewPassword")}}
									</label>
									<div data-v-2fcabc7a="" class="el-form-item__content">
										<div data-v-2fcabc7a="" class="el-input el-input--suffix">
											<input v-model="FormData.n_payword" data-v-2fcabc7a="" type="password"
												autocomplete="off" placeholder="" class="el-input__inner"> <span
												data-v-2fcabc7a="" class="el-input__suffix"><span data-v-2fcabc7a=""
													class="el-input__suffix-inner"></span></span>
										</div>
									</div>
								</div>
							</div>
							<div data-v-2fcabc7a="" class="el-col el-col-24">
								<div data-v-2fcabc7a="" class="el-form-item is-no-asterisk"><label data-v-2fcabc7a=""
										for="confirmPassword" class="el-form-item__label">
										{{$t("settings.ConfirmPassword")}}
									</label>
									<div data-v-2fcabc7a="" class="el-form-item__content">
										<div data-v-2fcabc7a="" class="el-input el-input--suffix">
											<input v-model="FormData.r_payword" data-v-2fcabc7a="" type="password"
												autocomplete="off" placeholder="" class="el-input__inner"> <span
												data-v-2fcabc7a="" class="el-input__suffix"><span data-v-2fcabc7a=""
													class="el-input__suffix-inner"></span></span>
										</div>
									</div>
								</div>
							</div>
							<div data-v-2fcabc7a="" class="el-col el-col-24">
								<div data-v-2fcabc7a="" class="el-form-item is-no-asterisk">
									<div data-v-2fcabc7a="" class="el-form-item__content">
										<div data-v-2fcabc7a="" class="submit-btn" @click="submit()">
											{{$t("settings.Confirmchanges")}}</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<DaFooterView2></DaFooterView2>
		</div>
	</div>
</template>

<script>
	import {
		setuserinfo
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	
	export default {
		name: 'payPasswordView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		data() {
			return {
				is_dropdown:false,
				FormData: {
					o_payword: '',
					n_payword: '',
					r_payword: '',
				},

			};
		},
		mounted() {},
		methods: {

			submit() {
				if (!this.FormData.o_payword || this.FormData.o_payword === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('settings.PleaseEnterTheCurrentPassword'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.n_payword || this.FormData.n_payword === "") {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('settings.PleaseEnterNewPassword'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.r_payword || this.FormData.r_payword === "") {
					this.$message({
						showClose: true,
						offset: 20,
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
						offset: 20,
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