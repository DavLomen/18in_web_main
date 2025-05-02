<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>
			<div data-v-2bbc49ad="" class="container222 app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-2bbc49ad="" class="page-header">
					<div data-v-2bbc49ad="" class="page-title">{{$t("deposit.Deposit")}}</div>
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
				<div data-v-2bbc49ad="" class="container222" v-show="type==1">
					<div data-v-2bbc49ad="" class="balance-box">
						<div data-v-2bbc49ad="" class="label">{{$t("dashboard.AvailableBalance")}}</div>
						<div data-v-2bbc49ad="" class="num">USD {{loginUserInfo.balance}}</div>
					</div>
					<div data-v-2bbc49ad="" class="main">
						<form data-v-2bbc49ad="" class="el-form form el-form--label-top">
							<div data-v-2bbc49ad="" class="el-row">
								<div data-v-2bbc49ad="" class="el-col el-col-24">
									<div data-v-2bbc49ad="" class="el-form-item is-required is-no-asterisk"><label
											data-v-2bbc49ad="" for="type" class="el-form-item__label">
											{{$t('deposit.Gateway')}}</label>
										<div data-v-0e24583c="" class="input-group" style="width: 100%;">
											<div style="border: 1px solid #ccc;width: 14rem;border-radius: 50px;
												display: flex;justify-content: space-between;height: 50px;align-items: center;
												margin: 1rem 0.5rem;padding: 0 10px; font-size: 12px;"
												:style="(payInfo && payInfo.id==item.id) ? 'border: 1px solid #0d6efd;' : 'border: 1px solid #ccc;'"
												v-for="item in list" :key="item.id" @click="changeSelect(item)">
												<div style="">
													<img data-v-0e24583c="" :src="item.qrcode" style="width: 30px;">
												</div>
												<span>{{ item.name }}</span>
											</div>
											<!-- <div data-v-0e24583c="" class="el-form-item__content" style="width: 100%;">
												<el-select v-model="FormData.pay_id" @change="changeSelect"
													style="width: 100%;" :placeholder="$t('common.Pleaseselect')">
													<el-option v-for="item in list" :key="item.id" :label="item.name"
														:value="item.id">
														<div style="display: flex;align-items: center;">
															<span
																style="margin-right: 5px;display: flex;align-items: center;">
																<img data-v-0e24583c="" :src="item.qrcode"
																	style="width: 20px;">
															</span>
															<span>{{ item.name }}</span>
														</div>
													</el-option>
												</el-select>

											</div> -->
										</div>
									</div>
								</div>
								<div data-v-2bbc49ad="" class="el-col el-col-24">
									<div data-v-2bbc49ad="" class="el-form-item is-required is-no-asterisk"><label
											data-v-2bbc49ad="" for="amount"
											class="el-form-item__label">{{$t('deposit.Amount')}}</label>
										<div data-v-2bbc49ad="" class="el-form-item__content">
											<div data-v-2bbc49ad="" class="input-group" style="flex-wrap:nowrap;">
												<div data-v-2bbc49ad="" class="input el-input">
													<input v-model="money" data-v-2bbc49ad="" type="number"
														autocomplete="off" class="el-input__inner">
												</div>
												<div data-v-2bbc49ad="" class="sign">USD</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div data-v-2bbc49ad="" class="info-list">
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.Limit')}}</div>
								<div data-v-2bbc49ad="" class="value">{{payInfo.minPrice}} USD - {{payInfo.maxPrice}}
									USD</div>
							</div>
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.Handlingfee')}}</div>
								<div data-v-2bbc49ad="" class="value">{{payInfo.fee}}%</div>
							</div>
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.Payable')}}</div>
								<div data-v-2bbc49ad="" class="value">{{money>0 ? money : 0}} USD</div>
							</div>
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.ConversionRate')}}</div>
								<div data-v-2bbc49ad="" class="value">1USD ≈ {{payInfo.rate}} <span
										data-v-2bbc49ad="">{{payInfo.bank_code}}</span></div>
							</div>
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.PayableAmount')}}</div>
								<div data-v-2bbc49ad="" class="value">{{money>0 ? (money*payInfo.rate).toFixed(8) : 0}}
									<span data-v-2bbc49ad="">{{payInfo.bank_code}}</span>
								</div>
							</div>
						</div>
						<div data-v-2bbc49ad="" class="submit-btn" @click="submit()">{{$t('common.Submit')}}</div>
						<div data-v-2bbc49ad="" style="padding: 2rem 1rem; font-size: 1.5rem; color: red;">
							{{$t('deposit.t1')}} ${{payInfo.c_min}}
						</div>
					</div>

					<div data-v-2bbc49ad="" class="r-table">
						<div data-v-2bbc49ad="" class="tr">
							<div data-v-2bbc49ad="" class="th">{{$t("deposit.TXID")}}</div>
							<div data-v-2bbc49ad="" class="th">{{$t("deposit.DepositMethod")}}</div>
							<div data-v-2bbc49ad="" class="th">{{$t("deposit.Amount")}}</div>
							<div data-v-2bbc49ad="" class="th">{{$t("deposit.Status")}}</div>
							<div data-v-2bbc49ad="" class="th">{{$t("deposit.Time")}}</div>
							<!-- <div data-v-2bbc49ad="" class="th">Details</div> -->
						</div>
						<div data-v-2bbc49ad="" class="tr" v-for="(item,index) in listArr" :key="index">
							<div data-v-2bbc49ad="" class="td">{{item.dan}}</div>
							<div data-v-2bbc49ad="" class="td">{{item.pay_type}}</div>
							<div data-v-2bbc49ad="" class="td">USD{{item.money}}</div>
							<div data-v-2bbc49ad="" class="td">
								{{item.status_desc}}<span v-if="item.status==2">{{item.remarks}}</span>
							</div>
							<div data-v-2bbc49ad="" class="td">{{item.adddate}}</div>
							<!-- <div data-v-2bbc49ad="" class="td">
								<div data-v-2bbc49ad="" class="detail-btn"><i data-v-2bbc49ad=""
										class="el-icon-monitor"></i></div>
							</div> -->
						</div>
						<div data-v-2bbc49ad="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>

						<div data-v-2bbc49ad class="pagination-box">
							<el-pagination background layout="prev, pager, next" :total="total"
								@current-change="handleCurrentChange" :current-page="currentPage">
							</el-pagination>
						</div>
					</div>

					<!-- 		<div data-v-2bbc49ad="" class="pagination-box">
						<div data-v-2bbc49ad="" class="pagination-pc el-pagination is-background"><button
								data-v-2bbc49ad="" type="button" disabled="disabled" class="btn-prev"><i
									data-v-2bbc49ad="" class="el-icon el-icon-arrow-left"></i></button>
							<ul data-v-2bbc49ad="" class="el-pager">
								<li data-v-2bbc49ad="" class="number active">1</li>
							</ul> <button data-v-2bbc49ad="" disabled="disabled" type="button" class="btn-next"><i
									data-v-2bbc49ad="" class="el-icon el-icon-arrow-right"></i></button>
						</div>
						<div data-v-2bbc49ad="" class="pagination-h5 el-pagination is-background"><button
								data-v-2bbc49ad="" type="button" disabled="disabled" class="btn-prev"><i
									data-v-2bbc49ad="" class="el-icon el-icon-arrow-left"></i></button>
							<ul data-v-2bbc49ad="" class="el-pager">
								<li data-v-2bbc49ad="" class="number active">1</li>
							</ul> <button data-v-2bbc49ad="" disabled="disabled" type="button" class="btn-next"><i
									data-v-2bbc49ad="" class="el-icon el-icon-arrow-right"></i></button>
						</div>
					</div> -->
				</div>




				<div data-v-2bbc49ad="" class="container222" v-show="type==2">
					<div data-v-2bbc49ad="" class="box" style="position: relative;">
						<div data-v-2bbc49ad="" class="close" @click="type = 1"
							style="position: absolute; right: 5px; top: 5px; z-index: 999;"><i data-v-2bbc49ad=""
								class="van-icon van-icon-cross"
								style="color: rgb(0, 0, 0); font-size: 30px;"><!----></i></div>
						<div data-v-2bbc49ad="" class="title">
							{{$t('deposit.Youhaverequested')}}
							<span data-v-2bbc49ad="" style="color: rgb(40, 199, 111);">USD {{money}}</span>,
							{{$t('deposit.Pleasepay')}}
							<span data-v-2bbc49ad=""
								style="color: rgb(40, 199, 111);">{{(money*payInfo.rate).toFixed(8)}} <span
									data-v-2bbc49ad="">{{payInfo.bank_code}}</span></span>
							{{$t('deposit.forsuccessfulpayment')}}
						</div>
						<div data-v-2bbc49ad="" class="desc">
							{{$t('deposit.tx_text1')}}
						</div>
						<div data-v-2bbc49ad="" class="info-list">
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('common.WalletAddress')}}</div>
								<div data-v-2bbc49ad="" class="input-group" style="flex-wrap: nowrap;">
									<input data-v-2bbc49ad="" :value="payData.rececode" disabled="disabled"
										class="disabled-input">
									<div data-v-2bbc49ad="" @click="copyToClipboard(payData.rececode)"
										class="copy-btn copy"><i data-v-2bbc49ad="" class="el-icon-document-copy"></i>
									</div>
								</div>
							</div>
							<div data-v-2bbc49ad="" class="info-item">
								<div data-v-2bbc49ad="" class="label">{{$t('deposit.Uploadtransferscreenshot')}} </div>
								<div data-v-2bbc49ad="" class="upload-box">
									<el-upload class="avatar-uploader" action="https://hrminer.net/api/User/UploadImg"
										:data="updateData" name="image" :show-file-list="false"
										:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
										<img v-if="imageUrl" :src="imageUrl" class="avatar">
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>
									</el-upload>
									
									<div style="padding: 0 30px;">
										<h5 style="color: red;">{{$t('common.csdesc')}}</h5>
									</div>
									<!-- <div data-v-2bbc49ad="" tabindex="0" class="el-upload el-upload--text">
										<div data-v-2bbc49ad="" class="upload van-uploader">
											<div class="van-uploader__wrapper">
												<div class="van-uploader__input-wrapper">
													<div data-v-2bbc49ad="" class="upload"><i data-v-2bbc49ad=""
															class="el-icon-upload"></i></div><input type="file"
														accept="image/*" class="van-uploader__input">
												</div>
											</div>
										</div>
									</div>
									<div data-v-2bbc49ad="" style="padding: 1rem; font-size: 1.5rem;">
										After successful payment, please save the payment screenshot to your mobile
										phone and upload the screenshot to the page before submitting the order. If the
										screenshot is unclear or wrong, the recharge will not be completed. <span
											data-v-2bbc49ad="" style="color: rgb(187, 45, 59);"> The screenshot must
											contain the transaction hash, otherwise the system cannot recognize
											it.</span></div> -->
								</div>
							</div>
						</div>
						<div data-v-2bbc49ad="" class="submit-btn" @click="submitDeposit()">{{$t('common.Submit')}}
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
		mapState
	} from 'vuex';
	import {
		baseImageUrl
	} from '@/api/config.js'
	import {
		getRechargetype,
		GetPayBankCode,
		newRechargeOrder,
		getRechargeRecord
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
			...mapState(['loginUserInfo']),
		},
		data() {
			return {
				is_dropdown: false,
				type: 1,
				list: [],
				RechargeTypeFormData: {
					type: 'app'
				},
				FormData: {
					pay_id: '',
				},

				money: '',
				payInfo: {
					fee: '',
					// fixed: '',
					// id: '',
					// maxPrice: '',
					// minPrice: '',
					// mode: '',
					// name: '',
					// qrcode: '',
					// rate: '',
					// submitUrl: '',
					bank_code: "",
					bank_name: "",
					c_max: '',
					c_min: '',
					q_max: '',
					q_min: '',
					qrcode: "",
					rate: "",
				},

				//支付信息
				payData: {
					rececode: "",
					recename: "",
				},
				FormDataSubmit: {
					money: '',
					name: '',
					recharge_id: '',
					screenshots: [],
				},
				updateData: {
					token: localStorage.getItem("token"),
					type: 4
					// image: （二进制）
				},
				imageUrl: '',


				currentPage: 1,
				total: 0,
				listArr: [],
				RechargeFormData: {
					page_no: 1,
				},
			};
		},
		mounted() {
			this.init();
			this.initGetRechargeRecord();
		},
		methods: {
			initGetRechargeRecord() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getRechargeRecord(this.RechargeFormData).then((res) => {
					loading.close();
					const list = res.info
					this.listArr = list;
					this.currentPage = Number(res.data_current_page)
					this.total = res.data_total_nums
				}).catch((res) => {
					loading.close();
					console.log('err111', res)
				});
			},
			handleCurrentChange(val) {
				this.listArr = [];
				this.RechargeFormData.page_no = val;
				this.initGetRechargeRecord();
				console.log(`当前页: ${val}`);
			},
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getRechargetype(this.RechargeTypeFormData).then((res) => {
					loading.close();
					const list = res.info
					list.forEach(function(item, index) {
						list[index].qrcode = baseImageUrl + item.qrcode;
					});
					this.list = list;
					this.changeSelect(list[0])
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			changeSelect(item) {
				this.FormData.pay_id = item.id
				this.payInfo = item;
				this.payInfo.fee = 0
				// var that = this;
				// this.list.forEach(function(item) {
				// 	if (item.id == id) {
				// 		that.payInfo = item;
				// 	}
				// });
				// console.log(that.payInfo)
			},
			submit() {
				if (this.money <= 0) {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('deposit.qsrczje'),
						type: 'error'
					});
					return false;
				}

				//获取支付信息
				GetPayBankCode(this.FormData).then((res) => {
					this.type = 2
					const randomIndex = Math.floor(Math.random() * res.data.length);
					this.payData = res.data[randomIndex];
				}).catch((res) => {
					console.log('err', res)
				});
				console.log('submit')
			},
			//提交充值
			submitDeposit() {
				if (this.FormDataSubmit.screenshots.length == 0) {
					this.$message({
						showClose: true,
						offset: 20,
						message: this.$t('deposit.qsczfimage'),
						type: 'error'
					});
					return false;
				}
				const FormDataSubmit = this.FormDataSubmit;
				FormDataSubmit.money = this.money;
				FormDataSubmit.recharge_id = this.payInfo.id;
				FormDataSubmit.name = this.payData.rececode
				
				
				// FormDataSubmit.screenshots = this.money;
				//获取支付信息
				newRechargeOrder(FormDataSubmit).then((res) => {
					this.type = 1
					this.$message({
						showClose: true,
						offset: 20,
						message: res.code_dec,
						type: 'success'
					});
					this.FormDataSubmit.screenshots = []
					this.imageUrl = ''
					this.initGetRechargeRecord();
				}).catch((res) => {
					console.log('err', res)
				});
				console.log('submit')
			},
			handleAvatarSuccess(res, file) {
				if (res.code == 1) {
					console.log(res)
					console.log(file)
					this.imageUrl = URL.createObjectURL(file.raw);
					this.FormDataSubmit.screenshots.push(res.url)
				} else {
					return this.$message.error(res.code_dec);
				}

			},
			beforeAvatarUpload() {
				// const isJPG = file.type === 'image/jpeg';
				// const isLt2M = file.size / 1024 / 1024 < 2;

				// if (!isJPG) {
				// 	this.$message.error('上传头像图片只能是 JPG 格式!');
				// }
				// if (!isLt2M) {
				// 	this.$message.error('上传头像图片大小不能超过 2MB!');
				// }
				return true;
				// return isJPG && isLt2M;
			},
			copyToClipboard(text) {
				// 创建一个临时的 textarea 元素用于保存文本
				const textarea = document.createElement('textarea');
				// 设置 textarea 的值为要复制的文本
				textarea.value = text;
				// 将 textarea 移动到屏幕之外，使其不可见
				textarea.style.position = 'absolute';
				textarea.style.left = '-9999px';
				// 将 textarea 添加到文档中
				document.body.appendChild(textarea);
				// 选择 textarea 中的文本
				textarea.select();
				try {
					// 执行复制命令
					const successful = document.execCommand('copy');
					// 检查复制是否成功
					if (successful) {
						this.$message({
							showClose: true,
							offset: 20,
							message: this.$t('common.CopySuccess'),
							type: 'success'
						});
						console.log('文本已成功复制到剪贴板');
					} else {
						console.error('复制文本失败');
					}
				} catch (err) {
					// 处理复制过程中可能出现的错误
					console.error('无法复制文本：', err);
				}
				// 从文档中移除 textarea
				document.body.removeChild(textarea);
			},
		}
	}
</script>
<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 98px;
		height: 98px;
		line-height: 98px;
		text-align: center;
	}

	.avatar {
		width: 98px;
		height: 98px;
		display: block;
	}
</style>