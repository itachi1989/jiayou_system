<template name="footbar">
	<view class="container" :style="{height:tobarHeight + '%'}">
		<view class="list" v-for="(item,index) in list" @click="click(index)">
			<image :src="item.image" v-show="!item.checked"></image>
			<image :src="item.image_checked" v-show="item.checked"></image>
			<view :style="{color:item.checked?'#1296db':''}">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'footbar',
		data() {
			return {
				list:[
					{
						name:'首页',
						index:0,
						image:'/static/img/shouye.png',
						image_checked:'/static/img/shouye_checked.png',
						checked:true,
					},
					{
						name:'订单',
						index:1,
						image:'/static/img/dingdan.png',
						image_checked:'/static/img/dingdan_checked.png',
						checked:false,
					},
				],
				currentIndex:0,
			};
		},
		methods:{
			click(index){
				this.list[this.currentIndex].checked=false
				this.list[index].checked=true
				this.currentIndex=index
				
			}
		},
		props:{
			tobarHeight:{
				default:5
			}
		},

	}
</script>

<style lang="stylus">
.container
	width:100vw
	background-color :#ffffff
	position :fixed
	bottom:0
	border-top:1rpx solid #C0C0C0
	display :flex
	z-index:999
	.list
		height:100%
		flex:1
		display :flex
		flex-direction :column
		justify-content :center
		align-items :center
		font-size :24rpx
		color:	#C0C0C0
		image
			margin-bottom :10rpx
			width:40rpx
			height:40rpx
</style>
