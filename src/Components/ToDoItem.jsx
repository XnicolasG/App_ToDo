import React from 'react'
import '../Styles/Aside.css'
import { SortableItem } from './SortableItem'

const ToDoItem = (props) => {
  return (
    <>
      <SortableItem key={props.key} id={props.id}>

        <li className='contItem'>
          <p
            className={` toDoCheck ${props.completed ? 'toDoUndo' : ''}`}
          >
            {props.text}
          </p>
          <div className="options">
            <span className='editItem' onClick={props.onEdit} >✏️</span>
            <span className='eraseItem' onClick={props.onDelete}>🗑️</span>
          </div>
        </li>
      </SortableItem>
    </>
  )
}

export default ToDoItem