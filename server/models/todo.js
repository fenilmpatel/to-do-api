const mongoose = require('mongoose');
var todo = mongoose.model('todo', {
    text: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
})

// var newtodo = new todo({
//     text: 'fenil',
//     complete: true

// });
// newtodo.save().then((doc) => {
//     console.log('save todo', doc);

// }, (err) => {
//     console.log('unable to save');

// });    
module.exports={todo}; 