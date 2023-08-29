const Itinerary = require("../models/Itinerary");

const addItinerary = async (req, res) => {
  try {
    const newItinerary = await Itinerary.create(req.body);
    newItinerary.save();
    res.status(201).json({
      message: "New Itinerary added",
      Itinerary: newItinerary,
    });
  } catch (err) {
    res.status(500).json({
      message: "Itinerary could not been created",
    });
  }
};
const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(201).json(itineraries);
  } catch (err) {
    res.status(500).json({
      message: "The cities could not been found",
    });
  }
};
const updateItinerary = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(201).json({
      mensagge: "City updated successfully",
      updatedItinerary,
    });
  } catch (err) {
    res.status(500).json({
      message: "Itinerary could not been updated",
    });
  }
};
const deleteItinerary = async (req, res) => {
  try {
    let { id } = req.params;
    await Itinerary.deleteOne({ _id: id });
    res.status(201).json({
      message: "Itinerary deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Itinerary could not been deleted",
    });
  }
};

module.exports = {
  addItinerary,
  deleteItinerary,
  updateItinerary,
  getItineraries,
};
