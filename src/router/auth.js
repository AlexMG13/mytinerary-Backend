const express = require('express')
const { register,login } = require('../controllers/authController')
const { verifyDataUser, verifyDataLogin } = require('../middlewares/verifications')
const { hashPassword } = require('../middlewares/auth')

const authRouter = express.Router()

authRouter.post('/register',verifyDataUser,hashPassword,register)
authRouter.post('/login', verifyDataLogin, login)



module.exports = authRouter