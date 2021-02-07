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
  // colArr [true, ]
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
  // console.log(colArr, rowArr);
}

console.log(makeZero(input));
