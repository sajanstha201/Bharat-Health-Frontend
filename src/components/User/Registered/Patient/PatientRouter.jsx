import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import MedicalReport from "./MedicalReport/MedicalReport";
import PatientMainPage from "./PatientMainPage";
import { Appointment, AppointmentBookCard, AppointmentPayment, BookAppointment, BookLocation } from "./Appointment";
import SideBar from "../../../SideBar/SideBar";
import { faCog, faFileMedical, faNotesMedical, faUser, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faAdjust } from "@fortawesome/free-solid-svg-icons/faAdjust";
import {SettingMainPage,AccountSecurity,AppointmentSetting,MedicalRecordManagement,PaymentAndBilling,ProfileManagement,TestLabPreference} from "./Setting";
import Search from "../../../Search/Search"
import { AddingTestRecord, DisplayAllTestRecord, TestRecordMainPage, ViewOneTestRecord } from "./TestRecord";
import DoctorList from "./DoctorList/DoctorList";
import MedicalPrescriptionCard from "./MedicalReport/MedicalPrescriptionCard";
const PatientCommonDiv = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <SideBar
          className="col-start-1"
          navElements={[
            { name: "Patient", url: "/patient", icon: faUser },
            { name: "My Appointments", url: "/patient/appointments", icon: faAdjust },
            {name:"Doctors",url:"/patient/doctors",icon:faUserDoctor},
            { name: "Medical Report", url: "/patient/medical-report", icon: faFileMedical },
            // { name: "Test Record", url: "/patient/test-record", icon: faNotesMedical },
            { name: "Settings", url: "/patient/settings", icon: faCog },
          ]}
        />
      </div>
      <div className="w-[80%] p-2">
        <Search></Search>
        <Outlet />
      </div>
    </div>
  );
};

export default function PatientRouter() {
  return (
    <>
      <Routes>
        <Route path="" element={<PatientCommonDiv />}>
          <Route path="" element={<PatientMainPage />} />
          <Route path="appointments">
              <Route path="" element={<Appointment/>}></Route>
              <Route path="book" element={<AppointmentBookCard/>}/>
              <Route path="page1" element={<BookAppointment/>}></Route>
              <Route path="page2" element={<BookLocation/>}></Route>
              <Route path="page3" element={<AppointmentPayment/>}></Route>
          </Route>
          <Route path="doctors" element={<DoctorList/>}></Route>
          <Route path="medical-report" >
              <Route path=""element={<MedicalReport />}/>
              <Route path="view" element={<MedicalPrescriptionCard/>}/>
          </Route>
          <Route path="test-record">
                <Route path="" element={<TestRecordMainPage/>}/>
                <Route path='adding-test-record' element={<AddingTestRecord/>}/>
                <Route path='view-one-test-record' element={<ViewOneTestRecord/>}/>
          </Route>
          <Route path="settings">
                <Route path="" element={<SettingMainPage/>}/>
                <Route path="account-security" element={<AccountSecurity/>}/>
                <Route path="appointment-setting" element={<AppointmentSetting/>}/>
                <Route path="medical-record-management" element={<MedicalRecordManagement/>}/>
                <Route path="payment-and-billing" element={<PaymentAndBilling/>}/>
                <Route path="profile-management" element={<ProfileManagement/>}/>
                <Route path="test-lab-preference" element={<TestLabPreference/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
