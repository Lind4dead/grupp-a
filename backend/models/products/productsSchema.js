const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({

  title:          { type: String, required: true},
  subTitle:       { type: String},
  price:          { type: Number, required: true},
  imgUrl:         { type: String, required: true},
  produced:       { type: String, required: true},
  container:      { type: String, required: true},
  alcPercentage:  { type: String, required: true},
  desc:           { type: String, required: true},
  prisL:          { type: String, required: true},
  type:           { type: String, required: true}
}, {timestamps: true})


module.exports = mongoose.model('product', productsSchema)