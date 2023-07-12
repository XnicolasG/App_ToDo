import React from 'react'
import '../Styles/Main.css'

const ToDoDate = ({ dateIcon }) => {
    const date = new Date();
    const day = date.getDate();
    const dayType = { weekday: 'long' }
    const dayName = date.toLocaleDateString('es-Es', dayType);
    const monthType = { month: 'long' }
    const monthName = date.toLocaleDateString('es-Es', monthType).toUpperCase();

    return (
        <section className='DateContainer'>
            <main className='DateInfo'>
                <h2 className='Month'>{monthName}</h2>
                <h2 className='DayName'>{dayName}</h2>
                <h2 className='Day'>{day}</h2>

            </main>
            <aside className='DateAside'>
                <img className='dateIcon' src={dateIcon} alt="dateIcon" />
            </aside>
        </section>
    )
}

export default ToDoDate