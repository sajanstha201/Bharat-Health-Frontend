import React from "react"
import { Outlet, useLocation } from "react-router-dom"

import Search from "../../../Search/Search"
import { useSelector } from "react-redux"
export default function PatientMainPage(){
   const loc=useLocation()
   const userInfo=useSelector(state=>state.userInfo)
   return(
      <div style={{fontFamily: 'miriam-libre'}} className="flex flex-row gap-3">
         <div className="w-[80%]">
            patient main 
            <div>Today Appointment</div>
            <div>Stared Medical Report</div>
            <div>Starred Test Record</div>
            <div onClick={()=>{console.log(userInfo)}}>click to dispaly teh user information</div>
            <Outlet />
         </div>
      </div>
   )
}