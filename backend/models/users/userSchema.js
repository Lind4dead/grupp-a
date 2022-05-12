const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

  firstName:        { type: String, required: true},
  lastName:        { type: String, required: true},
  email:        { type: String, required: true, unique: true},
  passwordHash: { type: String, required: true},
  isAdmin:      { type: Boolean, default: false}
}, { timestamps: true })


module.exports = mongoose.model('user', userSchema)