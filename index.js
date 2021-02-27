// Sort an object
// const maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60,
// };

// const sortedObj = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

// console.log(sortedObj);

// const sortedObj = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

// console.log(sortedObj);

/*
2D array
Write an algorithm which searches through a 2D array, and whenever it finds a zero should 
set the entire row and column to zero.
```
let input =
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
```
Output:
[ [ 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0 ],
 [ 0, 0, 1, 1, 0 ],
 [ 0, 0, 0, 0, 0 ],
 [ 0, 0, 1, 1, 0 ] ]

 */
let input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

function makeZero(arr) {
  const colArr = [],
    rowArr = [];
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
      if (arr[a][b] === 0) {
        rowArr[a] = true;
        colArr[b] = true;
      }
    }
  }
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
      if (colArr[b] || rowArr[a]) {
        arr[a][b] = 0;
      }
    }
  }
  return arr;
}

// console.log(makeZero(input));

/*
Given the string 'ABC', slice or substring 'A'
*/

// console.log('ABC'.slice(0, 1));

/*
1. Given a string, remove the last character in the string
2. Given an array of strings, remove the last character of the last array element
foo = ['abc','def','ghi&'] --> ['abc','def','ghi']

*/
// let foo = 'abc';
// console.log(foo.slice(0, foo.length - 1));

// let foo = ['abc', 'def', 'ghi&'];
// // let step1 = foo.join();
// // console.log(step1.slice(0, step1.length - 1));

// /* Constructor function and keyword "this" */

// function Monster(species, toothSize, venom) {
//   // this.species = species;
//   // this.toothSize = toothSize;
//   // this.venom = venom;

//   console.log(
//     `I am a ${species} and I will bite you with my ${toothSize} teeth and inject you with my ${venom} venom`
// //   );
// // }

// // // Monster('reptile', 'green, gooey', 'fire');
// // // let buggaBoo = new Monster('reptile', 'medium serrated', 'flesh destroying');

// // // buggaBoo.tagline();

// // class Cat {
// // //   constructor(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }

// // //   tagline() {
// // //     console.log(`I am ${this.name} and I am ${this.age} years old`);
// // //   }
// // // }

// // // class Dog extends Cat {
// // //   bark() {
// // //     console.log(`bow wowbow wow bow wow bow bow wow`);
// // //   }
// // // }
// // // let fluffy = new Cat('Fluffy', 5);
// // // // fluffy.tagline();
// // // let dingdong = new Dog('Ding', 2);
// // // // dingdong.tagline();
// // // dingdong.bark();

// // /*CSS specificity rules
// // 1. inline
// // 2. id
// // 3. classes and pseudo classes
// // 4. html elements and pseudo elements

// // */

// // // Given a string and a word, count the number of occurrences in the string, of that word. ' dog, dog, cat' returns dog 2.
// // // function countWords(str, word) {
// // //   let count = 0;
// // //   str = str.replace(/,/g, '').split(' ');
// // //   // str = str.split(' ').join(' ');
// // //   console.log(str);
// // //   for (let i = 0; i <= str.length; i++) {
// // //     if (str[i] === word) {
// // //       count++;
// // //     }
// // //     // console.log(str[i]);
// // //   }
// // //   return word + ' : ' + count;
// // // // }

// // // // console.log(
// // // //   countWords('dog eat dog, dog eat cat, cat eat mouse, mouse eat dog', 'dog')
// // // // );

// // // /*
// // // Given the string
// // // let str = 'oy ouy yy yiae'
// // // use reduce to:
// // // 1. return the last vowel group in the string.
// // // 2. return all of the vowels in the string.
// // // 3. return the length of the last vowel group.
// // // 4. return the length of the longest vowel group in the string.

// // // */

// // // let str = 'oy ouy aaaaaaa yy yiae';
// // // str = str.split(/[^aeiou]/gi);
// // // // console.log(str);
// // // // console.log(str.reduce((a, c) => (a, c)));
// // // // console.log(str.reduce((a, c) => a + c));
// // // // console.log(str.reduce((a, c) => Math.max(a, c.length), 0));

// // // // Write a higher order function myForEach() which acts like forEach.
// // // // let colors = ['red','green','purple', 'blue'];

// // // Array.prototype.myForEach = function (fx) {
// // //   for (let i = 0; i < this.length; i++) {
// // //     console.log(fx(this[i]));
// // //   }
// // // };

// // // // console.log([1, 2, 3].myForEach((i) => i * 2));

// // // // What does the keyword new do? Demo it in a constructor function.
// // // function Monster(species, temperment) {
// // //   this.species = species;
// // //   this.temperment = temperment;
// // //   this.tagline = function () {
// // //     console.log(`I am a ${this.temperment} ${this.species}`);
// // //   };
// // // }

// // // let slither = new Monster('serpent', 'lonely');

// // // slither.tagline();

// // /*
// // Define a comments object with a data array and
// // a  print method that prints each item in data,
// // and then  invoke the method.

