const campgrounds = require('./data.js');
const Camp = require('./models/campground');

function seedDB(data) {
  campgrounds.forEach((camp) => {
    Camp.create(camp, (err, newCamp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Camp created`);
      }
    });
  });
}

module.exports = seedDB;
