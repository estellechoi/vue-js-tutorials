# Event Modifier

## 1. Event Modifier ?

- DOM event handlers can have modifiers that alter their behaviour.
- The list of modifiers:

  - `preventDefault` : calls `event.preventDefault()` before running the handler. Useful for client-side form handling.
  - `stopPropagation` : calls `event.stopPropagation()`, preventing the event reaching the next element.
  - `passive` : improves scrolling performance on touch/wheel events.
    > `passive` 속성이 false인 경우에 `touchstart`, `touchmove`와 같은 이벤트가 발생하면 `preventDefault`를 이용하여 실제 이벤트 자체를 막을 수 있기 때문에, 브라우저는 scroll을 계속 할지 안할지를 매번 감시해야만 한다. 하지만, passive 속성이 true일 경우에는 preventDefault를 이용하여 scroll 이벤트를 막지 않겠다고 브라우저에게 이야기하는 것과 같다. Chrome 54+ 부터 `passive` 속성이 특별한 상황일 경우에는 기본값이 true로 설정된다.
  - `capture` : fires the handler during the capture phase instead of the bubbling phase
    > [Event bubbling and capture](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
  - `once` : remove the handler after the first time it runs
  - `self` : only trigger handler if `event.target` is the element itself.

```javascript
document.addEventListener("touchstart", handler, {
	capture: false,
	once: false,
	passive: false,
});
```

## 2. Key Modifiers

- When listening for keyboard events, we often need to check for specific keys.

```html
<!-- only call `vm.submit()` only when the pressed and released key is `Enter` -->
<input v-on:keyup.enter="submit" />
```

- You can directly use any valid key names exposed via [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) as modifiers by converting them to kebab-case.

  > What is kebab-case ? Read [this](https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841).

- In the below example, the handler will only be called if `$event.key` is equal to 'PageDown'.

  ```html
  <input v-on:keyup.page-down="onPageDown" />
  ```

### Key Codes

- Using keyCode attributes is also permitted.
- keyCode values are for browser's keydown events.

  > The use of keyCode events is deprecated and may not be supported in new browsers.
  > Read [this](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) for what keyCode is.

  ```html
  <input v-on:keyup.13="submit" />
  ```

- Vue provides aliases for the most commonly used key codes when necessary for legacy browser support
  - `.enter`
  - `.tab`
  - `.delete` (both “Delete” and “Backspace” keys)
  - `.esc`
  - `.space`
  - `.up`
  - `.down`
  - `.left`
  - `.right`

> A few keys (.esc and all arrow keys) have inconsistent key values in IE9, so these built-in aliases should be preferred if you need to support IE9.

- You can also [define custom key modifier aliases](https://vuejs.org/v2/api/#keyCodes) via the global `config.keyCodes` object.

```javascript
// enable `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112;
```

## 3. System Modifier Keys

> New in 2.1.0+

- You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed.

  - `.ctrl`
  - `.alt`
  - `.shift`
  - `.meta`

> Note: On Macintosh keyboards, meta is the command key (⌘). On Windows keyboards, meta is the Windows key (⊞). On Sun Microsystems keyboards, meta is marked as a solid diamond (◆). On certain keyboards, specifically MIT and Lisp machine keyboards and successors, such as the Knight keyboard, space-cadet keyboard, meta is labeled “META”. On Symbolics keyboards, meta is labeled “META” or “Meta”.

```html
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear" />

<!-- Ctrl + Click -->
<div v-on:click.ctrl="doSomething"></div>
```

> Note that modifier keys are different from regular keys and when used with `keyup` events, they have to be pressed when the event is emitted. In other words, `keyup.ctrl` will only trigger if you release a key while holding down `ctrl`. It won’t trigger if you release the `ctrl` key alone. If you do want such behaviour, use the keyCode for ctrl instead: `keyup.17`.

### .exact Modifier

- The `.exact` modifier allows control of the exact combination of system modifiers needed to trigger an event.

```html
<!-- even if Alt or Shift is also pressed -->
<button v-on:click.ctrl="onClick">A</button>

<!-- only when Ctrl and no other keys are pressed -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- only when no system modifiers are pressed -->
<button v-on:click.exact="onClick">A</button>
```

### Mouse Button Modifiers

- To events triggered by a specific mouse button.
  - `.left`
  - `.right`
  - `.middle`

---

### Reference

- [Vue.js Guide](https://vuejs.org/v2/guide/events.html#Event-Modifiers)
- [Vue.js API](https://vuejs.org/v2/api/#keyCodes)
- [KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
- [EventTarget.removeEventListener() | MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/removeEventListener)
- [addEventListener의 요상한 옵션들 중의 하나 Passive](http://sculove.github.io/blog/2016/12/29/addEventListener-passive/)
