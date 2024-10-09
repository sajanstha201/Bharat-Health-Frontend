import React from "react"
import { faCab,faClose, faCreditCard, faHospital, faLink, faLock, faUser, faVials } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt"
export default function Setting(){
    const settings=[
        {name:'Profile Management',path:'profile-management',icon:faUser},
        {name:'Clinic Settings',path:'clinic-settings',icon:faHospital},
        {name:'Appointment Preference',path:'appointment-preference',icon:faLock},
        {name:'Account Security',path:'account-security',icon:faLink},
        {name:'Payment and Billing',path:'payment-and-billing',icon:faCreditCard},
     ]
   return(
   <>
    <div className="flex flex-wrap gap-5">
      {settings.map((e,i)=>(
        <Link to={e.path} className="gap-4 w-[200px] h-[220px] shadow-md border rounded-md flex text-center items-center justify-center flex-col cursor-pointer hover:scale-105 hover:bg-gray-300 transition-all duration-300 m-4">
        <FontAwesomeIcon icon={e.icon} size="2x"/>
        {e.name}
        </Link>))}
    </div>
   </>)
}