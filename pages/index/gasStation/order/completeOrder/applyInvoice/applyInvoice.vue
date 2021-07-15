<template>
	<clickview class="container">
		<view class="title">
			增值税电子普通发票
		</view>
		<view class="invoiceInfo">
			<view v-for="item in invoiceInfo" class="row">
				<view class="label">{{item.name}}</view>
				<view class="data">{{item.data}}</view>
			</view>
		</view>
		<view class="title_info">
			购方信息
		</view>
		<view class="content">
			<view class="row" style="height:150rpx">
				<view class="label">抬头类型</view>
				<radio-group class="radio" @change="radioChange">
					<label v-for="(item,index) in type" :key="item.index">
						<view class="radio_item">
							<radio :value="item.index" :checked="item.checked" /><text>{{item.name}}</text>
						</view>
					</label>
				</radio-group>
			</view>
			<view class="row">
				<view class="label">购方名称</view>
				<input class="radio" placeholder="请输入发票抬头" placeholder-class="placeholder-class"/>
			</view>
			<view class="row" v-show="currentIndex==1">
				<view class="label">纳税人识别号</view>
				<input class="radio" placeholder="请输入购方纳税人识别号" placeholder-class="placeholder-class"/>
			</view>
			<view class="row" v-show="currentIndex==1">
				<view class="label">地址电话</view>
				<input class="radio" placeholder="请输入购方注册地址及电话" placeholder-class="placeholder-class"/>
			</view>
			<view class="row" v-show="currentIndex==1">
				<view class="label">开户行及账号</view>
				<input class="radio" placeholder="请输入购方开户行及账号" placeholder-class="placeholder-class"/>
			</view>
		</view>
		<view class="title_info">
			收件信息
		</view>
		<view class="content">
			<view class="row">
				<view class="label">邮件地址</view>
				<input class="radio" placeholder="请输入邮件地址" placeholder-class="placeholder-class" />
			</view>
			<view class="row">
				<view class="label">手机号码</view>
				<input class="radio" placeholder="请输入手机号码" placeholder-class="placeholder-class" />
			</view>
		</view>
		<view class="submit">
			提交
		</view>
	</clickview>
</template>

<script>
	import clickview from '@/component/clickview/clickview.vue'
	export default {
		components:{
			clickview
		},
		data() {
			return {
				invoiceInfo:[
					{
						name:'订单号',
						data:'ahcnjakc8acbaica'
					},
					{
						name:'订单日期',
						data:'2021-07-09'
					},
					{
						name:'订单金额',
						data:'40元'
					}
				],
				type:[
					{
						name:'个人/非企业性单位',
						index:0,
						checked:true,
					},
					{
						name:'企业',
						index:1,
						checked:false,
					}
				],
				currentIndex:0
			};
		},
		methods:{
			radioChange(e){
				let index=e.detail.value
				this.currentIndex=index
			}
		}
	}
</script>

<style lang="stylus">
.container
	width:100vw
	height:100vh
	.title
		width:100%
		height:200rpx
		font-size :40rpx
		font-weight:600
		display :flex
		justify-content :center
		align-items :center
	.invoiceInfo
		width:100%
		font-size :36rpx
		border-top:1rpx solid 	#D3D3D3
		border-bottom:1rpx solid 	#D3D3D3
		.row
			display :flex;
			margin-top :20rpx
			margin-bottom :20rpx
			.label
				width:200rpx
				margin-left :40rpx
				text-align :justify
			.data
				margin-left:40rpx
				color:#808080
	.title_info
		width :100%
		height:80rpx
		display:flex
		align-items :center
		padding-left :40rpx
		font-size :28rpx
		color:	#A9A9A9
		background-color :	#DCDCDC
	.content
		width:100%
		box-sizing :border-box
		padding-left:40rpx
		padding-right:40rpx
		font-size :30rpx
		.row
			display :flex
			width :100%
			height:100rpx
			align-items :center
			border-bottom :1rpx solid 	#DCDCDC
			.label
				width:200rpx
			.radio
				margin-left :40rpx
				.radio_item
					margin-bottom :10rpx
		.row:last-child
			border:none
.placeholder-class
	padding-left :10rpx
	font-size :30rpx
.submit
	width:80%
	height:80rpx
	display :flex
	justify-content :center
	align-items :center
	background-color:#1E90FF
	color:#FFFFFF
	margin:40rpx auto
	border-radius :10rpx
</style>
