import React from 'react'
import ToDoAdd from '../Components/ToDoAdd'
import useTodos from '../Hooks/useTodos'

const NewToDo = () => {
  const { updaters } = useTodos();
  const { addTodo } = updaters;
  return (
    <>
      <ToDoAdd 
      submitEvent={(text) => addTodo(text)}
      />
    </>
  )
}

export default NewToDo