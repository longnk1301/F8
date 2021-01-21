const Course = require('../models/Course');
const helper = require('../../utils/mongoose');

class CoursesController {
  //get /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', {
          course: helper.mongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new CoursesController();
