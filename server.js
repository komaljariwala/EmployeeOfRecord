const express = require("express");
const cors = require("cors");
const connectDB = require("./server/config/db");
require("dotenv").config();

const app = express();

// ✅ Fix: Middleware for JSON Parsing
app.use(cors());
app.use(express.json()); // This is important to read JSON body correctly

// Connect to MongoDB
connectDB();

// Routes
const employeeRoutes = require("./server/route/employee.route");
app.use("/employees", employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
