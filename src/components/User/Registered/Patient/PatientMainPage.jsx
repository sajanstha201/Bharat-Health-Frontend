import React from "react"
import { Outlet, useLocation } from "react-router-dom"

import Search from "../../../Search/Search"
export default function PatientMainPage(){
   const loc=useLocation()
   return(
      <div style={{fontFamily: 'miriam-libre'}} className="flex flex-row gap-3">
         <div className="w-[80%]">
            patient main 
            <div>Today Appointment</div>
            <div>Stared Medical Report</div>
            <div>Starred Test Record</div>
            <Outlet />
         </div>
      </div>
   )
}