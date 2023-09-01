const City = require("../models/City");
const Itinerary = require("../models/Itinerary");

const addItinerary = async (req, res) => {
  try {
    const newItinerary = {...req.body}
    const { _city: cityId } = req.body
      const itinerary = await Itinerary.create(newItinerary)
      await City.findByIdAndUpdate(cityId,{ $push: { itineraries: itinerary._id }})
      res.status(201).json({
      message: "New Itinerary added",
      Itinerary: newItinerary,
    });
  } catch (err) {
    res.status(500).json({
      message: "Itinerary could not been created"
    });
  }
};
const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(201).json({
      message: "Itineraries found",
      Itineraries: itineraries,
    });
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
      mensagge: "Itinerary updated successfully",
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
const getItinerary = async (req, res) => {
  try {
    let { id } = req.params;
    const itineraryFound = await Itinerary.findById(id);
    res.status(201).json({
      message: "Itinerary found",
      Itinerary: itineraryFound,
    });
  } catch (err) {
    res.status(500).json({
      message: "Itinerary could not been found",
    });
  }
};

module.exports = {
  addItinerary,
  deleteItinerary,
  updateItinerary,
  getItineraries,
  getItinerary,
};
