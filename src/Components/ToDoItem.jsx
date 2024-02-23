import React from 'react'
import '../Styles/Aside.css'

const ToDoItem = (props) => {
  return (
    <>
    <li className='contItem'>
        <input type="checkbox"
          id="checkItem"
          onClick={props.OnComplete}
          defaultChecked={props.completed}
        />
        <p
          className={` toDoCheck ${props.completed ? 'toDoUndo': ''}`}
        >
          {props.text}
        </p>
        <span className='editItem' onClick={props.onEdit} >✏️</span>
        <span className='eraseItem' onClick={props.onDelete}>X</span>
      </li>
    </>
  )
}

export default ToDoItem