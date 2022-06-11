const express = require('express')
// const { ensureGuest, ensureAuth } = require('../middleware/auth')
const router = express.Router()
const Userdb = require('../models/user')
const StorySchema = require('../models/Stories')

router.get('/Register',(req,res)=> {
    res.render('Register' , {layout:'Register'})
})



router.get('/dashboard', async (req,res)=>{
    try {
        // const stories = await StorySchema.find({user:req.user.id}).lean()
        const firstname = req.body.firstName
        res.render('dashboard',{name: firstname ,layout:'dashboard' } )
        // stories

    } catch (error) {
        console.log(error)
    }
   
})



module.exports = router

