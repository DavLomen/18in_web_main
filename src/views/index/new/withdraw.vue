<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-78dc8084="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-78dc8084="" class="page-header">
					<div data-v-78dc8084="" class="page-title">{{$t('withdraw.Withdraw')}}</div>
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
				<div data-v-78dc8084="" class="container222">
					<div data-v-78dc8084="" class="balance-box">
						<div data-v-78dc8084="" class="label">{{$t("dashboard.AvailableBalance")}}</div>
						<div data-v-78dc8084="" class="num">USD {{loginUserInfo.balance}}</div>
					</div>
					<div data-v-78dc8084="" class="main">
						<form data-v-78dc8084="" class="el-form form el-form--label-top">
							<div data-v-78dc8084="" class="el-row">
								<div data-v-78dc8084="" class="el-col el-col-24">
									<div data-v-78dc8084="" class="el-form-item is-required is-no-asterisk"><label
											data-v-78dc8084="" for="type" class="el-form-item__label">
											{{$t('withdraw.Withdrawalmethod')}}</label>
										<div data-v-0e24583c="" class="input-group">
											<div data-v-0e24583c="" class="el-form-item__content" style="width: 100%;">
												<el-select v-model="FormData.bank_id" @change="changeSelect"
													style="width: 100%;" :placeholder="$t('common.Pleaseselect')">
													<el-option v-for="(item,index) in list" :key="index"
														:label="item.bank_name" :value="item.id">
														<div style="display: flex;align-items: center;">
															<span
																style="margin-right: 5px;display: flex;align-items: center;">
																<img data-v-0e24583c="" :src="item.qrcode" style="width: 20px;">
															</span>
															<span>{{ item.bank_name }}</span>
															<span style="margin-left: 10px;">{{ item.card_no }}</span>
														</div>
													</el-option>
												</el-select>

											</div>
										</div>
										<!-- <div data-v-78dc8084="" class="el-form-item__content">
											<div data-v-78dc8084="" class="el-select">
												<div data-v-78dc8084="" class="el-input el-input--suffix">
													<div data-v-78dc8084="" class="el-input__inner">
														<div data-v-78dc8084=""><span data-v-78dc8084=""></span>
														</div>
														<div data-v-78dc8084="" class="selectShow"
															style="display: none;"></div>
													</div> <span data-v-78dc8084="" class="el-input__suffix"><span
															data-v-78dc8084="" class="el-input__suffix-inner"><i
																data-v-78dc8084=""
																class="el-select__caret el-input__icon el-icon-arrow-up"></i></span></span>
												</div>
											</div>
										</div> -->
									</div>
								</div>
								<div data-v-78dc8084="" class="el-col el-col-24">
									<div data-v-78dc8084="" class="el-form-item is-required is-no-asterisk"><label
											data-v-78dc8084="" for="amount"
											class="el-form-item__label">{{$t('withdraw.Amount')}}</label>
										<div data-v-78dc8084="" class="el-form-item__content">
											<div data-v-78dc8084="" class="input-group" style="flex-wrap:nowrap;">
												<div data-v-78dc8084="" class="input el-input">
													<input data-v-78dc8084="" v-model="money" type="number"
														autocomplete="off" class="el-input__inner">
												</div>
												<div data-v-78dc8084="" class="sign">USD</div>
											</div>
										</div>
									</div>
								</div>
								<div data-v-78dc8084="" class="el-col el-col-24">
									<div data-v-78dc8084="" class="el-form-item is-required is-no-asterisk"><label
											data-v-78dc8084="" class="el-form-item__label">
											{{$t('withdraw.PaymentPassword')}}</label>
										<div data-v-78dc8084="" class="el-form-item__content">
											<div data-v-78dc8084="" class="el-input el-input--suffix">
												<input v-model="FormData.drawword" data-v-78dc8084="" autocomplete="off"
													placeholder="" type="password" class="el-input__inner"> <span
													data-v-78dc8084="" class="el-input__suffix"><span data-v-78dc8084=""
														class="el-input__suffix-inner"><i data-v-78dc8084=""
															class="van-icon van-icon-eye-o"><!----></i></span></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div data-v-78dc8084="" class="info-list">
							<div data-v-78dc8084="" class="info-item">
								<div data-v-78dc8084="" class="label">{{$t('withdraw.Handlingfee')}}</div>
								<div data-v-78dc8084="" class="value">{{BackData?BackData.setting.withdraw_fee:'' }} USD
								</div>
							</div>
							<div data-v-78dc8084="" class="info-item">
								<div data-v-78dc8084="" class="label">{{$t('withdraw.ConversionRate')}}</div>
								<div data-v-78dc8084="" class="value">1USD ≈ {{bankInfo.rate}}
									<span data-v-78dc8084="">{{(bankInfo.bank_name).split("-")[0]}}</span>
								</div>
							</div>
							<div data-v-78dc8084="" class="info-item">
								<div data-v-78dc8084="" class="label">{{$t('withdraw.Receivable')}}</div>
								<div data-v-78dc8084="" class="value">{{(money*bankInfo.rate).toFixed(8)}}
									<span data-v-78dc8084="">{{(bankInfo.bank_name).split("-")[0]}}</span>
								</div>
							</div>
						</div>
						<div data-v-78dc8084="" class="submit-btn" @click="submit()">{{$t('common.Submit')}}</div>
					</div>
					<div data-v-78dc8084="" class="r-table">
						<div data-v-78dc8084="" class="tr">
							<div data-v-78dc8084="" class="th">{{$t("withdraw.TXID")}}</div>
							<div data-v-78dc8084="" class="th">{{$t("withdraw.WalletAddress")}}</div>
							<div data-v-78dc8084="" class="th">{{$t("withdraw.Amount")}}</div>
							<div data-v-78dc8084="" class="th">{{$t("withdraw.Status")}}</div>
							<div data-v-78dc8084="" class="th">{{$t("withdraw.Time")}}</div>
						</div>
						<div data-v-2bbc49ad="" class="tr" v-for="(item,index) in listArr" :key="index">
							<div data-v-2bbc49ad="" class="td">{{item.dan}}</div>
							<div data-v-2bbc49ad="" class="td">{{item.bank_no_tail}}</div>
							<div data-v-2bbc49ad="" class="td">{{item.money}} USD</div>
							<div data-v-2bbc49ad="" class="td">
								{{item.status_desc}}<span v-if="item.state==2">{{item.remark}}</span>
							</div>
							<div data-v-2bbc49ad="" class="td">{{item.adddate}}</div>

						</div>
						<!-- <div data-v-78dc8084="" class="no-data">No data</div> -->
						<div data-v-2bbc49ad="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>

						<div data-v-2bbc49ad class="pagination-box">
							<el-pagination background layout="prev, pager, next" :total="total"
								@current-change="handleCurrentChange" :current-page="currentPage">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
			
			
			<DaFooterView2></DaFooterView2>
		</div>

	</div>
