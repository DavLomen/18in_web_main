<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>


					<div data-v-0e24583c="" class="banner">
						<div data-v-0e24583c="" class="banner__content">
							<div data-v-0e24583c="" class="container">
								<div data-v-0e24583c="" class="row g-3 justify-content-center">
									<div data-v-0e24583c="" class="col-lg-10 text-center">
										<h2 data-v-0e24583c="" class="m-0 banner-title">{{$t('settings.WalletAddress')}}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section data-v-124760a0="" class="section">
						<div data-v-124760a0="" class="container">
							<div data-v-124760a0="" class="row justify-content-center mt-4">
								<div data-v-124760a0="" class="col-md-8">
									<div data-v-124760a0="" class="card custom--card">
										<form data-v-124760a0="" class="register">
											<div data-v-124760a0="" class="card-body">
												<div data-v-124760a0="" class="form-group"><label
														data-v-124760a0="" style="color: white;">{{$t('settings.Currency')}}</label>
													<div data-v-124760a0="" class="input-group">
														<div data-v-124760a0="" class="el-form-item__content"
															style="width: 100%;">
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

														</div>
													</div>
												</div>
												<div data-v-124760a0="" class="form-group">
													<label data-v-124760a0=""
														for="wallet_address" style="color: white;">{{$t('settings.WalletAddress')}}</label>
													<input data-v-124760a0="" id="wallet_address" type="text"
														name="wallet_address" autocomplete="off" style="color: #000;"
														:placeholder="$t('settings.padd')" v-model="FormData.card_no"
														class="form--control form-control">
												</div>
											</div>
											<div data-v-124760a0="" class="card-footer"><button data-v-124760a0=""
													type="button" class="btn btn--base btn-block"
													@click="submit()">{{$t('common.Submit')}}</button></div>
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
		mapState
	} from 'vuex';
	import {
		AddBankCard
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'walletAddressView',
		components: {
			DaHeaderView,
			FooterView
		},
		computed: {
			...mapState(['BackData']),
		},
		data() {
			return {
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
			this.initBackData();
		},
		methods: {
			initBackData() {
				if (this.BackData) {
					this.options = this.BackData.BanksList;
					this.FormData.bank_id = this.BackData.BanksList[0].bank_id;
				}
			},

			submit() {
				if (!this.FormData.card_no || this.FormData.card_no === "") {
					this.$message({
							showClose:true,
							offset:750,
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
							showClose:true,
							offset:750,
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