import React, {useState, useEffect } from 'react'
import Message from '../components/utilities/Message'
import { getData, saveData } from '../services/apiServices'

const Requests = () => {

    const [requestData, setRequestData]=useState([])
    const loadRequests=async () => { 
        const res=await getData("userQuery/all-userQuery")

        if(res){
            res.data?.message ?
             setRequestData(res.data.data) && Message.success(res.data.message) :
            Message.error(res.response?.error)
        }
     }

     const updateRequest=async (data, status) => { 
        const res=await saveData(`userQuery/edit-userQuery`, data)
        if(res){
            res.data?.message ?
            Message.success(res.data.message) && loadRequests() :
            Message.error(res.response?.error)
        }
     }

    useEffect(() => {
        loadRequests()
    }, [])
    
  return (
    <div>Requests
            <div>
               <table className=' p-1 border-2 border-blue-800 '>
                <thead className=' p-1 border-2 border-blue-800 '>
                    <tr className='p-1 border-2 border-blue-800 font-bold text-blue-800'>
                        <td  className=' p-1 border-2 border-blue-800 '> Name </td>
                        <td  className=' p-1 border-2 border-blue-800 '> Email </td>
                        <td  className=' p-1 border-2 border-blue-800 '> Phone </td>
                        <td  className=' p-1 border-2 border-blue-800 '> Query </td>
                        <td  className=' p-1 border-2 border-blue-800 '> Action </td>
                    </tr>
                </thead>
                <tbody>
                { requestData.length?
                 requestData.map((e,i)=>{
                     return (
                        <tr className=''>
                            <td  className=' p-1 border-2 border-blue-800 '> {e.name} </td>
                            <td  className=' p-1 border-2 border-blue-800 '> <a href={`mailto: ${e.email}`}> {e.email} </a> </td>
                            <td  className=' p-1 border-2 border-blue-800 '> <a href={`tel: ${e.contact}`}> {e.contact} </a></td>
                            <td  className=' p-1 border-2 border-blue-800 '> {e.query} </td>
                            <td  className=' p-1 border-2 border-blue-800 flex justify-center items-center '> 
                            <button
                                className='bg-blue-600 hover:bg-blue-800 text-sm text-blue-50 px-2 py-1 rounded-3xl  disabled:bg-gray-500 w-32'
                                disabled={e.status==="0" ||e.status==="1"} 
                                onClick={() => { updateRequest({...e, id:e._id,  status:"1"}) }}
                            > {(e.status==="0" ||e.status==="1") ? "Contacted" : "Contact" } </button> </td>
                        </tr>
                )})
                : ""
                 }
                </tbody>
               </table>
            </div>
        
    
    </div>
  )
}

export default Requests