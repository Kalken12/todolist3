import React, { useState } from 'react'
import TodoPrint from './TodoPrint'
import RemovePrint from './RemovePrint'
let arrRemoved = []
let data1=[]
export default function Todoinput() {

    const [task, setTask] = useState("")
    const [data, setdata] = useState([])


    const handleChange = (el) => {

        setTask(el.target.value)
    }
    const handleClick = () => {
        let obj = { title: task, id: Date.now(), status: false }
         setdata([obj, ...data])
        console.log("data",data)
    }

    const handleDlt = (id, props) => {
        // const dif1 = newarr.diff(data)
        arrRemoved.push(props)
        // console.log("dif", arrRemoved);
        let newarr = data.filter((item) => item.id !== id);
        
        setdata(newarr)


    }
    const addtoAgain =(id,element)=>{
       
       data.push(element)
      

       let updatedArr = data1.filter((item) => item.id == id);
       console.log("kk",updatedArr)
       setdata(updatedArr )
    //     data1 = data
    //    console.log('data1:', data1)
    
       
       
      }




    return (
        <>
            <div>
                <input value={task} type="text" onChange={handleChange} placeholder='Add to do' />
                <button onClick={handleClick} >Add</button>
            </div>

            {data.map((el) => {

                return <TodoPrint key={el.id}{...el} handleDlt={handleDlt} />
            })}

            { arrRemoved.map((el) => {
                    return <RemovePrint key={el.id}{...el} addtoAgain={addtoAgain} />
                })}
           




        </>


    )
}
