import React from 'react'
import { useState } from 'react'


export const LearnUseState=() => {

  const [num, setNum] = useState(5)

  const changeNumber = () => {
    setNum(num+2)
  }

  const [position, setPosition] = useState({x:1, y:2})

  const updatePosition_x = () => {
    setPosition(prevState => (console.log(prevState),{ ...prevState, x: prevState.x + 2 }));
  }
  
  const updatePosition_y = () => {
    setPosition(prevState => (console.log(prevState),{ ...prevState, y: prevState.y + 2 }));
  }
  

  return (
    <>
    <h1>LearnUseState</h1>
    <p>Number: {num}</p>
    <button onClick={changeNumber}>Change Number</button>
    <p>Position X : {position.x} </p>
    <p>Position Y : {position.y } </p>

    <button onClick={updatePosition_x}>updatePosition X</button>
    <button onClick={updatePosition_y}>updatePosition Y</button>
<br />
    -------------------------
    </>
  )
}

export default LearnUseState