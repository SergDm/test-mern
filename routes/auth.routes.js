const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { checkValidators } = require('../utils/validators')
const User = require('../models/User')
const router = Router()

router.post('/register', checkValidators, async (req, res) => {
  try {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0].msg,
        message: 'Incorrect registration data'
      })
    }

    const { email, password, name } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'Such user already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ email, password: hashedPassword, name })

    await user.save()

    res.status(201).json({ message: 'User created' })

  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Try later'})
  }
})

router.post('/login', checkValidators, async (req, res) => {
  try {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0].msg,
        message: 'Invalid login details'
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user) {
      return res.status(400).json({ message: 'User is not found' })
    }

    const isMatch = await bcrypt.compare( password, user.password )

    if(!isMatch) {
      return res.status(400).json({ message: 'Invalid password, try again' })
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id})


  } catch (e) {
    res.status(500).json({ message: 'Something went wrong. Try later' })
  }
})

module.exports = router