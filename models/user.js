var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema(
 {
  firstName: { type: String },
  lastName:    { type: String},
  email : {type:String},
  password:{type:String},
  todos : [{type: Schema.Types.ObjectId, ref: 'ToDo'}],
  image : { type: String }
 });

module.exports =  mongoose.model('user', userSchema); 