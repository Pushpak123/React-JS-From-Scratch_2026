import {useState} from 'react';
const SignUpFormDemo = () =>{
const [firstName, setFirstName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
 
  const printData = () => { 
    const person = { 
      firstName, 
      email, 
      password 
    } 
    console.log(person); 
  } 
    return(
        <>
          First Name : <input type='text'  
                              value={firstName} 
                              placeholder='Enter your name' 
                              onChange={(e) => setFirstName(e.target.value)} /> 
          <br /> 
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
export default SignUpFormDemo;