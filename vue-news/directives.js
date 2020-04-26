// 사용자정의 디렉티브 (전역)
import Vue from "vue";

Vue.directive("toggle", {
	bind: function(el, binding, vnode) {
		el.addEventListener(
			"click",
			() => {
				let next = el.nextElementSibling;
				if (!el.classList.contains("close")) {
					el.classList.add("close");
					if (next) next.style.display = "none";
				} else {
					el.classList.remove("close");
					if (next) next.style.display = "block";
				}
			},
			false
		);
	},
});
