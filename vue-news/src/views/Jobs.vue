<template>
	<div>
		<div v-for="(job, index) in jobList" :key="index">{{ job.title }}</div>
	</div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
	data() {
		return {
			jobList: []
		};
	},
	created() {
		fetchJobsList()
			.then(res => (this.jobList = res.data))
			.catch(err => console.log(err));
	}
};
</script>

<style></style>
