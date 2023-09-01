const express = require("express");
const {
  getCities,
  addCity,
  deleteCity,
  getCity,
  updateCity,
  searchCity,
} = require("../controllers/cityController");
const {
  addItinerary,
  deleteItinerary,
  updateItinerary,
  getItineraries,
  getItinerary,
} = require("../controllers/itineraryController");
const {
  verifyCity,
  verifyId,
  verifyItinerary,
} = require("../middlewares/verifications");

const router = express.Router();
//Cities routers
router.get("/cities", getCities);
router.post("/newcity", verifyCity, addCity);
router.delete("/:id", verifyId, deleteCity);
router.get("/city/:id", verifyId, getCity);
router.patch("/:id", verifyId, updateCity);
router.get("/searchcity", searchCity);

//Itineraries routers
router.get("/itineraries", getItineraries);
router.post("/newitinerary", verifyItinerary, addItinerary);
router.delete("/itinerary/:id", verifyId, deleteItinerary);
router.get("/itinerary/:id", verifyId, getItinerary);
router.patch("/itinerary/:id", verifyId, updateItinerary);

module.exports = router;
