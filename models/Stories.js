const mongoose = require('mongoose')
const Usershema = mongoose.Schema

const Storyschema = new Usershema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
   
    status:{
        type:String,
        default:'public',
        enum:['public','private']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default:Date.now
    },


})



module.exports = mongoose.model('story', Storyschema)