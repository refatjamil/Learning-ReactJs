import { LearnComponents } from './components/LearnComponents'
import { LearnJSX } from './components/LearnJSX'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
import { LearnLiftingStateUp } from './components/LearnLiftingStateUp'
import {LearnUseState} from './components/LearnUseState'
import {CountApp} from './components/CountApp'
import { LearnUseEffect } from './components/LearnUseEffect'
import { LearnUseMemo } from './components/LearnUseMemo'

function App() {

  const getData = (data) => {
    console.log(data)
  }
  return (
    <>
    <LearnComponents/>
    <LearnJSX/>
    <LearnProps name="Refat Jamil" roll={121} />
    <LearnEvent/>
    <LearnLiftingStateUp click={getData}/>
    <LearnUseState/>
    <CountApp/>
    <LearnUseEffect/>
    <LearnUseMemo/>

    </>
  )
}

export default App
