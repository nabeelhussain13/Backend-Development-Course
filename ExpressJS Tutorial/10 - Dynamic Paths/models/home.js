const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/pathUtil");
const { error } = require("console");
const Favourite = require("./favourite");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, imageUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        // edit home case
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        // add home case
        this.id = Math.random().toString(36).substring(2);
        registeredHomes.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static findById(id, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === id);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => {
        return home.id !== homeId;
      });
      fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
        Favourite.deleteById(homeId, callback);
      });
    });
  }
};
