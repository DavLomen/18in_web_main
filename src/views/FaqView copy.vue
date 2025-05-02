<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>


					<div data-v-47f700e2="" class="app-wrapper">
						<div data-v-47f700e2="" class="container">
							<div data-v-47f700e2=""></div>
							<div data-v-47f700e2="" class="box7">
								<div data-v-47f700e2="" class="box-wrapper">
									<div data-v-47f700e2="" class="title">{{$t("faq.CommonProblem")}}</div>

									<div data-v-47f700e2="" class="faq-list">

										<div data-v-47f700e2="" class="faq-item" v-for="(item,index) in list"
											:key="index">
											<div data-v-47f700e2="" class="faq-title" @click="clickShow(item,index)">
												<div data-v-47f700e2="" class="name" style="color: #000;">{{item.title}} </div>
												<div data-v-47f700e2="" class="right-icon">
													<img data-v-47f700e2="" src="@/static/images/faqdown.png"
														style="width: 2rem;">
												</div>
											</div>
											<div data-v-47f700e2="" class="faq-content" v-show="item.show">
												<div style="color: rgb(0, 0, 0);" v-html="item.content"></div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>


					<FooterView></FooterView>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {
		noticeList
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		name: 'FaqView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				list: [],
				FormData: {
					gropid: 9,
					page_no: 1,
					page_size: 100
				},
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				noticeList(this.FormData).then((res) => {
					const list = res.info
					list.forEach(function(item, index) {
						list[index].show = false;
					});
					this.list = list;
					console.log(this.list)
				}).catch((res) => {
					console.log('err', res)

				});
			},
			clickShow(item, index) {
				this.list[index].show = !this.list[index].show
			}
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>