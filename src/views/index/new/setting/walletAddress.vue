<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-956aabf0="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-956aabf0="" class="page-header">
					<div data-v-956aabf0="" class="page-title">
						{{$t('settings.WalletAddress')}}
					</div>
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
				<div data-v-956aabf0="" class="container222">
					<form data-v-956aabf0="" class="el-form form el-form--label-top">
						<div data-v-956aabf0="" class="el-row">
							<div data-v-956aabf0="" class="el-col el-col-24">
								<div data-v-956aabf0="" class="el-form-item is-required is-no-asterisk"><label
										data-v-956aabf0="" for="type" class="el-form-item__label">
										{{$t('settings.Currency')}}
									</label>
									<div data-v-0e24583c="" class="input-group" style="width: 100%;">
										<div style="border: 1px solid #ccc;width: 14rem;border-radius: 50px;
										display: flex;justify-content: space-between;height: 50px;align-items: center;
										margin: 1rem 0.5rem;padding: 0 10px; font-size: 12px;"
											:style="(FormData && FormData.bank_id==item.bank_id) ? 'border: 1px solid #0d6efd;' : 'border: 1px solid #ccc;'"
											v-for="item in options" :key="item.bank_id" @click="changeSelect(item)">
											<div style="">
												<img data-v-0e24583c="" :src="require(`@/static/images/Icon/${item.bank}.png`)" style="width: 30px;">
												<!-- <img data-v-0e24583c="" :src="'./static/images/'+item.bank+'.png'" style="width: 30px;"> -->
											</div>
											<span>{{ item.bank }}</span>
										</div>
									</div>
									<div data-v-956aabf0="" class="el-form-item__content">

										<div data-v-956aabf0="" class="el-select">

											<!-- <div data-v-956aabf0="" class="el-input el-input--suffix">
												<el-select v-model="FormData.bank_id" style="width: 100%;"
													:placeholder="$t('common.Pleaseselect')">
													<el-option v-for="item in options" :key="item.bank_id"
														:label="item.bank" :value="item.bank_id">
														<div style="display: flex;align-items: center;">
															<span
																style="margin-right: 5px;display: flex;align-items: center;">
																<img data-v-0e24583c=""
																	:src="'./static/images/'+item.bank+'.png'"
																	style="width: 20px;">
															</span>
															<span>{{ item.bank }}</span>
														</div>
													</el-option>
												</el-select>
											</div> -->
										</div>
									</div>
								</div>
							</div>
							<div data-v-956aabf0="" class="el-col el-col-24">
								<div data-v-956aabf0="" class="el-form-item is-required is-no-asterisk"><label
										data-v-956aabf0="" for="address"
										class="el-form-item__label">{{$t('settings.WalletAddress')}}</label>
									<div data-v-956aabf0="" class="el-form-item__content">
										<div data-v-956aabf0="" class="el-input"><input data-v-956aabf0="" type="text"
												autocomplete="off" :placeholder="$t('settings.padd')"
												v-model="FormData.card_no" class="el-input__inner"></div>
									</div>
								</div>
							</div>
							<div data-v-956aabf0="" class="el-col el-col-24">
								<div data-v-956aabf0="" class="el-form-item is-no-asterisk">
									<div data-v-956aabf0="" class="el-form-item__content">
										<div data-v-956aabf0="" class="submit-btn" @click="submit()">
											{{$t('common.Submit')}}</div>
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
		mapState
	} from 'vuex';
	import {
		AddBankCard
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	
	export default {
		name: 'walletAddressView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		computed: {
			...mapState(['BackData']),
		},
		data() {
			return {
				is_dropdown: false,
				selectedValue: '',
				FormData: {
					name: '',
					bank_id: '',
					bank_name: '',
					card_no: '',
				},
				options: [
					// {
					// 	value: '1',
					// 	url: 'https://HRMiner.com//xml/static/images/BTC.png',
					// 	label: '选项1'
					// },
					// {
					// 	value: '2',
					// 	url: 'https://HRMiner.com//xml/static/images/BTC.png',
					// 	label: '选项2'
					// },
					// {
					// 	value: '3',
					// 	url: 'https://HRMiner.com//xml/static/images/BTC.png',
					// 	label: '选项3'
					// },
				],
			};
		},
		watch: {
			BackData() {
				this.initBackData();
			}
		},
		mounted() {
			this.$store.dispatch('getBackData')
			this.initBackData();
		},
		methods: {
			changeSelect(item) {
				this.FormData.bank_id = item.bank_id
				// var that = this;
				// this.list.forEach(function(item) {
				// 	if (item.id == id) {
				// 		that.payInfo = item;
				// 	}
				// });
				// console.log(that.payInfo)
			},
			initBackData() {
				if (this.BackData) {
					const bankList = this.BackData.BanksList;
					this.options = bankList;
					this.FormData.bank_id = this.BackData.BanksList[0].bank_id;
				}
			},

			submit() {
				if (!this.FormData.card_no || this.FormData.card_no === "") {
					this.$message({
						showClose: true,

						message: this.$t('settings.padd'),
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
				this.options.forEach(function(item) {
					if (item.bank_id == FormData.bank_id) {
						FormData.bank_name = item.bank
					}
				});
				console.log(FormData)
				AddBankCard(FormData).then((res) => {
					loading.close();
					this.$message({
						showClose: true,

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