import React from 'react'
import '../Styles/Main.css'

const ToDoDate = ({ dateIcon }) => {
    const date = new Date();
    const day = date.getDate();
    const dayType = { weekday: 'long' }
    const dayName = date.toLocaleDateString('en-En', dayType);
    const monthType = { month: 'long' }
    const monthName = date.toLocaleDateString('en-En', monthType).toUpperCase();

    return (
        <section className='DateContainer'>
                <h2 className='DayName'>{dayName}</h2>
                <h2 className='Day'>{day}</h2>
                <h2 className='Month'>{monthName}</h2>
        </section>
    )
}

export default ToDoDate