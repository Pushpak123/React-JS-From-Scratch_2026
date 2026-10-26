import  {useState,useRef,React} from 'react';

const LoginFormComponent = () =>{
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const usernameRef = useRef(null);
const passwordRef = useRef(null);

const validateAndSubmit = () =>{
let localErrors = {};
if(username === ""){
localErrors = {...localErrors, usernameError: "Username is required"}
}
else {
localErrors = {...localErrors, usernameError: ""};
}
if(password === ""){
localErrors = {...localErrors, passwordError: "Password is required"}
}
else{
localErrors = {...localErrors, passwordError: ""}
}
setErrors(localErrors);
if(username === ""){
usernameRef.current.focus();
}
 if(password === ""){
passwordRef.current.focus();
}
if(!localErrors.usernameError && !localErrors.passwordError){
//submit the form//submit the form
alert("Form Submitted Successfully");
}
}
return(
    <>
    Username:
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            ref={usernameRef}/>
            {errors.usernameError &&<span style={{color:"red"}}>{errors.usernameError}</span>} <br />


Password:
            <input type="password"
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}/>

 {errors.passwordError &&<span style={{color:"red"}}>{errors.passwordError}</span>} <br />            <button onClick={validateAndSubmit}>Submit</button><br/>
    </>
)
};


export default LoginFormComponent;