# 라이프사이클 훅 (Lifecycle Hooks)

## 1. 라이프사이클 훅

- Each Vue instance goes through a series of initialization steps when it’s created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes.
- All lifecycle hooks are called with their this context pointing to the Vue instance invoking it.

  > Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a).

  ![lifecycleHooks](./../image/lifecycleHooks.png)

---

### Reference

- [Vue.js API Official Documentation](https://vuejs.org/v2/api/#created)
- [Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
