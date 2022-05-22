import React, { useState } from 'react'
import RemovePrint from './RemovePrint';
import Todoinput from './Todoinput'
let arr =[]
export default function TodoPrint(props) {
 const {handleDlt,id,title} = props


  return (
    <>
      <div>

        <h3>{props.title}</h3>
        <button onClick={()=>handleDlt(id,props)} >Completed</button>
      </div>
     
    </>
    
  )
}
