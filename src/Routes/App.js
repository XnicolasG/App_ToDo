import { ChangeAlert } from '../Components/ChangeAlert';
import ToDoAside from '../Components/ToDoAside';
import ToDoDate from '../Components/ToDoDate';
import ToDoEmpty from '../Components/ToDoEmpty';
import ToDoHeader from '../Components/ToDoHeader';
import ToDoItem from '../Components/ToDoItem';
import ToDoList from '../Components/ToDoList';
import ToDoLoader from '../Components/ToDoLoader';
import ToDoMain from '../Components/ToDoMain';
import ToDoSearch from '../Components/ToDoSearch';
import Username from '../Components/Username';
import { Weather } from '../Components/Weather';
import useTodos from '../Hooks/useTodos';
import '../Styles/App.css';
import { useNavigate } from 'react-router-dom';
import { DndContext, closestCorners, MouseSensor, TouchSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from '../Components/SortableItem';
function App() {
  const navigate = useNavigate()
  const {
    states, updaters
  } = useTodos();
  const {
    error,
    loading,
    search,
    searchedTodo,
    completeToDo,
    completedToDos,
    totalToDos,
    start,
    doing,
    done,
    totalDone,
    pendigTasks,
    item
    // dateIcon,
  } = states

  const {
    // addTodo,
    deleteToDo,
    setSearch,
    SyncToDo,
    UpdateItem
  } = updaters

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
  )

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      UpdateItem((ite) =>{
        const oldIndex = ite.indexOf(active.id);
        const newIndex = ite.indexOf(over.id);
        return arrayMove(item, oldIndex, newIndex);
      })

      // UpdateItem({ oldIndex, newIndex }, over?.id)
      console.log(event);
    }
  }
  return (
    <div className="App">

      <section
        className='container'>
        <ToDoMain
          start={start}
        >
          <ToDoHeader
            totalToDos={pendigTasks}
            completedToDos={totalDone}
            loading={loading}
          >
            <ToDoDate
            // dateIcon={dateIcon}
            />
            <Weather />
            <Username />
          </ToDoHeader>
          {/* <ToDoInput
            start={start}
            setStart={setStart}
            addTodo={addTodo}
          /> */}
        </ToDoMain>


        <ToDoAside
          search={search}
        >
          {totalToDos > 0 ?
            <ToDoSearch
              // search={search}
              setSearch={setSearch}
              loading={loading}
            />
            : <div></div>
          }
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={item}
              strategy={rectSortingStrategy}
            >

              <ToDoList
                //render props
                error={error}
                loading={loading}
                totalToDos={totalToDos}
                searchedTodo={searchedTodo}
                className={'contList'}
                title={'To Do'}
                defaultState={'ToDo'}

                onError={() => <p>Se Genero un Error</p>} //FALTAN ESTILOS PARA ERROR
                onLoading={() => Array.from({ length: 4 }).map((index) => (
                  <ToDoLoader key={index} />
                ))}
                onEmpty={() => <ToDoEmpty />}
                onEmptyResults={(search) =>
                  <div className='contEmpty'>
                    <p className='emptyMessage'>No encontramos coincidencia alguna con <span>"{search}"</span></p>
                    <div className='emptyImg'>
                      <img alt='empty' src='https://res.cloudinary.com/dlkynkfvq/image/upload/v1696544445/query_xg1kug.png' />
                    </div>
                  </div>
                }
                onRender={todo => (
                  <>
                      <ToDoItem
                        key={todo.id}
                        text={todo.text}
                        OnComplete={() => { completeToDo(todo.id) }}
                        onDelete={() => { deleteToDo(todo.id) }}
                        onEdit={() => {
                          navigate(`/edit/${todo.id}`,
                            {
                              state: { todo }
                            });
                        }}
                      />
                  </>
                )}
              />


              <ToDoList
                //render props
                error={error}
                loading={loading}
                totalToDos={totalToDos}
                searchedTodo={doing}
                className={'contList2'}
                title={'Doing'}
                defaultState={'doing'}

                onError={() => <p>Se Genero un Error</p>} //FALTAN ESTILOS PARA ERROR
                onLoading={() => Array.from({ length: 4 }).map((index) => (
                  <ToDoLoader key={index} />
                ))}
                onEmpty={() => <ToDoEmpty />}
                onEmptyResults={(search) =>
                  <div className='contEmpty'>
                    <p className='emptyMessage'>No encontramos coincidencia alguna con <span>"{search}"</span></p>
                    <div className='emptyImg'>
                      <img alt='empty' src='https://res.cloudinary.com/dlkynkfvq/image/upload/v1696544445/query_xg1kug.png' />
                    </div>
                  </div>
                }
                onRender={todo => (
                  <>
                      <ToDoItem
                        key={todo.id}
                        text={todo.text}
                        OnComplete={() => { completeToDo(todo.text) }}
                        onDelete={() => { deleteToDo(todo.text) }}
                        onEdit={() => {
                          navigate(`/edit/${todo.id}`,
                            {
                              state: { todo }
                            });
                        }}
                      />
                  </>
                )}
              />
              <ToDoList
                //render props
                error={error}
                loading={loading}
                totalToDos={totalToDos}
                searchedTodo={done}
                className={'contList3'}
                title={'Done'}
                defaultState={'done'}

                onError={() => <p>Se Genero un Error</p>} //FALTAN ESTILOS PARA ERROR
                onLoading={() => Array.from({ length: 4 }).map((index) => (
                  <ToDoLoader key={index} />
                ))}
                onEmpty={() => <ToDoEmpty />}
                onEmptyResults={(search) =>
                  <div className='contEmpty'>
                    <p className='emptyMessage'>No encontramos coincidencia alguna con <span>"{search}"</span></p>
                    <div className='emptyImg'>
                      <img alt='empty' src='https://res.cloudinary.com/dlkynkfvq/image/upload/v1696544445/query_xg1kug.png' />
                    </div>
                  </div>
                }
                onRender={todo => (
                  <>
                      <ToDoItem
                        key={todo.id}
                        text={todo.text}
                        OnComplete={() => { completeToDo(todo.text) }}
                        onDelete={() => { deleteToDo(todo.text) }}
                        onEdit={() => {
                          navigate(`/edit/${todo.id}`,
                            {
                              state: { todo }
                            });
                        }}
                      />
                  </>
                )}
              />
            </SortableContext>
          </DndContext>
          {/* <ToDoList></ToDoList> */}
          <ChangeAlert
            SyncToDo={SyncToDo}
          />
        </ToDoAside>
      </section>
    </div>
  );
}

export default App;
