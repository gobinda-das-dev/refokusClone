import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Button = ({text = "Start a Project"}) => {
  return (
    <button className='h-8 px-4 py-4 bg-white text-black flex items-center justify-between gap-4 rounded-full'>
        <span className='text-sm'>{text}</span>
        <MdOutlineSubdirectoryArrowRight size={".7em"} />
    </button>
  )
}

export default Button