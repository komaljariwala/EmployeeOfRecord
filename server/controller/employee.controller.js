// filepath: /src/controllers/employeeController.js
const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newEmployee = new Employee({ firstName, lastName, email, password });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};