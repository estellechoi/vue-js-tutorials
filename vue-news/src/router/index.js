import Vue from "vue";
import VueRouter from "vue-router";
import { News } from "../views/News.vue";
import { Ask } from "../views/Ask.vue";
import { Jobs } from "../views/Jobs.vue";

Vue.use(VueRouter);

// vue-router config
export const router = new VueRouter({
	routes: [
		{
			path: "/news", // url
			component: News
		},
		{
			path: "/ask",
			component: Ask
		},
		{
			path: "/jobs",
			component: Jobs
		}
	]
});
