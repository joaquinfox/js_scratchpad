const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = require('./data');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(data);
  res.render('index', { data: data });
});
app.get('/:count', (req, res) => {
  let count = req.params.count;
  let i = data.filter((i) => i.count === count)[0];
  console.log(i);
  res.render('show', { i: i });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
