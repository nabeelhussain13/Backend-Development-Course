// Core Modules
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getHome);

module.exports = userRouter;