// // */
// // // const Comment = {};
// // // Comment.data = [1, 2, 3];
// // // Comment.print = function () {
// // //   for (let i = 0; i < this.data.length; i++) {
// // //     console.log(this.data[i]);
// // //   }
// // // };

// // const Comment = {
// //   data: [1, 2, 3],
// //   print: function () {
// //     for (let i = 0; i < this.data.length; i++) {
// //       console.log(this.data[i]);
// //     }
// //   },
// // };

// // // Comment.print();

// // // Given below, return
// // // [ 'least', 'more', 'still-more', 'most' ]

// // var list = { 'still-more': 100, more: 75, most: 116, least: 15 };
// // // sort the object and return the sorted keys
// // const step1 = Object.entries(list)
// //   .sort(([, a], [, b]) => b - a)
// //   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});
// // const step2 = [];
// // for (let i in step1) {
// //   step2.push(i);
// // }
// // // console.log(step2.reverse());

// // let bar = ['abc', 'def', 'ghi&'];
// // const stringJoin = foo.join(' ');
// // console.log(stringJoin.slice(0, stringJoin.length - 1));
// // const step2 = step1.slice(step1.length - 1);

// // var Bob = {
// //   name: 'Bob',
// //   sayHi: function () {
// //     setTimeout(
// //       function () {
// //         console.log('Hi ' + this.name);
// //       }.bind(this),
// //       4000
// //     );
// //   },
// // };
// // console.log(Bob.sayHi());

// // Given code below, demonstrate partial application using the bind method of assigning keyword this
// // var Bob = {
// //   name: 'Bob',
// //   sayHi: function () {
// //     return 'Hi, my name is ' + this.name;
// //   },
// //   addNumbers: function (a, b, c, d) {
// //     return this.name + ' just calculated ' + (a + b + c + d);
// //   },
// // };

// // var Sue = {
// //   name: 'Sue',
// // };
// // let sueCount = Bob.addNumbers.bind(Sue, 1, 2);
// // console.log(sueCount(3, 4));

// // Date formater
// function dateFormatter() {
// //   var months = [
// //     'January',
// //     'February',
// //     'March',
// //     'April',
// //     'May',
// //     'June',
// //     'July',
// //     'August',
// //     'September',
// //     'October',
// //     'November',
// //     'December',
// //   ];
// //   let date = new Date();
// //   console.log(
// //     `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
// //   );
// // }

// // // dateFormatter();

// // // Without using toString(), script a recursive conversion to binary. Given a number, express it in binary form.

// // function makeBinary(n) {
// //   if (n < 1) return '';
// //   return makeBinary(Math.floor(n / 2)) + (n % 2);
// // }
// // // console.log(makeBinary(21));

// // const maxSpeed = {
// //   car: 300,
// //   bike: 60,
// //   motorbike: 200,
// //   airplane: 1000,
// //   helicopter: 400,
// //   rocket: 8 * 60 * 60,
// // };

// let stepA = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});
// // console.log(stepA);

// // div:nth-of-type(3) p{}

// function arrayDoubler(arr) {
//   if (arr.length < 1) return [];
//   return [arr[0] * 2, ...arrayDoubler(arr.slice(1))];
// }
// // console.log(arrayDoubler([1, 2, 3]));

// function digitalRoot(n) {
//   return ((n - 1) % 9) + 1;
// }
// // console.log(digitalRoot(546));
// let categories = [
//   { id: 'animals', parent: null },
//   { id: 'mammals', parent: 'animals' },
//   { id: 'cats', parent: 'mammals' },
//   { id: 'dogs', parent: 'mammals' },
//   { id: 'chihuahua', parent: 'dogs' },
//   { id: 'labrador', parent: 'dogs' },
//   { id: 'persian', parent: 'cats' },
//   { id: 'siamese', parent: 'cats' },
// ];
// let makeTree = (categories, parent) => {
//   let node = {};
//   categories
//     .filter((c) => c.parent === parent)
//     .forEach((c) => (node[c.id] = makeTree(categories, c.id)));
//   return node;
// };
// // console.log(JSON.stringify(makeTree(categories, null), null, 2));
// // console.log(JSON.stringify(makeTree(categories, null), null, 2));
// // Math.floor(Math.random()*(max-min))+min
// // console.log(Math.floor(Math.random() * 6) + 5);

// Download an image in Node

// const numericFormatter = (template, string) => {
//   let x = 0;
//   return template.replace(/#/g, () => x++);
// };
// // console.log(numericFormatter('## ### ## ###', '1234567891'));

// var person = {
//   firstName: 'Ellie',
//   sayHi: function () {
//     return 'Hi ' + this.firstName;
//   },
//   determineContext: function () {
//     return this === person;
//   },
//   dogs: {
//     myOwnerIs: function () {
//       return 'Hello, my owner is ' + this.firstName;
//     },
//     determineContext: function () {
//       return this === person;
//     },
//   },
// };
// // console.log(person.dogs.myOwnerIs.call(person));
// // foo foo bar

