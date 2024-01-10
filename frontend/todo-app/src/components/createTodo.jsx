import { useState } from "react";

// export function CreateTodo({todos,setTodo}){

export function CreateTodo(props){
const [title,setTitle] = useState("");
const todos = props.todos;
const setTodo = props.setTodo;
    const [description,setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={ function(e){
                const value = e.target.value;
                setTitle(value)
            }}></input> <br />

            <input type="text" placeholder="description" onChange={ function(e){
                const value = e.target.value;
                setDescription(value)
            }}></input>
            <br />
            
            <button onClick={() => {
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body: JSON.stringify({
                        title:title,
                        description:description,
                        completed:false
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(async function(res){
                    const json = await res.json();
                    setTodo([{'id':json.id,'title':title,'description':description,'completed':false},...todos])
                    alert("Todo added")
                })
            }}>add a todo</button>
        </div>
    )
}