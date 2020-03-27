const multer=require('multer')
const path=require('path')
const Product=require('./model/model')

var storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'uploads');
    },
    filename:function(req,file,callback){
        // callback(null,file.originalname)
        callback(null,'Doc-'+Date.now()+path.extname(file.originalname));


    }
})




//var maxsize=1*1024*1024 ;


module.exports={
    index:(req,res)=>{
        Product.find(function(err,data){
            if(err){
                console.log(err)
            }
            else{
                res.render('index');
            }
        })
        

    },
    upload:(req,res)=>{
 
        var upload=multer({storage: storage,
        limits:{filesize: 4*1024*1024}}).array('myFile',5);   //filesize:maxsize
        console.log(upload)


        upload(req,res,err=>{
            //file information object
            // console.log(req.files)  // for multiple files

            // console.log(req.files[1].filename)
            // console.log(req.files.length)

           
 


            for(var i=0;i<req.files.length;i++){
                var obj=req.files[i]
                console.log(req.files[i])
                
                                                         
                 let data= new Product(obj)       
                //  

        data.save().then(result=>{
            console.log("Data insertion success")
            
        }).catch(
            err=>{
               console.log("Data insertion Failed")
              
            }
        )
              
            }
            
          
            
       
            
        
            if(req.files===undefined){
               return res.send('No File Chosen <a href="/" >Return to Home Page </a>')
            }

            if(err){
                return res.send('Error uploading file <a href="/" >Return to Home Page </a>');
            }
            else{
                return res.send('<h3>File Upload Successful <a href="/" >Return to Home Page </a></h3>');
            }
        })

  // console.log(req.file)
    }
}