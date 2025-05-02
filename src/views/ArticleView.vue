<template>
	<div class=" page">
		<div class="fixed-header" style="padding-top: 77px;">
			<div data-v-6b500d1a="" id="common-app" class="Body">
				<div data-v-430b017a="" data-v-6b500d1a="" class="HomePage">
					<HeaderView></HeaderView>

					<div data-v-166d071e="" class="app-wrapper">
						<div data-v-166d071e="" class="container">
							<div data-v-166d071e="" class="box">
								<!-- <div data-v-166d071e="" class="title" style="color: #000;">{{info.title}}
								</div> -->
								<div data-v-166d071e="" class="content" style="font-size: 1.4rem;color: #000;"
									v-html="info.content">
								</div> <!---->
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
		baseImageUrl
	} from '@/api/config.js'
	import {
		noticeDetail
	} from '@/api/common'
	import HeaderView from '@/components/HeaderView.vue'
	import FooterView from '@/components/FooterView.vue'
	export default {
		props: ['id'],
		name: 'ArticleView',
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
			}
		},
		mounted() {
			this.detail();
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