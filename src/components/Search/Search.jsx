import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
  return (
    <div className='relative h-max'>
        <FontAwesomeIcon icon={faSearch} className='absolute top-1/3 left-5 text-emerald-700 font-bold text-xl'/>
        <input type="search" name="" id="" placeholder='Search Doctors, Clinics, etc.' className='w-80 h-16 rounded-xl text-zinc-500 font-semibold text-start text-xs px-12 shadow-lg'/>
    </div>
  )
}
