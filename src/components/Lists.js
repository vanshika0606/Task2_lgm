import React, { useEffect, useState } from 'react'

export default function Lists() {
  
  

   const [fetchD,setfetchD]=useState([]);
   useEffect(()=>{
     const url="https://reqres.in/api/users?page=1";
     const fetchData = async ()=>{
      
         const res= await fetch(url);
         const json= await res.json();
        setfetchD(json.data);

      
     };
     setTimeout( ()=>{
      fetchData();
      },4000);
     
     
   },[]);
   
   

  return (
    <>
    <div id="table"  >
     {fetchD.map((user)=>{
       return <div className='boxx' >
       <div id="image">
         <img src={user.avatar} ></img>
       </div>
        
         <p>
          {user.first_name} {user.last_name}
         </p>
         <p>
         {user.email}
         </p>
      
     </div>
     })

     }
      
      
      
    </div>
    </>
  )
}
