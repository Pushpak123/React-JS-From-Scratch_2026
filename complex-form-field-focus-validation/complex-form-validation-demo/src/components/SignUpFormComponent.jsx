import { useState, useRef } from 'react';
import React from 'react';

const SignUpFormComponent = () => {

const [firstName, setFirstName] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [gender, setGender] = useState("");
const [education, setEducation] = useState("");
const [email,setEmail]  = useState('');
const [doj,setDoj] = useState('');
const [dob,setDob] = useState('');
const [resume, setResume] = useState("");
const [selectedSkills, setSelectedSkills] = useState([]);
const [errors, setErrors] = useState({});

const firstNameRef = useRef();
const usernameRef = useRef();
const passwordRef = useRef();
const genderRef = useRef();
const educationRef = useRef();
const skillsRef = useRef();
const emailRef = useRef();
const dojRef = useRef();
const dobRef = useRef();
const resumeRef = useRef();



// reference data
const genders = ["Male", "Female", "Other"];

const educations = [
    "10th",
    "12th",
    "Graduate",
    "Post Graduate"
];

const skills = [
    "Java",
    "React",
    "Angular",
    "Spring",
    "Hibernate",
    "Python",
    "Javascript",
    "NodeJS",
    "Django",
    "Ruby"
];

const handleSkillChange = (e) => {

    if (e.target.checked) {
        setSelectedSkills([
            ...selectedSkills,
            e.target.value
        ]);
    }
    else {
        setSelectedSkills(
            selectedSkills.filter(
                skill => skill !== e.target.value
            )
        );
    }
}

const validateAndSubmit = () => {

    let localErrors = {};

    if (firstName === "") {
        localErrors = {
            ...localErrors,
            firstNameError: 'first name is required'
        };
    }
    else {
        localErrors = {
            ...localErrors,
            firstNameError: ''
        };
    }

    if (username === "") {
        localErrors = {
            ...localErrors,
            usernameError: "Username is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            usernameError: ""
        };
    }

    if (password === "") {
        localErrors = {
            ...localErrors,
            passwordError: "Password is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            passwordError: ""
        };
    }
   if (email === "") {
    localErrors = {
        ...localErrors,
        emailError: "Email is required"
    };
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    localErrors = {
        ...localErrors,
        emailError: "Please enter a valid email"
    };
}
else {
    localErrors = {
        ...localErrors,
        emailError: ""
    };
}

if (resume === "") {
        localErrors = {
            ...localErrors,
            resumeError: "doj is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            resumeError: ""
        };
    }


if (doj === "") {
        localErrors = {
            ...localErrors,
            dojError: "doj is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            dojError: ""
        };
    }
    if (dob === "") {
        localErrors = {
            ...localErrors,
            dobError: "dob is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            dobError: ""
        };
    }

    if (gender === "") {
        localErrors = {
            ...localErrors,
            genderError: "Gender is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            genderError: ""
        };
    }

    if (education === "") {
        localErrors = {
            ...localErrors,
            educationError: "Education is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            educationError: ""
        };
    }

    if (selectedSkills.length === 0) {
        localErrors = {
            ...localErrors,
            skillsError: "Atleast one skill is required"
        };
    }
    else {
        localErrors = {
            ...localErrors,
            skillsError: ""
        };
    }

    setErrors(localErrors);

    if (firstName === "") {
        firstNameRef.current.focus();
    }
    else if (username === "") {
        usernameRef.current.focus();
    }
    else if (password === "") {
        passwordRef.current.focus();
    }
    else if (gender === "") {
        genderRef.current.focus();
    }
    else if (education === "") {
        educationRef.current.focus();
    }
    else if(dob === "")
    {
        dobRef.current.focus();
    }
    else if(doj === "")
    {
        dojRef.current.focus();
    }
    else if(email === "")
    {
        emailRef.current.focus();
    }
    else if(resume === "")
    {
        resumeRef.current.focus();
    }
    else if (selectedSkills.length === 0) {
        skillsRef.current.focus();
    }
    else if (
        !localErrors.firstNameError &&
        !localErrors.usernameError &&
        !localErrors.passwordError &&
        !localErrors.dobError &&
        !localErrors.dojError &&
        !localErrors.emailError &&
        !localErrors.resumeError
    ) {
        // submit the form
        alert("Form Submitted Successfully");
    }
} // <-- validateAndSubmit ENDS HERE


// IMPORTANT:
// return is outside validateAndSubmit

return (
    <>
        First Name:
        <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={firstNameRef}
        />

        {errors.firstNameError && (
            <span style={{ color: "red" }}>
                {errors.firstNameError}
            </span>
        )}

        <br />

        Username:
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
        />

        {errors.usernameError && (
            <span style={{ color: "red" }}>
                {errors.usernameError}
            </span>
        )}

        <br />

        Password:
        <input
            type="password"
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
        />

        {errors.passwordError && (
            <span style={{ color: "red" }}>
                {errors.passwordError}
            </span>
        )}

        <br />

        Gender:

        {genders.map((gen) => (
            <React.Fragment key={gen}>
                <input
                    type="radio"
                    value={gen}
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    ref={genderRef}
                />

                {gen} &nbsp;&nbsp;
            </React.Fragment>
        ))}

        {errors.genderError && (
            <span style={{ color: "red" }}>
                {errors.genderError}
            </span>
        )}

        <br />

        Education:

        <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            ref={educationRef}
        >

            <option value="">
                Select Education
            </option>

            {educations.map((edu) => (
                <option key={edu} value={edu}>
                    {edu}
                </option>
            ))}

        </select>

        {errors.educationError && (
            <span style={{ color: "red" }}>
                {errors.educationError}
            </span>
        )}

        <br />

        Skills:

        {skills.map((skill) => (
            <React.Fragment key={skill}>

                <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    ref={skillsRef}
                    onChange={handleSkillChange}
                />

                <label htmlFor={skill}>
                    {skill}
                </label>

                &nbsp;&nbsp;

            </React.Fragment>
        ))}

        {errors.skillsError && (
            <span style={{ color: "red" }}>
                {errors.skillsError}
            </span>
        )}

        <br />
        DOJ:
         <input type="date" value={doj} ref={dojRef} onChange={(e)=>setDoj(e.target.value)}/>

  {errors.dojError && (
            <span style={{ color: "red" }}>
                {errors.dojError}
            </span>
        )}
        <br/>

DOB: <input type="datetime-local" value={dob} ref={dobRef} onChange={(e)=>setDob(e.target.value)}/>
 {errors.dobError && (
            <span style={{ color: "red" }}>
                {errors.dobError}
            </span>
        )}
        <br/>

        Email: <input type="email" value={email} ref={emailRef} onChange={(e)=>setEmail(e.target.value)}/>
 {errors.emailError && (
            <span style={{ color: "red" }}>
                {errors.emailError}
            </span>
        )}
        <br/>

        Resume:
<input type='file'  ref={resumeRef} onChange={(e)=>setResume(e.target.files[0])}/>

{errors.resumeError && (
            <span style={{ color: "red" }}>
                {errors.resumeError}
            </span>
        )}
        <br/>

        <button onClick={validateAndSubmit}>
            Submit
        </button>

    </>
);

}

export default SignUpFormComponent;
