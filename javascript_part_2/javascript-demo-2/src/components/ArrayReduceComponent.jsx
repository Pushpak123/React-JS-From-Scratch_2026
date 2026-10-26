import{useState} from 'react';
const ArrayReduceComponent = () =>{
    const [a2, setA2] = useState([10, 15, 20, 25, 30, 40, 45, 50, 60]);
    return(
        <>
     {a2.map((item,index) =><span key={index}>{item},</span>)}<br/>
     sum:{a2.reduce((a,b) => a+b,0)}<br/>
     multiplication:{a2.reduce((a,b) =>a*b,1)}<br/>
     max value:{a2.reduce((a,b) =>a>b ? a:b)}<br/>
     min value:{a2.reduce((a,b) =>a<b ? a:b)}<br/>

        </>
    )
}
export default ArrayReduceComponent;