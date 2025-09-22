const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();
  res.render("homeAdded", { pageTitle: "Home Added" });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
    });
  });
};

//exports.registeredHomes = registeredHomes;
