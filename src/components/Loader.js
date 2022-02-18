import React from 'react'
import Lists from './Lists';

export default function Loader() {
    
    setTimeout(()=>{
        document.getElementById("load").classList.add("hide");
    },4000)

  return (
    <>
    <div>
     {/* <div id="box">
      <div id="load" >
                 
      </div>
    </div> */}
        <Lists/>
    </div>
    
     
    </>
  )
}
