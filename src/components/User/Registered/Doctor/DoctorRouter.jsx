import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import SideBar from "../../../SideBar/SideBar"
import { faAdjust, faBlog, faCar,faClose, faCog, faHeartbeat, faMessage, faPills, faPrescription, faUserDoctor } from "@fortawesome/free-solid-svg-icons"
import Appointment from "./Appointment/Appointment"
import DiseasePredictionModel from "./DiseasePredictionModel/DiseasePredictionModel"
import Message from "./Message/Message"
import { AccountSecurity, AppointmentPreference, ClinicSettings, PaymentAndBilling, ProfileManagement, Setting } from "./Setting"
import AppointmentDetails from "./Appointment/AppointmentDetails"
import UpcommingAppointment from "./Appointment/UpcommingAppointment"
import CompletedAppointment from "./Appointment/CompletedAppointment"
import {MedicalPrescription, NewPrescription, OldPrescription } from "./MedicalPrescription"
import DoctorMainPage from "./DoctorMainPage"
const DoctorCommonDiv=()=>{
    return(
    <div className="flex flex-row gap-3">
        <div className="w-[20%]">
        <SideBar navElements={[
        {name:'Doctor',url:'/doctor',icon:faUserDoctor},
        {name:'My Appointment',url:'/doctor/appointment', icon:faAdjust},
        {name:'Medical Prescription',url:'/doctor/prescription',icon:faPills},
        {name:'Disease Prediction Model',url:'/doctor/disease-model', icon:faHeartbeat},
        {name:'Message',url:'/doctor/message', icon:faMessage},
        {name:'Setting',url:'/doctor/setting',icon:faCog}
        // {name:'Blog',url:'/doctor/blog',icon:faBlog}
        ]}/>
        </div>

        <div className="w-[80%] flex flex-col">
            common in all the sectoin
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
            <Route path="" element={<DoctorMainPage/>}/>
            <Route path="appointment" element={<Appointment/>}>
                <Route path="" element={<UpcommingAppointment/>} />
                <Route path="history" element={<CompletedAppointment/>}/>
                <Route path="detail" element={<AppointmentDetails/>}/>
            </Route>
            <Route path="prescription" element={<MedicalPrescription/>}>
                <Route path="" element={<OldPrescription/>}/>
                <Route path="new-prescription" element={<NewPrescription/>}/>
            </Route>
            <Route path="disease-model" element={<DiseasePredictionModel/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="setting">
                <Route path="" element={<Setting/>}/>
                <Route path="profile-management" element={<ProfileManagement/>}/>
                <Route path="appointment-preference" element={<AppointmentPreference/>}/>
                <Route path="clinic-settings" element={<ClinicSettings/>}/>
                <Route path="account-security" element={<AccountSecurity/>}/>
                <Route path="payment-and-billing" element={<PaymentAndBilling/>}/>
            </Route>
        </Route>
   </Routes>
   </>)
}