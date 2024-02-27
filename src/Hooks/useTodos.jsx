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
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);


  //----- contador de ToDos --

  //!! se niega la negación sin embargo esto garantiza estar trabajando con valor bool puro y que no traiga otro tipo de valor y genere errores
  const completedToDos = item.filter(todo => !!todo.completed).length;
  const totalToDos = item.length;

  // --- Metodo para filtrar por medio del buscador ---

  let searchedTodo = [];

  //si la longitud de estado search NO es mayor o igual a 1, entonces searchedTodo sera igual a lo que tenga guardado estado item
  if (!search.length >= 1) {
    searchedTodo = item
    // pero si SI es mayor o igual a 1..   
  } else {
    searchedTodo = item.filter(todo => {
      // pasar string la lista de ToDos a minuscula
      const todoText = todo.text.toLowerCase();
      // pasar a minuscula el string en el input de busqueda
      const searchText = search.toLowerCase();
      // devolver el valor DENTRO de item que incluya alguna coincidencia con la busqueda, asi sea de una sola letra
      return todoText.includes(searchText);
    })
  }

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

  useEffect(() => {
    if (newToDo.status === 'doing') {
      setDoing((prevDoing) => [...prevDoing, newToDo]);
    } else if (newToDo.status === 'done') {
      setDoing((prevDoing) => prevDoing.filter((todo) => todo.id !== newToDo.id));
      setDone((prevDone) => [...prevDone, newToDo])
    }
    console.log({ doing, done, item });
  }, [item])

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

  const editToDo = ( id, newText ) => {
    const toDoIndex = item.findIndex(todo => todo.id === id);
    const newToDo = [...item];
    newToDo[toDoIndex].text = newText;
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
    // dateIcon,
    start,
    doing,
    done,
    item
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
