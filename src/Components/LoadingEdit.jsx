import React from 'react'
import '../Styles/todoAdd.css'
import ToDoDate from './ToDoDate'
import { Weather } from './Weather'

export const LoadingEdit = () => {
  return (
    <section className='cont'>
    <header className='headerLoading'>
        <ToDoDate />
        <div className='contWeatherComp'>
        <Weather />
        </div>
    </header>
    <div className="contentForm">
        <section
            className='form'>
            <h2 className='title' >Loading...</h2>
           </section>
    </div>
</section>
  )
}
