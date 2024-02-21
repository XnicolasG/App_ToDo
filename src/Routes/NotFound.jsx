import React from 'react'
import '../Styles/notfound.css'
import { Link } from 'react-router-dom'
import ToDoDate from '../Components/ToDoDate'
import notFound1 from '../img/notFound1.jpeg' 

const notFound = () => {
  return (
    <section className='cont'>
      <header className='header'>
        <Link className='back' to={'/'}>Go Back</Link>
        <ToDoDate />
        <h2> Sorry mate (404)  </h2>
      </header>
    <div className="content">
      <img src={notFound1} alt="404" />
    </div>
    </section>
  )
}

export default notFound