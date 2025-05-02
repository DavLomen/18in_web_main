<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-754eb3ab="" class="app-wrapper">
						<section data-v-754eb3ab="" class="page-banner" style="background-color: #fff;">
							<div data-v-754eb3ab="" class="container">
								<div data-v-754eb3ab="" class="row justify-content-center">
									<div data-v-754eb3ab="" class="col-lg-6 text-center">
										<h2 data-v-754eb3ab="" class="title text-black">{{$t("blog.Blog")}}</h2>
										<ul data-v-754eb3ab="" class="page-breadcrumb justify-content-center mt-2">
											<li data-v-754eb3ab="" style="color: #000;">{{$t("common.Home")}}
											</li>
											<li data-v-754eb3ab="" style="color: #000;">{{$t("blog.RecentBlog")}}</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
						<section data-v-754eb3ab="" class="sp_pt_120 sp_pb_120">
							<div data-v-754eb3ab="" class="container blogdetail">
								<div data-v-754eb3ab="" class="row gy-4">
									<div data-v-754eb3ab="" class="col-lg-8">
										<div data-v-754eb3ab="" class="blog-details-img"><img data-v-754eb3ab=""
												:src="info.cover_img" height="400px" width="100%" alt="blog"></div>
										<div data-v-754eb3ab="" class="blog-details-content mt-4">
											<h3 data-v-754eb3ab="" class="title mb-3">{{info.title}}</h3>
											<p data-v-754eb3ab="" class="text-justifys"></p>
											<div data-v-754eb3ab="" class="content" v-html="info.content">

											</div>
										</div>
									</div>
									<div data-v-754eb3ab="" class="col-lg-4 ps-lg-4">
										<div data-v-754eb3ab="" class="blog-widget" style="background-color: #ccc;">
											<h4 data-v-754eb3ab="" class="blog-widget-title">
												{{$t("blog.RecentBlogPosts")}}
											</h4>
											<div data-v-754eb3ab="" class="short-post-wrapper">
												<div data-v-754eb3ab="" class="short-post" v-for="(item,index) in list"
													:key="index" @click="toDetail(item.id)" style="border-color: #fff;">
													<div data-v-754eb3ab="" class="thumb"><img data-v-754eb3ab=""
															:src="item.cover_img" alt="image"></div>
													<div data-v-754eb3ab="" class="content">
														<h5 data-v-754eb3ab="" class="title"><a data-v-754eb3ab=""
																href="javascript:;">
																{{item.title}}</a></h5>
													</div>
												</div>

											</div>
										</div>
									</div>
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
		noticeList,
		noticeDetail
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		props: ['id'],
		name: 'BlogDetailView',
		components: {
			HeaderView,
			FooterView
		},
		data() {
			return {
				info: {
					title: '',
					cover_img: '',
					content: '',
				},
				list: [],
				FormData: {
					gropid: 10,
					page_no: 1,
					page_size: 10
				},
			}
		},
		mounted() {
			this.detail();
			this.init();
		},
		methods: {
			detail() {
				noticeDetail({
					id: this.id
				}).then((res) => {
					const info = res.info
					// list.forEach(function(item, index) {
					// 	list[index].cover_img = baseImageUrl + item.cover_img;
					// });
					info.cover_img = baseImageUrl + info.cover_img;
					info.content = this.addDomainWithDOM(info.content, baseImageUrl+'/');
					this.info = info;
				}).catch((res) => {
					console.log('err', res)
				});
			},
			init() {
				noticeList(this.FormData).then((res) => {
					const list = res.info
					list.forEach(function(item, index) {
						list[index].cover_img = baseImageUrl + item.cover_img;
					});
					this.list = list;
				}).catch((res) => {
					console.log('err', res)
				});
			},
			toDetail(id) {
				noticeDetail({
					id: id
				}).then((res) => {
					const info = res.info
					info.cover_img = baseImageUrl + info.cover_img;
					this.info = info;
				}).catch((res) => {
					console.log('err', res)
				});
			},
			addDomainWithDOM(html, domain) {
				// 创建临时 DOM 元素
				const temp = document.createElement('div');
				temp.innerHTML = html;
			
				// 处理所有 img 标签
				const images = temp.querySelectorAll('img');
				images.forEach(img => {
					const src = img.getAttribute('src');
					if (src && !src.startsWith('http') && !src.startsWith('//')) {
						const newSrc = src.startsWith('/') ?
							domain + src.substring(1) :
							domain + src;
						img.setAttribute('src', newSrc);
					}
				});
			
				// 处理背景图片
				const elements = temp.querySelectorAll('[style*="background-image"]');
				elements.forEach(el => {
					const style = el.getAttribute('style');
					const newStyle = style.replace(/background-image:\s*url\((['"]?)(?!https?:)([^'")]+)\1\)/gi,
						(match, quote, url) => {
							const newUrl = url.startsWith('/') ?
								domain + url.substring(1) :
								domain + url;
							return `background-image: url(${quote}${newUrl}${quote})`;
						});
					el.setAttribute('style', newStyle);
				});
			
				return temp.innerHTML;
			}
		}
	}
</script>
<style>
	/* @import url('@/static/css/cs.css'); */
</style>