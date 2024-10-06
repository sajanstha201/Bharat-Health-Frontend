import React from "react"
import NormalContainer from "../../../../Container/NormalContainer"
import img from "../DocotrB.svg"
export default function Setting(){
   return(
   <>
    <p>THis is settign main page</p>
    <NormalContainer name={'sajan shrestha'} url={'/patient/sajan'} img={img}/>
   </>)
}