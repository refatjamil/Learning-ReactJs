export const LearnLiftingStateUp =(props) => {
    const myClick = (e) => {
        e.preventDefault()
        let data = 'click from lifting state up . jsx'
        props.click(data)
    }

    return(
        <> 
        <h1>Learn Lifitng State Up</h1>
        <button onClick={myClick}>myclick</button>
        ....................
        </>
    )
}