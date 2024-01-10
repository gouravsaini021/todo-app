const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/TodoApp")

const todoschema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todo',todoschema);


module.exports={
    todo
}