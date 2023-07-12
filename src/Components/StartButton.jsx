import React from 'react'
import '../Styles/Main.css'


const StartButton = ({start , setStart}) => {
  const handleClick = () =>{

    setStart(start ? false : true)
    console.log('doy click');
  }
  return (
    <button className='StartButton' onClick={handleClick}>
        <h2> {` ${!start? 'Comenzar' : 'Regresar'} `} </h2>
    </button>
  )
}

export default StartButton