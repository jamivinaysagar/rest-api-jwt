const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CitySchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 start_on: {
  type: Date,
  trim: true,
  required: true
 }
});
module.exports = mongoose.model('City', CitySchema)