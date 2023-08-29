const { Schema, model } = require("mongoose");

const schemaItinerary = new Schema({
  person: {
    type: "string",
    required: true,
  },
  photo: {
    type: "string",
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  duration: {
    type: Number,
    default: 0,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  hashtags: [],
});

const Itinerary = model("Itinerary", schemaItinerary);
module.exports = Itinerary;
