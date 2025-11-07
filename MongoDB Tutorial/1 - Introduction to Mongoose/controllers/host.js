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
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    imageUrl,
    description,
  });
  home
    .save()
    .then(() => {
      console.log("Home Added Successfully");
    })
    .catch((error) => {
      console.log("Error while adding home", error);
    });
  res.render("host/home-added", {
    pageTitle: "Home Added",
    currentPage: "addHome",
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl, description } =
    req.body;
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    imageUrl,
    description,
  });
  home
    .save()
    .then(() => {
      console.log("Home Updated Successfully");
    })
    .catch((error) => {
      console.log("Error while updating home", error);
    });
  res.redirect("/host/host-homes-list");
};

exports.getHostHomesList = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
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
    .then((home) => {
      if (!home) {
        console.log("Home not found");
        return res.redirect("/host/host-homes-list");
      } else {
        res.render("host/edit-home", {
          home: home,
          pageTitle: "Edit Home",
          currentPage: "hostHomesList",
          editing: editing,
        });
      }
    })
    .catch((error) => {
      console.log("Error while editing home", error);
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId)
    .then((result) => {
      console.log("Home Deleted Successfully", result);
      res.redirect("/host/host-homes-list");
    })
    .catch((error) => {
      console.log("Error while deleting home", error);
    });
};
