const { default: mongoose } = require("mongoose");
const favourite = require("./favourite");

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
    null: false,
  },
  price: {
    type: Number,
    required: true,
    null: false,
  },
  location: {
    type: String,
    required: true,
    null: false,
  },
  rating: {
    type: Number,
    required: true,
    null: false,
  },
  imageUrl: String,
  description: String,
});

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({ homeId: homeId });
  next();
});

module.exports = mongoose.model("Home", homeSchema);
