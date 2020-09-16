const express = require('express')
const router = express.Router()
const ToDo = require('../models/todo')
//add todo
router.post('/addToDo', async (req,res,next)=>{
    const todo = new ToDo(req.body)
   await todo.save()
   res.json(todo)
})

// get todo list 
router.get('/allTodo', async (req,res,next)=>{
    const todoList = await ToDo.find()
    res.json(todoList)
})

// get todo by id
router.get('/getToDo/:id', async (req,res,next)=>{
    const todo = await ToDo.findById(req.params.id).exec()
    res.json(todo)
})

// delete todo 
router.delete('/delete/:id', async(req,res,next)=>{
const todo =   await ToDo.findByIdAndDelete(req.params.id).exec()
res.json(todo)  
})

// update todo 
router.put('/update/:id', async (req,res,next)=>{
   await ToDo.findByIdAndUpdate(req.params.id,req.body);
   const updatedToDo = await ToDo.findById(req.params.id)
   res.json(updatedToDo)
})

module.exports = router