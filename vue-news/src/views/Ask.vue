<template>
	<div>
		<p v-for="(item, index) in fetchedAsks" :key="index">
			<a :href="item.url">{{ item.title }}</a>
			<small>{{ item.time_ago }} by {{ item.user }}</small>
		</p>
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
