import React from 'react'
import '../Styles/Aside.css'

const ToDoAside = ({ children,search }) => {
    return (
        <div className='Aside'>
            {React.Children
            .toArray(children).map((child)=> React.cloneElement(child, {search}))
            }
        </div>
    )
}

export default ToDoAside