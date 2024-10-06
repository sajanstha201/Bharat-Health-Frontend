import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import Search from "../../../Search/Search"
import { faCar, faClose, faCog, faFileMedical, faUser } from "@fortawesome/free-solid-svg-icons"
import { faAdjust } from "@fortawesome/free-solid-svg-icons/faAdjust"
import TopMedicalReport from "./MedicalReport/TopMedicalReport"
import TodayAppointment from './Appointment/TodayAppointment'
export default function PatientMainPage(){
   const loc=useLocation()
   return(
      <div className="flex flex-row gap-3">
         <div className="w-[20%]">
         <SideBar className="col-start-1"
            navElements={[
               {name:'Patient',url:'/patient',icon:faUser},
               {name:'Appointments', url: '/patient/appointments', icon: faAdjust},
               {name:'Medical Report' ,url:'/patient/medical-report', icon:faFileMedical},
               {name:'Settings',url:'/patient/settings',icon:faCog},
               
            ]}
         />
         </div>
         <div className="w-[80%]">
            <Search></Search>
            {loc.pathname==='/patient'&&
            <>
               <h1>Top Medical Report</h1>
               <TopMedicalReport/>
               <h1>Today Appointment</h1>
               <TodayAppointment/>
            </>}
            <Outlet />
         </div>
      </div>
   )
}