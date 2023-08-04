import { useEffect, useState } from 'react'

const useLocalStorage = (itemName ,initValue) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState (true);
    //item sera el contener de todos los todos
    const [item, setItem] = useState(initValue);

    useEffect(() =>{
      setTimeout(() =>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let ParsedItem;

          //si localstorage esta vacio == false
          if (!localStorage) {
            localStorage.setItem(itemName, JSON.stringify(initValue));
            ParsedItem = [];

            //si No esta vacio entonces trae la información que tiene dentro
          }else{
            ParsedItem = JSON.parse(localStorageItem)
          }
          setItem(ParsedItem)
          setLoading(false)

        } catch (error) {
          setError(error)
        }
      }, 3000)
    })

    const SaveItem = (newToDo) =>{
      try {
        //JSON.stringify pasa todo a string para poderlo guardar en L.S
        const toString = JSON.stringify(newToDo);
        localStorage.setItem(itemName, toString)
        setItem(newToDo)
      } catch (error) {
        setError(error)
      }
    }
  return {
    item,
    SaveItem,
    loading,
    error
  }
}

export default useLocalStorage