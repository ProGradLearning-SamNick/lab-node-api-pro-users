const mongoose = require('../config/Database'),
  Schema = mongoose.Schema;

//Creating Schema

const UserDetail = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  email: String,
  movie_id: Schema.Types.ObjectId,
  text: String,
  date: Date,
});

const User = mongoose.model('User', UserDetail);

module.exports = { User };
