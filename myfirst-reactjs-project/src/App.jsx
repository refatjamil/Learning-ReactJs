import { useState } from 'react'
import { LearnComponents } from './components/LearnComponents'
import { LearnJSX } from './components/LearnJSX'
import { LearnProps } from './components/LearnProps'
import { LearnEvent } from './components/LearnEvent'
function App() {

  return (
    <>
    <LearnComponents/>
    <LearnJSX/>
    <LearnProps name="Refat Jamil" roll={121} />
    <LearnEvent/>
    </>
  )
}

export default App
