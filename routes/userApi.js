const express = require('express')
const router = express.Router()
const User = require('../models/user')
const ToDo = require('../models/todo')

const nodemailer = require("nodemailer");
require('dotenv').config();
//add user
router.post('/addUser', async (req,res,next)=>{
    const user = new User(req.body)
   await user.save()

   res.send(user)
})

// get users 
router.get('/allUsers', async (req,res,next)=>{
    const users = await User.find().populate('todos').exec()
    res.json(users)
})

// get user by id
router.get('/getUser/:id', async (req,res,next)=>{
    const user = await User.findById(req.params.id).exec()
    res.json(user)
})

// delete user 
router.delete('/delete/:id', async(req,res,next)=>{
const user =   await User.findByIdAndDelete(req.params.id).exec()
res.json(user)  
})

// update user 
router.put('/update/:id', async (req,res,next)=>{
   await User.findByIdAndUpdate(req.params.id,req.body);
   const updatedUser = await User.findById(req.params.id)
   res.json(updatedUser)
})

router.post('/affectTodDo/:userId/:todoId', async (req,res,next)=>{
    const todo = await ToDo.findById(req.params.todoId);
    const user = await User.findByIdAndUpdate(req.params.userId, {$push : {todos:todo._id}});
    const updatedUser = await User.findById(user._id)
    res.json(updatedUser)
})

router.delete('/deleteToDo/:userId/:todoId', async (req,res,next)=>{
    const todo = await ToDo.findById(req.params.todoId);
    const user = await User.findByIdAndUpdate(req.params.userId, {$pull : {todos:todo._id}});
    const updatedUser = await User.findById(user._id)
    res.json(updatedUser)
})





router.post('/register/:id',async (req,res,next)=>{
    const user = await User.findById(req.params.id)
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
        text: 'Wooohooo it works!!',
        html: "<h1>HTML version of the message</h1>"
      };
      // Step 3
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.json(err);
            console.log(err);
        }
        return res.json("Email sent!")
      });
})


router.post('/sednMailToAll',async (req,res,next)=>{
    const users = await User.find()
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'mokhleshaj@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORD || '07212360' // TODO: your gmail password
        }
      });
      // Step 2
      users.forEach(element => {
        let mailOptions = {
            from: 'mokhleshaj@gmail.com', // TODO: email sender
            to: element.email, // TODO: email receiver
            subject: 'Nodemailer - Test',
            text: 'Wooohooo it works!!',
            html: "<h1>HTML version</h1>"
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
     
     
})


module.exports = router