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

function Person(name, zone) {
  this.name = name;
  this.zone = zone;
  this.tagline = function () {
    console.log(`I am ${this.name} from zone ${this.zone}`);
  };
}
let bob = new Person('Bob', 'blue');
bob.tagline();
