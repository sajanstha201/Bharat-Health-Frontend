import React from "react"
import Select from 'react-select'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faCar, faClose, faBars} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
export default function SideBar(){
    const [user,setUser]=useState('')
    const navigate=useNavigate()
    const[isHidden,setIsHidden]=useState(false)
   return(
    <div className={`h-auto fixed grid gap-5 w-[20%] top-0 ${isHidden?'transform -translate-x-full':''} left-0 my-2 rounded-md p-4 bg-gray-200 shadow-lg transition-all duration-200`}>
        {isHidden?<div className="absolute top-1 left-[100%] cursor-pointer" onClick={()=>setIsHidden(!isHidden)}><FontAwesomeIcon icon={faBars} size="2x"/></div>
        :<div className="absolute top-1 right-2 cursor-pointer" onClick={()=>setIsHidden(!isHidden)}><FontAwesomeIcon icon={faClose} size="2x" /></div>
        }
        <div className="flex items-start w-full p-2 gap-10">
            <FontAwesomeIcon icon={faUser} size='2x'/>
            <p>Guest</p>
        </div>
        <div className="flex items-center gap-5">
            <FontAwesomeIcon icon={faCar} size="2x"/>
            One Component
        </div>
        <div className="flex items-center gap-5">
            <FontAwesomeIcon icon={faCar} size="2x"/>
            Second Component
        </div>
        <div className="flex items-center gap-5">
            <FontAwesomeIcon icon={faCar} size="2x"/>
            Third Component
        </div>

        <div className="flex">
            <Select
            value={'null'}
            options={[
                {value:'user',label:'Guest'},
                {value:'patient',label:'Patient'},
                {value:'doctor',label:'Doctor'},
                {value:'testlab',label:'Test Lab'},
                {value:'pharmacy',label:'Pharmacy'}
            ]}
            onChange={(selected)=>{
                console.log(selected)
                navigate("/"+selected['value'])
            }}
            />
        </div>

    </div>
   )
}