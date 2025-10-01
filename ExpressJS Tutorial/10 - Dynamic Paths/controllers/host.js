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

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-homes-list");
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

exports.hostEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/host/host-homes-list");
    }

    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "hostHomesList",
      editing: editing,
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while deleting home!");
    }
    res.redirect("/host/host-homes-list");
  });
};
