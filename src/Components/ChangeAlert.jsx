import React from 'react'
import { withStorageListener } from '../HOC/withStorageListener'

const ChangeAlert = ({ show, setShow }) => {
  if (show) {
    return (
      <>
        <p>Hubo Cambios</p>
        <button
          onClick={setShow}
        >
          Volver a cargar To Dos
        </button>
      </>
    )
  } else {

    return <></>
  }

  // return (
  //   <div>ChangeAlert</div>
  // )
}

const ChangeAlertWithStorage = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorage }
