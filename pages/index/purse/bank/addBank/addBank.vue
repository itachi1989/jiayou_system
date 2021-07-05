<template>
	<view class="container">
		<view style="font-size: 50rpx;font-weight: 600;">
			添加银行卡
		</view>
		<view style="font-size: 40rpx;margin-top: 30rpx;">
			请绑定持卡人本人的银行卡
		</view>
		<view class="inputor">
			<view class="left">持卡人</view>
			<view class="right">{{person.data.name}}</view>
		</view>
		<view class="inputor" style="margin-top: 0;">
			<view class="left">卡号</view>
			<input class="right" placeholder="持卡人本人银行卡卡号" placeholder-style="color:#d3d3d3;" style="color:#000000"/>
		</view>
		<view class="submit">
			下一步
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		computed:{
			...mapState([
				"person"
			])
		}
	}
</script>

<style>
.container{
	margin-top:100rpx;
	width:100%;
	height:100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.inputor{
	width:90%;
	height:80rpx;
	border-top:2rpx solid 	#DCDCDC;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 80rpx;
}
.left{
	font-size:40rpx;
}
.right{
	color:#d3d3d3;
	margin-left: 20rpx;
	width:75%;
}
.submit{
	margin-top:300rpx;
	width:300rpx;
	height:75rpx;
	border-radius: 10rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color:#ffffff;
	background-color:	#0000FF;
}
</style>
