const { default: mongoose } = require("mongoose");

const favSchema = mongoose.Schema({
  homeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    null: false,
  },
});

// addToFav, deleteById, getFavourites

module.exports = mongoose.model("Favourite", favSchema);
