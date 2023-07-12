import React from 'react'
import '../Styles/Main.css'

const ToDoHeader = ({ children }) => {
    return (
        <header className='Header'>
            <h1>To Do </h1>
            {children}
        </header>
    )
}

export default ToDoHeader