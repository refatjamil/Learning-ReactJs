function LearnProps(props) {
  return (
    <>
    <h3>LearnProps</h3>
    <p>My name is {props.name}, my roll is {props.roll}</p>
    <p>-------------------</p>
    </>
  )
}

export default LearnProps


// function LearnProps({name, roll}) {
//     return (
//       <>
//       <h3>LearnProps</h3>
//       <p>My name is {name}, my roll is {roll}</p>
//       </>
//     )
//   }
  
//   export default LearnProps