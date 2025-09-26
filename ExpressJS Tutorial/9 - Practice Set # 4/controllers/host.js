const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "Add Home",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();
  res.render("host/home-added", {
    pageTitle: "Home Added",
    currentPage: "addHome",
  });
};

exports.getHostHomesList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-homes-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "hostHomesList",
    });
  });
};
