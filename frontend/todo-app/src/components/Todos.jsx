import { useEffect, useState } from "react";

export function Todo({todos}){
    const [completedTodo,setCompletedTodo]=useState([]);

    useEffect(() => {
        setCompletedTodo(todos.filter(todo => todo.completed === true))
    }, [todos])

    // console.log(todos)
    console.log(completedTodo)
    return <div>
            { todos.map(function(todo){
                return <div id={todo._id} >
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button disabled={completedTodo.includes(todo) } onClick={() => {
                        setCompletedTodo([...completedTodo, todo]);
                        fetch('http://localhost:3000/completed',{
                            method:"PUT",
                            body:JSON.stringify({id:todo._id}),
                            headers:{
                            "content-type":"application/json"}
                        }).then( async function(res){
                            const json = await res.json();
                            alert(todo._id+" is marked as completed")
                        })

                    // }} > {todo.completed==true ? "Completed" : "Mark as complete"}</button>
                }} > {completedTodo.includes(todo) ? "Completed" : "Mark as complete"}</button>
                </div>
            }) }
        </div>

}