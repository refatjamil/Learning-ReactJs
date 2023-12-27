// import { LearnComponent } from "./components/learnComponemt"
// import { LearnJSX } from "./components/learnJSX"
// import { LearnEvent } from "./components/LearnEvent"
// import { LearnProps } from "./components/learnprops"

import { LearnLiftingUpState } from "./components/LearnLiftingUpState"

function App() {
  // let roll = 10

  const getChildData = (Data) =>{
    console.log(Data);
  } 
  return (
    <>
    {/* 
    
    <LearnComponent/>
    <LearnJSX/> 
    <LearnProps name="Refat Jamil" roll={roll}/>
    <LearnEvent/>
    
    */}

  <LearnLiftingUpState getChildDataMyClick={getChildData}/>

    </>
  )
}

export default App
