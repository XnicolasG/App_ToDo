import React from 'react'
import ToDoAdd from '../Components/ToDoAdd'
import useTodos from '../Hooks/useTodos'
import { useParams } from 'react-router-dom'
import { LoadingEdit } from '../Components/LoadingEdit'

const EditToDo = () => {
  const params = useParams();
  const Id = params.id;
  const {states,updaters} = useTodos();
  const {editToDo} = updaters
  const {item,loading,getItem} = states

  
  const singleItem = getItem(Id);

  let textValue = singleItem?.text
  if (loading) {
    
    return (
      <>
       <LoadingEdit />
      </>
    )
  }else{
    return (
      <>
        <ToDoAdd 
        status={singleItem.status}
        text={singleItem.text}
        submitEvent={(text) => editToDo(Id,text)}
        />
      </>
    )
  }
}

export default EditToDo