import React from 'react'
import { useNavigate } from 'react-router-dom'
import Phone from '../../../../../assets/Phone.svg'
function AppointmentPayment() {
    const navigate = useNavigate();
    const BackHandler = () => {
        navigate('../page2');
    };
  return (
    <div style={{backgroundColor: "#F4F4F4",width:"967px", aspectRatio:"4/2.7"}} className='relative grid grid-cols-2 rounded-xl m-auto my-4' >
        <div className='w-96 h-[400px] bg-white rounded-lg mx-16 my-28'>

        </div>
        <div className="scale-75">
          <img src={Phone} alt="Phone" srcset="" />
        </div>
        <div style={{gridColumnStart: "1"}} className='absolute bottom-[69px] left-1/3 col-span-2 flex items-center justify-center gap-3'>
              <input type="button" onClick={BackHandler} value="Back" className=' w-36 h-12 bg-white rounded-xl text-black font-semibold hover:cursor-pointer' />
              <input type="button" value="Book" className=' w-36 h-12 bg-white rounded-xl text-black font-semibold hover:cursor-pointer' />
        </div>


        <div style={{gridColumnStart: "1", textAlign:'center'}} className='absolute bottom-[20px] left-[25.6%] col-span-2 flex gap-11 items-center justify-center'>
          <div className='w-32 h-2 bg-neutral-400 rounded-xl'></div>
          <div className='w-32 h-2 bg-neutral-400 rounded-xl'></div>
          <div className='w-32 h-2 bg-green-700 rounded-xl'></div>
        </div>
    </div>
  )
}

export default AppointmentPayment
