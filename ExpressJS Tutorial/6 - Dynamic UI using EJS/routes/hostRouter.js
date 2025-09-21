// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded", { pageTitle: "Home Added" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
