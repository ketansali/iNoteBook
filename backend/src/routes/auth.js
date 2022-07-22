const { signUp, logIn, getUser } = require('../controller/user')
const { requireSignIn } = require('../middleware/auth')
const { signUpValidation, errorMsg, logInValidation } = require('../validator/auth')

const router = require('express').Router()

router.post('/auth/signup',signUpValidation,errorMsg,signUp)
router.post('/auth/login',logInValidation,errorMsg,logIn)
router.get('/auth/getUser',requireSignIn,getUser)


module.exports = router