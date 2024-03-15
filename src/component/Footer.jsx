import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-10 py-6 pb-10 max-w-screen-xl mx-auto'>
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, i) => (
            <a key={i} className={`text-zinc-400 text-xs duration-300 ${i > 1 && "hover:translate-x-1 hover:text-zinc-500"}`} href=''>{item}</a>
        ))}
    </div>
  )
}

export default Footer