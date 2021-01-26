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

  //GET /courses/:id/update
  update(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/update', {
          course: helper.mongooseToObject(course),
        });
      })
      .catch(next);
  }

  //PUT /courses/:id
  edit(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/store/courses'))
      .catch(next);
  }

  //DELETE /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CoursesController();
