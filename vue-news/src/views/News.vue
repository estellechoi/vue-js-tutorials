<template>
	<div>
		<div v-for="(news, index) in newsList" :key="index">{{ news.title }}</div>
	</div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";
export default {
	data() {
		return {
			newsList: []
		};
	},
	created() {
		fetchNewsList()
			.then(res => (this.newsList = res.data))
			.catch(error => console.log(error));
	}
	// beforeMount() {}
};
</script>

<style></style>
