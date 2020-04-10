<template>
	<div>
		<div v-for="(ask, index) in askList" :key="index">{{ ask.title }}</div>
	</div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
	data() {
		return {
			askList: []
		};
	},
	created() {
		fetchAskList()
			.then(res => (this.askList = res.data))
			.catch(err => console.log(err));
	}
};
</script>

<style></style>
