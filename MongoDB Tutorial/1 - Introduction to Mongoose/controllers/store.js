const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/airbnb-index", {
        registeredHomes: registeredHomes,
        pageTitle: "airbnb Index",
        currentPage: "airbnbIndex",
      });
    })
    .catch((error) => {
      console.log("Error while getting homes", error);
    });
};

exports.getHomesList = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/homes-list", {
        registeredHomes: registeredHomes,
        pageTitle: "Homes List",
        currentPage: "homesList",
      });
    })
    .catch((error) => {
      console.log("Error while getting homes", error);
    });
};

exports.getBookings = (req, res, next) => {
  Home.find()
    .then((registeredHomes) => {
      res.render("store/bookings", {
        registeredHomes: registeredHomes,
        pageTitle: "Bookings",
        currentPage: "bookings",
      });
    })
    .catch((error) => {
      console.log("Error while booking homes", error);
    });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    console.log(home);
    if (!home) {
      res.redirect("/homes-list");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "homesList",
      });
    }
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.find()
    .populate("homeId")
    .then((favourites) => {
      console.log(favourites);
      const favouriteHomes = favourites.map((fav) => fav.homeId);
      console.log(favouriteHomes);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite List",
        currentPage: "favouriteList",
      });
    });
};

exports.postFavouriteList = (req, res, next) => {
  const { id } = req.body;
  Favourite.findOne({ homeId: id }).then((favourite) => {
    if (favourite) {
      console.log("Already in Favourite List");
      res.redirect("/favourite-list");
    } else {
      const favourite = new Favourite({
        homeId: id,
      });
      favourite.save().then(() => {
        res.redirect("/favourite-list");
      });
    }
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ homeId: homeId })
    .then(() => {
      res.redirect("/favourite-list");
    })
    .catch((error) => {
      console.log("Error while removing from Favourite list", error);
    });
};
