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
  const {password, email} = req.body
  const userFound = await User.findOne({email: email})
  if(userFound){
    if(verifyPassword(password, userFound.password)){
      return res.status(200).json({
        message: "Login successfull",
        user: userFound
      })
    }else{
      return res.status(400).json({
        message: "Wrong password"
      })
    }
  }else{
    return res.status(400).json({
      message: "User not found"
    })
  }
} catch (error) {
  res.status(400).json({
    message: "The user could not been loged"
  })
}
}

module.exports = {
  register, login
}