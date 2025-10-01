// Core Modules
const path = require("path");

// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const storeController = require("../controllers/store");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes-list", storeController.getHomesList);
storeRouter.get("/favourite-list", storeController.getFavourites);
storeRouter.post("/favourite-list", storeController.postFavouriteList);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post(
  "/favourite/delete/:homeId",
  storeController.postRemoveFromFavourite
);

module.exports = storeRouter;
