const Employee = require("../model/employee.model");
const bcrypt = require("bcryptjs");
exports.createEmployee = async (req, res) => {
  console.log("Received Data:", req.body); // ✅ Debugging step
  try {
    const { fullname, email, password } = req.body;
    console.log('fullname =>', fullname);
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = new Employee({ fullname, email, password });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error saving employee", error });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const { fullname, designation, email, dateofbirth, joiningdate, password } = req.body;
    if (!fullname || !email) {
      return res.status(400).json({ message: "Fullname and email are required" });
    }

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    const hashedPassword = await bcrypt.hash(password || 'pass#123', 10);
    req.body.password = hashedPassword;
    console.log('req.body =>', req.body);
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: "Error adding employee", error });
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