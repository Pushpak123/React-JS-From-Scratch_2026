import {useState} from 'react';
const LoginFormDemo = () =>{
     const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');   
  const printData = () => { 
    const person = {       
 
      email, 
      password 
    } 
    console.log(person); 
  } 
    return(
        <>
         Email : <input type='email' 
                         value={email} 
                         placeholder='Enter your email' 
                         onChange={(e) => setEmail(e.target.value)} /> 
          <br /> 
          Password : <input type='password' 
                            value={password} 
                            placeholder='Enter your password' 
                            onChange={(e) => setPassword(e.target.value)} /> 
           
           <br /> 
          <button onClick={printData}  
                  type='button'>Click me</button> 
        </>
    )
}
export default LoginFormDemo;