import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { readAllLeads } from '../service/LeadService';
export default function ReadAll(){
const [leads, setLeads] = useState([]);
const [searchBy, setSearchBy] = useState("name"); 
const [filteredLeads, setFilteredLeads] = useState([])
const [nameAscOrder, setNameAscOrder] = useState(true); 
const [mobileNumberAscOrder, setMobileNumberAscOrder] = useState(true); 
const [emailAscOrder, setEmailAscOrder] = useState(true);
const [statusAscOrder, setStatusAscOrder] = useState(true);

useEffect(() =>{
    readAllLeads().then((results) =>{
        setLeads(results.data.leads);
        setFilteredLeads(results.data.leads);
        console.log(results.data.leads);
    }).catch(error =>console.log(error));
},[])

const sortByName = () =>{
    var localLeads = [...filteredLeads];
    if(nameAscOrder)
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead1.name?.localeCompare(lead2.name)));
    }
    else
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead2.name?.localeCompare(lead1.name)));
    }
    setNameAscOrder(!nameAscOrder);
}
const sortByEmail = () =>{
    var localLeads = [...filteredLeads];
    if(emailAscOrder)
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead1.email?.localeCompare(lead2.email)));
    }
    else
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead2.email?.localeCompare(lead1.email)));
    }

setEmailAscOrder(!emailAscOrder);
}
const sortByMobileNumber = () => {
    const localLeads = [...filteredLeads].sort((a, b) =>
        mobileNumberAscOrder
            ? a.mobileNumber - b.mobileNumber
            : b.mobileNumber - a.mobileNumber
    );

    setFilteredLeads(localLeads);
    setMobileNumberAscOrder(!mobileNumberAscOrder);
};



const sortByStatus = () =>{
    var localLeads = [...filteredLeads];
    if(statusAscOrder)
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead1.status?.localeCompare(lead2.status)));
    }
    else
    {
        setFilteredLeads(localLeads.sort((lead1,lead2) =>lead2.status?.localeCompare(lead1.status)));
    }
    setStatusAscOrder(!statusAscOrder);
}
const searchRecords = (text) =>{
    var localLeads = [...leads];
    if(searchBy === "name")
    {
        setFilteredLeads(localLeads.filter((lead) =>
            lead.name?.toLowerCase().includes(text.toLowerCase())));

    }
    else if(searchBy === "mobileNumber")
    {
        setFilteredLeads(localLeads.filter((lead) =>
            lead.mobileNumber?.toString().includes(text)));
    }
    else if(searchBy === "email")
    {
        setFilteredLeads(localLeads.filter((lead) =>
            lead.email?.toLowerCase().includes(text.toLowerCase())));
    }
    else if(searchBy === "status")
    {
        setFilteredLeads(localLeads.filter((lead) =>
        lead.status?.toLowerCase().includes(text.toLowerCase())));
    }





}



    return(
        <>
        Search By : <select onChange={(e) => setSearchBy(e.target.value)}>
             <option value="name">Name</option> 
             <option value="mobileNumber">Mobile Number</option> 
             <option value="email">Email</option> 
             <option value="status">Status</option> 
             </select> 
             
        Search Text: <input type="text" 
        onChange={(e) => searchRecords(e.target.value)}/> 
        <h1>All Leads</h1>
         <table className='table table-bordered table-striped'> 
            <thead>
                 <tr> 
                    <th>SNO</th> 
                    <th><a href="#" onClick={sortByName}>Name</a></th>
                     <th><a href="#" onClick={sortByMobileNumber}>Mobile Number</a></th>
                      <th><a href="#" onClick={sortByEmail}>Email Id</a></th> 
                      <th><a href="#" onClick={sortByStatus}>Status</a></th> 
                      <th>Change Status</th> 
                      </tr> 
                      </thead> 
                      <tbody>
                         {filteredLeads.map((lead, index) => 
                         <tr key={lead.id}> 
                         <td>{index + 1}</td> 
                         <td>{lead.name}</td>
                          <td>{lead.mobileNumber}</td>
                           <td>{lead.email}</td> 
                           <td>{lead.status}</td> 
                           <td> <Link to={`/changeStatus/${lead.id}`}>
        Change Status</Link> </td> 
        </tr>
    ) 
    } </tbody> 
    </table>
        </>
    )
}