---
title: Truthy and Falsy Values
---

<Intro>

[Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [falsy (sometimes written falsey)](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values

</Intro>


<YouWillLearn isChapter={true}>

- What [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) Values in JavaScript
- What [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) Values in JavaScript

</YouWillLearn>

In JavaScript, a `truthy` value is a value that is considered true when encountered in a Boolean context. All values are `truthy` unless they are defined as `falsy`. That is, all values are `truthy` except false, 0, -0, 0n, "", null, undefined, and NaN.

JavaScript uses [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) in [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) contexts.

The following table provides a list of JavaScript `falsy` values:

| Value                 | Description                         |
| --------------------- | ----------------------------------- |
| `false`               | The keyword false.                |
| `0`, `0.0`, `0x0`     | The [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) zero.                  |
| `-0`,  `-0.0`, `-0x0` | The [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) negative zero.         |
| `0n`, `0x0n`          | The [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) zero.                 |
| `""`, `''`, ` `` `   | Empty [string](https://developer.mozilla.org/en-US/docs/Glossary/String) value.               |
| `null`                | [null](https://developer.mozilla.org/en-US/docs/Glossary/Null) — the [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) value.  |
| `undefined`           | [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) — the [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) value.  |
| `NaN`                 | [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) — not a number.               |

Examples of `falsy` values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

```js
if (false) {
  // Not reachable
}
if (null) {
  // Not reachable
}
if (undefined) {
  // Not reachable
}
if (0) {
  // Not reachable
}
if (-0) {
  // Not reachable
}
if (0n) {
  // Not reachable
}
if (NaN) {
  // Not reachable
}
if ("") {
  // Not reachable
}
```

Examples of `falsy` values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the while block):

```js
while (false) {
  // Not reachable
}
while (null) {
  // Not reachable
}
while (undefined) {
  // Not reachable
}
while (0) {
  // Not reachable
}
while (-0) {
  // Not reachable
}
while (0n) {
  // Not reachable
}
while (NaN) {
  // Not reachable
}
while ("") {
  // Not reachable
}
```
