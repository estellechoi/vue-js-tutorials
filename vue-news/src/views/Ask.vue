<template>
	<div>
		<div v-for="(ask, index) in fetchedAsks" :key="index">
			{{ ask.title }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["fetchedAsks"])
		// ...mapGetters({
		// 	fetchedAsks: "fetchedAsks"
		// })
		// ...mapState({
		// 	asks: state => state.asks
		// })
		// ask() {
		// 	return this.$store.state;
		// }
	},
	created() {
		// dispatch actions from back-end API.
		this.$store.dispatch("FETCH_ASKS");
	}
};
</script>

<style></style>
