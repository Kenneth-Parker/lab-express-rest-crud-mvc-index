const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

plans.get("/plans", (req, res) => {
  res.send(plansArray);
});

module.exports = plans;