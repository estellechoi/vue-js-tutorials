<template>
	<div id="app">
		<!-- cmd + click -->
		<menu-bar></menu-bar>
		<!-- <router-view> 요소는 url 에 해당하는 컴포넌트 태그로 대체된다. -->
		<router-view></router-view>
	</div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
export default {
	components: {
		MenuBar
	}
};
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>
