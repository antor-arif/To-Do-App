import React from 'react'
import './Todo.css'

import { FaTrash } from 'react-icons/fa';

function Todo(props) {

    
    const {tittle,desc} =props.todo
    const id = props.id

   
      const handleRemove=(id)=>{
         props.onRemoveTodo(id)
      }


  return (
    <article className='todo'>
        <div>
        <h1>{tittle}</h1>
        <p>{desc}</p>
        </div>
        <button className='btn' onClick={()=>{
          handleRemove(id)
        }}>
           <FaTrash/>
        </button>
        
    </article>
  )
}

export default Todo