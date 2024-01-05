import { LearnComponent } from "./components/LearnComponent"
import LearnEvent from "./components/LearnEvent"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"

function App() {
let props_roll = 124

  return (
    <>
    <LearnComponent/>
    <LearnJSX/>
    <LearnProps name="Refat" roll={props_roll}/>
    <LearnEvent/>

    </>
  )
}

export default App
