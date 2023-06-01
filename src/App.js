
import StartButton from './Components/StartButton';
import ToDoAside from './Components/ToDoAside';
import ToDoDate from './Components/ToDoDate';
import ToDoHeader from './Components/ToDoHeader';
import ToDoMain from './Components/ToDoMain';
import useTodos from './Hooks/useTodos';
import './Styles/App.css';

function App() {
  const {dateIcon, setDateIcon} = useTodos();
  return (
    <div className="App">
      <section
      className='container'>
        <ToDoMain>
            <ToDoHeader>
              <ToDoDate 
              dateIcon={dateIcon}
              setDateIcon={setDateIcon}
              />
            </ToDoHeader>
            <StartButton />
        </ToDoMain>
         
        <ToDoAside>

        </ToDoAside>
      </section>


    </div>
  );
}

export default App;
