import React from 'react'
import { useStorageListener } from '../HOC/useStorageListener'

const ChangeAlert = ({SyncToDo}) => {
  const {show, setShow} = useStorageListener(SyncToDo);
  if (show) {
    return (
      <div>
        <p>Hubo Cambios</p>
        <button
          onClick={setShow}
        >
          Volver a cargar To Dos
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
