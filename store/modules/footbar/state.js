const state={
	data:{
		footbarList:[
			{
				name:'首页',
				index:0,
				image:'/static/img/shouye.png',
				image_checked:'/static/img/shouye_checked.png',
				checked:true,
				path:'/pages/index/gasStation/detail/detail',
			},
			{
				name:'订单',
				index:1,
				image:'/static/img/dingdan.png',
				image_checked:'/static/img/dingdan_checked.png',
				checked:false,
				path:'/pages/index/gasStation/order/order',
			},
		],
		footbarIndex:0
	}	
}
export default state