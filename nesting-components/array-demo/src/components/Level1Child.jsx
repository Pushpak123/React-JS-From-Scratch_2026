import Level2Child from "./Level2Child";


const Level1Child = ({allNames}) =>{
    return(
        <>
        Level1Child begin <br />
       Names:{allNames.join(',')}<br/>
        Level1Child end <br />
        </>

    )
}
export default Level1Child;