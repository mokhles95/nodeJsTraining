var mongoose = require('mongoose');
var Schema = mongoose.Schema

var todoSchema = new Schema(
 {
  name: { type: String },
  description:    { type: String}
 });

module.exports =  mongoose.model('ToDo', todoSchema); 