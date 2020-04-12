<template>
	<div>UserInfo</div>
</template>

<script>
import { mapGetters } from "vuex";

// getters
export default {
	computed: {
		...mapGetters(["fetchedUser"])
	},
	created() {
		const userId = this.$route.params.id;
		this.$store.dispatch("FETCH_USERINFO", userId); // payload (kind of parameter map)
	}
};
</script>

<style></style>
