const mongoose=require('mongoose')
const Schema=mongoose.Schema

let Product=new Schema({
    fieldname:{type:String,required:true},
    originalname:{type:String,required:true},
    encoding:{type:String,required:true},
    mimetype:{type:String,required:true},
    destination:{type:String,required:true},
    filename:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:Number,required:true}
},
{
    collection:"mycollection"
})


module.exports=mongoose.model('Product',Product)