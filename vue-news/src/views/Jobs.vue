<template>
	<div>
		<div v-for="(job, index) in this.$store.state.jobs" :key="index">
			{{ job.title }}
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch("FETCH_JOBS");
	}
};
</script>

<style></style>
