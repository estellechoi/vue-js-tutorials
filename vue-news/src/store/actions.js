import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

// actions: 비동기 호출 (백엔드 API로 부터 데이터를 받아온다.)
export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then(res => {
				context.commit("SET_NEWS", res.data); // commit to mutations
			})
			.catch(err => console.log(err));
	},
	// 파라미터가 객체일 때 { } 를 사용하여 객체 내의 속성에 바로 접근할 수 있다.
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => {
				commit("SET_JOBS", data);
			})
			.catch(err => console.log(err));
	},
	FETCH_ASKS(context) {
		fetchAskList()
			.then(res => {
				context.commit("SET_ASKS", res.data);
			})
			.catch(err => console.log(err));
	}
};
