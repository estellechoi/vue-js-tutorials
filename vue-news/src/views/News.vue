<template>
	<div>
		<p v-for="(item, index) in this.$store.state.news" :key="index">
			<a :href="item.url">{{ item.title }}</a>
			<small>{{ item.time_ago }} by {{ item.user }}</small>
		</p>
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
