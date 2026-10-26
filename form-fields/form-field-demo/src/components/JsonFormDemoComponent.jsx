import {useState} from 'react';
const JsonFormDemoComponent = () =>{
    const [firstName,setFirstName] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
    const [education,setEducation] = useState('');

    const printData = () =>{
         const person = { 
      firstName, 
      password, 
      address, 
      education 
    } 
    console.log(person);
    }

    return(
        <>
        First Name:<input type='firstName'
        value={firstName}
        name='firstName'
        placeholder='first name'
        onChange={(e) =>setFirstName(e.target.value)}
        /><br/>
        Password:<input type='password'
        name='password'
        placeholder='password'
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        /><br/>
        Address<textarea value={address}
        placeholder='enter address'
        onChange={(e) =>setAddress(e.target.value)}
        /><br/>
        Education:<select value={education}
            onChange={(e) =>setEducation(e.target.value)}>
            <option value=''>Select</option>
            <option value='BE'>BE</option>
            <option value='MSC'>MSC</option>
            <option value='MCA'>MCA</option>
            <option value='ME'>ME</option>
        </select>
        <br/>
        <button onClick={printData}>Click Me</button>


        </>
    )
}
export default JsonFormDemoComponent;