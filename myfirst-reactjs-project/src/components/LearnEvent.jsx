export const LearnEvent = () => {

    const WithoutARG = (e) => {
        e.preventDefault();
        document.getElementById('wa1').innerHTML="after clicked WithoutARG button";

    }
    
    const WithARG = (arg) => {
        document.getElementById('wa2').innerHTML=arg;

    }

    return (
        <>
        <h1>- Learn Event</h1>

        <button onClick={WithoutARG}>Without Argument</button>
        <p id="wa1"></p>

        <button onClick={()=>WithARG("after clicked WithARG button")}>With Argument</button>
        <p id="wa2"></p>
        </>
    )
}

