import React,{useState} from 'react';
import Loader from './Loader';

export default function Navbar() {
    const [state,setstate] = useState(0);
  return (
      
    <div >
     <div id="nav-back">
        <div id="navbar">
          
             Lets be confident
           
        </div>
        <button type="button" id="btn" onClick={()=>{setstate(1)}} >Get Users</button>
      </div>
      
      {state===1?<Loader/>:<div></div>}

    </div>
    
  )
}

