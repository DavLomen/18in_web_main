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
										<h2 data-v-0e24583c="" class="m-0 banner-title">{{$t('withdraw.Withdraw')}}</h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section data-v-0e24583c="" class="section">
						<div data-v-0e24583c="" class="container">
							<div data-v-0e24583c="" class="row justify-content-center">
								<div data-v-0e24583c="" class="col-md-8">
									<div data-v-0e24583c="" class="card custom--card">
										<form data-v-0e24583c="">
											<div data-v-0e24583c="" class="card-body">
												<div data-v-0e24583c="" class="form-group"><label
														data-v-0e24583c="" style="color: white;">{{$t('withdraw.Withdrawalmethod')}}</label>
													<div data-v-0e24583c="" class="input-group">
														<div data-v-0e24583c="" class="el-form-item__content"
															style="width: 100%;">
															<el-select v-model="FormData.bank_id" @change="changeSelect"
																style="width: 100%;"
																:placeholder="$t('common.Pleaseselect')">
																<el-option v-for="(item,index) in list" :key="index"
																	:label="item.bank_name" :value="item.id">
																	<div style="display: flex;align-items: center;">
																		<span
																			style="margin-right: 5px;display: flex;align-items: center;">
																			<img data-v-0e24583c=""
																				:src="'./static/images/'+item.bank_name+'.png'"
																				style="width: 20px;">
																		</span>
																		<span>{{ item.bank_name }}</span>
																		<span
																			style="margin-left: 10px;">{{ item.card_no }}</span>
																	</div>
																</el-option>
															</el-select>

														</div>
													</div>
												</div>
												<div data-v-0e24583c="" class="form-group"><label
														data-v-0e24583c="" style="color: white;">{{$t('withdraw.Amount')}}</label>
													<div data-v-0e24583c="" class="input-group">
														<input v-model="money" data-v-0e24583c="" type="number"
															name="amount" autocomplete="off" style="color: #000;"
															class="form-control form--control"> <span data-v-0e24583c=""
															class="input-group-text">USDT</span>
													</div>
												</div>
												<div data-v-0e24583c="" class="form-group"><label
														data-v-0e24583c="" style="color: white;">{{$t('withdraw.PaymentPassword')}}</label>
													<div data-v-0e24583c="" class="input-group">
														<div data-v-0e24583c="" class="el-form-item__content"
															style="width: 100%;">
															<div data-v-0e24583c="" class="el-input el-input--suffix">
																<input data-v-0e24583c="" autocomplete="off"
																	placeholder="" type="password"
																	class="el-input__inner" v-model="FormData.drawword"
																	style="background: rgba(0, 0, 0, 0); width: 100%;color: white;">
																<span data-v-0e24583c="" class="el-input__suffix"><span
																		data-v-0e24583c=""
																		class="el-input__suffix-inner">
																	<!-- 	<i data-v-0e24583c=""
																			class="van-icon van-icon-closed-eye"></i> -->
																	</span></span>
															</div>
														</div>
													</div>
												</div>
												<div data-v-0e24583c="" class="mt-3">
													<ul data-v-0e24583c="" class="list-group text-center">
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c="">{{$t('withdraw.Handlingfee')}}</span>
															<span data-v-0e24583c=""><span data-v-0e24583c=""
																	class="charge font-weight-bold">{{BackData?BackData.setting.withdraw_fee:'' }}</span>
																USDT</span>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c="">{{$t('withdraw.ConversionRate')}}</span>
															<div data-v-0e24583c="">1USDT ≈ {{bankInfo.rate}} <span
																	data-v-0e24583c="">{{bankInfo.bank_name}}</span>
															</div>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c="">{{$t('withdraw.Receivable')}}</span>
															<div data-v-0e24583c="" class="value">
																{{(money*bankInfo.rate).toFixed(8)}} <span
																	data-v-0e24583c="">{{bankInfo.bank_name}}</span>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div data-v-0e24583c="" class="card-footer"><button data-v-0e24583c=""
													type="button" class="btn btn--base btn-block"
													@click="submit()">{{$t('common.Submit')}}</button></div>
											<div data-v-0e24583c="" style="padding: 1rem; color: rgb(11, 175, 54);">
												{{$t('withdraw.t1')}}${{BackData?BackData.setting.min_w:''}}
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
		mapState
	} from 'vuex';
	import {
		getBankCardList,
		draw
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'depositView',
		components: {
			DaHeaderView,
			FooterView
		},
		computed: {
			...mapState(['BackData']),
		},
		data() {
			return {
				bankInfo: {
					bank_branch_name: "",
					bank_name: "",
					card_no: "",
					id: 0,
					name: "",
					rate: 0,
					remark: ""
				},
				list: [],
				money: '',
				FormData: {
					draw_type: 'bank',
					user_bank_id: '',
					draw_money: 0,
					// ifsc: drawword: 11
					drawword: '',
					bank_id: '',
					pix_value: '',
					extend: {
						pix_type: "",
						pix_value: "",
						account_type: ""
					}
				}
			};
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getBankCardList().then((res) => {
					loading.close();
					const list = res.data
					this.list = list;
					this.bankInfo = list[0]
					this.FormData.bank_id = list[0].id
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			changeSelect(id) {
				var that = this;
				this.list.forEach(function(item) {
					if (item.id == id) {
						that.bankInfo = item;
					}
				});
				console.log(that.bankInfo)
			},
			submit() {
				if (this.money <= 0) {
					this.$message({
						showClose: true,
						
						message: this.$t('withdraw.qsrtxje'),
						type: 'error'
					});
					return false;
				}
				if (!this.FormData.drawword || this.FormData.drawword === "") {
					this.$message({
						showClose: true,
						
						message: this.$t('common.PleaseEnterPaymentPassword'),
						type: 'error'
					});
					return false;
				}

				var FormData = this.FormData;
				FormData.draw_money = this.money;
				FormData.user_bank_id = this.bankInfo.id;
				FormData.extend.pix_value = this.bankInfo.card_no;
				FormData.extend = JSON.stringify(FormData.extend);
				console.log(FormData)
				draw(FormData).then((res) => {
					this.$message({
						showClose: true,
						
						message: res.code_dec,
						type: 'success'
					});
				}).catch((res) => {
					FormData.extend = {
						pix_type: "",
						pix_value: "",
						account_type: ""
					}
					console.log('err', res)
				});
				console.log('submit')
			}
		}
	}
</script>
<style>

</style>