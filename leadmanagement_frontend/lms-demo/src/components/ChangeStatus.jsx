import {useState,useEffect} from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import { readOneLead, updateLead } from '../service/LeadService';
export default function ChangeStatus(){
    const {id} = useParams(); 
    const navigate = useNavigate(); 
    const [lead, setLead] = useState(
        { 
            name:"", 
            mobileNumber:"",
             email:"", 
             status:"", 
             interactions:[] 
            });
            const [newInteraction, setNewInteraction] = useState(
                { 
                    date:"", 
                    message:"" 

                })

        useEffect(() => {
                readOneLead(id)
                    .then((results) => {
                        setLead({
                            ...results.data,
                            interactions: results.data.interactions || []
                        });
                    })
                    .catch(error => console.error(error));
            }, [id])

        const handleSubmit = (e) => {
                e.preventDefault();

                const updatedLead = {
                    ...lead,
                    id: id
                };

                updateLead(id, updatedLead)
                    .then((results) => {
                        console.log(results.data);
                        navigate("/readAll");
                    })
                    .catch(error => console.error(error));
                }

               const addNewInteraction = (e) => {
                    e.preventDefault();

                    setLead({
                        ...lead,
                        interactions: [
                            ...(lead.interactions || []),
                            newInteraction
                        ]
                    });

                    setNewInteraction({
                        date: "",
                        message: ""
                    });
                };

    return(
        <>
        <h1>Change Status</h1>
         Name: {lead.name}<br/> 
         Mobile Number: {lead.mobileNumber}<br/> 
         Email Id: {lead.email}<br/> 
        {lead.interactions?.length != 0 && 
        <h1>All Interactions</h1> &&
         <table className=' table table-bordered table-striped'>
             <thead>
             <tr> 
                <th>SNO</th> 
                <th>Interaction Date</th>
                 <th>Interaction Desc</th>
                  </tr>
                   </thead> 
                   <tbody> 
                    {
                    lead.interactions.map((interaction, index) => 
                    <tr key={index}>
                         <td>{index+1}</td>
                          <td>{interaction.date}</td> 
                          <td>{interaction.message}</td> 
                          </tr>)} 
                          </tbody> 
                          </table> } 
                          <h4>Add New Interaction Message</h4> 
                          Interaction Date: <input type="date" value={newInteraction.date} onChange={(e)=>setNewInteraction({...newInteraction, date: e.target.value})} /><br /> 
                          Interaction Desc: <input type="text" value={newInteraction.message} onChange={(e)=>setNewInteraction({...newInteraction, message: e.target.value})} /><br /> 
                          <button onClick={addNewInteraction} type='button'>Add Interaction</button><br /> 
                          Status: <select value={lead.status} 
                          onChange={(e)=>setLead({...lead, status: e.target.value})}> 
                          <option value="new">New</option> 
                          <option value="processing">Processing</option>
                           <option value="closed">Closed</option> 
                           <option value="rejected">Rejected</option> 
                           </select> <br /> 
                           <button onClick={handleSubmit} type='button'>Update</button> <br /> 
                         <Link to='/readAll'>Back to All Leads</Link>
        </>
    )
}