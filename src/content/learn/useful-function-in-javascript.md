---
title: Useful Function in JavaScript
---

<Intro>

Information shown on this page I've notice I use a lot.

</Intro>

## ABC {/*abc*/}

You can start with `abcdefghijklmnopqrstuvwxyz` or RegExp, or:

```javascript
function alphabetArray(){
  const callBackFunc = (_, i) => String.fromCharCode((i + "a".charCodeAt(0)))
  return Array.from({length: 26}, callBackFunc);
}
```

## Calculate the performance of a function {/*calculate-the-performance-of-a-function*/}

```javascript
const start = performance.now()
const abc = alphabetArray()
const end = performance.now()
console.log(`${end-start} milliseconds`)
```