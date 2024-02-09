import React from 'react'
import '../Styles/Main.css'

const ToDoHeader = ({ children,totalToDos, completedToDos,loading }) => {
    return (
        <header className='Header'>
            <h1 className={`counter ${!!loading && "counterLoading"}`}>{completedToDos} de {totalToDos} </h1>
            {children}
        </header>
    )
}

export default ToDoHeader