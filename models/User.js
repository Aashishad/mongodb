const mongoose = require('mongoose');

const userSchhema = mongoose.Schema({

  fullname: {
    type: String,
    require: true,
 },
  email: {
    type: String,
    require: true,
 },
  password: {
    type: String,
    require: true,
 },
  isAdmin: {
    type: Boolean,
    default: false,
 },
  shippingAddress: {
    address: {type:String, default:''},
    city: {type:String, default:''},
    isEmpty:{type:Boolean, default:true}
 }
}, { timestamps: true });




const User = mongoose.model('', userSchhema);

module.exports = User;
