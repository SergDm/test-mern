const { body } = require('express-validator')

exports.checkValidators = [
  body('email', 'Incorrect email').isEmail().normalizeEmail(),
  body('password', 'minimum length 6 symbols').isLength({ min: 6, max: 56 }).isAlphanumeric().trim()
]

exports.productValidators = [
  body('title').isLength({min: 3}).withMessage('Title must be at least 3 symbols').trim(),
  body('group').isLength({min: 3}).withMessage('Group must be at least 3 symbols').trim(),
  body('price').isNumeric().withMessage('Enter valid price'),
  body('img', 'Enter valid Url image').isURL()
]