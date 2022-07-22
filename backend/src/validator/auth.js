const { body, validationResult } = require('express-validator');

exports.signUpValidation =[
    body('name').notEmpty().withMessage('name is Required'),
    body('email').notEmpty().withMessage('email is Required').isEmail().withMessage('enter valid email'),
    body('password').notEmpty().withMessage('password is Required').isLength({min:3})
]
exports.logInValidation =[
    body('email').notEmpty().withMessage('email is Required').isEmail().withMessage('enter valid email'),
    body('password').notEmpty().withMessage('password is Required').isLength({min:3})
]


exports.errorMsg = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
