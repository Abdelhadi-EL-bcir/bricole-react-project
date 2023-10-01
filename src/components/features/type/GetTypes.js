import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetTypes() {
  const [data , setData] = useState([]);
  const [error , setError] = useState('');
  useEffect(()=>{
    try{
       axios.get().then((res)=>{
        console.log(res.data); 
        setData(res.data);
       })
    }catch(err){ 
        console.log(err);
        setError(err.message);   
    }
  } , [])
  return (
    <div></div>
  )
}

export default GetTypes;