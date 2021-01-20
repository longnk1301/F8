const Course = require('../models/Course');
const helper = require('../../utils/mongoose');

class SiteController {
  //get /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: helper.multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //get /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
