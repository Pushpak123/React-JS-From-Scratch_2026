import {useState} from 'react';
const ArrayFilterComponenet = () =>{
    const [a2, setA2] = useState([10, 15, 20, 25, 30, 40, 45, 50, 60]);
    return(
        <>
       {a2.map((item,index) =><span key={index}>{item},</span>)}<br/>
       {a2.filter((item)=> item>20)
       .map((item,index)=><span key={index}>{item},</span>)}<br/>
      

      {a2.filter((item) => item%10==0)
      .map((item,index) => <span key={index}>{item},</span>)}<br/>
        </>
    )
}
export default ArrayFilterComponenet;