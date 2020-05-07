# 네비게이션 가드 (Custom Directives)

## 1. 네비게이션 가드 사용하기

- You can either watch the `$route` object to react to changes, or use the `beforeRouteUpdate` in-component guard.
- Remember that params or query changes won't trigger enter/leave navigation guards.

## 2. 전역 Before Guards

- `router.beforeEach`

```javascript
const router = new VueRouter({
	// ...
});

router.beforeEach((to, from, next) => {
	// ...
});
```

- `to`: target Route object
- `from` : current route being navigated away from
- `next` : this function must be called to resolve the hook. The action depends on the arguments provided to `next`.
  - `next()`: move on to the next hook.
  - `next(false)` : abort the current navigation.
  - `next('/')` (`next({ path: '/' })`) : redirect to a different location.

---

### Reference

- [Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards)
- [(중급) Vue.js 라우터 네비게이션 가드 알아보기](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)
- [Vue.js API Official Documentation](https://vuejs.org/v2/api/#created)
