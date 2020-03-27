const multer=require('multer')
const path=require('path')
const Product=require('../model/model')

var storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'uploads')
    },
    filename:function(req,file,callback){
        // callback(null,file.originalname)
        callback(null,'Doc-'+Date.now()+path.extname(file.originalname))


    }
})







module.exports={
    index:(req,res)=>{
        res.render('index')

    },
    upload:(req,res)=>{
        
        
        var upload=multer({storage, storage}).single(myfile);
        // console.log(upload)
        upload(req,res,function(err){
            if(err){
                return res.send('Error uploading file')
            }
            else{
                return res.send('<h3>File Upload Successful <a href="/" >Return to Home Page </a></h3>')
            }
        })


    }
}