const express = require("express");
const { getCities,postCity } = require('../controllers/cityController')
 
const router = express.Router();

router.post("/newcity",postCity);
router.get("/cities",getCities);

/* router.get("/:id",getCity);
router.put("/cities",putCity);
router.delete("/:id",deleteCity);
router.patch("/:id",editCity); */

module.exports = router;
