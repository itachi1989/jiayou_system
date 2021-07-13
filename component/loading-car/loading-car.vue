<template>
	<view container>
		<image class="img" src="/static/img/loading/car.png"> </image>
	</view>
</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
			dismiss(){
				this.$store.commit("showLoading",false)
			},
		},
		computed:{
			show(){
				return this.$store.state.loading
			},
		}
	}
</script>

<style lang="stylus">
.container
	.img
		width :100rpx
		height:100rpx
</style>
