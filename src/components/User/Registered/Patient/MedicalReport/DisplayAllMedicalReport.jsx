import React, { useEffect } from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
export default function DisplayAllMedicalReport(){
    const [medicalReport,setMedicalReport]=useState([])
    const navigate=useNavigate()
      const userInfo=useSelector(state=>state.userInfo)
      const baseUrl=useSelector(state=>state.baseUrl).backend
      const fetchMedicalReports=async()=>{
         try{
            const response=await axios.get(baseUrl+'api/patient/medical-report/'+userInfo.id+'/',{headers:{'Authorization':userInfo.token}})
            console.log(response.data)
            setMedicalReport(response.data)
         }
         catch(error){
            toast.error('Not able to fetch Medical Report')
         }
      }
      useEffect(()=>{
         fetchMedicalReports()
      },[userInfo.id])
   return(
    <table className="w-[90%] m-auto">
      <tr className="">
         <td  className="table-data">S.No</td>
         <td className="table-data">Name</td>
         <td className="table-data">Date</td>
         <td className="table-data">Starred</td>
         <td className="table-data">View</td>
      </tr>
      {medicalReport.map((element,index)=>(<tr className="">
         <td  className="table-data">{index+1}</td>
         <td className="table-data">{element.surgery_type}</td>
         <td className="table-data">{element.date}</td>
         <td className="table-data"
            onClick={async()=>{
               const response=await axios.patch(baseUrl+'api/patient/medical-report/'+userInfo.id+'/',{'starred':!element.starred,'prescription_id':element.prescription_id},{headers:{'Authorization':userInfo.token}})
               console.log(response.data)
               fetchMedicalReports()
            }}
         >{element.starred?<FontAwesomeIcon icon={faStar} style={{color:'orange'}}/>:<FontAwesomeIcon icon={faStar} style={{}}/>}</td>
         <td className="table-data hover:scale-110 transition-all duration-200"
            onClick={()=>{
               navigate(`/patient/medical-report/view/?prescription=${encodeURIComponent(JSON.stringify(medicalReport))}`)
            }}
         >
            <FontAwesomeIcon icon={faEye}/>
         </td>
      </tr>))}
    </table>
   )
}