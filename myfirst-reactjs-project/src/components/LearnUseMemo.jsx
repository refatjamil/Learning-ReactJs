import { useMemo, useState } from "react"
  
export const LearnUseMemo = () => {

    const [count, setCount] = useState(0)
    const countNumber = () => {
        console.log('increase count number')
        setCount(count + 1)
        // setCount(prevcount => prevcount + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        console.log('generate random number')
        const newRandomNumber = Math.floor(Math.random() * 100) + 1
        setRandomNumber(newRandomNumber)
    }


  return (
    <>
        <h1>- LearnUseMemo</h1>
        <h2>Count</h2>

        <h3>Number: {count} </h3>

        <button onClick={countNumber}>Count</button>

        <br />_________________________________

        <h2>Random Number</h2>

        <h3>Number: {randomNumber} </h3>

        <button onClick={generateRandomNumber}>Generate Random Number</button>
        
        </>
    )}