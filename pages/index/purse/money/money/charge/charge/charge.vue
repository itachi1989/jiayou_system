<template>
	<view class="container">
		<view class="content">
			<view class="amount">充值金额</view>
			<view class="input">
				<view>¥</view>
				<input/>
			</view>
		</view>
		<view class="charge_container">
			<view class="charge_list">
				<view class="row" v-for="(item,index1) in chargeList">
					<view class="cell" v-for="(item1,index2) in item" @click="choose(index1,index2)">
						<view class="charge_item" :class="[item1.checked?'checked':'']">
							¥{{item1.price}}元
						</view>
					</view>
				</view>
			</view>
			<view class="border"></view>
			<view class="pay_way">
				<view style="margin-bottom: 20rpx;">支付方式:</view>
				<view class="wechat">
					<view class="img">
						<image src="/static/img/wechat.png"></image>
						<view>微信</view>
					</view>
						<view @click="wechat_pay">
							<image class="radio" src="/static/img/radio_click.png" v-show="ifWechat"></image>
							<image class="radio" src="/static/img/radio.png"  v-show="!ifWechat"></image>
						</view>
				</view>
				<view class="border" style="width:100%"></view>
				<view class="wechat" @click="bankTap()">
					<view v-if="ifWechat">银行卡支付</view>
					<view v-else class="bank_pay">
						<image :src="bank.list[current_bank].logo" style="width: 50rpx;height:50rpx;margin-right: 10rpx;"></image>
						<view>{{bank.list[current_bank].name}}</view>
					</view>
					<view class="iconfont iconyoujiantou1"></view>
				</view>
			</view>
		</view>
		<view class="charge" hover-class="sure_active">
			充值
		</view>
		<!-- 银行卡弹窗 -->
		<view class="virtualise" v-show="isBank_tc">
			<view class="bank_tc">
				<view class="iconfont iconclose" @click="bankTap()"></view>
				<view class="bank_list">
					<view class="bank_item" v-for="(item,index) in bank.list" @click="bank_pay(index)">
						<view>
							<image :src="item.logo" style="width:50rpx;height:50rpx;margin-right: 10rpx;"></image>
							<view>{{item.name}}</view>
							<view> ***{{item.number}}</view>
						</view>
						<image src="/static/img/radio.png" class="radio" v-show="!bank_checked[index].checked"></image>
						<image src="/static/img/radio_click.png" class="radio" v-show="bank_checked[index].checked"></image>
					</view>
				</view>
				<view class="sure" hover-class="sure_active" @click="bankTap()">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				chargeList:[[
					{
						price:10,
						checked:false
					},
					{
						price:30,
						checked:false
					},
					{
						price:50,
						checked:false
					},
				],
				[
					{
						price:100,
						checked:false
					},
					{
						price:300,
						checked:false
					},
					{
						price:500,
						checked:false
					},
				]],
				checkedIndex1:0,//已经选中的价格
				checkedIndex2:0,
				ifWechat:true,
				isBank_tc:false,
				bank_checked:[],
				current_bank:-1,
			}
		},
		methods: {
			choose:function(index1,index2){
				this.chargeList[this.checkedIndex1][this.checkedIndex2].checked=false
				this.chargeList[index1][index2].checked=true
				this.checkedIndex1=index1
				this.checkedIndex2=index2
			},
			wechat_pay(){
				this.bank_checked.some((item,index,arr)=>{
					if(item.checked){
						arr[index].checked=false
						this.current_bank=-1
					}
				})
				this.ifWechat=true
			},
			bank_pay(index){
				if(this.ifWechat)this.ifWechat=false//选择了银行卡就把微信支付去掉
				if(this.current_bank>=0){//把选择的上一个设置为false
					this.bank_checked[this.current_bank].checked=false
				}
				this.bank_checked[index].checked=true
				this.current_bank=index
			},
			bankTap(){
				this.isBank_tc=!this.isBank_tc
			}
		},
		computed:{
			...mapState([
				'bank'
			]),
		},
		onShow(){
			//给银行卡加上checked
			console.log(this.bank)
			this.bank_checked=new Array()
			for(let i=0;i<this.bank.list.length;i++){
				this.bank_checked.push({
					id:this.bank.list[i].id,
					checked:false
				})
			}
			console.log('bank_checked',this.bank_checked)
			
			
		},
	}
</script>

<style>
@import url("/static/iconfont/iconfont.css");
page{
	background-color:#F2F2F2;
}
.container{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.content{
	margin-top:50rpx;
	width:90%;
	height:300rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.amount{
	height:100rpx;
	margin-left:50rpx;
	margin-top:20rpx;
}
.input{
	margin-left:20rpx;
	font-weight: 600;
	font-size: 60rpx;
	display: flex;
	align-items: center;
}
.input input{
	margin-left:10rpx;
	flex:2
}
.charge{
	margin-top: 70rpx;
	width:90%;
	height:75rpx;
	background-color:#007AFF;
	border-radius: 10rpx;
	color:#ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.charge_container{
	margin-top: 30rpx;
	width:90%;
	background-color:#ffffff;
	border-radius: 10rpx;
}
.charge_list{
	width:100%;
	height:400rpx;
	display: table;
}
.row{
	display: table-row;
}
.cell{
	display: table-cell;
	vertical-align: middle;
}
.charge_item{
	width:200rpx;
	height:140rpx;
	border: 6rpx solid #E0E0E0;
	border-radius: 20rpx;
	margin:0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	color:#E0E0E0;
	font-size: 50rpx;
}
.checked{
	border:6rpx solid #0000E3;
	color:#0000E3;
}
.border{
	width:95%;
	height:1rpx;
	background-color:#E0E0E0;
	margin:0 auto;
}
.pay_way{
	width:100%;
	padding:20rpx 20rpx;
	box-sizing: border-box;
}
.wechat{
	width:100%;
	height:70rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight:300;
	margin-top: 20rpx;
}
.img{
	display: flex;
}
.img image{
	width:50rpx;
	height:50rpx;
	margin-right: 10rpx;
}
.radio{
	width:50rpx;
	height:50rpx;
}
.iconyoujiantou1{
	color:	#D3D3D3;
}
.virtualise{
	width:100vw;
	height:100vh;
	position: absolute;
	background-color: rgba(0,0,0,.5);
}
.bank_tc{
	width:80%;
	height:600rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
	overflow: hidden;
}
.iconclose{
	color:#bfbfbf;
	font-size: 50rpx;
	position: absolute;
	top:10rpx;
	right:10rpx;
}
.bank_list{
	width:80%;
	position: absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
}
.bank_list > view{
	border-bottom: 1rpx solid 	#D3D3D3;
}
.bank_item{
	width:100%;
	height:90rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.bank_item:first-child{
	border-top: 1rpx solid #D3D3D3;
}
.bank_item view{
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.sure{
	width:80%;
	height:70rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color:#ffffff;
	background-color: #007AFF;
	border-radius: 10rpx;
	position: absolute;
	bottom:20rpx;
	left:50%;
	transform: translateX(-50%);
}
.sure_active{
	background-color:#191970;
}
.bank_pay{
	display: flex;
	align-items: center;
}
</style>
