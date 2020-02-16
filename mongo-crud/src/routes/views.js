const express = require("express");
const router = express.Router();
const { Employee } = require("../models/employee");

router.get("/", (req, res) => {
  res.render("index", { title: "Create Employees" });
});

router.get("/view", (req, res) => {
  Employee.find((err, e) => {
    if (err) {
      console.error(`Error getting employees: ${err}`);
      res.render("view", { title: "View Employees" });
    }

    res.render("view", { title: "View Employees", employees: e });
  });
});

router.get("/update/:id", (req, res) => {
  Employee.findById(req.params.id, (err, e) => {
    if (err) {
      console.error(
        `Error getting employee with ID: ${req.params.id} \n Error:${err}`
      );
      res.status(500).json({
        err
      });
    }

    res.render("update", { title: "Update Employees", employee: e });
  });
});

router.get("/delete/:id", (req, res) => {
  Employee.findByIdAndDelete(req.params.id, (err, e) => {
    if (err) {
      console.error(
        `Error deleting employee with ID: ${req.params.id} \n Error:${err}`
      );
      res.status(500).json({
        err
      });
    }
    res.render("delete", {
      title: "Delete Employees",
      employee: e
    });
  });
});

module.exports = router;
