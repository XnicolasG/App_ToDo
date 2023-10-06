import React from 'react'
import { useStorageListener } from '../HOC/useStorageListener'

const ChangeAlert = ({SyncToDo}) => {
  const {show, setShow} = useStorageListener(SyncToDo);
  if (show) {
    return (
      <div className='contAlert'>
        <p>Parece que hay algunos cambios en los To Do's</p>
        <button
        className='buttonAlert'
          onClick={setShow}
        >
          Actualizar !
        </button>
      </div>
    )
  } else {

    return <></>
  }

  // return (
  //   <div>ChangeAlert</div>
  // )
}

// const ChangeAlertWithStorage = useStorageListener(ChangeAlert)

export { ChangeAlert }
