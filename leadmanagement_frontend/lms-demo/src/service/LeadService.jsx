import axios from 'axios';
const url = 'http://localhost:8080/api/v1/leads';

export const readAllLeads = () =>axios.get(url);

export const readOneLead = (id) =>axios.get(url + '/' + id);

export const updateLead = (id,lead) =>axios.put(url + '/' + id,lead);

export const createLead = (lead) => axios.post(url,lead);