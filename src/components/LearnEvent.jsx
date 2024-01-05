import React from 'react'

function LearnEvent() {
  
  const handleClick = (e) =>{
    e.preventDefault()
    document.getElementById("Click1").innerHTML = "without_argument"
  }


  const handleClick2 = (myid) => {
    document.getElementById("Click2").innerHTML = "with_argument. my id: " + myid;
  }
  


  return (
    <>
    <h3>LearnEvent</h3>

    {/* without argument */}
    <button onClick={handleClick}>Click 1</button>
    <p id="Click1"></p>



    {/* with argument */}
    <button onClick={(e) => handleClick2("12324214")}>Click 2</button>
    <p id="Click2"></p>



    </>
  )
}

export default LearnEvent