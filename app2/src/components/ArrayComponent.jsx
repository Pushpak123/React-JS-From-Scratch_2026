const ArrayComponent = () =>{
    const marks = [100, 98, 57, 89, 80];
    return(
        <h1>
            Marks:{marks}<br/>
            Marks:{marks.join(",")}
        </h1>
    )
}
export default ArrayComponent;