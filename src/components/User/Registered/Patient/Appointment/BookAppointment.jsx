import React from "react"
import SideBar from '../../../../SideBar/SideBar'
import DoctorB from '../../../../../assets/DocotrB.svg'
import { useNavigate } from "react-router-dom";
export default function BookAppointment(){
    const navigate = useNavigate();
    const NextHandler = () => {
        navigate('../page2');
    };
   return(
   <>
       <div style={{backgroundColor: "#F4F4F4",width:"967px", aspectRatio:"4/2.7"}} className='relative grid grid-cols-2 rounded-xl m-auto my-4'>
            <div style={{gridColumnStart:'1 span 1'}} className='flex gap-7 flex-col justify-center items-center'>
                <input type="text" placeholder='First Name' className='w-80 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                <input type="text" placeholder='Middle Name' className='w-80 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                <input type="text" placeholder='Last Name' className='w-80 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                <input type="text" placeholder='Contact Number' className='w-80 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                <input type="email" placeholder='Email' className='w-80 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                <div className='flex gap-16'>
                    <input type="text" placeholder='Age' className='w-32 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                    <input type="text" placeholder='Gender' className='w-32 h-12 flex-shrink-0 rounded-xl placeholder:text-black placeholder:font-semibold text-black font-semibold p-3' />
                </div>
            </div>
            <div className='col-start-2 flex justify-center items-center'>
                <img src={DoctorB} alt="Doctor SVG" />
            </div>
            <div style={{gridColumnStart: "1"}} className='col-span-2 flex items-center justify-center '>
                <input type="button" onClick={NextHandler} value="Next" className='w-64 h-12 bg-white rounded-xl text-black font-semibold hover:cursor-pointer' />
            </div>
            <div style={{gridColumnStart: "1", textAlign:'center'}} className='col-span-2 flex gap-11 items-center justify-center'>
                <div className='w-32 h-2 bg-green-700 rounded-xl'></div>
                <div className='w-32 h-2 bg-neutral-400 rounded-xl'></div>
                <div className='w-32 h-2 bg-neutral-400 rounded-xl'></div>
            </div>
        </div>
   </>)
}