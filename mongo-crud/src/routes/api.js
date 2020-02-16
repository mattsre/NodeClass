const express = require("express");
const router = express.Router();

const { Employee } = require("../models/employee");

router.post("/create", (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    startDate: Date.parse(req.body.startDate),
    jobTitle: req.body.jobTitle,
    salary: Number.parseFloat(req.body.salary)
  });

  employee.save((err, e) => {
    if (err) {
      console.error(`Error saving employee: ${err}`);
      res.status(500).json({
        err
      });
    }

    res.redirect("/view");
  });
});

router.post("/update/:id", (req, res) => {
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    startDate: Date.parse(req.body.startDate),
    jobTitle: req.body.jobTitle,
    salary: Number.parseFloat(req.body.salary)
  };

  Employee.findByIdAndUpdate(req.params.id, employee, (err, e) => {
    if (err) {
      console.error(
        `Error updating employee with ID: ${req.params.id} \n Error: ${err}`
      );
      res.status(500).json({
        err
      });
    }

    res.redirect("/view");
  });
});

module.exports = router;
