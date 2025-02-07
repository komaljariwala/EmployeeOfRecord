const express = require("express");
const router = express.Router();
const { createEmployee, loginEmployee } = require("../controller/employee.controller");

// ✅ Employee Registration Route
router.post("/register", createEmployee);

// ✅ Employee Login Route
router.post("/login", loginEmployee); // This route must exist

module.exports = router;
