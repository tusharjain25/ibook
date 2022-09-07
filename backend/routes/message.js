const express= require('express');
const router=express.Router();
var fetchuser=require('../middleware/fetchuser');  
const Message  =require('../models/Message');
const { body, validationResult } = require("express-validator");
const Chat = require('../models/Chat');
const User = require('../models/User');

router.get('/:chatId',fetchuser,async (req,res)=>{
    try {
        const messages = await Message.find({ chat: req.params.chatId })
          .populate("sender", "username pic email")
          .populate("chat");
        res.json(messages);
      }
    catch (error) {
        console.error(error.message);
      res.status(500).send("internal server error");
    }
    
})


router.post('/',fetchuser,async (req,res)=>{
    const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "username pic")
    message = await message.populate("chat")
    message = await User.populate(message, {
      path: "chat.users",
      select: "username pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  }
     catch (error) {
        console.error(error.message);
      res.status(500).send("internal server error");
    }
    
})

module.exports = router;