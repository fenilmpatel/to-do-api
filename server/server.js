
var express= require('express');
var bodyParser= require('body-parser');
var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {todo}= require('./models/todo');

var app = express();
app.use(bodyParser.json())
app.post('/todos',(req,res)=>{
    var newtodo = new todo({
        text:req.body.text
    })
    newtodo.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
        },(err)=>{
           res.status(400).send(err);
            
        })
});
app.listen(9000,()=>{
    console.log('server is up on port 9000')
})


module.exports = {app}

