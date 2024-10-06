import React from "react"
import { Link, useNavigate } from "react-router-dom"
export default function NormalContainer({img,name,url}){
   return(
    <Link to={url} className="w-[200px] h-[200px] rounded-md shadow-lg flex flex-col items-center justify-center m-10 hover:scale-105 transition-all duration-300">
        <img src={img} className="w-full h-[80%]"></img>
        {name}
    </Link>
   )
}