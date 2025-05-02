<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>
			<div data-v-6b48c1cb="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-6b48c1cb="" class="page-header">
					<div data-v-6b48c1cb="" class="page-title">{{$t('common.MiningPackages')}}</div>
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
				<div data-v-6b48c1cb="" class="container222">
					<div data-v-6b48c1cb="" class="product-list">
						<div data-v-6b48c1cb="" class="product-item" v-for="(item,index) in dataList" :key="index"
							style="padding: 20px;background-color: white;border-radius: 20px;">
							<div data-v-6b48c1cb="" class="img-box"><img data-v-6b48c1cb="" :src="item.icon"
									class="img">
							</div>
							<div data-v-6b48c1cb="" class="right">
								<div data-v-6b48c1cb="" class="name">
									{{item.title}}
								</div>
								<div data-v-6b48c1cb="" class="bottom">
									<div data-v-6b48c1cb="" class="info-list">
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('home.UnitPrice')}}</div>
											<div data-v-6b48c1cb="" class="value">${{item.amount}}</div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('home.PlanDuration')}}</div>
											<div data-v-6b48c1cb="" class="value">{{item.cycle}}
												{{$t('home.Days')}}
											</div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('home.DailyProfit')}}</div>
											<div data-v-6b48c1cb="" class="value">${{item.daily_profit}}</div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('home.TotalProfit')}}</div>
											<div data-v-6b48c1cb="" class="value">${{item.daily_profit*item.cycle}}
											</div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('product.FixedIncome')}}</div>
											<div data-v-6b48c1cb="" class="value" style="color: rgb(255, 0, 0);">
												${{item.amount}} + ${{item.daily_profit*item.cycle}}
											</div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">{{$t('home.SettleInterests')}}</div>
											<div data-v-6b48c1cb="" class="value rebate" v-if="item.type==1">
												{{$t('home.Every')}} 24 {{$t('home.Hours')}}
											</div>
											<div data-v-6b48c1cb="" class="value rebate" v-else-if="item.type==2">
												{{$t("product.yieldOfMaturity")}}
											</div>
										</div>
										<!-- <div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">Miner</div>
											<div data-v-6b48c1cb="" class="value"></div>
										</div>
										<div data-v-6b48c1cb="" class="info-item">
											<div data-v-6b48c1cb="" class="label">Hash Power</div>
											<div data-v-6b48c1cb="" class="value">0</div>
										</div> -->
									</div>
									<div data-v-6b48c1cb="" class="right-actions">
										<div data-v-6b48c1cb="" class="bonus">
											<div data-v-6b48c1cb="" class="label">{{$t('home.ReferralRewards')}}</div>
											<ul data-v-6b48c1cb="" class="plan-referral justify-content-center mb-2">
												<div data-v-6b48c1cb="" class="single-referral"><span data-v-6b48c1cb=""
														style="color: #000;">{{item.affiliate_bonus[0]}}%</span>
													<div data-v-6b48c1cb="">{{$t('home.Level')}} 1</div>
												</div>
												<div data-v-6b48c1cb="" class="single-referral"><span data-v-6b48c1cb=""
														style="color: #000;">{{item.affiliate_bonus[1]}}%</span>
													<div data-v-6b48c1cb="">{{$t('home.Level')}} 2</div>
												</div>
												<!-- <div data-v-6b48c1cb="" class="single-referral"><span data-v-6b48c1cb=""
														style="color: #000;">{{item.affiliate_bonus[2]}}%</span>
													<div data-v-6b48c1cb="">{{$t('home.Level')}} 3</div>
												</div> -->
											</ul>
										</div>
										<!-- <div data-v-6b48c1cb="" class="buy-btn"
											@click="$router.push('productDetail/'+item.id)">{{$t('common.BuyNow')}}
										</div> -->
										
										<div data-v-6b48c1cb="" v-if="item.progress<100" class="buy-btn"
											@click="$router.push('productDetail/'+item.id)">{{$t('common.BuyNow')}}
										</div>
										<div v-else>
											<div data-v-6b48c1cb="" class="buy-btn" @click="$router.push('productDetail/'+item.id)">
												{{$t('common.sellOut')}}
											</div>
											<img src="@/static/images/prout.png"
												style="position: absolute;bottom:2rem;right:2rem;z-index: 1;" />
										</div>
									</div>
								</div>
								<div style="margin-top: 10px;">
									<el-progress :text-inside="true" :stroke-width="15" :percentage="item.progress"
										status="warning" color="#0d6efd" text-color="white"></el-progress>
								</div>
								<!-- <div data-v-6b48c1cb="" class="progress">
									
									<div data-v-6b48c1cb="" class="van-progress"
										style="background: rgb(204, 204, 204); height: 8px;"><span
											class="van-progress__portion"
											style="background: linear-gradient(to right, rgb(170, 170, 170), rgb(76, 175, 80)); width: 326.836px;"><span
												class="van-progress__pivot"
												style="left: 314.878px; background: linear-gradient(to right, rgb(170, 170, 170), rgb(76, 175, 80));">30.66%</span></span>
									</div>
								</div> -->

							</div>
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
		productList
	} from '@/api/common';
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	export default {
		name: 'messageView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		data() {
			return {
				dataList: [],
				is_dropdown: false
			};
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				productList().then((res) => {
					const dataList = res.data
					dataList.forEach(function(item, index) {
						dataList[index].icon = baseImageUrl + item.icon;
						dataList[index].progress = Number(item.progress);
					});
					this.dataList = dataList
					console.log(dataList)
				}).catch((res) => {
					console.log(res)

				});
			},
			toHome(url) {
				// 完全刷新页面并跳转
				this.$router.push(url).then(() => {
					window.location.reload()
				})
			}

		}
	}
</script>
<style>
	
</style>