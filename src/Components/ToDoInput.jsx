import React, { useState } from 'react'

const ToDoInput = ({ setStart, start,addTodo }) => {
    const [warning, setWarning] = useState('disable')
    const [newTodo, setNewTodo] = useState("")
    const onchange = (e) => {
        setNewTodo(e.target.value)
    }
    const handleClick = () => {
        setStart(start ? false : true)
        console.log('doy click');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodo === '') {
            setWarning('active')
            return
        } else {
            addTodo(newTodo) // enviado estado a funcion addTodo
            setNewTodo("")
            setWarning('disable')
        }
    }
    return (
        <div className='contInput'>
            <form className='form' onSubmit={onSubmit}>
                <label className='labelForm'>Crea un nuevo To Do</label>
                <textarea
                    className='inputTodo'
                    rows={3} cols={30}
                    onChange={onchange}
                    value={newTodo}
                />
                <p className={warning==="disable" ? 'noneDisplay' : "withDisplay"}>
                    Escribe alguna tarea para poder agregar
                </p>
                <section className='contButtons'>
                    <button className='StartButton'type='submit'>
                        <h2> Agregar </h2>
                    </button>
                    <button className='StartButton' type='button' onClick={handleClick}>
                        <h2> {` ${!start ? 'Comenzar' : 'Regresar'} `} </h2>
                    </button>
                </section>
            </form>
        </div>
    )
}

export default ToDoInput