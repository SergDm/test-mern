const { Schema, model, Types } = require('mongoose')

const schemaUser = new Schema({
  name: String,
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  product: [{
    type: Types.ObjectId,
    ref: 'Product'
  }]
})

module.exports = model('User', schemaUser)