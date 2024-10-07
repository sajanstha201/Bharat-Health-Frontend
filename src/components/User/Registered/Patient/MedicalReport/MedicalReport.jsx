import React, { useState } from "react"
import ImageAdditionContainer from "../../../../Container/ImageAdditionContainer"
import "../Patient.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { Outlet, useLocation ,Link} from "react-router-dom"
import DisplayAllMedicalReport from "./DisplayAllMedicalReport"
export default function MedicalReport(){
   const [img,setImg]=useState([])
   const [section,setSection]=useState('')
   const loc=useLocation()
   const [medicalRecord,setMedicalRecord]=useState([{name:'kidney stone record',date:'22 septemeber, 2024',status:'pending'},
      {name:'liver stone record',date:'22 septemeber, 2024',status:'success'},
      {name:'teeth braces',date:'22 septemeber, 2024',status:'success'}])          
   return(
   <>
      <div className="flex flex-row justify-between cursor-pointer">
         {section!==''&&<div onClick={()=>setSection('')} className="border p-4 bg-gray-300 rounded-md m-4 hover:bg-gray-400">All Medical Report</div> }
         {section!=='addition'&&<div onClick={()=>setSection('addition')} className="border p-4 bg-gray-300 rounded-md m-4 hover:bg-gray-400">Add Old Medical Report</div>}
      </div>
      <div>
         {section===""&&<DisplayAllMedicalReport/>}
         {section==="addition"&&<ImageAdditionContainer uniqueName={'patient'} image={img} setImage={setImg} />}
      </div>
   </>)
}