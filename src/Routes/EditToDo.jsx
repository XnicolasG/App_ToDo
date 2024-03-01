import React from 'react'
import ToDoAdd from '../Components/ToDoAdd'
import useTodos from '../Hooks/useTodos'
import { useLocation, useParams } from 'react-router-dom'
import { LoadingEdit } from '../Components/LoadingEdit'


const EditToDo = () => {
  const params = useParams();
  const location = useLocation();
  const Id = params.id;
  const { states, updaters } = useTodos();
  const { editToDo } = updaters
  const { item, loading, getItem } = states

  const buttons = [
    { name: 'To Do', value: 'ToDo' },
    { name: 'Doing', value: 'doing' },
    { name: 'Done', value: 'done' },

  ];
  let todoContent ;

  if (location.state?.todo) {
    todoContent=location.state.todo;
  } else if (loading) {
    return (
      <>
        <LoadingEdit />
      </>
    )
  } else {
    const singleItem = getItem(Id);
    todoContent = singleItem;
  }

console.log(todoContent);


  return (
    <>
      <ToDoAdd
        status={todoContent.status}
        buttons={buttons}
        text={todoContent.text}
        submitEvent={(text, status) => editToDo(Id, text, status)}
      />
    </>
  )
}
export default EditToDo