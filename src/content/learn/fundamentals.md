---
title: Fundamentals
---

<Intro>

Information on this page give you basic knowlege to work with JavaScript.

</Intro>

<YouWillLearn isChapter={false}>

- What is variable
- What is value

</YouWillLearn>

A variable is like a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

```js
  // 🔴 Never (almost never) define a variable "var"!
  // use "const" and if you will redeclare it later use "let"!
const firstName = 'Dom';
const $nameLength = 3;
const _myFirstJob = "Coder";
const SOME_AWESOME_CONSTANT = 42;
```

## Variable name conventions {/*variable-name-conventions*/}

> `Camel Case` --> `someAwesomeVar`

<DeepDive>

#### Variable naming all the way down {/*variable-naming-all-the-way-down*/}

**By convention for JavaScript you should use:**

Camel case for variables and methods.
Pascal case for types and classes in JavaScript.
Upper case snake case for constants.

#### Quick Comparison Table {/*quick-comparison-table*/}

| Case Type                    | Example               |
| ---------------------------- | --------------------- |
| `Camel Case`                 | `someAwesomeVar`      |
| `Snake Case`                 | `some_awesome_var`    |
| `Kebab Case`                 | `some-awesome-var`    |
| `Pascal Case`                | `SomeAwesomeVar`      |
| `Upper Case Snake Case`      | `SOME_AWESOME_VAR`    |

If you interesting to learn more read article: [Most Common Programming Case Types](https://dev.to/chaseadamsio/most-common-programming-case-types-30h9)

</DeepDive>

