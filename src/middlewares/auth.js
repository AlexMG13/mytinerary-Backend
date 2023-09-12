const bcript = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken')
const passport = require('passport')
const {Strategy, ExtractJwt } = require('passport-jwt')

const passportVerificator = passport.use(
  new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'claveresecreta'
  }, async (payload,done)=>{
    try {
      let userFound = await User.findOne({email: payload.email})
    if (userFound){
      return done(null,userFound)
    }else{
      return done(null)
    }
    } catch (error) {
      return done(error)
    }
  })
)

const hashPassword = (req, res, next) => {
  try {
    const passwordPlain = req.body.password;
    const hashPassword = bcript.hashSync(passwordPlain, 10);
    req.body.password = hashPassword;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Error in Hash Password",
      pass: res.body.password,
    });
  }
};

const verifyPassword = (req, res, next) => {
  const passwordPlain = req.body.password
  const hashPassword = req.user.password
  const isValid = bcript.compareSync(passwordPlain, hashPassword);

  if (isValid){
    next()
  }else {
    res.status(400).json({
      message: "Wrong Password"
    })
  }
};

const verifyUserExists = async (req, res, next) => {
  const { email } = req.body;
  const userFound = await User.findOne({ email: email });
  if (userFound) {
    req.user = userFound;
    next();
  } else {
    return res.status(400).json({
      message: "User not found",
    });
  }
};

const generateToken = (req,res,next) =>{
try {
  let secretKey = 'claveresecreta'
  let token = jwt.sign({email: req.body.email},secretKey,{expiresIn: 60*10})
  req.token = token
  next()
} catch (error) {
  res.status(400).json({
    message: error.message
  })
}
}


module.exports = {
  hashPassword,
  verifyPassword,
  verifyUserExists,
  generateToken,
  passportVerificator
};
