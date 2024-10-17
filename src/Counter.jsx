import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)

    const handleAdd=()=>{
        const NewCount=count+1;
        setCount(NewCount);
    }
    const handleReduce=()=>{
        const NewCount=count-1;
        setCount(NewCount);
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}