// Sort an object
const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60,
};

// const sortedObj = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

// console.log(sortedObj);

const sortedObj = Object.entries(maxSpeed)
  .sort(([, a], [, b]) => b - a)
  .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

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

let foo = ['abc', 'def', 'ghi&'];
// let step1 = foo.join();
// console.log(step1.slice(0, step1.length - 1));

/* Constructor function and keyword "this" */

function Monster(species, toothSize, venom) {
  // this.species = species;
  // this.toothSize = toothSize;
  // this.venom = venom;

  console.log(
    `I am a ${species} and I will bite you with my ${toothSize} teeth and inject you with my ${venom} venom`
  );
}

// Monster('reptile', 'green, gooey', 'fire');
// let buggaBoo = new Monster('reptile', 'medium serrated', 'flesh destroying');

// buggaBoo.tagline();

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  tagline() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Dog extends Cat {
  bark() {
    console.log(`bow wowbow wow bow wow bow bow wow`);
  }
}
let fluffy = new Cat('Fluffy', 5);
// fluffy.tagline();
let dingdong = new Dog('Ding', 2);
// dingdong.tagline();
// dingdong.bark();

/*CSS specificity rules
1. inline
2. id
3. classes and pseudo classes
4. html elements and pseudo elements

*/

// Given a string and a word, count the number of occurrences in the string, of that word. ' dog, dog, cat' returns dog 2.
function countWords(str, word) {
  let count = 0;
  str = str.replace(/,/g, '').split(' ');
  // str = str.split(' ').join(' ');
  console.log(str);
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === word) {
      count++;
    }
    // console.log(str[i]);
  }
  return word + ' : ' + count;
}

// console.log(
//   countWords('dog eat dog, dog eat cat, cat eat mouse, mouse eat dog', 'dog')
// );

/*
Given the string 
let str = 'oy ouy yy yiae'
use reduce to:
1. return the last vowel group in the string.
2. return all of the vowels in the string.
3. return the length of the last vowel group.
4. return the length of the longest vowel group in the string.

*/

let str = 'oy ouy aaaaaaa yy yiae';
str = str.split(/[^aeiou]/gi);
// console.log(str);
// console.log(str.reduce((a, c) => (a, c)));
// console.log(str.reduce((a, c) => a + c));
// console.log(str.reduce((a, c) => Math.max(a, c.length), 0));

// Write a higher order function myForEach() which acts like forEach.
// let colors = ['red','green','purple', 'blue'];

Array.prototype.myForEach = function (fx) {
  for (let i = 0; i < this.length; i++) {
    console.log(fx(this[i]));
  }
};

// console.log([1, 2, 3].myForEach((i) => i * 2));

// What does the keyword new do? Demo it in a constructor function.
function Monster(species, temperment) {
  this.species = species;
  this.temperment = temperment;
  this.tagline = function () {
    console.log(`I am a ${this.temperment} ${this.species}`);
  };
}

let slither = new Monster('serpent', 'lonely');

// slither.tagline();

/*
Define a comments object with a data array and 
a  print method that prints each item in data, 
and then  invoke the method.

*/
// const Comment = {};
// Comment.data = [1, 2, 3];
// Comment.print = function () {
//   for (let i = 0; i < this.data.length; i++) {
//     console.log(this.data[i]);
//   }
// };

const Comment = {
  data: [1, 2, 3],
  print: function () {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  },
};

// Comment.print();

// Given below, return
// [ 'least', 'more', 'still-more', 'most' ]

var list = { 'still-more': 100, more: 75, most: 116, least: 15 };
// sort the object and return the sorted keys
const step1 = Object.entries(list)
  .sort(([, a], [, b]) => b - a)
  .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});
const step2 = [];
for (let i in step1) {
  step2.push(i);
}
// console.log(step2.reverse());

let bar = ['abc', 'def', 'ghi&'];
const stringJoin = foo.join(' ');
// console.log(stringJoin.slice(0, stringJoin.length - 1));
// const step2 = step1.slice(step1.length - 1);

// var Bob = {
//   name: 'Bob',
//   sayHi: function () {
//     setTimeout(
//       function () {
//         console.log('Hi ' + this.name);
//       }.bind(this),
//       4000
//     );
//   },
// };
// console.log(Bob.sayHi());

// Given code below, demonstrate partial application using the bind method of assigning keyword this
var Bob = {
  name: 'Bob',
  sayHi: function () {
    return 'Hi, my name is ' + this.name;
  },
  addNumbers: function (a, b, c, d) {
    return this.name + ' just calculated ' + (a + b + c + d);
  },
};

var Sue = {
  name: 'Sue',
};
let sueCount = Bob.addNumbers.bind(Sue, 1, 2);
console.log(sueCount(3, 4));
