var mongoose = require('mongoose');
var Schema = mongoose.Schema

var imageSchema = new Schema(
 {
    image: {
        type: [String],
        required: true
      },
 });

module.exports =  mongoose.model('Image', imageSchema); 