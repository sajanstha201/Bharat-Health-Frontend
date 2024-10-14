import React from "react"
import Select from 'react-select'
import { useState } from "react"
export default function TopHeader(){
    const [user,setUser]=useState('')
   return(
    <div className="w-screen flex items-center justify-center h-[10%]">
        <div className="w-[60%] flex items-center justify-between">
            <div>
                One Component
            </div>
            <div>
                Second Component
            </div>
            <div>
                Third Component
            </div>
        </div>

        <div className="flex items-center justify-center w-[10%]">
            <Select
            value={'null'}
            options={[{value:'user',label:'U'},{value:'doctor',label:'D'},{value:'test-lab',label:'T'},{value:'pharmacy',label:'P'}]}
            onChange={(selected)=>setUser(selected)}
            />
        </div>

    </div>
   )
}