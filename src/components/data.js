import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { usePosition } from 'use-position'



function Data() {
    const [users, setUsers] = useState([]);
   
    const {latitude, longitude}= usePosition();
    console.log(latitude, longitude);
 
    useEffect(()=>{
      axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1ac2c05c20ed62694dfdbe712be26cae`)
      .then((res)=> (setUsers(res.data)))
      .catch((e)=>console.log(e))
      
      }, [latitude])
  


  return (
    <div>
    {JSON.stringify(users)}
    </div>
  )
}

export default Data


// const[users, setUsers]= useState([]);
//   const[isloading, setIsloading]= useState(true);
 
//   useEffect(()=>{
//   axios('https://jsonplaceholder.typicode.com/users')
//   .then((res)=> (setUsers(res.data)))
//   .catch((e)=>console.log(e))
//   .finally(()=> setIsloading(false))
//   }, [])
// return (
//   <div> 
//       <h1>Users</h1>
//       {isloading && <div>Loading...</div>}
//       {users.map((user)=> <div key={user.id}>{user.name} </div> )}
//   </div>
// )
// }