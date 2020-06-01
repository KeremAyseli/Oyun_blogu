const express = require('express');
const app = express();
const router=express.Router();
app.use(express.static('./'));
app.get('/',function(req,res){
     res.sendfile('./deneme.html')
     res.append("deneme");
    
});
app.get('/hakkinda.html',function(req,res){
    res.sendfile('./hakkinda.html')
    res.append("deneme");
})

app.listen( 8888,function(){
  console.log("8888 üstünden dinleniyor");
});