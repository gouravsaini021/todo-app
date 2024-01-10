const express = require('express');
const cors = require('cors');
const { CreateTodo, UpdateTodo } = require('./types');
const { todo } = require('./db');
const app = express()


app.use(express.json());
app.use(cors());


app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const paresePayload = CreateTodo.safeParse(createPayload);
    if (! paresePayload.success ){
        res.status(411).json({
            msg: "Wrong inputs are being send"
        })
        return paresePayload.error ;
    }
    const posted_todo = await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg: "Todo is Created",
        "id":posted_todo._id
    })

    // pass in mangodb
})

app.get("/todo",async function(req,res){
    const todos = await todo.find({});
    // console.log(todos)
    res.json({
        todos
    })
    // res.json({"todos":[]})
})

app.put("/completed",async function(req,res){
    const createPayload = req.body;
    const parsePayload= UpdateTodo.safeParse(createPayload)
    if (! parsePayload.success ){
        res.status(411).json({
            msg: "You send Wrong Inputs"
        })
        return ;
    }
    // mark as complete in mongodb
    await todo.findByIdAndUpdate({
        _id:createPayload.id
    },
    {
        completed:true
    })

    res.json({
        'msg':"marked "+ createPayload.id + " as completed"
    })

})

app.listen(3000);
