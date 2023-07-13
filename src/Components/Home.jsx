import React, { useState } from 'react'
import './Home.css'
import NewTodo from './NewTodo'
import Todos from './Todos'
import { v4 as uuidv4 } from "uuid";




   const dummytodos = [{tittle : 'Tittle 1',
desc : 'Description 1'},
{tittle : 'Tittle 2',
desc : 'Description 2'}]




function Home() {
    const [todos,setTodos] = useState([])
     

    const onSubmit =(todo) => {
       
        setTodos((old)=>{
            return [...old,{ id: uuidv4(),todo}]
        })
    }
    const handleRemove =(id)=>{
        setTodos((prevTodo)=>{
          const filteredTodo = prevTodo.filter((todo)=> todo.id != id)
          return filteredTodo;
        })
    }
    
  return (
    <div className='container'>
        <h1 className='h1'>To-Do App</h1>
        <NewTodo todos={dummytodos} onAddTodo={onSubmit}/>
        <Todos todos={todos} onRemoveTodo={handleRemove}/>

    </div>
  )
}


export default Home