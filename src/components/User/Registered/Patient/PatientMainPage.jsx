import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import Search from "../../../Search/Search"
import { faCar, faClose } from "@fortawesome/free-solid-svg-icons"
import { faAdjust } from "@fortawesome/free-solid-svg-icons/faAdjust"
export default function PatientMainPage(){
   return(
      <div className="flex flex-row gap-3">
         <div className="w-[20%]">
         <SideBar className="col-start-1"
            navElements={[
               {name:'first component',url:'/user/first', icon:faCar},
               {name:'second component',url:'/user/second', icon:faClose},
               {name:'Appointments', url: '/patient/appointments', icon: faAdjust}
            ]}
         />
         </div>
         <div className="w-[80%]">
            <Search></Search>
            <Outlet />
         </div>
      </div>
   )
}