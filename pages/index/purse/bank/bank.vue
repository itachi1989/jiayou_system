<template>
	<view class="container">
		<view class="bankList" v-for="item in bank.list" :style="url(item)">
			<view class="left">
				<view class="logo">
					<image :src="item.logo"></image>
				</view>
			</view>
			<view class="right">
				<view class="bank_name">{{item.name}}</view>
				<view class="bank_type">{{item.type}}</view>
				<view class="bank_account">
					<view class="number" v-for="number in 3">
						<view class="point" v-for="point in 4"></view>
					</view>
					<view class="number">{{item.number}}</view>
				</view>
			</view>
		</view>
		<navigator url="addBank/addBank" class="add_bank" hover-class="click">
			<view class="btn">
				<image src="/static/img/add.png" style="width:50rpx;height:50rpx;"></image>
				<view style="font-size: 18rpx;margin-left: 10rpx;" >添加银行卡</view>
			</view>
		</navigator>
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
			url:function(item){
				return "background:linear-gradient(" + item.bgColor + ", " + item.bgColor+ "), url("+item.bg+") no-repeat 0% 20%/ cover;"
			}
		},
		computed:{
			...mapState([
				'bank'
			]),
		},
		created(){
			console.log(this)
		}
	}
</script>

<style>
page{
	background-color:#F2F2F2;
}
.container{
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.bankList{
	width:90%;
	height:250rpx;
	border-radius: 10rpx;
	display: flex;
	margin-top: 20rpx;
	/* background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/static/img/jianshe_bg.png') no-repeat 0% 20%/ cover; */
}
.bankList .left{
	width:100rpx;
	height:100%;
	padding:20rpx 0 0 30rpx
}
.logo{
	width:70rpx;
	height:70rpx;
	border-radius: 50%;
	background-color: #ffffff;
	opacity: 0.7;
	display: flex;
	justify-content: center;
	align-items: center;
}
.logo image{
	width:50rpx;
	height:50rpx;
}

.bankList .right{
	height:100%;
	flex:1;
	margin-left:10rpx;
	padding-top:20rpx;
}
.bank_name{
	color:#ffffff;
	font-size: 35rpx;
}
.bank_type{
	color:#ffffff;
	font-size: 18rpx;
	opacity: 0.7;
}
.bank_account{
	margin-top:50rpx;
	color:#ffffff;
	display: flex;
	justify-content: space-around;
}
.bank_account .number{
	margin-right:50rpx;
	font-size:50rpx;
	display: flex;
	align-items: center;
}
.point{
	width:15rpx;
	height:15rpx;
	border-radius: 50%;
	background-color: #ffffff;
	margin-right:10rpx;
}
.add_bank{
	margin-top: 20rpx;;
	width:88%;
	height:100rpx;
	background-color: #FFFFFF;
	padding-left: 20rpx;
	border-radius: 10rpx;
}
.btn{
	width:100%;
	height:100%;
	display: flex;
	align-items: center;
}
.click{
	background-color: 	#DCDCDC;
}
</style>
