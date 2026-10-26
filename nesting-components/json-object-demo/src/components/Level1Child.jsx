import Level2Child from "./Level2Child";


const Level1Child = ({obj}) =>{
    return(
        <>
        Level1Child begin <br />
       First Name: { obj.firstName } <br />
        Last Name: { obj.lastName } <br />
        Age: { obj.age } <br />
        Level1Child end <br />
        </>

    )
}
export default Level1Child;