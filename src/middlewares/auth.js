const bcript = require('bcrypt')

const hashPassword = (req,res,next) => {
  try {
    const passwordPlain = res.body.password
    const hashPassword = bcript.hashSync(passwordPlain,10)
    req.body.password = hashPassword
    next()
  } catch (error) {
    res.status(500).json({
      message: "Error in Hash Password"
    })
  }
}

const verifyPassword = (PasswordPlain, hashPassword) => {
  const isValid = bcript.compareSync(PasswordPlain, hashPassword)
  return isValid
}

module.exports = {
  hashPassword, verifyPassword
}