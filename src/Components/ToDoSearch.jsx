import React from 'react'
import '../Styles/Aside.css'


const ToDoSearch = () => {
  
    const OnSearch = (e) =>{
        console.log(e.target.value);
    }
    return (
    <div className='contSearch'>
        <input 
        className="searching" 
        placeholder="Buscar tarea"
        onChange={OnSearch}
        /> 
    </div>
  )
}

export default ToDoSearch