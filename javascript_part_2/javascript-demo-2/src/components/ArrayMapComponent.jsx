import {useState} from 'react';
const ArrayMapComponent = () =>{
      const a1 = [1,2,3,4,5];
        const [a2,setA2] = useState([0,2,3,4,5]);
    return(
        <>
        {a1.map((item) =><span key={item}>{item},</span>)}<br/>
        {a1.map((item,index) =><span key={index}>{item},</span>)}<br/>
        {a2.map((item) =><span key={item}>{item},</span>)}<br/>
       {a2.map((item,index) =><span key={index}>{item},</span>)}<br/>
        </>
    )
}
export default ArrayMapComponent;