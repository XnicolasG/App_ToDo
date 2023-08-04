
import StartButton from './Components/StartButton';
import ToDoAside from './Components/ToDoAside';
import ToDoDate from './Components/ToDoDate';
import ToDoHeader from './Components/ToDoHeader';
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
    addTodo
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

          <StartButton
            start={start}
            setStart={setStart}
          />
        </ToDoMain>

        <ToDoAside>
          <ToDoSearch
            search={search}
            setSearch={setSearch}
          />
          
        </ToDoAside>
      </section>


    </div>
  );
}

export default App;
