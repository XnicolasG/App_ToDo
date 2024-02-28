import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ToDoDate from './ToDoDate'
import '../Styles/todoAdd.css'
import { Weather } from './Weather'

const ToDoAdd = (props) => {
    const location = useLocation();
    const navigate = useNavigate()
    const [newValue, setNewValue] = useState(props.text || '')

    const SaveData = (e) => {
        e.preventDefault();
        props.submitEvent(newValue)
        navigate('/')
    }
    const onChange = (e) =>{
        setNewValue(e.target.value);
    }
    const onCancel = ()=>{
        navigate("/")
    }
    // pendiente el cambio de estatus, puede ser con botones y valor
    return (
        <section className='cont'>
            <header className='header'>
                <Link className='back' to={'/'}>Go Back</Link>
                <ToDoDate />
                <div className='contWeatherComp'>
                    <Weather />
                </div>
            </header>
            <div className="contentForm">
                <form
                    className='form'
                    onSubmit={SaveData}>
                    <h2 className='title' >{(location.pathname === '/new')
                        ? 'Let´s create a task !'
                        : 'Want to change somenthing ?'}</h2>
                        <p>{props.status}</p>
                    <textarea 
                    value={newValue}
                    onChange={onChange}
                    />
                    <div className="btns">

                        <button onClick={onCancel} className='btn cancel'>Cancel</button>
                        <button className='btn' type='submit' disabled={!newValue}>{(location.pathname === '/new')
                            ? 'Add'
                            : 'Save'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ToDoAdd