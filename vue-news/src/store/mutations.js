// actions 를 통해 받아온 서버 데이터를 state에 바인딩할 때 mutations 를 사용한다.
// mutations literally mutate state data.
export default {
	SET_NEWS(state, data) {
		state.news = data;
	},
	SET_JOBS(state, data) {
		state.jobs = data;
	},
	SET_ASKS(state, data) {
		state.asks = data;
	},
	SET_USER(state, data) {
		state.userInfo = data;
	},
	SET_ASK(state, data) {
		state.ask = data;
	}
};
