import React, { useState } from "react"
import ImageAdditionContainer from "../../../../Container/ImageAdditionContainer"
import { Link } from "react-router-dom"
export default function AddingTestRecord(){
    const [image,setImage]=useState([])
   return(
   <>
   <ImageAdditionContainer uniqueName={'patient-test-record'} image={image} setImage={setImage} />
   </>)
}