import React from "react"
import { Link } from "react-router-dom"
import DisplayAllTestRecord from "./DisplayAllTestRecord"
export default function TestRecordMainPage(){
   return(
   <div className="flex flex-col">
   <Link to='adding-test-record' className="p-5 m-4 border bg-gray-300 rounded-md">
   Adding
   </Link>
   <DisplayAllTestRecord/>
   </div>)
}