// var person = {
//   firstName: 'Ellie',
//   sayHi: function () {
//     return 'Hi ' + this.firstName;
//   },
//   determineContext: function () {
//     return this === person;
//   },
//   dogs: {
//     myOwnerIs: function () {
//       return 'Hello, my owner is ' + this.firstName;
//     },
//     determineContext: function () {
//       return this === person;
//     },
//   },
// };
// // console.log(person.dogs.myOwnerIs.call(person));

// // function numFormatter(template, str) {
// //   let x = 0;
// //   return template.replace(/[#|&|$]/g, () => str[x++]);
// // }
// // console.log(numFormatter('## #$# &# ###', 'abcdefghij'));

// // div:nth-of-type(3) p{}

// // Write  try catch block

// // try {
// //   consoe.log('hanga banga');
// // } catch (error) {
// //   console.log('ERROR', error.message || error);
// //   // throw error;
// // }

// //  Write a program that accepts one or more numbers as command-line arguments
// // and prints the sum of those numbers to the console (stdout).

// // console.log(
// //   process.argv
// //     .slice(2)
// //     .map((i) => Number(i))
// //     .reduce((a, c) => a + c)
// // );
// // const http = require('http');
// // http
// //   .createServer((req, res) => {
// //     res.writeHead(200, { 'Content-Tyoe': 'text/plain' });
// //     res.write('Hanga Banga Boo');
// //     res.end();
// //   })
// //   .listen(8080);

// // const myPromise = new Promise((resolve, reject) => {
// //   resolve(10);
// //   reject();
// // });

// // console.log(myPromise);

// // function getTemp() {
// //   return new Promise((resolve, reject) => {
// //     const delay = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
// //     const temp = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
// //     setTimeout(() => {
// //       if (temp < 300) {
// //         reject(`Too cold`);
// //       } else {
// //         resolve(`All bueno`);
// //       }
// //     }, delay);
// //   });
// // }

// // getTemp()
// //   .then((result) => console.log(result))
// //   .catch((error) => console.log(error));
// // console.log(getTemp);
// // console.log(result);

// // const myPromise = new Promise((resolve, reject) => {
// //   resolve(3);
// //   reject('no good');
// // });

// // myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// // Error handling with async await

// // const someFoo = async () => {
// //   try {
// //     consoe.log(`hanga banga boo`);
// //   } catch (err) {
// //     console.log(err.message);
// //     // throw new Error();
// //   }
// // };
// // someFoo();

// // const fs = require('fs-extra');

// // fs.readFileSync('./export.js');

// const palindromeChecker = (str) => {
//   let backIdx = str.length - 1;
//   let frontIdx = 0;
//   while (frontIdx < backIdx) {
//     if (str[frontIdx].match(/[\s|_|-]/g)) {
//       console.log('front match');
//       frontIdx++;
//       continue;
//     }
//     if (str[backIdx].match(/[\s|_|-]/g)) {
//       console.log('back match');
//       backIdx--;
//       continue;
//     }
//     if (str[frontIdx] !== str[backIdx]) {
//       return false;
//     }

//     frontIdx++;
//     backIdx--;
//   }
//   return true;
// };

// // console.log(palindromeChecker('0_0 (: /-\\ :) 0-0'));

// // let bam = 'abcde%';

// // const removeLastChar = (str) => {
// //   str = str.replace(/.$/g, '');
// //   return str;
// // };
// // console.log(removeLastChar(bam));
// // let bam = ['one', 'two', 'three*'];
// // const removeLastChar = (arr) => {
// //   let str = arr.join(' ');
// //   return str.replace(/.$/g, '').split(' ');
// // };
// // console.log(removeLastChar(bam));

// const maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60,
// };

// const step1 = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

// console.log(step1);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   distanceFrom = function (otherX, otherY) {
//     otherX = Number(otherX);
//     otherY = Number(otherY);
//     return Math.sqrt((this.y - otherY) / (this.x - otherX));
//   };
// }

// let foo = new Point(8, 2);
// console.log(foo.distanceFrom(77, 43));

// function Monster(type, temper, name) {
//   this.name = name;
//   this.type = type;
//   this.temper = temper;
// }

// let zygor = new Monster('Cyclops', 'bellacose', 'Zygor');
// zygor.tagLine = function () {
//   console.log(`I am a ${this.type} and I am very ${this.temper}`);
// };

// let zelda = new Monster('Vampire', 'ambiguos', 'Zelda');

// Monster.prototype.jumpingJacks = function () {
//   console.log(` I am ${this.name} and I jump jump jump!`);
// };
// // zygor.tagLine.call(zelda);
// zelda.jumpingJacks();
// zygor.jumpingJacks();

// const data = require('../data.txt');
// const fs = require(

// const removeLastChar = (arr) => {
//   return arr.join(' ').replace(/.$/g, '');
// };
// console.log(removeLastChar(['abc', 'def', 'ghi&']));
