import React from 'react'
import '../Styles/Main.css'


const ToDoMain = ({ children, start }) => {
    return (
        <div className={`Main ${start ? 'StartedMain' : ''}`}>
            {children}
        </div>
    )
}

export default ToDoMain