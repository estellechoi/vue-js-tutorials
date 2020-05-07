// hoc
// export default function create() {}

import bus from "../utils/bus";

// mixin
export default {
	// component options to be reused
	created() {
		bus.$emit("start:spinner");
		this.$store
			.dispatch("FETCH_LIST", this.$route.name)
			.then(() => {
				console.log("fetched");
				bus.$emit("end:spinner");
			})
			.catch((err) => console.log(err));
	},
};
