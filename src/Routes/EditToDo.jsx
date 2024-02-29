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
  
  const buttons = [
    {name:'To Do', value:'ToDo'},
    {name:'Doing', value:'doing'},
    {name:'Done', value:'done'},
  
  ];
  
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
        buttons={buttons}
        text={singleItem.text}
        submitEvent={(text, status) => editToDo(Id,text,status)}
        />
      </>
    )
  }
}

export default EditToDo