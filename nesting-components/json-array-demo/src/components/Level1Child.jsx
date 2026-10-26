import Level2Child from "./Level2Child";


const Level1Child = ({data}) =>{
    return(
        <>
        Level1Child begin <br />
        {data.map(obj =><>
        firstName:{obj.firstName}<br/>
        lastName:{obj.lastName}<br/>
        age:{obj.age}<br/><hr/></>)}

        Level1Child end <br />
        </>

    )
}
export default Level1Child;