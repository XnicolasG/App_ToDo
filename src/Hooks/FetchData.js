import React, { useEffect, useState } from 'react'

const FetchData = ({url,param}) => {
  const [State, setState] = useState({
    data: null,
    loading: null,
    error: null
  })

  useEffect(()=>{
    const callApi = async () =>{
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({data, loading:false, error:null});
      } catch (error) {
        setState({ data: null, error, loading:false});
      }finally{
        setState((prevState)=>({
          ...prevState,
          loading:false
        }))
      }
    }
    callApi()
  },[param])
  return State

}

export default FetchData