const mongoose = require('mongoose');
const {Schema}=mongoose;
const NoteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    Title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('notes',NoteSchema);