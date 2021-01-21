const Course = require('../models/Course');
const helper = require('../../utils/mongoose');

class CoursesController {
  //GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', {
          course: helper.mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //GET /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //POST /courses/store
  store(req, res, next) {
    const newCourse = new Course(req.body);
    newCourse.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    newCourse
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {});
  }
}

module.exports = new CoursesController();
