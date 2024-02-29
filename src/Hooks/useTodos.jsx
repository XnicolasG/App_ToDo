import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useTodos = (props) => {

  const {
    item,
    SaveItem,
    loading,
    error,
    SyncItem: SyncToDo } = useLocalStorage('TODOS_V2', [])

  // const [dateIcon, setDateIcon] = useState('')
  const [start, setStart] = useState(false)
  // const date = new Date();
  // const Hour = date.getHours();

  const [search, setSearch] = useState('');

  //----- contador de ToDos --

  //!! se niega la negación sin embargo esto garantiza estar trabajando con valor bool puro y que no traiga otro tipo de valor y genere errores
  const completedToDos = item.filter(todo => !!todo.completed).length;
  const totalToDos = item.length;
  
  // --- Metodo para filtrar por medio del buscador ---
  // let searchedTodo = [];
  const filterByStatus = (status) => {
    return item.filter(todo => todo.status === status);
  }
  let searchedTodo ;
  let doing ;
  let done ;
  
  
  
  if (search.length >= 1) {
    const searchText = search.toLowerCase();
    
    searchedTodo = filterByStatus('ToDo').filter(todo => todo.text.toLowerCase().includes(searchText));
    doing = filterByStatus('doing').filter(todo => todo.text.toLowerCase().includes(searchText));
    done = filterByStatus('done').filter(todo => todo.text.toLowerCase().includes(searchText));
    
  } else {
    searchedTodo = filterByStatus('ToDo');
    doing = filterByStatus('doing');
    done = filterByStatus('done');  
  }
  const totalTodo = searchedTodo.length;
  const totalDoing = doing.length;
  const totalDone = done.length;
  let pendigTasks = totalTodo + totalDoing + totalDone
  console.log({ doing,totalTodo, totalDoing, totalDone, pendigTasks });

  /*
    //si la longitud de estado search NO es mayor o igual a 1, entonces searchedTodo sera igual a lo que tenga guardado estado item
    */
  // --- CRUD ---

  const newToDo = [...item]

  const addTodo = (text) => {
    // clonar array item
    const newId = uuidv4();
    newToDo.push({
      id: newId,
      completed: false,
      text,
      status: 'ToDo'
    })
    console.log(newId);
    SaveItem(newToDo)
  }



  const getItem = (id) => {
    const toDoIndex = item.findIndex(todo => todo.id === id);
    return item[toDoIndex];
  }
  const completeToDo = (id) => {
    //iteracion en item hasta encontrarla coincidencia exacta de id que busco y asi obtener el index
    const toDoIndex = item.findIndex(todo => todo.id === id);
    const newToDo = [...item];
    if (newToDo[toDoIndex].completed === false) {
      newToDo[toDoIndex].completed = true;
      // console.log("si funciona");

      //actualizar el estado y pasarlo a true
      SaveItem(newToDo);
    } else {
      newToDo[toDoIndex].completed = false;
      SaveItem(newToDo);
    }
  }

  const deleteToDo = (id) => {
    const toDoIndex = item.findIndex(todo => todo.id === id);
    const newToDo = [...item];
    // corto la posición guardada en toDoIndex, y le digo que solo quiero cortar 1 elemento
    newToDo.splice(toDoIndex, 1)
    SaveItem(newToDo);
  }

  const editToDo = (id, newText, newStatus) => {
    const toDoIndex = item.findIndex(todo => todo.id === id);
    const newToDo = [...item];
    newToDo[toDoIndex].text = newText;
    newToDo[toDoIndex].status = newStatus;

    // newToDo[toDoIndex].status = newStatus;
    SaveItem(newToDo);
  }
  const states = {
    error,
    loading,
    search,
    searchedTodo,
    completeToDo,
    completedToDos,
    totalToDos,
    getItem,
    // dateIcon,
    doing,
    done,
    start,
    item,
    totalDone, 
    pendigTasks
  }

  const updaters = {
    addTodo,
    editToDo,
    deleteToDo,
    setSearch,
    SyncToDo,
    setStart,
  };
  return { states, updaters };
}

export default useTodos
