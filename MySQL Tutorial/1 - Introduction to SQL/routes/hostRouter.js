// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const hostController = require("../controllers/host");

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.post("/add-home", hostController.postAddHome);

hostRouter.get("/host-homes-list", hostController.getHostHomesList);

hostRouter.get("/edit-home/:homeId", hostController.hostEditHome);

hostRouter.post("/edit-home", hostController.postEditHome);

hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);

exports.hostRouter = hostRouter;
