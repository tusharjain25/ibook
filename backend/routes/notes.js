const express= require('express');
const router=express.Router();
var fetchuser=require('../middleware/fetchuser');  
const Note =require('../models/Note');
const { body, validationResult } = require("express-validator");


router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes=await Note.find({user:req.user.id});
    res.json(notes)
    } catch (error) {
        console.error(error.message);
      res.status(500).send("internal server error");
    }
    
})


router.post('/addnote',fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be of atleast 5 characters").isLength({
      min: 5,
    }),
  ],async (req,res)=>{
    try {
        const{title,description,tag}=req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note=new Note({
            title,description,tag,user:req.user.id
        })
        const savedNote=await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
      res.status(500).send("internal server error");
    }
  
})

module.exports=router