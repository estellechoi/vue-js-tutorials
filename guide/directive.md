# 사용자 지정 디렉티브 (Custom Directives)

## 1. 디렉티브란?

- 일반 엘리먼트에 하위 수준의 DOM 액세스가 필요한 경우, 사용자가 디렉티브를 지정하여 엘리먼트를 컨트롤할 수 있다.
- Vue는 코어에 포함된 기본 디렉티브 세트(`v-model`과 `v-show`)를 제공한다.
- 이 외에도 사용자가 필요한 디렉티브를 등록해서 사용할 수 있다.

## 2. 디렉티브 등록

- 전역 디렉티브 등록

```javascript
Vue.directive("focus", {
	inserted: function (el) {
		el.focus();
	},
});
// * 디렉티브 이름 : v-focus
// * inserted : 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
```

- 지역 디렉티브 등록
  - 컴포넌트에서 `directives` 옵션을 사용할 수 있다.

```javascript
directives: {
    // 디렉티브 정의
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
```

- 디렉티브 등록 후 템플릿의 모든 요소에서 디렉티브 속성을 사용할 수 있다. (`v-focus`와 같이)

```html
<input v-focus />
```

## 3. 훅 함수

- `bind` : 디렉티브가 처음 엘리먼트에 바인딩 될 때 한번만 호출 (일회성 설정)
- `inserted` : 바인딩 된 엘리먼트가 부모 노드에 삽입 되었을 때 호출
  > 이것은 부모 노드 존재를 보장하며 반드시 document 내에 있는 것은 아닙니다.
- `update` : 컴포넌트가 업데이트 된 후 호출
  > 그러나 자식이 업데이트 되기 전일 가능성이 있습니다 디렉티브의 값은 변경되었거나 변경되지 않았을 수 있지만 바인딩의 현재 값과 이전 값을 비교하여 불필요한 업데이트를 건너 뛸 수 있습니다. (아래의 훅 전달인자를 참조하세요)
- `componentUpdated` : 포함하고 있는 컴포넌트와 그 자식들 이 업데이트 된 후 호출
- `unbind` : 디렉티브가 엘리먼트로부터 언바인딩된 경우에만 한번 호출

## 4. 디렉티브 훅 전달인자

- `el` : 디렉티브가 바인딩된 엘리먼트
- `binding` : 아래의 속성을 가진 객체

  - `name`: 디렉티브 이름, `v-` prefix 없음
  - `value`: 디렉티브에서 전달받은 값. 예를 들어 v-my-directive="1 + 1"인 경우 value는 2
  - `oldValue`: 이전 값. update와 componentUpdated에서만 사용 가능. 값 변경여부 확인 가능.
  - `expression`: 표현식 문자열. 예를 들어 v-my-directive="1 + 1"이면, 표현식은 "1 + 1"
  - `arg` : 디렉티브의 전달인자(있는 경우에만). 예를 들어 v-my-directive:foo 이면 "foo"
  - `modifiers`: 포함된 수식어 객체(있는 경우에만). 예를 들어 v-my-directive.foo.bar이면, 수식어 객체는 { foo : true, bar: true }

- `vnode` : Vue 컴파일러가 만든 가상 노드.
- `oldVnode`: 이전의 가상 노드. update와 componentUpdated에서만 사용 가능.

## 5. 디렉티브 예제

```html
<div id="baseexample">
	<p>Scroll down the page</p>
	<p v-pin="200">Stick me 200px from the top of the page</p>
</div>
```

```javascript
Vue.directive("pin", {
	bind: function (el, binding, vnode) {
		el.style.position = "fixed";
		el.style.top = binding.value + "px";
	},
});

new Vue({
	el: "#baseexample",
});
```

---

### Reference

- [Custom Directives](https://vuejs.org/v2/guide/custom-directive.html)
