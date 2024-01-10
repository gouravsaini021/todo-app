import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todo } from './components/Todos'

// {
//   title: 'to complete the project',
//   description: 'noo i have to complete the project of todo application in node and react',
//   completed: false,
//   id:'659d80b5b538ff4986ae36c3'}
function App() {

  const [todos, setTodo] = useState([]);

    useEffect(()=> {
      fetch("http://localhost:3000/todo").then(async function(res){
        const json = await res.json();
        setTodo(json.todos)
      })
    },
    [])
  

  return (
   <div>
    <CreateTodo todos={todos} setTodo={setTodo}></CreateTodo>
    <Todo todos={todos}></Todo>
   </div>
  )
}

export default App
