import React from 'react'
import './Todos.css'
import Todo from './Todo'

function Todos(props) {
  
  
  
  return (
    <section className='todos'>
       {props.todos.map((todo,index)=> <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo}></Todo> ) }
    </section>
  )
}

export default Todos