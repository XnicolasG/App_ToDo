import React from 'react'
import ToDoAdd from '../Components/ToDoAdd'
import useTodos from '../Hooks/useTodos'
import { useParams } from 'react-router-dom'

const EditToDo = () => {
  const params = useParams();
  const Id = params.id;
  const {states,updaters} = useTodos();
  const {editToDo} = updaters
  const {item} = states

  const indexItem = item.findIndex(it => it.id === Id)
  const singleItem =item[indexItem];
  return (
    <>
      <ToDoAdd 
      item={singleItem}
      submitEvent={(text) => editToDo(Id,text)}
      />
    </>
  )
}

export default EditToDo