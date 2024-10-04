import React from "react"
import SideBar from "../../../SideBar/SideBar"
import { faCar, faClose } from "@fortawesome/free-solid-svg-icons"
export default function PatientMainPage(){
   return(
   <>
   <SideBar navElements={[
      {name:'first component',url:'/user/first', icon:faCar},
      {name:'second component',url:'/user/second', icon:faClose}
   ]}/>
      Patient Main Page
   </>)
}