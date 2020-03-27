const express= require('express')
const app= express()
const appRoute= require('./route')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const config=require('./Database/db')


mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    myRes=>{
        console.log("Connection to Mongoose Successful")
    },
    err =>{
        console.log(err)
    }
)


app.set('view engine','ejs')
app.set('views','./views')

app.use('/',appRoute)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(3000,function(){
    console.log(`Server is running in http://localhost:3000`)
})