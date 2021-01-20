const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected');
  } catch (error) {
    console.log('connect fail');
  }
}

module.exports = { connect };
