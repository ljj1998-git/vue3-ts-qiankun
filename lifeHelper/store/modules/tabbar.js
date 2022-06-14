const state = {
	tabbarList: [{
		text: '首页',
		icon: 'home',
		name: 0,
	}, {
		text: '考试',
		icon: 'edit-pen',
		name: 1,
	}, {
		text: '我的',
		icon: 'account',
		name: 2,
	}],
	path: {
		0: '../home/index',
		1: '../examination/index',
		2: '../my/index',
	},
	value: 0,
}
const mutations = {
	setValue({state},value){
		state.value = value
	}
}
const actions = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
