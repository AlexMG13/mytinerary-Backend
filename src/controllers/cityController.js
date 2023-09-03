const City = require("../models/City");

const getCities = async (req, res) => {
  try {
    const cities = await City.find().populate({
      path: 'itineraries',
    select: 'name price duration -_id'});
    res.status(201).json(cities);
  } catch (err) {
    res.json({ message: "The cities could not been found" });
  }
};
const addCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    city.save();
    res.status(201).json({
      message: "City created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "The city could not been added" });
  }
};
const deleteCity = async (req, res) => {
  try {
    let { id } = req.params;
    await City.deleteOne({ _id: id });
    res.status(201).json({
      message: "City deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "The city could not been deleted" });
  }
};
const getCity = async (req, res) => {
  try {
    let { id } = req.params;
    const cityFound = await City.findById(id).populate({
      path: 'itineraries',
    select: 'name price duration photo hashtags -_id'});
    res.status(201).json(cityFound);
  } catch (err) {
    res.status(500).json({ message: "The city could not been found" });
  }
};
const updateCity = async (req, res) => {
  try {
    let { id } = req.params;
    const updateCity = await City.findByIdAndUpdate(id, { $set: req.body });
    res.status(201).json({
      mensagge: "City updated successfully",
      updateCity,
    });
  } catch (err) {
    res.status(500).json({ message: "The city could not been updated" });
  }
};
const searchCity = async (req, res) => {
  try {
    let queries = {};
    if (req.query.name) {
      queries.name = new RegExp('^'+ req.query.name, 'i');
    }
    const cities = await City.find(queries);
    res.status(201).json({
      message: "Cities found",
      cities: cities
    });
  } catch (err) {
    res.json({ message: "The cities could not been found"})
  }
};
module.exports = {
  getCities,
  addCity,
  deleteCity,
  getCity,
  updateCity,
  searchCity,
};
