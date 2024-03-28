import React from 'react'
import { useCallback, useState } from 'react'
import { GenarateRamdmNumber } from './GenarateRamdmNumber'

export const LearnUseCallback = () => {

  const [count, setCount] = useState(0)
  const handelIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = useCallback(() =>{
    const newRandomNumber = Math.floor(Math.random() * 100) + 1
    setRandomNumber(newRandomNumber)
  }, [randomNumber])

  return (
    <>    
    <h1>LearnUseCallback</h1>


    <GenarateRamdmNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber} />

    <h1>count: {count}</h1>
    <button onClick={handelIncreaseCount}>Increase Count</button>
    
    </>
  )
}
