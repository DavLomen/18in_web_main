<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<section data-v-f1f984ca="" class="blog-section sp_pt_100 sp_pb_100"
						style="padding-top: 5rem; overflow: hidden;">
						<div data-v-f1f984ca="" class="container">
							<div data-v-f1f984ca="" class="row gy-4">
								<div data-v-f1f984ca="" class="col-md-6 col-lg-4"  v-for="(item,index) in list" :key="index">
									<div data-v-f1f984ca="" class="blog-item">
										<div data-v-f1f984ca="" class="blog-thumb"><img data-v-f1f984ca=""
												:src="item.cover_img"
												alt="blog thumb"></div>
										<div data-v-f1f984ca="" class="blog-content">
											<ul data-v-f1f984ca="" class="blog-meta mb-2"></ul>
											<h4 data-v-f1f984ca="" class="blog-title"><a data-v-f1f984ca=""
													href="javascript:;" style="color: #000;">{{item.title}}</a></h4>
											<a data-v-f1f984ca="" href="javascript:;" class="blog-btn"
												@click="$router.push('/article/'+item.id)">
												<span data-v-f1f984ca="">
													{{$t("common.ClickViewTutorial")}}
												</span> <i data-v-f1f984ca=""
													class="fas fa-arrow-right van-icon van-icon-arrow el-icon-right"></i></a>
										</div>
									</div>
								</div>
								<div data-v-f8cf1ec2="" class="pagination-box" style="display: flex;justify-content: center;margin-top: 20px;">
										<el-pagination background hide-on-single-page layout="prev, pager, next"
											:total="total" @current-change="handleCurrentChange"
											:current-page="currentPage">
										</el-pagination>
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
		noticeList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'TutorialView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				currentPage: 1,
				total: 0,

				list: [],
				FormData: {
					gropid: 3,
					page_no: 1,
					page_size: 9
				},
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
				noticeList(this.FormData).then((res) => {
					loading.close();
					const list = res.info
					list.forEach(function(item, index) {
						list[index].cover_img = baseImageUrl+item.cover_img;
					});
					this.list = list;
					this.currentPage = res.data_current_page
					this.total = res.data_total_nums
				}).catch((res) => {
					loading.close();
					console.log('err', res)
				});
			},
			handleCurrentChange(val) {
				this.list = [];
				this.FormData.page_no = val;
				this.init();
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>