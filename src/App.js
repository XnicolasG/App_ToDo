
import StartButton from './Components/StartButton';
import ToDoAside from './Components/ToDoAside';
import ToDoDate from './Components/ToDoDate';
import ToDoEmpty from './Components/ToDoEmpty';
import ToDoHeader from './Components/ToDoHeader';
import ToDoInput from './Components/ToDoInput';
import ToDoItem from './Components/ToDoItem';
import ToDoList from './Components/ToDoList';
import ToDoLoader from './Components/ToDoLoader';
import ToDoMain from './Components/ToDoMain';
import ToDoSearch from './Components/ToDoSearch';
import useTodos from './Hooks/useTodos';
import './Styles/App.css';

function App() {
  const {
    dateIcon,
    start,
    setStart,
    loading,
    error,
    search,
    setSearch,
    completeToDo,
    completedToDos,
    totalToDos,
    searchedTodo,
    deleteToDo,
    addTodo,
    setNewToDo,
    newToDo
  } = useTodos();
  return (
    <div className="App">
      <section
        className='container'>
        <ToDoMain
          start={start}
        >
          <ToDoHeader>
            <ToDoDate
              dateIcon={dateIcon}
            />
          </ToDoHeader>
          <ToDoInput
            start={start}
            setStart={setStart}
            addTodo={addTodo}
          />
        </ToDoMain>

        <ToDoAside>
          <ToDoSearch
            search={search}
            setSearch={setSearch}
          />
          <ToDoList
            error={error}
            loading={loading}
            totalToDos={totalToDos}
            searchedTodo={searchedTodo}
            search={search}
            //render functions
            onError={() => <p>Se Genero un Error</p>}
            onLoading={() => Array.from({ length: 4 }).map((index) => (
              <ToDoLoader key={index} />
            ))}
            onEmpty={() => <ToDoEmpty />}
            onEmptyResults={(search) => <p>No encontramos coincidencia alguna con "{search}</p>}
            onRender={todo => (
              <ToDoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                OnComplete={() => { completeToDo(todo.id) }}
                onDelete={() => { deleteToDo(todo.id) }}
              />
            )}
          />
        </ToDoAside>
      </section>


    </div>
  );
}

export default App;
