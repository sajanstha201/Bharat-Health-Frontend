import React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
export default function DisplayAllMedicalReport(){
    const [medicalRecord,setMedicalRecord]=useState([{name:'kidney stone record',date:'22 septemeber, 2024',status:'pending'},
        {name:'liver stone record',date:'22 septemeber, 2024',status:'success'},
        {name:'teeth braces',date:'22 septemeber, 2024',status:'success'}])
   return(
    <table className="w-[90%] m-auto">
      <tr className="">
         <td  className="table-data">S.No</td>
         <td className="table-data">Name</td>
         <td className="table-data">Date</td>
         <td className="table-data">Stauts</td>
         <td className="table-data">View</td>
      </tr>
      {medicalRecord.map((element,index)=>(<tr className="">
         <td  className="table-data">{index+1}</td>
         <td className="table-data">{element.name}</td>
         <td className="table-data">{element.date}</td>
         <td  className={`${element.status==='success'?'text-green-500':'text-red-500'} table-data `}>{element.status}</td>
         <td className="table-data hover:scale-110 transition-all duration-200"><FontAwesomeIcon icon={faEye}/></td>
      </tr>))}
    </table>
   )
}