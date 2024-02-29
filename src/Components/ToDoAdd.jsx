import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ToDoDate from './ToDoDate'
import { Weather } from './Weather'
import '../Styles/todoAdd.css'

const ToDoAdd = (props) => {
    const location = useLocation();
    const navigate = useNavigate()
    const [newValue, setNewValue] = useState(props.text || '');
    const [newStatus, setNewStatus] = useState(props.status || '');

    const onStatusClick = (value) =>{
        setNewStatus(value);
    }

    const SaveData = (e) => {
        e.preventDefault();
        props.submitEvent(newValue,newStatus)
        navigate('/')
    }
    const onChange = (e) => {
        setNewValue(e.target.value);
    }
    const onCancel = () => {
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
                    <div className='statusOption'>
                        {
                            props.buttons?.map((states => (
                                <button
                                    className={`btnStatus 
                                    ${states.name === 'To Do' ? 'red' : states.name === 'Doing' ? 'yellow' : 'green'}
                                    ${states.value === newStatus ? 'active' : 'disable'}`}
                                    type='button'
                                    key={states.value}
                                    value={states.value}
                                    onClick={() => onStatusClick(states.value)}
                                >
                                    {states.name}
                                </button>
                            )))
                        }
                    </div>
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