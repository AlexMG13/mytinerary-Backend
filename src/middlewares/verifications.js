const verifyCity = (req, res, next) => {
  let { country, name, photo } = req.body;
  if (!country || !name || !photo) {
    return res.status(400).json({
      message: "Invalid information",
    });
  }
  if (country == "") {
    return res.status(400).json({
      message: "Invalid country",
    });
  }
  if (name == "") {
    return res.status(400).json({
      message: "Invalid name",
    });
  }
  if (photo == "") {
    return res.status(400).json({
      message: "Invalid photo",
    });
  }
  next();
};
const verifyId = (req, res, next) => {
  let { id } = req.params;
  if (id == "") {
    return res.status(400).json({
      message: "Invalid id",
    });
  }
  next();
};
const verifyItinerary = (req, res, next) => {
  let { person, name, photo, price, duration, hashtags } = req.body;
  if (!person || !name || !photo || !price) {
    return res.status(400).json({
      message: "Invalid information",
    });
  }
  if (person == "") {
    return res.status(400).json({
      message: "Invalid name person",
    });
  }
  if (name == "") {
    return res.status(400).json({
      message: "Invalid name",
    });
  }
  if (photo == "") {
    return res.status(400).json({
      message: "Invalid photo",
    });
  }
  if (price == typeof(int)) {
    return res.status(400).json({
      message: "Invalid type of price",
    });
  }
  if (duration == typeof(int)) {
    return res.status(400).json({
      message: "Invalid type of duration",
    });
  }
  if (hashtags.lenght >= 2) {
    return res.status(400).json({
      message: "Invalid amount of hashtags",
    });
  }
  next();
};
module.exports = { verifyCity, verifyId, verifyItinerary };
