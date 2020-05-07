import List from "./List.vue";
import bus from "../utils/bus.js";

// this is the high order component.
export default function createListView(name) {
	return {
		// options for sharing(reuse)
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
		// render List component.
		render(createElement) {
			return createElement(List);
		},
	};
}
