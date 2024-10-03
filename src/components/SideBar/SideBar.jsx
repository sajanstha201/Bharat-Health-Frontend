import React from "react"
import Select from 'react-select'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faCar} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
export default function SideBar(){
    const [user,setUser]=useState('')
    const navigate=useNavigate()
   return(
    <div className="h-auto fixed grid gap-5 w-[20%] top-0 left-0 m-2 rounded-md p-4 bg-gray-200 shadow-lg">
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