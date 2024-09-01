import React, { useState } from 'react'

function Header() {



  return (
  <div className='w-full bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% z-10  '>
  
   
    <div className=' md:flex md:flex-row flex flex-col items-center justify-center'>
   
<div className=' opacity-1 w-[50%] h-[92vh]  flex flex-col items-center justify-center'>
        <h1 className='ps-10 text-[50px] font-bold  bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-200 to-70% text-transparent'>MEN'S FASHION</h1>
        <h5 className='text-[30px] font-bold text-white'>Where you want mens fashion</h5>
        <button className='text-white font-bold  text-[20px]  bg-gradient-to-r from-cyan-500 to-blue-500 px-20 py-3 rounded-lg mt-5'>Sign up</button>

        </div>
        <div className='md:w-[50%] w-[100%] overflow-hidden '>
        <img src='https://demo.alhikmahsoft.com/template/ainext/assets/img/man.png'
        className='w-full h-[92vh] pbject-cover hover:translate-x-5 duration-300 z-100 ' />
        </div>
    </div>
  </div>
  )
}

export default Header