</template>

<script>
	import {
		baseImageUrl
	} from '@/api/config.js'
	import {
		mapState
	} from 'vuex';
	import {
		getBankCardList,
		draw,
		getDrawRecord
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	export default {
		name: 'depositView',
		components: {
			DaHeaderView2,
			DaFooterView2
		},
		computed: {
			...mapState(['loginUserInfo', 'BackData']),
		},
		data() {
			return {
				is_dropdown: false,
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
				},

				currentPage: 1,
				total: 0,

				listArr: [],
				DrawRecordFormData: {
					page_no: 1,
				},
			};
		},
		mounted() {
			this.init();
			this.initDrawRecord();
		},
		methods: {
			initDrawRecord() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getDrawRecord(this.DrawRecordFormData).then((res) => {
					loading.close();
					const list = res.info
					this.listArr = list;
					this.currentPage = Number(res.data_current_page)
					this.total = res.data_total_nums
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getBankCardList().then((res) => {
					loading.close();
					const list = res.data
					if (list.length == 0) {
						//添加地址 
						this.$alert(this.$t("withdraw.addAddress"), this.$t("message.Message"), {
							dangerouslyUseHTMLString: true
						}).then(() => {
							this.$router.push('/walletAddress')
						}).catch(action => {
							console.log(action)

						});
					} else {
						list.forEach(function(item, index) {
							list[index].qrcode = baseImageUrl + item.qrcode;
						});
						this.list = list;
						
						this.bankInfo = list[0]
						this.FormData.bank_id = list[0].id
					}

				}).catch((res) => {
					loading.close();
					console.log('err', res)
					//添加地址
					this.$alert(this.$t("withdraw.addAddress"), this.$t("message.Message"), {
						dangerouslyUseHTMLString: true,
						customClass:'asdassda'
					}).then(() => {
						this.$router.push('/walletAddress')
					}).catch(action => {
						console.log(action)
					
					});
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
					// this.initDrawRecord();
					
					window.location.reload()
				}).catch((res) => {
					FormData.extend = {
						pix_type: "",
						pix_value: "",
						account_type: ""
					}
					console.log('err', res)
				});
				console.log('submit')
			},
			handleCurrentChange(val) {
				this.listArr = [];
				this.DrawRecordFormData.page_no = val;
				this.initDrawRecord();
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style>

	/* 手机端样式 - 当屏幕宽度小于768px时应用 */
	@media (max-width: 767px) {
		.asdassda{
			width: 90%;
		}

		
	}
</style>