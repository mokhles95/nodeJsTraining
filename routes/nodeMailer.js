const nodemailer = require("nodemailer");
const express=require('express')
const router=express.Router()
require('dotenv').config();
const log = console.log;
// add new todo
router.post('/add', async (req,res)=>{
  console.log(process.env.EMAIL);
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
  to: 'salmene.benromdhane@esprit.tn', // TODO: email receiver
  subject: 'Nodemailer - Test',
  text: 'Wooohooo it works!!'
};
// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
      res.json(err);
      console.log(err);
  }
  return res.json("Email sent!")
});
});
module.exports=router;