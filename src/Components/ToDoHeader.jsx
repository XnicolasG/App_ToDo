import React from 'react'
import '../Styles/Main.css'

const ToDoHeader = ({ children,totalToDos, completedToDos,loading }) => {
    return (
        <header className='Header'>
            <section className={`counter ${!!loading && "counterLoading"}`}>
                <h1>TASKS</h1>
                <h1>
                {completedToDos} / {totalToDos} 
                </h1>
            </section>
            {children}
        </header>
    )
}

export default ToDoHeader