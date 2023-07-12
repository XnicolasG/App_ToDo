import React from 'react'
import '../Styles/Aside.css'

const ToDoAside = ({ children }) => {
    return (
        <div className='Aside'>
            {children}
        </div>
    )
}

export default ToDoAside