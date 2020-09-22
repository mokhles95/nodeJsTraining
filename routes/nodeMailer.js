const nodemailer = require("nodemailer");
const express=require('express')
const User = require('../models/user')
require('dotenv').config();
const log = console.log;

exports.sendEmail= (userId)=>{
  return async  (req,res)=>{
    let user = await User.findById(userId)
  // Step 1
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'mokhleshaj@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '07212360' // TODO: your gmail password
    }
  });
  // Step 2
  let mailOptions = {
    from: 'mokhleshaj@gmail.com', // TODO: email sender
    to: user.email, // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
  };
  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        res.json(err);
        console.log(err);
    }
    console.log("email sent");
    return res.json("Email sent!")
  });
} 
};