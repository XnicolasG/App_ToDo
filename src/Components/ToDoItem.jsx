import React from 'react'
import '../Styles/Aside.css'

const ToDoItem = (props) => {
  return (
    <>
    <li className='contItem'>
        <p
          className={` toDoCheck ${props.completed ? 'toDoUndo': ''}`}
        >
          {props.text}
        </p>
        <div className="options">
        <span className='editItem' onClick={props.onEdit} >✏️</span>
        <span className='eraseItem' onClick={props.onDelete}>🗑️</span>
        </div>
      </li>
    </>
  )
}

export default ToDoItem