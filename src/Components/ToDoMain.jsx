import React from 'react'
import '../Styles/Main.css'


const ToDoMain = ({ children, start }) => {
    return (
        // condiconal con window.matchMedia
        <div className={`Main`}>
            {children}
        </div>
    )
}

export default ToDoMain
// al estar por debajo de 800px dejar de tener grid dinamico,
// dejar de tner boton de continuar, solo deplegarlo de manera vertical
// desde un inicio