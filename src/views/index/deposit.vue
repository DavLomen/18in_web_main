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
										<h2 data-v-0e24583c="" class="m-0 banner-title">{{$t('deposit.Deposit')}}</h2>
									</div>
								</div>
							</div>
						</div>
					</div>


					<section data-v-0e24583c="" class="section" v-show="type==1">
						<div data-v-0e24583c="" class="container">
							<div data-v-0e24583c="" class="row justify-content-center">
								<div data-v-0e24583c="" class="col-md-8">
									<form data-v-0e24583c="">
										<div data-v-0e24583c="" class="card custom--card">
											<div data-v-0e24583c="" class="card-body">
												<div data-v-0e24583c="" class="form-group" style="position: relative;">
													<label data-v-0e24583c=""
														style="width: 100%;color: white;">{{$t('deposit.Gateway')}}
														<div data-v-0e24583c="" style="float: right; color: white;">
															{{$t('deposit.MoreChoices')}}
														</div>
													</label>
													<div data-v-0e24583c="" class="input-group" style="width: 100%;">
														<div data-v-0e24583c="" class="el-form-item__content"
															style="width: 100%;">
															<el-select v-model="FormData.pay_id" @change="changeSelect"
																style="width: 100%;"
																:placeholder="$t('common.Pleaseselect')">
																<el-option v-for="item in list" :key="item.id"
																	:label="item.name" :value="item.id">
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

														</div>
													</div>
												</div>
												<div data-v-0e24583c="" class="form-group"><label
														data-v-0e24583c="" style="color: white;">{{$t('deposit.Amount')}}</label>
													<div data-v-0e24583c="" class="input-group">
														<input data-v-0e24583c="" type="number" name="amount"
															v-model="money" autocomplete="off"
															class="form-control form--control" style="color: #000;"> <span data-v-0e24583c=""
															class="input-group-text">USDT</span>
													</div>
												</div>
												<div data-v-0e24583c="" class="mt-3">
													<ul data-v-0e24583c="" class="list-group text-center">
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c=""
																class="font-weight-bold">{{$t('deposit.Limit')}}</span>
															<span data-v-0e24583c="">
																<span data-v-0e24583c=""
																	class="min font-weight-bold">{{payInfo.minPrice}}
																</span> USDT -
																<span data-v-0e24583c=""
																	class="max font-weight-bold">{{payInfo.maxPrice}}</span>
																USDT</span>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c=""
																class="font-weight-bold">{{$t('deposit.Handlingfee')}}</span>
															<span data-v-0e24583c=""><span data-v-0e24583c=""
																	class="charge font-weight-bold">{{payInfo.fee}}%</span></span>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item d-flex justify-content-between"><span
																data-v-0e24583c=""
																class="font-weight-bold">{{$t('deposit.Payable')}}</span>
															<span data-v-0e24583c="">
																<span data-v-0e24583c=""
																	class="payable font-weight-bold">{{money*payInfo.rate}}</span>
																{{payInfo.name}}</span>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item justify-content-between rate-element d-flex">
															<span data-v-0e24583c=""
																class="font-weight-bold">{{$t('deposit.ConversionRate')}}</span>
															<span data-v-0e24583c=""><span data-v-0e24583c=""
																	class="font-weight-bold">1 USDT ≈
																	<span data-v-0e24583c=""
																		class="rate">{{payInfo.rate}}</span> <span
																		data-v-0e24583c=""
																		class="base-currency">{{payInfo.name}}</span></span></span>
														</li>
														<li data-v-0e24583c=""
															class="list-group-item justify-content-between in-site-cur d-flex">
															<span data-v-0e24583c="" class="font-weight-bold">≈ <span
																	data-v-0e24583c=""
																	class="base-currency">{{payInfo.name}}</span></span>
															<span data-v-0e24583c=""
																class="final_amo font-weight-bold">{{(money*payInfo.rate).toFixed(8)}}</span>
														</li>
													</ul>
												</div>
											</div>
											<div data-v-0e24583c="" class="card-footer"><button data-v-0e24583c=""
													type="button" class="btn btn--base btn-block"
													@click="submit()">{{$t('common.Submit')}}</button></div>
											<div data-v-0e24583c="" style="padding: 1rem; color: rgb(11, 175, 54);">
												{{$t('deposit.t1')}} ${{payInfo.minPrice}}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>


					<section data-v-7a04793a="" class="section" v-show="type==2">
						<div data-v-7a04793a="" class="container">
							<div data-v-7a04793a="" class="row justify-content-center">
								<div data-v-7a04793a="" class="col-md-8">
									<div data-v-7a04793a="" class="card custom--card">
										<div data-v-7a04793a="" class="card-body" style="margin-bottom: -70px;">
											<div data-v-7a04793a="" class="row">
												<div data-v-7a04793a="" class="col-md-12 text-center">
													<div data-v-7a04793a="" class="title" style="color: white;">
														{{$t('deposit.Youhaverequested')}} <span data-v-7a04793a=""
															class="text-danger">USDT {{money}}</span>,
														{{$t('deposit.Pleasepay')}}
														<span data-v-7a04793a="" class="text-danger">
															{{(money*payInfo.rate).toFixed(8)}}
															<span data-v-7a04793a="">{{payInfo.name}}</span></span>
														{{$t('deposit.forsuccessfulpayment')}}
													</div>
													<div data-v-7a04793a="" class="my-4 text-center"
														style="color: rgb(51, 51, 51); background-color: rgb(247, 248, 250);">
														{{$t('deposit.tx_text1')}}
													</div>
												</div>
												<div data-v-7a04793a="" class="form-group mb-4"><br data-v-7a04793a="">
													<label data-v-7a04793a="" style="color: white;">{{$t('common.WalletAddress')}}</label>
													<div data-v-7a04793a="" class="input-group">
														<input data-v-7a04793a="" readonly="readonly"
															:value="payData.rececode" style="color: white;"
															class="form-control form--control"> <button style="    border: 1px solid #503ac1;
    background: #503ac1;
    color: #fff;width:80px" @click="copyToClipboard(payData.rececode)" data-v-7a04793a=""><i data-v-7a04793a=""
																class="el-icon-copy-document"></i></button>
													</div>
												</div>
											</div>
										</div>
										<div data-v-7a04793a="" class="card-body">
											<div data-v-7a04793a="" class="row">
												<div data-v-7a04793a="" class="col-md-12">
													<div data-v-7a04793a="" class="form-group">
														<label data-v-7a04793a=""><strong data-v-7a04793a="" style="color: white;">
																{{$t('deposit.Uploadtransferscreenshot')}} <span
																	data-v-7a04793a=""
																	class="text-danger">*</span></strong></label>
														<el-upload class="avatar-uploader"
															action="https://hrminer.net/api/User/UploadImg"
															:data="updateData" name="image" :show-file-list="false"
															:on-success="handleAvatarSuccess"
															:before-upload="beforeAvatarUpload">
															<img v-if="imageUrl" :src="imageUrl" class="avatar">
															<i v-else class="el-icon-plus avatar-uploader-icon"></i>
														</el-upload>
													</div>
												</div>
											</div>
										</div>
										<div data-v-7a04793a="" class="card-footer"><button data-v-7a04793a=""
												@click="submitDeposit()" type="button" class="btn btn--base btn-block">
												{{$t('deposit.IHavePaid')}}
											</button></div>
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
		baseImageUrl
	} from '@/api/config.js'
	import {
		getRechargetype,
		GetPayBankCode,
		newRechargeOrder
	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'depositView',
		components: {
			DaHeaderView,
			FooterView
		},
		data() {
			return {
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
					fixed: '',
					id: '',
					maxPrice: '',
					minPrice: '',
					mode: '',
					name: '',
					qrcode: '',
					rate: '',
					submitUrl: '',
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
				imageUrl: ''
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
				getRechargetype(this.RechargeTypeFormData).then((res) => {
					loading.close();
					const list = res.info
					list.forEach(function(item, index) {
						list[index].qrcode = baseImageUrl + item.qrcode;
					});
					this.list = list;
					this.payInfo = list[0]
					this.FormData.pay_id = list[0].id
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			changeSelect(id) {
				var that = this;
				this.list.forEach(function(item) {
					if (item.id == id) {
						that.payInfo = item;
					}
				});
				console.log(that.payInfo)
			},
			submit() {
				if (this.money <= 0) {
					this.$message({
						showClose: true,
						offset:20,
						message: this.$t('deposit.qsrczje'),
						type: 'error'
					});
					return false;
				}

				//获取支付信息
				GetPayBankCode(this.FormData).then((res) => {
					this.type = 2
					this.payData = res.data[0];
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
						offset:20,
						message: this.$t('deposit.qsczfimage'),
						type: 'error'
					});
					return false;
				}
				const FormDataSubmit = this.FormDataSubmit;
				FormDataSubmit.money = this.money;
				FormDataSubmit.recharge_id = this.payInfo.id;
				// FormDataSubmit.screenshots = this.money;
				//获取支付信息
				newRechargeOrder(FormDataSubmit).then((res) => {
					this.type = 1
					this.$message({
						showClose: true,
						offset:20,
						message: res.code_dec,
						type: 'success'
					});
					this.FormDataSubmit.screenshots = []
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
							offset:20,
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