import  { useState } from 'react'

export const useStorageListener = (SyncToDo) => {

    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('Hubo cambios');
            setStorageChange(true)
        }
    })
    const toogleShow = () => {
        console.log('funciona toggleSHow');
        SyncToDo();
        setStorageChange(false)
    }
    return {
        show: storageChange,
        setShow: toogleShow
    } 
}

// --- HOC -------
//  export const withStorageListener = (WrappedComponent) => {

// return function WrappedComponentWithStorageListener(props) {
//     const [storageChange, setStorageChange] = useState(false);
//     window.addEventListener('storage', (change) => {
//         if (change.key === 'TODOS_V1') {
//             console.log('Hubo cambios');
//             setStorageChange(true)
//         }
//     })
//     const toogleShow = () => {
//         console.log('funciona toggleSHow');
//         props.SyncToDo();
//         setStorageChange(false)
//     }
//     return <WrappedComponent
//         show={storageChange}
//         setShow={toogleShow}
//     />
// }
// }
