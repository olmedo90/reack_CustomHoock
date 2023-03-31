import React, { useEffect, useState } from 'react'

const useCounter = ()=>{
    const [count, setCount]= useState(0)

    const increment = ()=>{setCount(count+1)}
    const decrement = ()=>{setCount(count-1)}

    return {
        increment,decrement,count
    }
}

const ComponetDev2 = () => {
    const {increment, decrement, count} = useCounter()
    
    useEffect(()=>{
        setTimeout(()=>{
            increment();
        },1000)
    },[count])
    
  return (
    // const {increment, decrement} = useCounter()
    <div>
        <h2>Increment and Decrement</h2>
        <h4>{count}</h4>

        <button onClick={()=>{increment()}}>Incrementar</button>
        <button onClick={()=>{decrement()}}>decrementar</button>

    </div>
  )
}

export default ComponetDev2