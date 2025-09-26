const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/airbnb-index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Index",
      currentPage: "airbnbIndex",
    });
  });
};

exports.getHomesList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/homes-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "homesList",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Favourites",
      currentPage: "favouriteList",
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes: registeredHomes,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

//exports.registeredHomes = registeredHomes;
