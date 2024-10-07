import React from "react"
import { faCab,faClose, faCreditCard, faLink, faLock, faUser, faVials } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt"
export default function SettingMainPage(){
    const settings=[
        {name:'Profile Management',path:'profile-management',icon:faUser},
        {name:'Account Security',path:'account-security',icon:faLock},
        {name:'Appointment Setting',path:'appointment-setting',icon:faCalendarAlt},
        {name:'Medical Record Management',path:'medical-record-management',icon:faLink},
        {name:'Test Lab Preference',path:'test-lab-preference',icon:faVials},
        {name:'Payment and Billing',path:'payment-and-billin',icon:faCreditCard},
     ]
   return(
   <>
    <div className="flex flex-wrap gap-5">
      {settings.map((e,i)=>(
        <Link to={e.path} className="w-[200px] h-[220px] shadow-md border rounded-md flex text-center items-center justify-center flex-col cursor-pointer hover:scale-105 hover:bg-gray-300 transition-all duration-300 m-4">
        <FontAwesomeIcon icon={e.icon} size="2x"/>
        {e.name}
        </Link>))}
    </div>
   </>)
}