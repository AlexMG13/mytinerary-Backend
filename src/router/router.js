const express = require("express");
const { getCities,addCity,deleteCity,getCity,updateCity } = require('../controllers/cityController');
const { verifyCity,verifyId } = require("../middlewares/verifications");
 
const router = express.Router();

router.get("/cities",getCities);
router.post("/newcity",verifyCity,addCity);
router.delete("/:id",verifyId,deleteCity);
router.get("/city/:id",verifyId,getCity);
router.patch("/:id",verifyId,updateCity);


module.exports = router;
