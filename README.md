# Vue.js Self-study

## What I Learned

- [사용자 지정 디렉티브 (Custom Directives)](https://github.com/estellechoi/vue-js-tutorials/blob/master/guide/directive.md)
- [네비게이션 가드 (Navigation Guards)](https://github.com/estellechoi/vue-js-tutorials/blob/master/guide/navigationGuards.md)
- [CORS와 프록시 (Proxy)](https://github.com/estellechoi/vue-js-tutorials/blob/master/guide/proxy.md)

## Tips

### Check Vue version

```
vue --version
```

### If installed globally, the path might be

```
/usr/local/lib/node_modules/@vue
```

### Create Vue project

```
# vue cli 3.x
vue create project-directory-name

# vue cli 2.x
vue init webpack-simple project-directory-name
```

### Configure webpack

- vue cli 3.x : vue.config.js

  > See [Vue Cli Configuration Reference](https://cli.vuejs.org/guide/webpack.html#simple-configuration)

- vue cli 2.x : webpack.config.js

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

- See [Configuration Reference](https://cli.vuejs.org/config/).
