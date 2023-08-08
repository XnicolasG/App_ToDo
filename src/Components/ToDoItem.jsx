import React from 'react'

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
        <span className='eraseItem' onClick={props.onDelete}>X</span>
      </li>
    </>
  )
}

export default ToDoItem