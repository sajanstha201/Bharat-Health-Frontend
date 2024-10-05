import React from "react"
import { Outlet } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import Search from "../../../Search/Search"
import { faCar, faClose } from "@fortawesome/free-solid-svg-icons"
import { faAdjust } from "@fortawesome/free-solid-svg-icons/faAdjust"
export default function PatientMainPage(){
   return(
      <div className="flex flex-col gap-3">
         <SideBar className="col-start-1"
            navElements={[
               {name:'first component',url:'/user/first', icon:faCar},
               {name:'second component',url:'/user/second', icon:faClose},
               {name:'Appointments', url: '/patient/appointments', icon: faAdjust}
            ]}
         />
         <Search></Search>
         <Outlet />
      </div>
   )
}