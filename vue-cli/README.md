# Vue CLI

## 1. Vue CLI 란?

- Full system for rapid Vue.js development
- Vue CLI 가 제공하는 것
  - Interactive project scaffolding via `@vue/cli`
  - Zero config rapid prototyping via `@vue/cli` + `@vue/cli-service-global`
  - A runtime dependency (`@vue/cli-service`)

## 2. @vue/cli

- Globally installed npm package and provides the vue command in your terminal.

## 3. @vue/cli-service

- Development dependency.
- NPM package installed locally into every project created by @vue/cli.
- Built on top of `webpack` and `webpack-dev-server`.

## 4. Vue CLI 설치

- NPM 설치

```
npm install -g @vue/cli
```

- 설치여부 확인 (버전 확인)

```
vue --version
```

## 5. Vue CLI 업데이트

- Update the global Vue CLI installation

```
npm update -g @vue/cli
```

- To upgrade one or more @vue/cli related packages (inside the project directory)

```
vue upgrade
```

## 6. Vue CLI 설치경로 (맥OS)

- If you have installed vue globally, the path might be

```
/usr/local/lib/node_modules/@vue
```

## 7. Vue 프로젝트 생성

```
vue create project-directory-name
```

## 8. Vue CLI Service 사용법

- Inside a Vue CLI project, `@vue/cli-service` installs a binary named `vue-cli-service`.
- You can access the binary directly as `vue-cli-service` in npm scripts.
- This is what you will see in the package.json of a project using the default preset.

```json
{
	"scripts": {
		"serve": "vue-cli-service serve",
		"build": "vue-cli-service build"
	}
}
```

- You can invoke these scripts using NPM.

```
npm run serve // 서버 러닝
npm run build // 프로덕션용 빌드 (배포)
```

---

### Reference

- [Vue CLI]()
