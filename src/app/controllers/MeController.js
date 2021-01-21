const Course = require('../models/Course');
const helper = require('../../utils/mongoose');

class MeController {
  //get /me/store/courses
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: helper.multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
