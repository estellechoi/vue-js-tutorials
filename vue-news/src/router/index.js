import Vue from "vue";
import VueRouter from "vue-router";
import UserInfo from "../views/UserInfo.vue";
import AskItem from "../views/AskItem.vue";
// import createListView from "../views/createListView.js";
import AsksList from "../views/AsksList.vue";
import JobsList from "../views/JobsList.vue";
import NewsList from "../views/NewsList.vue";

Vue.use(VueRouter);

// vue-router config
export const router = new VueRouter({
	mode: "history", // history mode removes # in url.
	routes: [
		{
			path: "/",
			redirect: "/news",
		},
		{
			path: "/news",
			name: "news",
			// component: createListView("News"),
			component: NewsList,
		},
		{
			path: "/ask",
			name: "ask",
			// component: createListView("Ask"),
			component: AsksList,
		},
		{
			path: "/jobs",
			name: "jobs",
			// component: createListView("Jobs"),
			component: JobsList,
		},
		// Dynamic Matching (동적 라우트 매칭)
		{
			path: "/item/:id",
			component: AskItem,
		},
		{
			path: "/users/:id",
			component: UserInfo,
		},
	],
});
