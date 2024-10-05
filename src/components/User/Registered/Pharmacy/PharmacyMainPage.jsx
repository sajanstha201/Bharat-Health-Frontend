import React from "react"
import SideBar from "../../../SideBar/SideBar"
import { faCar,faClose } from "@fortawesome/free-solid-svg-icons"
export default function PharmacyMainPage(){
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
         Pharmacy Main Page
         </div>
      </div>
   
)
}