const express = require('express')
const { register,login, authenticated, singout } = require('../controllers/authController')
const { verifyDataUser, verifyDataLogin } = require('../middlewares/verifications')
const { hashPassword, verifyUserExists, verifyPassword, generateToken, passportVerificator } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register',verifyDataUser,hashPassword,register)
authRouter.post('/login', verifyDataLogin,verifyUserExists,verifyPassword,generateToken, login)
authRouter.post('/authenticated', passportVerificator.authenticate('jwt',{session:false}), generateToken, authenticated)
authRouter.post('/singout',passportVerificator.authenticate('jwt',{session:false}),singout)



module.exports = authRouter