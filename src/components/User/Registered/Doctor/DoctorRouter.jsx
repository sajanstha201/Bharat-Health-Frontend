import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import { faCar,faClose } from "@fortawesome/free-solid-svg-icons"
const DoctorCommonDiv=()=>{
    return(
    <div className="flex flex-row gap-3">
        <div className="w-[20%]">
        <SideBar navElements={[
        {name:'first component',url:'/user/first', icon:faCar},
        {name:'second component',url:'/user/second', icon:faClose},
        {name:'second component',url:'/user/second', icon:faClose}
        ]}/>
        </div>
        <div className="w-[80%]">
        Doctor main page
        <Outlet/>
        </div>
     </div>
    )
}
export default function DoctorRouter(){
   return(
   <>
   <Routes>
        <Route path="" element={<DoctorCommonDiv/>}>
            
        </Route>
   </Routes>
   </>)
}