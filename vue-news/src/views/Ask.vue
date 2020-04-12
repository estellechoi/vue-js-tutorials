<template>
	<div>
		<div v-for="(ask, index) in this.$store.state.asks" :key="index">
			{{ ask.title }}
		</div>
	</div>
</template>

<script>
export default {
	created() {
		// dispatch actions from back-end API.
		this.$store.dispatch("FETCH_ASKS");
	}
};
</script>

<style></style>
