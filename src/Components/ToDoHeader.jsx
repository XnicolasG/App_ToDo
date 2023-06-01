import React from 'react'
import '../Styles/Main.css'

const ToDoHeader = ({ children }) => {
    return (
        <header className='Header'>
            {children}
        </header>
    )
}

export default ToDoHeader