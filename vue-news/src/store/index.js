import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

// when used as a plugin in Vue
Vue.use(Vuex);

// Vuex : 상태 관리 도구 (상태: 컴포넌트간 공유되는 데이터 속성)
export const store = new Vuex.Store({
	state: {
		userInfo: {},
		ask: {},
		list: [],
	},
	getters: {
		fetchedAsks(state) {
			return state.asks;
		},
		fetchedUser(state) {
			return state.userInfo;
		},
		fetchedAsk(state) {
			return state.ask;
		},
	},
	mutations,
	actions,
});
