import React from 'react'
import '../Styles/Main.css'


const ToDoMain = ({ children }) => {
    return (
        <div className='Main'>
            {children}
        </div>
    )
}

export default ToDoMain