import React from 'react'

const ToDoEmpty = () => {
  return (
    <div className='contStartTodo'>
      <p className='newTodoMess'>Parece que aun no se han creado tareas por hacer</p>
      <div className="contTodoImg">
        <img src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1696559682/to-do-list_pkbmow.png" alt="todo" />
      </div>
    </div>
  )
}

export default ToDoEmpty