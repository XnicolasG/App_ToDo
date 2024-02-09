import React from 'react'

const ToDoList = (props) => {
    //En caso de que tengamos una render function (que sea true), props.children se activara, de ser
    //una render props(que children sea false y y onRender sea true ) se activara onRender, que de cualquier manera se manejara de manera
    //automatica al cargar estas opciones en renderFunc
    const renderFunc = props.children || props.onRender
  return (
    <section className='contList'>
      <ul>
        {/* cuando porps.error sea true entonces se lanzara onError() */}
        {props.error && props.onError()}

        {props.loading && props.onLoading()}

        {/* si loading es False y totalTodos esa vacio entonces lanzara onEmpty() */}
        {!props.loading && !props.totalToDos && props.onEmpty()}

        {/* si totaltodos tiene algo, al usar !! devolvera unicamente true o false, 
        si es true, y si searchedTodo no tiene nada, etnonces lanzaremos onEmptyResults()
          */}
        {!!props.totalToDos && !props.searchedTodo.length &&
          props.onEmptyResults(props.search)}

        {/* Si loading y error son false entonces si renderizaremos los ToDo */}
        {(!props.loading && !props.error) && props.searchedTodo.map(renderFunc)}

      </ul>
    </section>
  )
}

export default ToDoList