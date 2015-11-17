var mongoose = require('mongoose')

//todo schema
var todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
