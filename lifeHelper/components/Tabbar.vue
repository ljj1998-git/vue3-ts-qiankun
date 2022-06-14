<template>
	<view>
		<u-tabbar
			:value="value"
			@change="handleChange"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
		>
			<u-tabbar-item :text="item.text" :icon="item.icon" :name="item.name" v-for="item in tabbarList" :key="item.name"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:"Tabbar",
		data() {
			return {
		
			};
		},
		computed:{
			...mapState('tabbar',['tabbarList','value'])
		},
		mounted(){
			console.log(JSON.stringify(this.tabbarList),666);
		},
		methods:{
			handleChange(name){
		
				// console.log(name);
				// uni.redirectTo({
				// 	url:this.path[name]
				// })
			}
		}
	}
</script>

<style>

</style>