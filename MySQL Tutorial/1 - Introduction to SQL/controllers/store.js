const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
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
  Home.fetchAll()
    .then(([registeredHomes]) => {
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
  Home.fetchAll()
    .then(([registeredHomes]) => {
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
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    //console.log(home);
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
  Favourite.getFavourites((favourites) => {
    Home.fetchAll().then(([homes]) => {
      const favouriteHomes = homes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite List",
        currentPage: "favouriteList",
      });
    });
  });
};

exports.postFavouriteList = (req, res, next) => {
  const { id } = req.body;
  Favourite.addToFavourite(id, (error) => {
    if (error) {
      console.log("Error while making favourite: ", error);
    }
    res.redirect("/favourite-list");
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while removing from Favourite list", error);
    }
    res.redirect("/favourite-list");
  });
};
