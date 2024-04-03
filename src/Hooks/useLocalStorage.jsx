import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useReducer,} from 'react'

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))

  const {
      sincronized,
      loading,
      error,
      item,
  } = state;

  // Action creators
  const onError = (error)=>dispatch({ 
    type: actionTypes.error, payload: error
  });
  const onSuccess = (parsedItem)=>dispatch({ 
    type: actionTypes.success, payload: parsedItem
  });
  const onSave = (newItem)=>dispatch({ 
    type: actionTypes.save, payload: newItem
  });
  const onSincronize = ()=>dispatch({ 
    type: actionTypes.sincronize 
  });
  const UpdateItem = (newitem,destinationStatus) =>dispatch({
    type:actionTypes.update,
    payload:{newitem,destinationStatus},
  })
  useEffect(()=>{
      setTimeout( ()=>{
      try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem) {
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
          } else {
          parsedItem = JSON.parse(localStorageItem);
          }
          onSuccess(parsedItem);
      } catch (error) {
          onError(error);
      }
      },1000);
  },[sincronized])

  const SaveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };


  const SyncItem = () =>{
      onSincronize();
  }

  return {
      item, 
      SaveItem, 
      loading,
      error,
      SyncItem,
      UpdateItem
  };
}

const initialState = ({ initialValue })=>({
  sincronized: true,
  loading: true,
  error: false,
  item :initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  update:'UPDATE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) =>({
  [actionTypes.error]: {
      ...state,
      error: true,
  },
  [actionTypes.success]:{
      ...state,
      error:false,
      sincronized: true,
      loading: false,
      item: payload,
  },
  [actionTypes.save]:{
      ...state,
      item:payload
  },
  [actionTypes.update]:{
    ...state,
    item: arrayMove(state.item, payload.oldIndex, payload.newIndex).map((item, index) => {
      if (index === payload.newIndex) {
        return {
          ...item,
          status: payload.destinationStatus,
        };
      }
      return item;
    }),
  },
  [actionTypes.sincronize]:{
      ...state,
      sincronized: false,
      loading: true,
  },
});

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state;
}

export default useLocalStorage