import List from "./List.vue";
export default function createListView(name) {
	return {
		// 재사용할 컴포넌트 옵션들
		name: name,
		// render : a method that compiles components.
		render(createElement) {
			return createElement(List);
		},
	};
}
