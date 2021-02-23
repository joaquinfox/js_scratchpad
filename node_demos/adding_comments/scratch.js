// const fs = require('fs-extra');

// let output = fs.readFileSync('./data.txt', 'utf8');
// console.log(output);

const simplePromise = new Promise((resolve, reject) => {
  reslve('happy');
  reject('sad');
});

// simplePromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

//  >true && true
true;
// > true && false
false;

// > 'bob' && false
false;
// > 'bob'&& true
true;
// > 0 || 'bob'

// > false || 'bob'
// > true && 9
