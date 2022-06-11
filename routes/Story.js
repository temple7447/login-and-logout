const express = require('express')
const router = express.Router()
const Storydb = require('../models/Stories')


router.get('/add',(req,res)=>{
    res.render('story',{
        layout:'add'
    })
})


router.post('/', async (req,res)=>{

    console.log(req.body)
    try {
        req.body.user = req.user.id
        await Storydb.create(req.body)
        res.redirect('/dashboard')



    } catch (err) {
     console.log(err)   
    }
})

module.exports = router;



