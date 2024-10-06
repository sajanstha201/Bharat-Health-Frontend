import React, { useState } from "react"
import ImageAdditionContainer from "../../../../Container/ImageAdditionContainer"
export default function MedicalReport(){
   const [img,setImg]=useState([])
   return(
   <>
    <p>Adding Medical Report</p>
    <ImageAdditionContainer uniqueName={'sajan'} image={img} setImage={setImg}/>
   </>)
}