const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fetch = require('fetch').fetchUrl;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});
app.get('/search', (req, res) => {
  let searchTerm = req.query.searchTerm;
  console.log(searchTerm);
  let url = 'http://www.omdbapi.com/?s=' + searchTerm + '&apikey=thewdb';
  fetch(url, (error, meta, body) => {
    if (error) {
      console.log(error);
    }
    // console.log(JSON.parse(body));
    let result = JSON.parse(body);
    res.render('results', { result: result });
  });
});

app.listen(PORT, () => {
  `listening on ${PORT}`;
});
