<template>
	<div>
		<div v-for="(news, index) in this.$store.state.news" :key="index">
			{{ news.title }}
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_NEWS");
	}
	// beforeMount() {}
};
</script>

<style></style>
