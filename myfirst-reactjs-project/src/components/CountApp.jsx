import { useState } from "react"

export const CountApp = () => {

    const [count, setCount] = useState(0)
    
    const countNumber = () => {
        setCount(count + 1)
    }
    
    const reset = () =>{
        setCount(0)
    }

  return (
    <>
        <h1>CountApp</h1>


        <h3>Number: {count} </h3>

        <button onClick={countNumber}>Count</button>
        <button onClick={reset}>Reset</button>
        </>
    )}