const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60,
};

const sortedObj = Object.entries(maxSpeed)
  .sort(([, a], [, b]) => b - a)
  .reduce((a, [b, c]) => ({ ...a, [b]: c }), {});

console.log(sortedObj);
