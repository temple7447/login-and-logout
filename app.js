const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:'./config/config.env'})
const cors = require('cors')
const { response } = require('express')


mongoose.connect(process.env.DATABASE,
    { 
        useUnifiedTopology:true,
        useNewUrlparser:true,
    }).then(()=>console.log('we are connected'))
    .catch((err)=>console.log(err))



app.use(bodyparser.json())
app.use(cookieparser())
app.use(cors)
app.use(bodyparser.urlencoded({ extended:true}))



const port = process.env.PORT


app.listen(port,()=>{
    console.log(`it is working no on port ${port}`)
})