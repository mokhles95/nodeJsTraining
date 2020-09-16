const express = require('express')
const router = express.Router()
const User = require('../models/user')
const ToDo = require('../models/todo')
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
module.exports = router