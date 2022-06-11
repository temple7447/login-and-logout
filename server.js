const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const expresshandlebar = require('express-handlebars').engine
const connectmongo = require('connect-mongo')
const session = require('express-session')
const methodoverride = require('method-override')
const moment = require('moment') 
const passport = require('passport')
const pgo = require('passport-google-oauth20')
const path = require('path')
const bodyparser = require('body-parser')
const indexRouter = require('./routes/index')
const connectDB = require('./config/db')
const paspor = require('./config/passport')
const authRouter = require('./routes/auth')
dotenv.config({path:'./config/config.env'})
const storyRouter = require('./routes/Story')
paspor(passport)



app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({extended:true}))



connectDB()


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.engine('.hbs', expresshandlebar({layoutsDir: `${__dirname}/views/layouts`, extname:'.hbs'}))
app.set('view engine', '.hbs')


// session middle
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    
  }))

// middle ware
app.use(passport.initialize());
app.use(passport.session());



app.get('/',(req,res)=>{
    res.render('main', {layout:'index'})
})


// router
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/stories', storyRouter)


const port = process.env.port




const server = app.listen(port,()=>{
    console.log(   ` server is running on http://localhost:${port} and on ${process.env.NODE_ENV} mode`)
})




















