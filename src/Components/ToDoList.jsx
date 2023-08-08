import React from 'react'

const ToDoList = (props) => {
    const renderFunc = props.children || props.onRender
  return (
    <section className='contList'>
      <ul>
        {props.error && props.onError()}

        {props.loading && props.onLoading()}

        {!props.loading && !props.totalToDos && props.onEmpty()}

        {!!props.totalToDos && !props.searchedTodo.length &&
          props.onEmptyResults(props.search)}

        {props.searchedTodo.map(renderFunc)}

      </ul>
    </section>
  )
}

export default ToDoList