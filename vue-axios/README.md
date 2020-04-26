# Axios

## 1. Axios 란?

- 뷰에서 권고하는 HTTP 통신 라이브러리
- Promise 기반
- 장점 : 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양함

## 2. Axios 설치

- CDN 방식

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

- NPM 방식

```
npm install axios
```

## 3. Axios 사용방법

```javascript
new Vue({
	el: "#app",
	methods: {
		fetchData: function() {
			axios
				.get("https://jsonplaceholder.typicode.com/users/") // url requested
				.then(function(res) {
					console.log(res); // if success
				})
				.catch(function(err) {
					console.log(err); // if not
				});
		},
	},
});
```

---

### Reference

- [Cracking Vue.js](https://joshua1988.github.io/vue-camp/vue/axios.html#%EC%95%A1%EC%8B%9C%EC%98%A4%EC%8A%A4-%EC%84%A4%EC%B9%98)
- [Axios 문서](https://github.com/axios/axios#example)
