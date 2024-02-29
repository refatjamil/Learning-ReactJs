import React from 'react'
import { useState } from 'react'


export const LearnUseState=() => {

  const [num, func] = useState(5)

  const changeNumber = () => {
    func(9)
  }

  return (
    <>
    <h1>LearnUseState</h1>
    <p>Number: {num}</p>
    <button onClick={changeNumber}>Change Number</button>


    </>
  )
}

export default LearnUseState