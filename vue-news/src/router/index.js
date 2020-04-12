import Vue from "vue";
import VueRouter from "vue-router";
import News from "../views/News.vue";
import Ask from "../views/Ask.vue";
import Jobs from "../views/Jobs.vue";
import UserInfo from "../views/UserInfo.vue";
import ItemBox from "../views/ItemBox.vue";

Vue.use(VueRouter);

// vue-router config
export const router = new VueRouter({
	mode: "history", // history mode removes # in url.
	routes: [
		{
			path: "/",
			redirect: "/news"
		},
		{
			path: "/news",
			component: News
		},
		{
			path: "/ask",
			component: Ask
		},
		{
			path: "/jobs",
			component: Jobs
		},
		{
			path: "/itemBox",
			component: ItemBox
		},
		// Dynamic Matching (동적 라우트 매칭)
		{
			path: "/userInfo/:id",
			component: UserInfo
		}
	]
});
