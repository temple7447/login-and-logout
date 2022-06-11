const mongoose = require('mongoose')
 
const Usershema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true,
    },
    displayName:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    firstName:{
        trim:true,
        maxlength:32,
        type:String,
    },
    lastName:{
        trim:true,
        maxlength:32,
        type:String,
    },
    image:{
        type:String,

    },
    createAt:{
        type:Date,
        default:Date.now
    }



})




module.exports = mongoose.model('user', Usershema)



    // email:{
    //     type:String,
    //     trim:true,
    //     maxlength:32,
    //     unique: true,
    // },
    // encrypassword:{
    //      type:String,
    //      required:true
    // },
//     salt:String,
// }, {timestamps:true})


// usershema.virtual('password').set(()=>{ }).get(()=>{ })

// usershema.methods = {
//     authenticate: (plainpassword)=> {
//         return this.securepassword(plainpassword) === this.encrypassword 
//     }
// }