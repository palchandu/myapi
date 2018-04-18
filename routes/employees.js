var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");
// Get all employees
router.get('/', employee.list);

// Save employee
router.post('/save', employee.save);

module.exports = router;