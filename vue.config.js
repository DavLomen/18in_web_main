// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'https://hrminer.net/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
// module.exports = {
// 	lintOnSave: false,
// 	devServer: {
// 		// 关闭eslint语法验证
// 		overlay: {
// 			warning: false,
// 			errors: false
// 		}
// 	},
// 	publicPath: process.env.NODE_ENV === 'production' ? './' : './'
// };