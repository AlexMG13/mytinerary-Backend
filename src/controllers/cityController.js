const City = require("../models/city");

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(201).json(cities);
  } catch (err) {
    res.jason({ message: err.message });
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
    res.status(500).json({ message: err });
  }
};

const deleteCity = async (req, res) => {
  try {
    let { id } = req.params
    await City.deleteOne({ _id: id})
    res.status(201).json({ 
      message: "City deleted successfully"})
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getCity = async (req, res) => {
  try {
    let { id } = req.params
    const cityFound = await City.findById(id)
    res.status(201).json(cityFound)
    } catch (err) {
        res.status(500).json({ message: err });
      }
}

const updateCity = async (req, res) => {
  try {
    let { id, newName } = req.params
    await City.findByIdAndUpdate(id, {name: newName})
    res.status(201).json({
      mensagge: "City updated successfully"
    })
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = { getCities, addCity, deleteCity, getCity ,updateCity};
