import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import { faAdjust, faBlog, faCar,faClose, faCog, faHeartbeat, faMessage, faPills, faPrescription, faUserDoctor } from "@fortawesome/free-solid-svg-icons"
import Appointment from "./Appointment/Appointment"
import DiseasePredictionModel from "./DiseasePredictionModel/DiseasePredictionModel"
import Message from "./Message/Message"
import Setting from "./Setting/Setting"
import MedicalPrescription from "./MedicalPrescription/MedicalPrescription"
const DoctorCommonDiv=()=>{
    return(
    <div className="flex flex-row gap-3">
        <div className="w-[20%]">
        <SideBar navElements={[
        {name:'Doctor',url:'/doctor',icon:faUserDoctor},
        {name:'Appointment',url:'/doctor/appointment', icon:faAdjust},
        {name:'Medical Prescription',url:'/doctor/prescription',icon:faPills},
        {name:'Disease Prediction Model',url:'/doctor/disease-model', icon:faHeartbeat},
        {name:'Message',url:'/doctor/message', icon:faMessage},
        {name:'Setting',url:'/doctor/setting',icon:faCog}
        // {name:'Blog',url:'/doctor/blog',icon:faBlog}
        ]}/>
        </div>

        <div className="w-[80%]">
        Doctor main page aflljk
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
            <Route path="appointment" element={<Appointment/>}/>
            <Route path="prescription" element={<MedicalPrescription/>}/>
            <Route path="disease-model" element={<DiseasePredictionModel/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="setting" element={<Setting/>}/>
        </Route>
   </Routes>
   </>)
}