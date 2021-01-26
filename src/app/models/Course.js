const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
);

//add plugin
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
