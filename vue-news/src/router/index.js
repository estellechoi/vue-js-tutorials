import Vue from "vue";
import VueRouter from "vue-router";
// import News from "../views/News.vue";
// import Ask from "../views/Ask.vue";
// import Jobs from "../views/Jobs.vue";
import UserInfo from "../views/UserInfo.vue";
import AskItem from "../views/AskItem.vue";
import createListView from "../views/createListView.js";

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
			// component: News,
			component: createListView("News"),
		},
		{
			path: "/ask",
			name: "ask",
			// component: Ask,
			component: createListView("Ask"),
		},
		{
			path: "/jobs",
			name: "jobs",
			// component: Jobs,
			component: createListView("Jobs"),
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
