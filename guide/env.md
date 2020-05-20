# .env 환경변수 (.env Environment Variable)

## 1. .env 파일이란 ?

- `node.js`에서 프로그래밍에 필요한 값들을 서술할 수 있는 파일이다.
- 작성규칙
  - `key=value` 형태로 작성한다.
  - 줄의 맨 앞에 `#` 를 붙이면 주석이다.

```
# This is sample variable.
API_URL=http://test.test.com
MESSAGE=hello
NUMBER=1111
```

## 2. .env 파일 사용하기

- `.env` 파일을 이용하기 위해서는 프로젝트에 `dotenv`와 같은 패키지를 설치해야한다.
- `dotenv` 패키지를 불러온 뒤 config 메소드를 실행하면 `.env` 파일의 내용을 `process.env` 객체를 통하여 접근할 수 있다.

```javascript
require("dotenv").config();
```

```javascript
var express = require("express");
var router = express.Router();

router.get("/message", function (req, res, next) {
	res.send(process.env.MESSAGE);
});

router.get("/number", function (req, res, next) {
	res.send(process.env.NUMBER);
});

module.exports = router;
```

- `.env` 파일의 기본 위치는 프로젝트의 루트 디렉토리이다.
- 다른 위치에 있거나 기본 이름이 다른 `.env` 파일을 참조하려면, `config` 메소드를 이용하여 설정한다. (`path` 속성)

```javascript
require("dotenv").config({
	path: ".env.sample",
});
```

---

### Reference

- [[Node.js] .env 환경변수](https://spiralmoon.tistory.com/entry/Nodejs-env-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98)
- [Vue CLI 공식문서](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build)
