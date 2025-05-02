<template>
	<div class=" page">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>


					<div data-v-21b93b7f="" class="app-wrapper">
						<section data-v-21b93b7f="">
							<div data-v-21b93b7f="" class="container">
								<div data-v-21b93b7f="" class="row justify-content-center">
									<div data-v-21b93b7f="" class="col-lg-6 text-center">
										<h2 data-v-21b93b7f="" class="title">{{$t("blog.Blog")}}</h2>
									</div>
								</div>
							</div>
						</section>
						<section data-v-21b93b7f="" class="blog-section sp_pt_100 sp_pb_100" style="overflow: hidden;">
							<div data-v-21b93b7f="" class="container">
								<div data-v-21b93b7f="" class="row gy-4">
									<div data-v-21b93b7f="" class="col-md-6 col-lg-4" v-for="(item,index) in list"
										:key="index">
										<div data-v-21b93b7f="" class="blog-item">
											<div data-v-21b93b7f="" class="blog-thumb"><img data-v-21b93b7f=""
													:src="item.cover_img"
													alt="blog thumb"></div>
											<div data-v-21b93b7f="" class="blog-content">
												<ul data-v-21b93b7f="" class="blog-meta mb-2">{{item.add_time}}</ul>
												<h4 data-v-21b93b7f="" class="blog-title"><a data-v-21b93b7f=""
														href="javascript:;" style="color: #000;">{{item.title}}</a></h4>
												<a @click="$router.push('/blogDetail/'+item.id)" data-v-21b93b7f=""
													href="javascript:;" class="blog-btn"><span
														data-v-21b93b7f="">{{$t("blog.ReadMore")}}</span> <i
														data-v-21b93b7f=""
														class="fas fa-arrow-right van-icon van-icon-arrow el-icon-right"><!----></i></a>
											</div>
										</div>
									</div>
									<!--  -->
								</div>
								<div data-v-f8cf1ec2="" class="pagination-box" style="display: flex;justify-content: center;margin-top: 20px;">
										<el-pagination background="red" hide-on-single-page layout="prev, pager, next"
											:total="total" @current-change="handleCurrentChange"
											:current-page="currentPage">
										</el-pagination>
								</div>
							</div>
						</section>
					</div>


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
		name: 'BlogView',
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
					gropid: 10,
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
				noticeList(this.FormData).then((res) => {
					const list = res.info
					list.forEach(function(item, index) {
						list[index].cover_img = baseImageUrl+item.cover_img;
					});
					this.list = list;
					this.currentPage = res.data_current_page
					this.total = res.data_total_nums
				}).catch((res) => {
					console.log('err', res)
				});
			},
			handleCurrentChange(val) {
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