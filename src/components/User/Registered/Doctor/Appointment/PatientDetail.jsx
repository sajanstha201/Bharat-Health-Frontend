import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function PatientDetail(){
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const userInfo=useSelector(state=>state.userInfo)
    const loc=useLocation()
    const navigate=useNavigate()
    const params=new URLSearchParams(loc.search)
    const patientId=decodeURIComponent(params.get('patient_id'))
    const appointmentDetail=JSON.parse(decodeURIComponent(params.get('appointment_detail')))
    const [patientInfo,setPatientInfo]=useState({})
    const [medicalReport,setMedicalReport]=useState([])
    const fetchPatientDetail=async ()=>{
        try{
            const response=await axios.get(baseUrl+'api/doctor/view-patients/'+patientId+'/',{headers:{'Authorization':userInfo.token}})
            setPatientInfo(response.data[0])
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
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Details</h2>

        {/* First Row: First Name, Last Name, Middle Name */}
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <p className="text-gray-900">{patientInfo.first_name || 'N/A'}</p>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <p className="text-gray-900">{patientInfo.last_name || 'N/A'}</p>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name:</label>
            <p className="text-gray-900">{patientInfo.middle_name || 'N/A'}</p>
            </div>
        </div>

        {/* Second Row: Gmail, Phone Number */}
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Gmail:</label>
            <p className="text-gray-900">{patientInfo.gmail}</p>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <p className="text-gray-900">{patientInfo.phone_no}</p>
            </div>
        </div>

        {/* Third Row: DOB, Age, Sex */}
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth (DOB):</label>
            <p className="text-gray-900">{patientInfo.dob}</p>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Age:</label>
            <p className="text-gray-900">{patientInfo.age}</p>
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Sex:</label>
            <p className="text-gray-900">{patientInfo.sex}</p>
            </div>
        </div>
        </div>


    <h1>Medical Report</h1>
    {medicalReport.map((e,i)=>(
        <div className="flex m-4 px-5 border items-center justify-center" >
            <div className="m-2">
            {e.prescription_id}
            </div>
            
            <FontAwesomeIcon icon={faEye}
            onClick={()=>{
                navigate(`/doctor/appointment/view-report/?prescription=${encodeURIComponent(JSON.stringify(e))}`)
            }}
            />
        </div>
    ))}

   </>)
}