const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", {
    pageTitle: "Add Home",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, imageUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    imageUrl,
    description
  );
  home.save();
  res.render("host/home-added", {
    pageTitle: "Home Added",
    currentPage: "addHome",
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl, description } =
    req.body;
  const home = new Home(
    houseName,
    price,
    location,
    rating,
    imageUrl,
    description,
    id
  );
  home.save();
  res.redirect("/host/host-homes-list");
};

exports.getHostHomesList = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
      res.render("host/host-homes-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Host Homes List",
        currentPage: "hostHomesList",
      });
    })
    .catch((error) => {
      console.log("Error while getting homes", error);
    });
};

exports.hostEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId)
    .then(([homes]) => {
      const home = homes[0];
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
    })
    .catch((error) => {
      console.log("Error while editing home", error);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-homes-list");
    })
    .catch((error) => {
      console.log("Error while deleting home", error);
    });
};
