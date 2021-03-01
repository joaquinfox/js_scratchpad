// const fs = require('fs-extra');

// const output = fs
//   .readFileSync('../../../data.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map((order) => order.split('\t'))
//   .reduce((a, c) => {
//     a[c[0]] = [];
//     a[c[0]].push({ name: c[1], price: c[2], quantity: c[3] });
//     return a;
//   }, {});

// console.log(output);

// const evalTemp = () => {
//   let delay = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
//   let temp = Math.floor(Math.random() * (300 - 0 + 1) + 1);
//   let output;
//   setTimeout(() => {
//     if (temp < 100) {
//       output = `Too cold`;
//     } else if (temp > 200) {
//       output = `Too hot`;
//     } else {
//       output = `'Is perfect`;
//     }
//     console.log(output);
//     console.log(temp);
//     console.log(delay);
//   }, delay);
// };

// evalTemp();
// const evalTemp = () => {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
//     let temp = Math.floor(Math.random() * (300 - 0 + 1) + 1);
//     setTimeout(() => {
//       if (temp < 100) {
//         reject(`Too cold`);
//       } else if (temp > 200) {
//         reject(`Too hot`);
//       } else {
//         resolve(`Just right`);
//       }
//     }, delay);
//   });
// };

// evalTemp()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fs = require('fs-extra');
// let output = fs.readFileSync('../../../data.txt', 'utf8');

// output = output
//   .trim()
//   .split('\n')
//   .map((order) => order.split('\t'))
//   .reduce((a, c) => {
//     a[c[0]] = [];
//     a[c[0]].push({ name: c[1], price: c[2], quantity: c[3] });
//     return a;
//   }, {});

// console.log(output);

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

// const makeTree = (array, parent) => {
//   let container = {};
//   array
//     .filter((item) => item.parent === parent)
//     .forEach((item) => {
//       container[item.id] = makeTree(array, item.id);
//     });
//   return container;
//   //   return array;
// };

// console.log(JSON.stringify(makeTree(categories, null), null, 2));

// const evalTemp = () => {
//   return new Promise((resolve, reject) => {
//     let temp = Math.flor(Math.random() * 500 + 100);
//     setTimeout(() => {
//       if (temp < 200) {
//         reject(`Too cold. Temp: ${temp}`);
//       } else if (temp > 400) {
//         resolve(`Too hot. Temp: ${temp}`);
//       } else {
//         resolve(`Just right. Temp: ${temp}`);
//       }
//     }, 4000);
//   });
// };

// evalTemp().then((res) => console.log(res));
//   .catch((err) => console.log(err.message));
// const fs = require('fs-extra');
// let output = fs
//   .readFileSync('../../../data.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map((i) => i.split('\t'))
//   .reduce((a, c) => {
//     a[c[0]] = [];
//     a[c[0]].push({ name: c[1], otherThing: c[2], thirdThing: c[3] });
//     return a;
//   }, {});
// console.log(output);

// const maxSpeed = {
//   car: 300,
//   bike: 60,
//   motorbike: 200,
//   airplane: 1000,
//   helicopter: 400,
//   rocket: 8 * 60 * 60,
// };

// let output = Object.entries(maxSpeed)
//   .sort(([, a], [, b]) => b - a)
//   .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

// console.log(output);

// function evaluateTemp() {
//   let temp = Math.floor(Math.random() * 500) + 100;
//   let delay = Math.floor(Math.random() * 5000) + 1000;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (temp < 200) {
//         reject(`Too cold: ${temp}`);
//       } else if (temp > 400) {
//         reject(`Too hot: ${temp}`);
//       } else {
//         resolve(`Just right: ${temp}`);
//       }
//     }, delay);
//   });
// }

// evaluateTemp()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
