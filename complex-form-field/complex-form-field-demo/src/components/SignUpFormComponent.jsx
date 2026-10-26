import {useState} from 'react';
const SignUpFormComponent = () =>{
    const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState(0);
const [email, setEmail] = useState("");
const [gender, setGender] = useState("");
const [education, setEducation] = useState("");
const [address, setAddress] = useState("");
const [skills, setSkills] = useState("");
const [profilePic, setProfilePic] = useState("");
//reference data
const genders = ["Male", "Female", "Other"];
const educations = ["B.Tech", "M.Tech", "B.Sc", "M.Sc",
"B.A", "M.A", "B.Com", "M.Com", "BBA", "MBA"];
const skillsList = ["Java", "Python", "C++", "C", "C#", 
"JavaScript", "PHP", "Ruby", "Go", "Swift"];



const printData = () => {
const person = {firstName, lastName, age, email,
gender, education, address, skills, profilePic};
console.log(person);
}

const handleSkills = (e) =>{
    const skill = e.target.value
    if(e.target.checked){
        setSkills([...skills,skill]);
    }
    else
    {
        setSkills(skills.filter((item) =>item !== skill));
    }

}

    return(
        <>
        First Name :
<input type="text"
value={firstName}
onChange={(e) => setFirstName(e.target.value)} /><br/>
Last Name :
<input type="text"
value={lastName}
onChange={(e) => setLastName(e.target.value)} /><br/>
Age :
<input type="number"
value={age}
onChange={(e) => setAge(e.target.value)} /><br/>
Email :
<input type="email"
value={email}
onChange={(e) => setEmail(e.target.value)} /><br/>

Gender:
{genders.map(gen =>(<><input type='radio'
   name='gender'
value={gen}
onChange={(e) => setGender(e.target.value)}/> {gen} </>))}<br/>

Education:
<select value={education}
onChange={(e) =>setEducation(e.target.value)}>
    {educations.map(edu =>(<option value={edu}>{edu}</option>))}
</select><br/>

Address :
<textarea value={address}
onChange={(e) => setAddress(e.target.value)} /><br/>

Skills:
{skillsList.map(skill =>(<><input type='checkbox' value={skill} onChange={handleSkills}/>{skill}

</>))}<br/>
Profile Pic :
<input type="file" onChange={(e) => setProfilePic(e.target.value)} /><br/>
<button onClick={printData}>click</button>







        
        </>
    )
}
export default SignUpFormComponent;