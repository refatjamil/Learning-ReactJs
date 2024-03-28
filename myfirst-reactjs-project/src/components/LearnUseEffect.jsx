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
// Example 1- It runs each time when component is mounted and re-render
     
        // useEffect(()=>{
        //     console.log("useEffact called");
        // })

// Example 2- It runs once time when component is mounted ([]) means no dependecies
  
        // useEffect(()=>{
        //     console.log("useEffact called")
        // }, [])


// Example 3- It runs once time when component is mounted and whenever dependence changes
    
    // useEffect(()=>{
    //     console.log("useEffact called")
    // }, [count])

/* Example 4- The cleanup function (the function you return from useEffect)
    run when the component unmount or when the dependencies in the dependecncy array change.
    Since count is in the dependency array, whenever count changes, the cleanup
function is called before the new effect runs */

    // useEffect(()=>{
    //     console.log("useEffact called")
    //     return () => {
    //         console.log('component will unmount')
    //     }
        
    // }, [count])

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