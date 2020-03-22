const { check } = require('express-validator')

exports.checkValidators = [
  check('email', 'Incorrect email').isEmail().normalizeEmail(),
  check('password', 'minimum length 6 symbols').isLength({ min: 6, max: 56 }).isAlphanumeric().trim()
]