import React from 'react'
import '../Styles/Aside.css'


const ToDoSearch = ({search, setSearch}) => {
  
    const OnSearch = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    return (
    <div className='contSearch'>
        <input 
        className="searching" 
        placeholder="Buscar tarea"
        onChange={OnSearch}
        value={search}
        /> 
    </div>
  )
}

export default ToDoSearch