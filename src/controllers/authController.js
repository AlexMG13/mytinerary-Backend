const { verifyPassword } = require("../middlewares/auth")
const User = require("../models/user")


const register = async (req,res) => {
  try{
    const payload=req.body
    const userExists = await User.findOne({email: payload.email})
    if(userExists){
      return res.status(403).json({
        message: "User already exists"
      })
    }
    const userCreated = await User.create(payload)
    res.status(200).json({
      message: "New user created successfully",
      userCreated
    })
  }
  catch(err){
    res.status(400).json({
      message: "The user could not been created"
    })
  }
}

const login = async (req,res) => {
try {
  res.status(200).json({
    message: 'Saccesfully loged in',
    token: req.token,
    user: {
      email: req.user.email,
      _id: req.user._id
    }
  })
} catch (error) {
  res.status(400).json({
    message: "The user could not been loged"
  })
}
}

const authenticated = async (req,res) => {
  try {
    res.status(200).json({
      message: 'Saccesfully authenticated',
      token: req.token,
      user: {
        email: req.user.email,
        _id: req.user._id
      }
    })
  } catch (error) {
    res.status(400).json({
      message: "The user could not been authenticated"
    })
  }
}

const singout = (req,res)=>{
  try {
    res.status(200).json({
      message: 'Sign out successfull',
      token: req.token
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  register, login, authenticated,singout
}