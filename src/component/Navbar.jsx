import { space } from 'postcss/lib/list'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 bg-[inherit] w-full'>
        <div className='max-w-screen-xl w-screen-xl mx-auto py-6 border-b border-zinc-700 flex items-center justify-between'>
            <div className='flex gap-24 items-center'>
                <img className='scale-90' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="logo" />

                <div className='flex gap-16'>
                    {["Home", "Work", "Careers", "News"].map((item, i) => (
                        <div key={i} className="flex items-center gap-1">
                            {i === 1 && (<span style={{boxShadow: "0 0 0.25em #00FF19"}} className='size-1.5 bg-[#00FF19] rounded-full'></span>)}
                            {i === 3 && (<span className='h-4 w-[1.5px] bg-zinc-600 mr-7'></span>)}
                            <a className='text-xs' href="#">{item}</a>
                        </div>
                    ))}
                </div>
            </div>
            <Button />
        </div>
    </nav>
  )
}

export default Navbar