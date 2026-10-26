import axios from 'axios';
import {useState} from 'react';
export default function Test11(){
    const [list,setList] = useState([]);
    const callToApi = () =>{
        axios.get('http://localhost:8080/test/t11')
        .then(response =>response.data)
        .then(data =>{
            setList(data.persons);
        }).catch(error =>console.error(error));
    }
    return(
        <>
       {list.map((item, index) =><h1>{Object.entries(item).map(([key, value]) =><>{key} : {value}, </>)}<hr /></h1>)}
        <button onClick={callToApi}>Get Data</button>
        </>
    )
}