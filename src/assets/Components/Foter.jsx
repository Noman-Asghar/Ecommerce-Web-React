import React from 'react'

function Foter() {
  return (
   <>
    <h1 className='text-center text-[30px] font-bold text-white bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% py-2 my-5'>Footer</h1>
    <div className='md:flex md:justify-between justify-center   px-10 pe-[150px] items-center w-full h-30 md:flex-row flex-col '>
      <div className='md:ms-0 ms-20'><img src='https://img.freepik.com/premium-vector/men-fashion-logo-design-template_448617-346.jpg' className='md:w-[60%] w-[100%]'/></div>
      <div className='md:flex md:gap-20 md:items-center text-center text-[20px] font-semibold text-gray-500 '>
        <div className='md:my-0 my-10 md:ps-0 ps-[80px]'>
        <h3 className='text-[30px] text-gray-900 hover:underline'>Resources</h3>
<p className='hover:underline'>Blogs</p>
<p className='hover:underline'>Product</p>
<p className='hover:underline'>Sevices</p>

        </div>
        
        <div className='md:my-0 my-10 md:ps-0 ps-[80px]'>
          <h3 className='text-[30px] text-gray-900 hover:underline'>Home</h3>
          <p className='hover:underline'>Blogs</p>
<p className='hover:underline'>Product</p>
<p className='hover:underline'>Sevices</p>

        </div>

        <div className='md:my-0 my-10 md:ps-0 ps-[80px]'>
          <h3 className='text-[30px] text-gray-900 hover:underline'>About</h3>
          <p className='hover:underline'>Blogs</p>
<p className='hover:underline'>Product</p>
<p className='hover:underline'>Sevices</p>

        </div>

      </div>
    </div>
   </>
  )
}

export default Foter;