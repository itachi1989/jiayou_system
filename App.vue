<script>
	export default {
		globalData:{
			purse:[
					{
						name:'零钱',
						money:100,
						id:1,
						img:'/static/img/money.png'
					},
					{
						name:'银行卡',
						id:2,
						img:'/static/img/bank.png'
					},
					],	
		},
		
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch',getApp().globalData)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
