const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE
        ,{
            useUnifiedTopology:true,
            useNewUrlParser:true,

        })
console.log(`mongodb connected`)

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}



module.exports = connectDB;


