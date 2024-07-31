require('dotenv').config();

const nodemailer = require('nodemailer');
const OrderDB = require("../Models/OrderDB");

module.exports = async (req, res) => {
  console.log(req.body);

  // Destructure request body
  const {
    receiverName,
    contactNumber,
    country,
    pinCode,
    state,
    city,
    address,
    senderName,
    senderEmail,
    senderContact,
    senderCity,
    paymentMethod,
    total,
    CartProduct
  } = req.body;

  try {
    // Create order in the database
    await OrderDB.create({
      RName: receiverName,
      RNumber: contactNumber,
      RCountry: country,
      RPincode: pinCode,
      RState: state,
      RTown: city,
      RAddress: address,
      SName: senderName,
      SEmail: senderEmail,
      SNumber: senderContact,
      STown: senderCity,
      PayMethod: paymentMethod,
      TotalAmount: total,
      CartProduct: CartProduct
    });

    console.log("Order details data added successfully!");

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail', // or use another email service provider
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS // your email password
      }
    });

    // Email options
    let mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: senderEmail, // list of receivers
      subject: 'Order Confirmation', // Subject line
      text: 'Your order has been successfully placed.' // plain text body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");

    res.send("Order details received and email sent");

  } catch (e) {
    console.log("Error adding order details data:", e);
    res.status(500).send("Error adding order details data");
  }
};
