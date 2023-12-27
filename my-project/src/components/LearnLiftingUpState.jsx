
export const LearnLiftingUpState = (props) => {

    const clickHandaller = (e) => {
        e.preventDefault()
        let data = 'I am a child data'
        props.getChildData(data)
    }
  return (
    <>

    <h2>LearnLiftingUpState</h2>
    <button onClick={clickHandaller}>click</button>
    </>
  )
}
