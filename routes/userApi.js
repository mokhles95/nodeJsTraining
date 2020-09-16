const express = require('express')
const router = express.Router()

//add user
router.post('/addUser',(req,res,next)=>{
    console.log(req.body);
    res.json(req.body)
})

// get users 
router.get('/allUsers', (req,res,next)=>{
    res.json({message: "get all users"})
})

// get user by id
router.get('/getUser/:id', (req,res,next)=>{
    res.json({message: "get user num"+req.params.id})
})

// delete user 
router.delete('/delete/:id', (req,res,next)=>{
    res.json({message: "user number " +req.params.id+  " is deleted"})
})

// update user 
router.put('/update/:id', (req,res,next)=>{
    res.json({message: "user number " +req.params.id+  " is updated"})
})

module.exports = router