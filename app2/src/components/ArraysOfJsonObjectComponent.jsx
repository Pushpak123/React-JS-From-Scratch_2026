const ArraysOfJsonObjectComponent = () =>{
    const persons = [
{
"name": "ramu",
"age": 20
},
{
"name": "ravi",
"age": 21
}
]
    return(
        <h1>
            {persons.map((person) =>
            <div>
                <p>Person Name:{person.name}</p>
                <p>Person Age:{person.age}</p>
            </div>

            )}
        </h1>

    )
}
export default ArraysOfJsonObjectComponent;