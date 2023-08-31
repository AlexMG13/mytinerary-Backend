const { Schema, model, Types } = require("mongoose");

const schemaItinerary = new Schema({
  name: {
    type: "string",
    required: true,
  },
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
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  likes: {
    type: Array,
  },
  hashtags: {
    type: Array
  },
  comentaries: {
    type: Array
  },
  _city: {
    type: Types.ObjectId,
    ref: 'City',
    required: true
  }
});

const Itinerary = model("Itinerary", schemaItinerary);
module.exports = Itinerary;
