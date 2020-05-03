import Vue from "vue";
// 이벤트 버스 : 빈 이벤트용 객체를 만들어서 컴포넌트간 전달하는 것

// 1)
// export const bus = new Vue();
// import { bus } from "./bus.js";

// 2)
export default new Vue();
// import bus from "./bus.js";
