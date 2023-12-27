export const LearnEvent = () => {

  {/* Without Argument */}
  const handleClick1 = (e) =>{
      e.preventDefault()
      console.log("Button clicked 1");
  }

    {/* With Argument */}
  const handleClick2 = (myid) =>{
    console.log("Button clicked 2", myid);
  }

  return (
    <>

    {/* Without Argument */}
    <button onClick={handleClick1}>click 1</button>

    {/* With Argument */}
    <button onClick={(e)=>handleClick2("MyID: 1123234")}>click 2</button>

    </>
  )

}

