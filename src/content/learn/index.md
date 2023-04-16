---
title: Quick Start
---

<Intro>

In my humble opinion 50% of JavaScript syntax.

</Intro>

```js
// JavaScript standard built-in objects, along with their methods and properties.
import year from './module-name.js';
import * as p from './module-name.js';
export {p};

const valueRGB = () => {
  return ~~(Math.random() * 256);
};

year.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('click');
  year.style.color = `rgb(${valueRGB()}, ${valueRGB()}, ${valueRGB()})`;
});

const CONSTANT_PI = 3.141592653589793;
const CONSTANT_E = 2.718_281_828_4590;
const regexp = /ab+c/i;
let templateLiteral = `string ${regexp} ${'you'}`;

const myObject = {
  birthYear: 2000,
  garbage: 'jdccnksc',
  age() {
    return 2050 - this.birthYear;
  },
};
delete myObject.garbage;

// prettier-ignore
const array = new Array(globalThis, undefined,
  typeof null, NaN !== NaN, {} !== {}, CONSTANT_PI, true,
// prettier-ignore
  "string", !!'string', password, new Intl.Locale('en'),
  ~~3.4, 10n, -0 != 0, Infinity, functionDeclaration, // hoisted to the top of the enclosing function or global scope. You can use the function before you declared it
  myObject, typeof Symbol, [] instanceof Object, (async () => await this)()
);

const [a1, b1, ...rest] = [...(new Set([1, 3, 4, 1, 3, 1, 5]))];
console.log(a1, b1, rest);
const {birthYear, garbage} = myObject;

for (const iterator of array) {
  console.log(iterator);
}

void array.at(1), array?.at(-4);
try {
  throw new Error('Error message!');
} catch (error) {
  void error;
}

void ()

// Functions and classes
const functionExpression = function (a = 1, c = a ** a) {
  return arguments;
};
function* yieldArray(number = 3) {
  yield* Array.from({length: number}, (_, i) =>
    (i + 1) % (3 * 5) === 0
      ? 'FizzBuzz'
      : (i + 1) % 5 === 0
      ? 'Buzz'
      : (i + 1) % 3 === 0
      ? 'Fizz'
      : i + 1
  );
}
let y = yieldArray(15);
let z;
do {
  z = y.next();
  if (z?.value) console.log(z?.value);
} while (!z?.done);

async function* functionDeclaration(a, c) {
  return a - c;
}
void functionExpression(3);

functionExpression.call(this, 3);
functionExpression.bind(this, 3);
// @ts-check
/**
 * a human
 * @typedef {{birthYear: number}} Human
 */
/**
 * showAge a human age
 * @typedef {function(): string} ShowAge
 */
/**
 * @typedef PublicField
 * @public field (simular to property, available on created object)
 */
/**
 * @typedef PrivateField
 * @private field (not accessible outside of class)
 */
/**
 * class Human
 * @class {Human} human - representing a {@link Human}
 * @abstract
 * Classes just syntactic sugar over constructor functions.
 * Classes aren't hoisted.
 * Classes are first-class citizens.
 * Class body is always executed in 'strict mode'.
 */
class Human {
  /**
   * Create a human.
   * @param {number} birthYear - The birthYear a Number parameter.
   */
  constructor(birthYear) {
    this.birthYear = birthYear;
  }
  /**
   * @private {method} #age - calculate a human age (not accessible outside of class).
   * @return {Number} Number - A human age.
   */
  #age() {
    return 2050 - this.birthYear;
  }
  /**
   * @getter {method} {@link ShowAge} - get the #age value
   * @example <caption>Example usage of showAge.</caption>
   * human.showAge: Number;
   * @return {Number} Number - The #age value
   */
  get showAge() {
    return this.#age();
  }
}

/**
 * Class representing a Person (Child class)
 * @extends Human (Parent class). Inheritance between classes, automatically sets prototype
 */
class Person extends Human {
  /**
   * @public {@link PublicField}
   */
  firstName;
  /**
   * @public {@link PublicField}
   */
  lastName;
  /**
   * @private {@link PrivateField}
   */
  #id = 1001001;
  /**
   * @private {@link PrivateField}
   */
  #creditCardNum = '**** **** **** 1111';
  /**
   * @private {@link PrivateField}
   */
  #pin = 1111;
  /**
   * @static {@link PublicField}
   */
  static car = 'tesla';
  /**
   * Create a person.
   * Constructor method, called by new operator. Mandatory in regular class, might be omitted in a child class.
   * @param {!String} firstName - The firstName a String param.
   * @param {!String} lastName - The lastName a String param.
   * @param {!Number} birthYear - The birthYear a Number param.
   * @param {!Number} pin - The pin a Number param.
   */
  constructor(firstName, lastName, birthYear, pin) {
    /**
     * Create a human.
     * Call to parent (super) class (necessary with extends). Needs to happend before accessing this.
     */
    super(birthYear);
    // Instance property (available on created object)
    this.firstName = firstName;
    this.LastName = lastName;
    // Redefining private field
    this.#pin = pin;
  }
  /**
   * @public method introduce.
   * @return {String} String - introduce and greeting.
   */
  introduce() {
    return `I am ${this.firstName}, my pleasure to meet you in person!}`;
  }
  /**
   * @static public method printId (available on class. Can not access instance properties nor methods, only static ones) .
   * @print String - id.
   */
  static printId() {
    console.log(this.#id);
  }
  /**
   * @static protected method _car (name convention to show other developers to use method in class only) .
   * @return {String} String - key.
   */
  static _car() {
    return `Here are the keys from my ${Person.car}`;
  }
  /**
   * @public method showSecret.
   * @print String - Take Whatever You Want.
   * @example <caption>Example usage of showSecret.</caption>
   * person.showSecret(): String;
   * @abstract Referencing protected method, private method and field
   */
  showSecret() {
    console.log(
      `${Person._car()}, card ${this.#showCard()} and pin ${this.#pin}`
    );
  }
  /**
   * @private method
   * @return {String} Credit Card Number
   */
  #showCard() {
    return this.#creditCardNum;
  }
  /**
   * @setter {method} id - set the persons id value
   * @example <caption>Example usage of id.</caption>
   * person.id(idNum: number): void;
   * @return {Number} Number - The #id value
   * @abstract (use _ to set property with same name as method, and also add getter)
   */
  set id(idNum) {
    this.#id = idNum;
  }
  /**
   * @getter {method} id - get the persons id value
   * @example <caption>Example usage of id.</caption>
   * person.id: Number;
   * @return {Number} Number - The #id value
   */
  get id() {
    return this.#id;
  }
}
// Creating new object with new operator
const person = new Person('Dom', 'N', 2030, 2221);
person.showSecret();

console.log(person.showAge);

switch ('hi') {
  case 'hello':
  case 'hi':
    void 'greeting';
    break;
  default:
    break;
}

while (!true) {
  ('');
}

for (let i = 0; i < array.length; i++) {
  const e = array[i];
  if (!e) continue;
  else {
    void e;
  }
  if (i === 100) break;
}

for (const key in myObject) {
  if (myObject.hasOwnProperty.call(myObject, key)) {
    const element = myObject[key];
    void element;
  }
}
// rettier-ignore Assignment Operators
void = *= /= %= += -= <<= >>= >>>= &= ^= |= **= &&= ||= ??=
// prettier-ignore Arithmetic Operators
void ++ -- + - ** * / %
// prettier-ignore Relational Operators
void <, >, <=, >=
// prettier-ignore Comparison operators
void ==  !=  ===  !== 
// prettier-ignore Bitwise Operators
void ~ << >> >>> & | ^
// Binary logical operators
void && ! || ??

```

But any language not just about syntax it is about abstract concepts.



