import { useEffect, useState } from "react"
  
export const LearnUseEffect = () => {

    const [count, setCount] = useState(0)
    const countNumber = () => {
        setCount(count + 1)
        // setCount(prevcount => prevcount + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1
        setRandomNumber(newRandomNumber)
    }

    // useEffect(()=>{
    //     console.log("useEffact called")
    // }, [])

    // useEffect(()=>{
    //     console.log("useEffact called")
    // }, [count])

    useEffect(()=>{
        console.log("useEffact called")
        return () => {
            console.log('component will unmount')
        }
        
    }, [count])

  return (
    <>
        <h1>- LearnUseEffect</h1>
        <h2>Count</h2>

        <h3>Number: {count} </h3>

        <button onClick={countNumber}>Count</button>

        <br />_________________________________

        <h2>Random Number</h2>

        <h3>Number: {randomNumber} </h3>

        <button onClick={generateRandomNumber}>Generate Random Number</button>
        
        </>
    )}