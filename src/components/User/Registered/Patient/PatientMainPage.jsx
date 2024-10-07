import React from "react"
import { Outlet, useLocation } from "react-router-dom"

import Search from "../../../Search/Search"

import TodayAppointment from './Appointment/TodayAppointment'
export default function PatientMainPage(){
   const loc=useLocation()
   return(
      <div className="flex flex-row gap-3">
         <div className="w-[80%]">
            {loc.pathname==='/patient'&&
            <>
               <h1>Today Appointment</h1>
               <TodayAppointment/>
            </>}
            <Outlet />
         </div>
      </div>
   )
}