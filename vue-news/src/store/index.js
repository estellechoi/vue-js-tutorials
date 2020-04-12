import Vue from "vue";
import Vuex from "vuex";

// when used as a plugin in Vue
Vue.use(Vuex);

// Vuex : 상태 관리 도구 (상태: 컴포넌트간 공유되는 데이터 속성)
export const store = new Vuex.Store({
	state: {
		news: []
	}
});
