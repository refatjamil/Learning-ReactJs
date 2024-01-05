
function LearnJSX() {
  let model = "G21343242"
  return (
    <>
  {/*React.createElement("p", "null", "LearnJSX")*/}
    <h3>LearnJSX</h3>

    {/*JS expression in jsx*/}
    <p>10 + 5 = {10 + 5}</p>
    <p>Car Model: {model}</p>
    <p className="bg-primary">bg-primary</p>
    <p className={model}>model</p>

    <p>--------------------------</p>

    </>
  )
}

export default LearnJSX