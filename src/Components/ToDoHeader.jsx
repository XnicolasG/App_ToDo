import React from 'react'
import '../Styles/Main.css'

const ToDoHeader = ({ children,totalToDos, completedToDos }) => {
    return (
        <header className='Header'>
            <h1>{completedToDos} de {totalToDos} </h1>
            {children}
        </header>
    )
}

export default ToDoHeader