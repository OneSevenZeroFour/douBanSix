var express = require("express");

var mysql = require('mysql');

var multer = require('multer');


var app = express();

var fs = require('fs');

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'douban'
});

connection.connect();

//MD5加密

var crypto=require('crypto');  
var md5=crypto.createHash("md5");  
md5.update("18124092479");  
var str=md5.digest('hex');  
var s=str.toUpperCase();  //转换为32位大写  
console.log(s);   

var strr = '';

var storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './public/addImage/tamp/phone18124092479')
    },
    filename:function(req, file, cb){
        var fileFormat = file.originalname.split('.');
        var name = file.fieldname + '-' + Date.now() +'18124092479'+ "." + fileFormat[fileFormat.length-1];
        // console.log(name);
        strr +=  name + ',';
        // console.log(strr);
        // connection.query(`insert into uploadfile (filename) values ("${name}")`,function(error, results, fields){
        //     if(error) throw error;
        //     console.log(results);
        // });
        cb(null, name);
    }
})





//往multer去配置这个存放文件的信息
var upload = multer({
    storage: storage
});

var tampURL = './public/addImage/tamp/phone';
var eternalURL = './public/addImage/eternal/phone';
var phone = '18124092479';

app.get('/addImage',function(req, res){
    res.set('Access-Control-Allow-Origin','*');
    var bool = false;
    //查看用户的图片的暂存区是否存在,不存在就创建
    fs.access(tampURL + phone,function(err){
        if(err){
            //如果不存在那么创建一个存放该用户上传照片的文件夹
            //0777为目录权限
            fs.mkdir(tampURL + phone,0777,function(err){
                if(err){
                    bool = false;
                    console.log('tmp fail');
                    return;
                }
                console.log('tmp success');
                    bool = true;


            });
        }
    fs.access(eternalURL + phone,function(err){
            if(err){
                fs.mkdir(eternalURL + phone,0777,function(err){
                if(err){
                    bool = false;
                    console.log('eternal fail');
                    return;
                }
                console.log('eternal success');
                    bool = true;
            })
        }
    })
            
        res.send(bool);
    })
})

//发广播页面加载时（已登录）读取文件夹里的文件
app.get('/mountedImage',function(req, res){
    res.set('Access-Control-Allow-Origin','*');
    fs.readdir(tampURL + phone,function(err,files){
        if(err){
            res.send(false);
            console.log('初始化读取目录失败');
            return;
        }
        res.send(files);
    })

})
//点了发布按钮
app.get('/publish',function(req,res){
    res.set('Access-Control-Allow-Origin','*');
    fs.readdir(tampURL + phone,function(err,files){
        if(err){
            res.send(false);
            console.log('发布读取目录失败');
            return;
        }
        var arr = [];

        files.forEach(function(item){
            fs.rename(tampURL + phone + '/' +item,eternalURL +phone+ '/'+item,function(err){
                if(err){
                    console.log(tampURL + phone + '/' +item,eternalURL + item);
                    arr.push(err);
                    console.log('arr的长度' + arr.length);
                    
                }
            })
        })
        if(arr.length > 0){
            console.log('发布失败');
            // return;
        }else{
            console.log('发布成功');
        }
        // console.log(files);
    })
    //修改路径写入eternal
    
})
// var mysql = require('mysql');
// app.post("/getjobs", function(req, res) {
//     //用fs读写文件，实现爬虫，实现读写数据库，api接口等
//     //获取post请求的参数 监听req的流
//     console.log(req.body);
//     connection.query('SELECT * FROM jobs limit 0,5', function(error, results, fields) {
//         res.append("Access-Control-Allow-Origin","*")
//         if(error) throw error;
//         console.log('The solution is: ', results);
//         res.send(JSON.stringify({
//             results
//         }));
//     });
// })
// 
app.post('/profile',upload.any(),function(req, res, next){
    res.set('Access-Control-Allow-Origin','*');
    // console.log(124);
    res.send(strr);
    strr = '';
})
app.listen(12345);
console.log("ok");
