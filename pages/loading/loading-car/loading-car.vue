<template>
	<view class="container">
		<image class="img" src="/static/img/loading/car.png"> </image>
		<image class="circle" src='/static/img/loading/circle.png'></image>
		<view style="margin-top:20rpx">正在为您拼命加载中</view>
	</view>
</template>

<script>
	import { mapState ,mapMutations} from 'vuex'
	export default{
		data(){
			return {}
		},
		methods:{
			...mapMutations([
				'showLoading'
			])
		},
		computed:{
			...mapState([
				'loading'
			])
		},
		onShow(){
			this.showLoading(true)
		},
	}
</script>

<style lang="stylus">
.container
	width:100vw
	height:100vh
	display :flex
	align-items :center
	flex-direction :column
	.img
		width :200rpx
		height:200rpx
		animation :shake 1s infinite
		@keyframes shake
			0%
				transform :translate(-5rpx,-5rpx)
			
			25%
				transform :translate(-5rpx,5rpx)
			50%
				transform:translate(5rpx,5rpx)
			75%
				transform :translate(5rpx,-5rpx)
	.circle
		width :150rpx
		height:150rpx
		animation :rotate 2s linear infinite
		@keyframes rotate
			0%
				transform :rotate(0deg)
			100%
				transform :rotate(360deg)
</style>
