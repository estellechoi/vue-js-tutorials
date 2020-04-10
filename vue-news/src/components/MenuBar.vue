<template>
	<div class="header">
		<!-- compiles to <a> -->
		<router-link to="/news">News</router-link> |
		<router-link to="/jobs">Jobs</router-link> |
		<router-link to="/ask">Ask</router-link>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	color: white;
	background-color: tomato;
	display: flex;
	justify-content: center;
	padding: 10px;
}

/* vue-router offers below classes.
	활성화된 링크 요소의 스타일
 */
.header .router-link-exact-active,
.header .router-link-active {
	color: grey;
}

.header a {
	color: white;
}
</style>
