import React, { useState } from 'react'

const useTodos = () => {
    const [dateIcon, setDateIcon] = useState(true)

  return{
     dateIcon,
     setDateIcon
    };
}

export default useTodos