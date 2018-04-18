var mongoose = require("mongoose");
var Employee = require('../models/Employee.js');
var employeeController = {};
console.log(Employee);
employeeController.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
      if (err) {
        return next(err);
      }
      else {
        res.json(employees);
      }
    });
  };
  employeeController.show = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        return next(err);
      }
      else {
        res.json(employees);
      }
    });
  };
  employeeController.save = function(req, res) {
    console.log("----------------->",req.body);
    var employee = new Employee(req.body);
    employee.save(function(err,post) {
      if(err) {
        return next(err);
      } else {
        res.json(post);
      }
    });
  };

  module.exports = employeeController;