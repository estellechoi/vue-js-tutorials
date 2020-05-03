import List from "./List.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
	return {
		// 재사용할 컴포넌트 옵션들
		name: name,
		created() {
			bus.$emit("start:spinner");
			this.$store
				.dispatch("FETCH_LIST", this.$route.name)
				.then(() => {
					console.log("fetched");
					bus.$emit("end:spinner");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// renders components.
		render(createElement) {
			return createElement(List);
		},
	};
}
