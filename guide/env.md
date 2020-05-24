# env 환경변수 (Environment Variable)

## 1. env 란 ?

- 환경변수를 뜻한다.
- 터미널에서 `env` 명령어를 타이핑하면 현재 컴퓨터에 설정된 환경변수들이 나열된다.

```console
$ env
```

- 환경변수 생성하기

```shell
$ env KEY=VALUE
```

- 환경변수 삭제하기

```console
$ env -u KEY
```

- 프로그램 실행시 중요한 변수들을 코드로부터 분리하기 위해 환경변수를 사용한다.
  > 포트번호, DB 사용자, 암호 등 노출의 우려가 있는 정보들을 저장한다.

## 2. 크로스 플랫폼 환경변수 설정

- 한 프로젝트의 멤버들이 MacOS, Windows, Linux 등 다양한 OS를 사용하고 있다면, OS마다 환경변수 설정방법이 달라 난감한 상황이 발생한다.
- 이에 대해 Node.js 커뮤니티에서 내놓은 몇몇 대책 중 하나는 `dotenv` 라이브러리이다.

## 3. dotenv 라이브러리

- `dotenv` 라이브러리는 `.env` 파일에 작성한 환경변수들을 사용하는 OS에 맞추어 컴퓨터 환경변수에 설정해주는 기능을 가지고 있다.

### .env 파일

- `KEY=VALUE` 형태로 작성한다.
- 줄의 맨 앞에 `#` 를 붙이면 주석이다.

```env
# This is sample variable.
API_URL=http://test.test.com
```

### NPM 으로 dotenv 설치하기

```console
npm install --save dotenv
```

### dotenv 사용하기

- 이 라이브러리의 `config` 메소드를 실행하면 프로젝트 루트 디렉토리의 `.env` 파일을 자동으로 인식해서 컴퓨터에 환경변수를 설정해준다.

  > `.env` 파일의 기본 위치는 프로젝트의 루트 디렉토리이다.

```javascript
import dotenv from "dotenv";

dotenv.config();
```

- `process.env` 객체를 통해 환경변수에 접근할 수 있다.

```javascript
const url = process.env.API_URL;
```

### dotenv 설정하기

- 다른 위치에 있거나 기본 이름이 다른 `.env` 파일을 참조하려면, `config` 메소드를 이용하여 설정한다.
- 운영, 스테이징, 개발 등 상황에 맞게 `.env` 환경변수 파일을 설정한 후 사용할 수 있다.
- 원하는 상황만큼 `.env`, `.env.production`, `.env.staging` 등 진입점 파일들을 따로 만들고, 상황에 따라 `dotenv` 설정으로 관리한다.

```javascript
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "path/to/.env.develop") });
```

## 4. cross-env 라이브러리

- 이 라이브러리는 CLI 환경에서 프로그램을 실행시키는 시점에 환경변수를 설정하는 기능을 가지고 있다.

### NPM으로 cross-env 설치하기

```console
npm install --save cross-env
```

### 프로그램 실행시 환경변수 설정하기

```console
cross-env NODE_ENV=production PORT=80 node app
```

- 프로그램 실행시 설정된 환경변수에 따라 원하는 .env 파일을 참조할 수 있다.

```javascript
import path from "path";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
	return dotenv.config({
		path: path.join(__dirname, "path/to/.env.production"),
	});
}

if (process.env.NODE_ENV === "develop") {
	return dotenv.config({ path: path.join(__dirname, "path/to/.env.develop") });
}

throw new Error("process.env.NODE_ENV not found.");
```

---

### Reference

- [[Node.js] .env 환경변수](https://spiralmoon.tistory.com/entry/Nodejs-env-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98)
- [Node.js 기반에서 환경변수 사용하기 (dotenv, cross-env)](https://velog.io/@public_danuel/process-env-on-node-js)
- [Vue CLI 공식문서](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build)
