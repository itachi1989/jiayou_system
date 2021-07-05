<template>
	<view class="container">
		<view class="content">
			<view>
				<image src="/static/img/money_2.png" class="img"></image>
			</view>
			<view class="money">
				¥{{purse.list[0].money}}
			</view>
			<navigator url="./charge/charge/charge">
				<view class="charge">
					充值
				</view>
			</navigator>
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
			      'purse'
			    ])
		}
	}
</script>

<style>
.container{
	width:100%;
	height:100;
}
.content{
	width:100%;
	padding-top:100rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.content .img{
	width:100rpx;
	height:100rpx;
	margin-bottom: 50rpx;
}
.money{
	font-weight: 600;
	font-size: 50rpx;
}
.charge{
	margin-top: 400rpx;
	width:300rpx;
	height:75rpx;
	background-color:#007AFF;
	border-radius: 5rpx;
	color:#ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
