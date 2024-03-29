const mongoose = require("mongoose");
const { Schema } = mongoose;
const MessageSchema = new Schema(
  
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: { type: String, trim: true },
      chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
      readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
  { timestamps: true }
);

const Message = mongoose.model("message", MessageSchema);
module.exports = Message;
