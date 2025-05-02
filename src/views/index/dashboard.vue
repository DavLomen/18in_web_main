<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<DaHeaderView></DaHeaderView>



					<div data-v-6c698176="" class="breadcrumbs--dashboard">
						<div data-v-6c698176="" class="container">
							<div data-v-6c698176="" class="row">
								<div data-v-6c698176="" class="col-12">
									<ul data-v-6c698176=""
										class="list list--row justify-content-center justify-content-lg-start">
										<li data-v-6c698176="" class="list--row__item breadcrumbs__item"><a
												data-v-6c698176="" href="javascript:;" class="t-link breadcrumbs__link"
												@click="$router.push('/')">{{$t("common.Home")}}</a></li>
										<li data-v-6c698176="" class="list--row__item breadcrumbs__item"><a
												data-v-6c698176="" href="javascript:;" class="t-link breadcrumbs__link"
												@click="$router.push('/login')">{{$t("common.Logout")}}</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<section data-v-6c698176="" class="mb-5 hidepc">
						<div data-v-6c698176="" class="container-lg p-0">
							<div data-v-6c698176="" class="row g-0">
								<div data-v-6c698176="" class="col-12">
									<div data-v-6c698176="" class="dashboard">
										<div data-v-6c698176="" class="dashboard__balance">
											<div data-v-6c698176=""
												class="user px-3 justify-content-center align-items-lg-center">
												<div data-v-6c698176="" class="user__content quickview-card__body">
													<h6 data-v-6c698176=""
														class="my-0 t-heading-font text--white sm-text">WELCOME</h6>
													<h5 data-v-6c698176="" class="mt-0 mb-2">timerl</h5> <span
														data-v-6c698176="" class="d-block sm-text text--white">TOTAL
														BALANCE</span>
													<h4 data-v-6c698176="" class="my-0">USDT {{info.balance}}</h4>
													<router-link to="/deposit" data-v-6c698176=""
														class="t-link2 btn btn-outline--base2">Deposit</router-link>

													<router-link to="/withdraw" data-v-6c698176=""
														class="t-link2 btn btn-outline--base2">Withdraw</router-link>
													<!-- <a
														data-v-6c698176="" href="javascript:;"
														class="t-link2 btn btn-outline--base2">Deposit</a> <a
														data-v-6c698176="" href="javascript:;"
														class="t-link2 btn btn-outline--base2">Withdraw</a> -->
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div data-v-6c698176="" class="container" style="display: grid;">
						<div data-v-6c698176="" class="el-row" style="margin-left: -12px; margin-right: -12px;">
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg1">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176=""
											style="display: block; position: absolute; right: 10px; top: 10px;">
											<div data-v-6c698176="" class="view-btn" @click="$router.push('deposit')">
												{{$t("dashboard.Deposit")}}
											</div>
											<div data-v-6c698176="" class="view-btn" style="margin-top: 5px;"
												@click="$router.push('withdraw')">{{$t("dashboard.Withdraw")}}
											</div>
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.AvailableBalance")}}</div>
									<div data-v-6c698176="" class="num">USDT {{info.balance}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg2">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn" @click="$router.push('product')">
											{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.Contractoptions")}}</div>
									<div data-v-6c698176="" class="num">{{info.total_task}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg3">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn" @click="$router.push('earnings')">
											{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.DailyProfit")}}</div>
									<div data-v-6c698176="" class="num">USDT {{loginUserInfo.today_earnings}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg4">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn" @click="$router.push('depositList')">
											{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.TotalDeposits")}}</div>
									<div data-v-6c698176="" class="num">USDT {{info.total_recharge}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg5">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn" @click="$router.push('withdrawList')">
											{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.TotalWithdrawals")}}</div>
									<div data-v-6c698176="" class="num">USDT {{info.total_withdraw}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg6">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn"
											@click="$router.push('MyPackages?status=1')">{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.ActiveOrders")}}</div>
									<div data-v-6c698176="" class="num">{{info.activity_task}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg7">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn"
											@click="$router.push('MyPackages?status=2')">{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.ExpiredOrders")}}</div>
									<div data-v-6c698176="" class="num">{{info.expired_task}}</div>
								</div>
							</div>
							<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6"
								style="padding-left: 12px; padding-right: 12px;">
								<div data-v-6c698176="" class="cal-item bg8">
									<div data-v-6c698176="" class="item-top">
										<div data-v-6c698176="" style="height: 48px;"></div>
										<div data-v-6c698176="" class="view-btn"
											@click="$router.push('transactions?type=commission')">
											{{$t("dashboard.ViewAll")}}
										</div>
									</div>
									<div data-v-6c698176="" class="label">{{$t("dashboard.ReferralRewards")}}</div>
									<div data-v-6c698176="" class="num">USDT {{loginUserInfo.total_spread}}</div>
								</div>
							</div>
						</div>
						<form data-v-6c698176="" class="el-form user-box el-form--label-top bg9">
							<div data-v-6c698176="" class="el-row" style="margin-left: -12px; margin-right: -12px;">
								<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12"
									style="padding-left: 12px; padding-right: 12px;">
									<div data-v-6c698176="" class="el-form-item is-no-asterisk"><label
											data-v-6c698176="" for="nickname" class="el-form-item__label">
											{{$t("dashboard.YourUsername")}}
											<div data-v-6c698176=""
												style="display: inline-block; font-size: 2rem; margin-left: 5rem;">
												{{$t("dashboard.Level")}}:{{loginUserInfo.useridentity}}

											</div>
										</label>
										<div data-v-6c698176="" class="el-form-item__content">
											<div data-v-6c698176="" class="el-input is-disabled"><input
													:value="loginUserInfo.username" data-v-6c698176="" type="text"
													disabled="disabled" autocomplete="off" placeholder=""
													class="el-input__inner"></div>
										</div>
									</div>
								</div>
								<div data-v-6c698176="" class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12"
									style="padding-left: 12px; padding-right: 12px;">
									<div data-v-6c698176="" class="el-form-item is-no-asterisk"><label
											data-v-6c698176="" for="invite_code"
											class="el-form-item__label">{{$t("dashboard.YourReferralCode")}}
											<div data-v-6c698176="" class="teamNum"
												style="display: inline-block; font-size: 2rem; margin-left: 5rem;">
												{{$t("dashboard.TotalPartners")}}:{{info.teamNumber}}
											</div>
										</label>
										<div data-v-6c698176="" class="el-form-item__content">
											<div data-v-6c698176="" class="input-group">
												<div data-v-6c698176="" class="input el-input is-disabled">
													<input data-v-6c698176="" type="text" disabled="disabled"
														:value="loginUserInfo.idcode" autocomplete="off" placeholder=""
														class="el-input__inner">
												</div>
												<div data-v-6c698176="" @click="copyToClipboard(loginUserInfo.idcode)"
													class="copy-btn copy"><i data-v-6c698176=""
														class="el-icon-plus"><!----></i></div>
											</div>
										</div>
									</div>
								</div>
								<div data-v-6c698176="" class="el-col el-col-24"
									style="padding-left: 12px; padding-right: 12px;">
									<div data-v-6c698176="" class="el-form-item is-no-asterisk"><label
											data-v-6c698176="" for="invite_link"
											class="el-form-item__label">{{$t("dashboard.YourAffiliateLink")}}</label>
										<div data-v-6c698176="" class="el-form-item__content">
											<div data-v-6c698176="" class="input-group">
												<div data-v-6c698176="" class="input el-input is-disabled">
													<input data-v-6c698176="" type="text" disabled="disabled"
														:value="BackData ? BackData.yq_url+loginUserInfo.idcode : ''"
														autocomplete="off" placeholder="" class="el-input__inner">
												</div>
												<div data-v-6c698176=""
													@click="copyToClipboard(BackData ? BackData.yq_url+loginUserInfo.idcode : '')"
													data-clipboard-text="https://HRMiner.com//#/register/3297303"
													class="copy-btn copy"><i data-v-6c698176=""
														class="el-icon-plus"><!----></i></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>


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
		getStatisticsInfo

	} from '@/api/common'
	import DaHeaderView from '@/components/DaHeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'dashboardView',
		components: {
			DaHeaderView,
			FooterView
		},
		computed: {
			...mapState(['loginUserInfo', 'BackData']),
		},
		data() {
			return {
				info: {
					activity_task: 0,
					balance: "0.00",
					expired_task: 0,
					total_investment: 0,
					teamNumber: 0,
					total_profit: 0,
					total_recharge: 0,
					total_revenue: 0,
					total_reward: 0,
					total_task: 0,
					total_withdraw: 0,
				},
			};
		},
		mounted() {
			this.$store.dispatch('init')
			this.init();
		},
		methods: {
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				getStatisticsInfo().then((res) => {
					loading.close();
					this.info = res.info
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
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
							showClose:true,
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
	/* @import url('@/static/css/cs.css'); */
	.bg1 {
		background: url(@/static/images/dbg1.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg2 {
		background: url(@/static/images/dbg2.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg3 {
		background: url(@/static/images/dbg3.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg4 {
		background: url(@/static/images/dbg4.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg5 {
		background: url(@/static/images/dbg5.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg6 {
		background: url(@/static/images/dbg6.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg7 {
		background: url(@/static/images/dbg7.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg8 {
		background: url(@/static/images/dbg8.jpg) 0% 0% / 100% 100% no-repeat;
	}

	.bg9 {
		background: url(@/static/images/dbg9.jpg) 0% 0% / 100% 100% no-repeat;
	}
</style>