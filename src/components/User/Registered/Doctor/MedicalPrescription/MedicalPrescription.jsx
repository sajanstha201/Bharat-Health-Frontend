import React from "react"
import { Link, Outlet } from "react-router-dom"
export default function MedicalPrescription(){
   return(
   <>
   <Link to='new-prescription' className="p-4 border bg-gray-300 rounded-md">New Prescription</Link>
   <h1>this is medical prescription</h1>
   aflkjs
   <Outlet/>
   </>)
}