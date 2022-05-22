import React from 'react';
import TodoPrint from './TodoPrint';
import Todoinput from './Todoinput';




export default function RemovePrint(element) {

  const {addtoAgain,id,title} = element;
 




  return (
    <div>
       <strike>{element.title}</strike>
       <button onClick={()=>addtoAgain(id,element)}>AddAgain</button>
       
   <br/>
    </div>
  
  )
}
