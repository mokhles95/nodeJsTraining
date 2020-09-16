const express = require('express')
const router = express.Router()
const User = require('../models/user')
//add user
router.post('/addUser', async (req,res,next)=>{
    const user = new User(req.body)
   await user.save()
   res.send(user)
})

// get users 
router.get('/allUsers', async (req,res,next)=>{
    const users = await User.find()
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

module.exports = router