const mongoose = require('mongoose');

const exerciseScheme = new mongoose.Schema({
    username:{type:String, required:true, trim: true},
    description:{type:String, required:true, trim: true},
    duration:{type:Number, required:true, trim:true},
    date:{type:Date, required:true, trim:true}
},{
    timestamps:true
})

const Exercise = mongoose.model("Exercise",exerciseScheme);

module.exports = Exercise;