const Joi = require("joi");

//Cities verification (next i should use joi)
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
//Itineraries verification (next i should use joi)
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

//Users verification
const userSchema = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    "string.name": "Please enter your name!",
    "string.min": "name is too short",
    "string.max": "name is too long",
    "string.empty": "Please enter your name!",
    "any.required": "Please enter your name!",
  }),
  lastname: Joi.string().min(2).max(20).required().messages({
    "string.lastname": "Please enter your lastname!",
    "string.min": "lastname is too short",
    "string.max": "lastname is too long",
    "string.empty": "Please enter your lastname!",
    "any.required": "Please enter your lastname!",
  }),
  email: Joi.string().email().min(4).max(50).required().messages({
    "string.email": "Please enter your email!",
    "string.min": "email is too short",
    "string.max": "email is too long",
    "string.empty": "Please enter your email!",
    "any.required": "Please enter your email!",
  }),
  password: Joi.string().alphanum().min(8).max(20).required().messages({
    "string.password": "Please enter your password!",
    "string.min": "password is too short",
    "string.max": "password is too long",
    "string.empty": "Please enter your password!",
    "any.required": "Please enter your password!",
  }),
  photo: Joi.string().required().messages({
    "string.photo": "Please enter your photo!",
    "string.min": "photo is too short",
    "string.max": "photo is too long",
    "string.empty": "Please enter your photo!",
    "any.required": "Please enter your photo!",
  }),
  country: Joi.string().min(2).max(20).required().messages({
    "string.country": "Please enter your country!",
    "string.min": "country is too short",
    "string.max": "country is too long",
    "string.empty": "Please enter your country!",
    "any.required": "Please enter your country!",
  }),
});
const loginSchema = Joi.object({
  email: Joi.string().alphanum().min(4).max(20).required().messages({
    "string.email": "Please enter your email!",
    "string.min": "email is too short",
    "string.max": "email is too long",
    "string.empty": "Please enter your email!",
    "any.required": "Please enter your email!",
  }),
  password: Joi.string().alphanum().min(8).max(20).required().messages({
    "string.password": "Please enter your password!",
    "string.min": "password is too short",
    "string.max": "password is too long",
    "string.empty": "Please enter your password!",
    "any.required": "Please enter your password!",
  })
})
const verifyDataUser = (req,res,next) => {
  const payload = req.body
  const userValidated = userSchema.validate(payload)
  if(userValidated.error){
    return res.status(400).json({
      message: userValidated.error.details.map((err)=>err.message)
    })
  }
  next()
}

const verifyDataLogin = (req,res,next) => {
  const payload = req.body
  const loginValidated = loginSchema.validate(payload)
  if(loginValidated.error){
    return res.status(400).json({
      message: userValidated.error.details.map((err)=>err.message)
    })
  }
  next()
}

module.exports = { verifyCity, verifyId, verifyItinerary, verifyDataUser, verifyDataLogin };
