<template>
	<div data-v-dc2c9a50="" id="common-app222" class="Body"><!---->
		<div data-v-70329a5a="" data-v-dc2c9a50="" id="app222" class="HomePage">
			<DaHeaderView2></DaHeaderView2>

			<div data-v-00d0b869="" class="app-wrapper" style="width: calc(100% - 25rem);">
				<div data-v-00d0b869="" class="page-header">
					<div data-v-00d0b869="" class="page-title">
						{{$t("settings.Affiliates")}}
					</div>
					<div data-v-6b48c1cb="" class="el-dropdown">
					
						<div data-v-6b48c1cb="" aria-haspopup="list" aria-controls="dropdown-menu-8265"
							role="button" tabindex="0" x-placement="bottom-end"
							class="right-icon el-dropdown-selfdefine" @click="is_dropdown=!is_dropdown"><i
								data-v-6b48c1cb="" class="el-icon-user"></i></div>
						<ul data-v-6b48c1cb="" id="dropdown-menu-8265" class="el-dropdown-menu el-popper"
							v-show="is_dropdown">
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/walletAddress')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-wallet"></i>
								{{$t('common.WalletAddress')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/loginPassword')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-lock"></i>
								{{$t('common.LoginPassword')}}
							</li>
							<li data-v-6b48c1cb="" tabindex="-1" class="el-dropdown-menu__item"
								@click="$router.push('/payPassword')" style="font-weight: bold;"><i
									data-v-6b48c1cb="" class="el-icon-lock"></i>
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
				<div data-v-00d0b869="" class="container222">
					<div data-v-00d0b869="" class="box">
						<div data-v-00d0b869="" class="box-item">
							<div data-v-00d0b869="" class="title">
								{{$t("settings.Affiliates")}}
							</div>
							<div data-v-00d0b869="" class="user-info">
								<!-- <div data-v-00d0b869="" class="info-item1">
									Your Email: <span data-v-00d0b869="" class="value"></span></div> -->
								<div data-v-00d0b869="" class="info-item1">
									{{$t("dashboard.YourUsername")}}: <span data-v-00d0b869=""
										class="value">{{loginUserInfo.username}}</span>
								</div>
								<div data-v-00d0b869="" class="info-item1">
									{{$t("settings.YourReferralCode")}}: <span data-v-00d0b869=""
										class="value">{{loginUserInfo.idcode}}</span>
								</div>
								<div data-v-00d0b869="" class="info-item2">
									<div data-v-00d0b869="" class="label">{{$t("settings.YourAffiliateLink")}}</div>
									<div data-v-00d0b869="" class="input-group" style="flex-wrap:nowrap;">
										<div data-v-00d0b869="" class="input el-input is-disabled">
											<input :value="BackData ? BackData.yq_url+loginUserInfo.idcode : ''"
												data-v-00d0b869="" type="text" disabled="disabled" autocomplete="off"
												placeholder="" class="el-input__inner">
										</div>
										<div data-v-00d0b869=""
											@click="copyToClipboard(BackData ? BackData.yq_url+loginUserInfo.idcode : '')"
											class="copy-btn copy"><i data-v-00d0b869=""
												class="el-icon-document-copy"></i></div>
									</div>
								</div>
								<div data-v-00d0b869="" class="info-item1">
									<!-- <i data-v-00d0b869="" class="el-icon-coin"
										style="margin-right: 4px;"></i> -->
										<!-- Earn Bonus Shares -->
								</div>
								<div data-v-00d0b869="" class="info-item3" v-html="info.content"> </div>
								<div data-v-00d0b869="" class="info-item1"
									style="cursor: pointer;">
									<router-link to="/affiliate"
										class="text--base1">{{$t("settings.LearnMore")}}</router-link>
								</div>
							</div>
						</div>
						<div data-v-00d0b869="" class="box-item">
							<div data-v-00d0b869="" class="title">{{$t("settings.TotalPartner")}}</div>
							<div data-v-00d0b869="" class="partner-list" style="height: 50rem; overflow-y: scroll;">
								<div data-v-00d0b869="" class="cur-title">{{$t("settings.TotalPartner")}}: <span
										data-v-00d0b869="" class="num">{{teamNumber}}</span></div>
								<div data-v-00d0b869="" class="pagination"></div>
							</div>
						</div>
					</div>
					<div data-v-00d0b869="" class="c-table">
						<div data-v-00d0b869="" class="tr">
							<div data-v-00d0b869="" class="th">{{$t("settings.Date")}}</div>
							<div data-v-00d0b869="" class="th">{{$t("settings.From")}}</div>
							<div data-v-00d0b869="" class="th">{{$t("settings.Level")}}</div>
							<div data-v-00d0b869="" class="th">{{$t("settings.Amount")}}</div>
							<div data-v-00d0b869="" class="th">{{$t("settings.Type")}}</div>
						</div>
						<div data-v-00d0b869="" class="tr" v-for="(item,index) in dataList" :key="index">
							<div data-v-00d0b869="" class="td">{{item.trade_time}}</div>
							<div data-v-00d0b869="" class="td">{{item.from}}</div>
							<div data-v-00d0b869="" class="td">{{item.vip_level}}</div>
							<div data-v-00d0b869="" class="td">{{item.trade_amount}}</div>
							<div data-v-00d0b869="" class="td">{{item.remarks}}</div>


						</div>
						<div data-v-00d0b869="" class="no-data" v-show="total==0">{{$t("common.Nodata")}}</div>
					</div>
					<div data-v-2bbc49ad class="pagination-box">
						<el-pagination background layout="prev, pager, next" :total="total"
							@current-change="handleCurrentChange" :current-page="currentPage">
						</el-pagination>
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
		teamReport,
		noticeList,
		FundDetails
	} from '@/api/common'
	import DaHeaderView2 from '@/components/DaHeaderView2.vue'
	import DaFooterView2 from '@/components/DaFooterView2.vue'
	
	export default {
		name: 'affiliatesView',
		components: {
			DaHeaderView2,DaFooterView2
		},
		computed: {
			...mapState(['loginUserInfo', 'BackData']),
		},
		data() {
			return {
				is_dropdown:false,
				currentPage: 1,
				total: 0,
				teamNumber: 0,
				teamList: [],


				FormData: {
					gropid: 16,
					page_no: 1,
				},
				info: {
					title: '',
					content: '',
				},


				FormData2: {
					trade_type: 8,
					page_no: 1
				},
				dataList: []
			};
		},
		mounted() {
			console.log(this.$route)
			this.$store.dispatch('init')
			this.init();
			this.initFundDetails();

			this.initNoticeList();
		},
		methods: {
			timestampToDate(timestamp) {
				const date = new Date(timestamp * 1000);
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0');
				const day = String(date.getDate()).padStart(2, '0');
				const hours = String(date.getHours()).padStart(2, '0');
				const minutes = String(date.getMinutes()).padStart(2, '0');
				const seconds = String(date.getSeconds()).padStart(2, '0');
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			init() {
				const loading = this.$loading({
					lock: true,
					background: 'rgba(0, 0, 0, 0.7)'
				});
				teamReport().then((res) => {
					loading.close();
					this.teamNumber = res.teamNumber
					this.teamList = res.teamList
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			initFundDetails() {
				FundDetails(this.FormData2).then((res) => {
					const list = res.list;
					this.dataList = list;
					this.currentPage = Number(res.data_current_page)
					this.total = res.data_total_nums
				}).catch((res) => {
					console.log('err', res)
				});

			},
			handleCurrentChange(val) {
				this.dataList = [];
				this.FormData2.page_no = val;
				this.initFundDetails();
				console.log(`当前页: ${val}`);
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

			initNoticeList() {
				noticeList(this.FormData).then((res) => {
					if (res.data_total_nums == 1) {
						this.info = res.info[0]
					}
					console.log(res)
				}).catch((res) => {
					console.log('err', res)

				});
			}
		}
		// data() {
		// 	return {
		// 		currentPage: 1,
		// 		total: 0,
		// 	};
		// },
		// methods: {
		// 	handleCurrentChange(val) {
		// 		console.log(`当前页: ${val}`);
		// 	}
		// }
	}
</script>
<style>

</style>