import React from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai';
import {useState, useEffect} from 'react'

function Dropdown({Options}) {
    const [isSelected, setIsSelected] = useState(false);
    const [option, setOption] = useState('Location');

    const OptionDivs = Options.map((element, i) => {
      return <div onClick={
        (e) => {
          setOption(e.target.innerHTML);
          setIsSelected((prev) => !prev);
        }
      } className='m-1 cursor-pointer' key={element}>{element}</div>
    })
  return (
    <div className='relative flex flex-col items-center gap-1'>
      <button className='bg-white flex justify-between px-2 py-2 rounded-lg text-start text-xl font-semibold w-[305px]' onClick={() => {setIsSelected((prev) => !prev)}}>
        {option}
        {!isSelected ? (<AiOutlineCaretDown className='h-8' />) : (<AiOutlineCaretUp className='h-8'/>)}
      </button>
      {isSelected && (
        <div style={{scrollbarWidth: 'none'}} className='bg-white w-[305px] max-h-[300px] overflow-y-scroll text-black rounded-lg font-semibold p-2'>
          {OptionDivs}
        </div>
      ) }
    </div>
  )
}

export default Dropdown
