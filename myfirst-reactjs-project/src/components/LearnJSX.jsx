export const LearnJSX = () => {

    let a = 10;
    let b = 20;

    return(
        <>
        {/* React.createElement("h1", "null", "Learn JSX") */}
        <h1>Learn JSX</h1>


        {/* React.createElement("p", "null", "Learn JSX 1") */}
        <p>Learn JSX 1</p>

        {/* React.createElement("p", "null", "Learn JSX 2") */}
        <p>Learn JSX 2</p>

        {/* JavaScript  Expression in JSX */}
        <p>Price: {a + b}</p>

        {/* Attribute in JSX */}
        <p className="bg-primary">Learn JSX - Attribute in JSX3</p>
        </>
    )
}