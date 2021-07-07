<template name="footbar">
	<view class="container" :style="{height:tobarHeight + '%'}">
		<view class="list" v-for="(item,index) in footbar.data.footbarList" @click="click(item)">
			<image :src="item.image" v-show="!item.checked"></image>
			<image :src="item.image_checked" v-show="item.checked"></image>
			<view :style="{color:item.checked?'#1296db':''}">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState ,mapMutations} from 'vuex'
	export default {
		name:'footbar',
		data() {
			return {

			};
		},
		methods:{
			...mapMutations([
				'footbarChange'
			]),
			
			click(item){
				//特效
				this.footbarChange(item.index)
				
				// //跳转
				uni.redirectTo({
					url:item.path
				})
			}
		},
		computed:{
			...mapState([
				'footbar'
			])
		},
		props:{
			tobarHeight:{
				default:7
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
