const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Departments = Object.freeze({
  Product: "Product",
  Engineering: "Engineering",
  Legal: "Legal",
  Sales: "Sales"
});

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  department: String,
  startDate: Date,
  jobTitle: String,
  salary: Number
});

module.exports = {
  Employee: mongoose.model("Employee", EmployeeSchema),
  Departments: Departments
};
