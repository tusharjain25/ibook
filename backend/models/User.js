const mongoose = require('mongoose');
const {Schema}=mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: "String",
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now
    },
    },
    { timestaps: true }
    
);
const User = mongoose.model('User', UserSchema);
module.exports = User;