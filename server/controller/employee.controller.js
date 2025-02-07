const Employee = require("../model/employee.model");
const bcrypt = require("bcryptjs");
exports.createEmployee = async (req, res) => {
  console.log("Received Data:", req.body); // ✅ Debugging step
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = new Employee({ firstname, lastname, email, password });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error saving employee", error });
  }
};


exports.loginEmployee = async (req, res) => {
  const { email, password } = req.body;
  console.log('email =>', email);
  console.log('password =>', password);
  try {
    // ✅ Find employee by email
    const employee = await Employee.findOne({ email });
    console.log('employee =>', employee);
    if (!employee) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Compare hashed password with the entered password
    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Successful login
    res.status(200).json({ message: "Login successful", employee });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};