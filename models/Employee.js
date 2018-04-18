var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
    name: String,
    address: String,
    position: String,
    salary: Number,
  });
  module.exports = mongoose.model('Employee', EmployeeSchema);