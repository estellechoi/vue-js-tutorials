<template>
	<div>
		<p v-for="(item, index) in this.$store.state.news" :key="index">
			<!-- move to new url -->
			<a :href="item.url">{{ item.title }}</a>
			<small>
				{{ item.time_ago }} by
				<!-- change page for router-vue -->
				<router-link :to="`/userInfo/${item.user}`"
					>{{ item.user }}
				</router-link>
			</small>
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
