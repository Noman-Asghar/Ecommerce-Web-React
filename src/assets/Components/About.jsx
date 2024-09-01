import React from 'react'

function About() {
  return (
    <>
    <h1 className='text-center my-5 font-bold text-[40px] bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>About</h1>
    <div className='md:flex md:gap-20 item-center w-full   md:px-20 px-10'>
        <div className='md:w-[40%] w-full'><img src='https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=600' height={"400px"} width={"85%"}/></div>
        <div className='md:w-[50%] w-full md:py-[50px]'>
        <h2 className=' font-bold text-[40px] py-5'>About Fashion</h2>
        <p>Every man has his own style and way of choosing what to wear. This fact is made evident in reading men’s style and fashion quotes from different icons throughout the decades, and even centuries.
Some take a classic, traditional tone. Others focus on staples that make them look good and feel confident, or they favor functionality and comfort. Some opt for the understated look, while others seek to make a bold statement with their clothing choices.</p>
<p className='py-5'>Wherever one may find himself on the spectrum of men’s fashion today, he is sure to resonate with several quotes in our selection of statements on menswear from designers, keen observers of style, and celebrities known for having a spot on pulse on fashion</p>
<p className='py-5'>Wherever one may find himself on the spectrum of men’s fashion today, he is sure to resonate with several quotes in our selection of statements on menswear from designers, keen observers of style, and celebrities known for having a spot on pulse on fashion</p>
        </div>
    </div>
    </>

  )
}

export default About