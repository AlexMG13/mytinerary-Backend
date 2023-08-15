const City = require("../models/city");

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.jason({ message: err.message });
  }
};

const postCity = async (req, res) => {
  try {
    const city = await City.create(req.body)
    city.save()
    res.json(city)
  }
  catch (err) {
    res.json({ message: err.message });
  }
}


module.exports = { getCities, postCity }
