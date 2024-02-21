import React from 'react'
import { Link } from 'react-router-dom'

const ToDoList = (props) => {
  const sectionTitle = () => {
    // Lógica para determinar la clase basada en props.title
    if (props.title === 'To Do') {
      return 'red';
    } else if (props.title === 'Doing') {
      return 'yellow';
    } else {
      // Puedes proporcionar un color predeterminado para otros casos
      return 'green';
    }
  };
    //En caso de que tengamos una render function (que sea true), props.children se activara, de ser
    //una render props(que children sea false y y onRender sea true ) se activara onRender, que de cualquier manera se manejara de manera
    //automatica al cargar estas opciones en renderFunc
    const renderFunc = props.children || props.onRender
  return (
    <section className={`${props.className}`}>
      <div>

      <h2 className={sectionTitle()}> {props.title} <Link className='link' title='add new task' to={'/'} >+</Link> </h2>
      </div>
      <ul>
        {/* cuando porps.error sea true entonces se lanzara onError() */}
        {props.error && props.onError()}

        {props.loading && props.onLoading()}

        {/* si loading es False y totalTodos esa vacio entonces lanzara onEmpty() */}
        {!props.loading && !props.totalToDos && props.onEmpty()}

        {/* si totaltodos tiene algo, al usar !! devolvera unicamente true o false, 
        si es true, y si searchedTodo no tiene nada, entonces lanzaremos onEmptyResults()
          */}
        {!!props.totalToDos && !props.searchedTodo.length &&
          props.onEmptyResults(props.search)}
          

        {/* Si loading y error son false entonces si renderizaremos los ToDo */}
        {(!props.loading && !props.error) && props.searchedTodo.map(renderFunc)}
        {console.log(props.searchedTodo)}

      </ul>
    </section>
  )
}

export default ToDoList