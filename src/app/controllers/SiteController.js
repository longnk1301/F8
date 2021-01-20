const Course = require('../models/Course');
class SiteController {
  //get /
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
        return;
      }
      res.status(400).json({ error: 'ERROR!' });
    });
  }

  //get /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
