import React, { useState } from 'react'
import img from './menu-btn.png'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const [showIcon, setShowIcon]  = useState(false)
  
  return (
    <div className=''>
    <nav className='md:flex justify-between md:flex-row md:px-4 px-0   h-20 items-center  bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80%'>
    <div className='md:hidden md:static absolute right-[10px] top-[30px]   z-20 '><img src={img} width={'30px'} onClick={()=>setShowIcon(!showIcon)} className=''/></div>
    <div> <h1 className=' font-bold md:text-[40px] text-[30px]  text-center bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-200 to-70% text-transparent md:pt-0 pt-5'>Men's Fashion</h1></div>
   <div className='menu-link md:w-auto w-[100%] md:bg-transparent bg-slate-400 h-50  opacity-0 md:opacity-100 md:static absolute top-[-200px] transition-all duration-300 md:py-0 py-5' style={{opacity: showIcon ? '100' : '100',top : showIcon ? '0px' : '-200px'}}>
   <ul className='md:flex   text-center gap-4'  >
     <li className='text-lg font-bold after:transition-all after:duration-200 after:content[""] after:block after:w-[0] after:h-[5px] after:bg-pink-400 after:hover:w-[100%]'><NavLink to='' className={({isActive})=>`duration-200 ${isActive ? "text-blue-500" : "text-white"}`}>Home</NavLink></li>
         <li className='text-lg font-bold after:transition-all after:duration-200 after:content[""] after:block after:w-[0] after:h-[5px] after:bg-pink-400 after:hover:w-[100%]'><NavLink to='/about' className={({isActive})=>`duration-200 ${isActive ? "text-blue-500" : "text-white"}`}>About</NavLink></li>
         <li className='text-lg font-bold after:transition-all after:duration-200 after:content[""] after:block after:w-[0] after:h-[5px] after:bg-pink-400 after:hover:w-[100%]'><NavLink to='/contact' className={({isActive})=>`duration-200 ${isActive ? "text-blue-500" : "text-white"}`}>Contact</NavLink></li>
         <li className='text-lg font-bold after:transition-all after:duration-200 after:content[""] after:block after:w-[0] after:h-[5px] after:bg-pink-400 after:hover:w-[100%]'><NavLink to='/Product' className={({isActive})=>`duration-200 ${isActive ? "text-blue-500" : "text-white"}`}>Products</NavLink></li>
     </ul>
 </div> 
     <div>
    
         <button className='text-white   font-bold border-none  bg-gradient-to-r from-cyan-500 to-blue-500  duration-300 py-3 px-20 rounded-lg md:block hidden'>Sign up</button>
     </div>

     </nav>
     </div>
  )
}

export default Navbar