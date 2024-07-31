const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  RName: { type: String },
  RNumber: { type: String }, // Contact number as a string
  RCountry: { type: String },
  RPincode: { type: String }, // Pin code as a string
  RState: { type: String },
  RTown: { type: String },
  RAddress: { type: String },
  SName: { type: String },
  SEmail: { type: String },
  SNumber: { type: String }, // Sender's contact number as a string
  STown: { type: String },
  PayOP: { type: String }, // Payment option
  PayCOD: { type: String } // Cash on Delivery option, if applicable
});

const OrderDetailDB = mongoose.model("OrderDetails", orderSchema);
module.exports = OrderDetailDB;
