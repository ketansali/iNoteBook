const { body, validationResult } = require('express-validator');

exports.noteValidation =[
    body('title').notEmpty().withMessage('title is Required'),
    body('description').notEmpty().withMessage('description is Required')
   
]



exports.errorMsg = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
