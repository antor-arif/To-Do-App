import React, { useState } from 'react'
import './NewTodo.css'

function NewTodo(props) {
    const {tittle,desc} = props.todos
    
    const [change, setChange] = useState({tittle: '', desc : ''})

    const handleChange=(event)=>{
         const name = event.target.name
         setChange( (oldChange)=>{
            return {...oldChange, [name]:event.target.value}
         })
    }
     
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(change)
        setChange({tittle:event.target.value,desc: event.target.value})
    }




  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='form-field'>
            <label htmlFor="tittle">Tittle :</label>
            <input type="text " name='tittle' onChange={handleChange} value={tittle}/>
        </div>
        <div className='form-field'>
            <label htmlFor="desc">Description :</label>
            <textarea type="text " name='desc' onChange={handleChange} value={desc}/>
        </div>
        <button type='submit' className='buton'>Add Todo</button>
    </form>
  )
}

export default NewTodo