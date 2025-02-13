const express = require("express");
const router = express.Router();
const { createEmployee, loginEmployee, addEmployee, getEmployee, getEmployeeByID, updateEmployeeByID, deleteEmployee } = require("../controller/employee.controller");

// Add Employee
router.post("/add", addEmployee);

// Get All Employee
router.get("/all", getEmployee);

// Get Employee by ID
router.get("/:id", getEmployeeByID);

// Update Employee by ID
router.put("/update/:id", updateEmployeeByID);

// ✅ Employee Registration Route
router.post("/register", createEmployee);

// ✅ Employee Login Route
router.post("/login", loginEmployee); // This route must exist

// ✅ Employee Registration Route
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
