import axios from "axios";

const baseUrl="http://localhost:3001"

export const addContactApi=async (data)=>{
    return await axios.post(`${baseUrl}/contact`,data)
}

export const getContactApi = async()=>{
    return await axios.get(`${baseUrl}/contact`)
}
export  const deleteContactApi = async(id)=>{
    return await axios.delete(`${baseUrl}/contact/${id}`)
}
export const editContactApi = async (id, data) => {
    return await axios.put(`${baseUrl}/contact/${id}`, data);
}