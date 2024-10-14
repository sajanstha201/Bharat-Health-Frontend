import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
export default function PatientDetail(){
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const userInfo=useSelector(state=>state.userInfo)
    const loc=useLocation()
    const params=new URLSearchParams(loc.search)
    const patientId=params.get('patient_id')
    const appointmentDetail=JSON.parse(params.get('appointment_detail'))
    const [patientInfo,setPatientInfo]=useState({})
    const [medicalReport,setMedicalReport]=useState({})
    const fetchPatientDetail=async ()=>{
        try{
            const response=await axios.get(baseUrl+'api/doctor/view-patients/'+patientId+'/',{headers:{'Authorization':userInfo.token}})
            setPatientInfo(response.data)
            console.log(response.data)
        }
        catch(error){
            toast.error(error)
        }
    }
    const fetchPatientMedicalReport=async()=>{
        try{
            const response=await axios.get(`${baseUrl}api/doctor/medical-report/${userInfo.id}/?patient_id=${patientId}`,{headers:{'Authorization':userInfo.token}})
            setMedicalReport(response.data)

            console.log(response.data)
            
        }
        catch(error){
            console.log(error.response.data)
            toast.error(error.response.data.detail)
        }
    }

    useEffect(()=>{
        fetchPatientDetail()
        fetchPatientMedicalReport()
    },[patientId])
   return(
   <>
   this is pateinet detail infro
   </>)
}