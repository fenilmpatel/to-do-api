const mongoose = require('mongoose');
 var user = mongoose.model('User',{
    email:{
        type: String,
        required:true, 
        trim:true,
        minlength:1},
    complete:{
        type: Boolean,
        default: false
       },
     completedAt:{
         type:Number,
         default:null
     }  
})
// var newUser = new User({
//     email:'fenilpatel12997@gmail.com'
// })

// newUser.save().then((doc)=>{
//     console.log('save user',doc);
// },
// (err)=>{
// console.log('unable to save User');
// });
module.exports = {user};