import React from 'react'

function Home() {
  return (
    <>
    <div className='w-full bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% z-10  '>
  
   
    <div className=' md:flex md:flex-row flex flex-col items-center justify-center'>
   
<div className=' opacity-1 md:w-auto w-[100%]   flex flex-col items-center justify-center text-center md:px-0 px-[20px] md:my-0 my-5'>
        <h1 className='] md:ps-10 ps-0 py-5 md:text-[50px] text-[30px] font-bold inline-block  bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-200 to-70% text-transparent'>MEN'S FASHION</h1>
        <h5 className='md:text-[20px] text-[12px] font-bold text-white'>Style is the perfection of a point of view.</h5>
        <h5 className='md:text-[20px] text-[12px] font-bold text-white'>Clothes don't make a man, but clothes have got many a man a good job</h5>
        <button className='text-white font-bold  md:text-[20px] text-[15px]  bg-gradient-to-r from-cyan-500 to-blue-500 md:px-20 py-3 px-[35px] rounded-lg my-5'>Sign up</button>

        </div>
        <div className='md:w-[55%] w-[100%] overflow-hidden md:ms-[50px] '>
        <img src='https://demo.alhikmahsoft.com/template/ainext/assets/img/man.png'
        className='w-full md:h-[92vh] pbject-cover hover:translate-x-5 duration-300 z-100 ' />
        </div>
    </div>
  </div>


  {/* cloths section */}


  <h1 className='text-center text-5xl my-5 font-mono font-bold bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>Cloths</h1>
  <div className='w-full'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/categories/6zZJp1fszN9sVu0OBANf0b8UGMLQSVGOPlslnj53.png' width={'100%'}/></div>
    <div className='grid sm:grid-cols-12 grid-rows-2 gap-2 m-10'>
        <div className='col-span-4 hover:scale-105 duration-300'>
            <img src='https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg' />
        </div>
        <div className='col-span-4 hover:scale-105 duration-300'>
            <img src='https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-lg h-[100%]' />
        </div>

        <div className='col-span-4  row-span-2 hover:scale-105 duration-300'>
            <img src='https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&w=600' className='h-[95%] rounded-lg' />
        </div>
        <div className='col-span-4 h-[100%] hover:scale-105 duration-300'>
            <img src='https://media.istockphoto.com/id/890289344/photo/the-perfect-outfit-means-a-perfect-day.jpg?b=1&s=612x612&w=0&k=20&c=em9mCgHp_C-Kn9tuSVgw6yanUa1oE-C5i46ObscI_rg=' className='rounded-lg' />
        </div>
        <div className='col-span-4 hover:scale-105 duration-300 '>
            <img src='https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?b=1&s=612x612&w=0&k=20&c=AfoKMGfVjcxkzGqRWvMYdHxGIzTGQmf7BRGIIYPB1dQ=' className='rounded-lg' />
        </div>
        
    </div>

    {/* Watch section */}

    <h1 className='text-center text-5xl my-5 font-mono font-bold bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>Watch</h1>

    <div className='w-full'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/categories/t9xrijBJSVpooxcxJQ5pLPX20klnXqbp0xL6821S.png' width={'100%'}/></div>
      
      <div className='h-[400px]  flex justify-evenly my-10'>
      <video src='https://videos.pexels.com/video-files/4122588/4122588-sd_640_360_25fps.mp4 ' autoPlay loop muted className='   rounded-lg '></video>
      <video src='https://videos.pexels.com/video-files/4824611/4824611-sd_640_360_30fps.mp4 ' autoPlay loop muted className='   rounded-lg md:block  hidden '></video>
      </div>
      <div className='md:flex justify-evenly my-20 md:mx-0 mx-10'>
      <div className='max-w-[400px] md:my-0 my-10  	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
              <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_s5RYKu9StchMef2FrsHJi1nXZOugSAUe5BLx2yLS.jpg' className='w-[260px]' /></div>
              <div className='m-4'>
              <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Naviforce Chronograph 2022 Edition</h4>
              <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 7,999</h3>
              <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

              </div>
              
          </div>

          <div className='max-w-[400px] md:my-0 my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
          <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_4cmgRcz0uZKN32oirG8NBqfgamUFvMqrQsjhkpab.jpg' className='w-[260px]' /></div>
              <div className='m-4'>
              <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>NAVIFORCE Watch 9199T Analog-Digital Watch TPU Strap</h4>
              <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs, 6,799</h3>
              <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

              </div>
              
          </div>
          

          
          <div className='max-w-[400px]  md:my-0 my-10	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
          <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_ewYxRHQrqfF6OUYzcDy3SX8tzkLF61PWJSmaOp76.jpg' className='w-[260px]' /></div>
              <div className='m-4'>
              <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Naviforce Dual Time Latest Edition</h4>
              <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 6,910</h3>
              <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

              </div>
              
          </div>

      </div>
     
{/* Shoes section */}


<h1 className='text-center text-5xl my-5 font-mono font-bold bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>SHOES</h1>
  <div>
    <div className='w-full '>
    <img src='https://d1iv6qgcmtzm6l.cloudfront.net/categories/67oFNINiZB7AoT7TG4Aoi0SoKfnaJ2hKTdEpMpHt.png' className='w-full  object-cover' / >
    </div>
    <div className='md:flex justify-evenly my-20 md:mx-0 mx-10'>
    <div className='md:w-[400px] max-w-[400px]  md:my-0 my-10	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
            <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_XbrrWoU3ly7Yc3ImXAKGyYO9nzR7WpmVd9fKSyFX.png' className='w-[260px]' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Black,Grey Sneaker for men</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 3,580</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>

        <div className='max-w-[400px] md:my-0 my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
        <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_yxkyFb9hrUeDm8aoxt522PVrjmNEriNf1mDY1gZY.jpg' className='w-[260px]' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>New Men's Fashionable Sneakers Running Shoes Gym Joggers</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs, 4,780</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>
        

        
        <div className='max-w-[400px]  md:my-0 my-10	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
        <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_4FVenbOYdzi7qH3Yw4u6LHo8Fj19JB3XHhIax4wc.jpg' className='w-[260px]' /></div>

            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Sneakers beryl Men's Fashionable Casual ,Running Shoes Lightweight</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 4,799</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>

    </div>
    </div>

    {/* About section */}

    

    <h1 className='text-center my-5 font-bold text-[40px] bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>About</h1>
    <div className='w-full'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/categories/6zZJp1fszN9sVu0OBANf0b8UGMLQSVGOPlslnj53.png' width={'100%'}/></div>

    <div className='md:flex md:gap-20 item-center w-full  my-10 md:px-20 px-[30px]'>
        <div className='md:w-[40%] w-full'><img src='https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=600' height={"400px"} width={"85%"}/></div>
        <div className='md:w-[50%] w-full md:py-[50px]'>
        <h2 className=' font-bold text-[40px] py-5'>About Fashion</h2>
        <p>Every man has his own style and way of choosing what to wear. This fact is made evident in reading men’s style and fashion quotes from different icons throughout the decades, and even centuries.
Some take a classic, traditional tone. Others focus on staples that make them look good and feel confident, or they favor functionality and comfort. Some opt for the understated look, while others seek to make a bold statement with their clothing choices.</p>
<p className='py-5'>Wherever one may find himself on the spectrum of men’s fashion today, he is sure to resonate with several quotes in our selection of statements on menswear from designers, keen observers of style, and celebrities known for having a spot on pulse on fashion</p>
<p className='py-5'>Wherever one may find himself on the spectrum of men’s fashion today, he is sure to resonate with several quotes in our selection of statements on menswear from designers, keen observers of style, and celebrities known for having a spot on pulse on fashion</p>
        </div>
    </div>

    {/* product section */}

    <h1 className='text-center font-bold text-[40px] bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2 my-5'>Products</h1>

    <div className='w-full'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/categories/6zZJp1fszN9sVu0OBANf0b8UGMLQSVGOPlslnj53.png' width={'100%'}/></div>
            <div className='md:flex md:justify-evenly flex-wrap my-20 md:mx-0 mx-10'>

            <div className='max-w-[400px] my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-blue-900 duration-300'>
        <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_plgOnNRWfYJMErGBnX5mHz56Ddws9VgirMuTRu3N.jpg' className='h-[260px]' /></div>
<div className='m-4'>
<h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Classical New Desgin Wallet For Men - Black</h4>
<h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 599</h3>
<button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

</div>

</div>

<div className='max-w-[400px]   my-10	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-blue-900 duration-300'>
            <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_oURbmJr565ZjDWUy2KeADyDS7gLoaJjBPDCD4t9q.jpg' className='h-[260px]' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Hamna Ehtasham - SARANG - Men Festive Wear Kurta Trouser</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 12,999</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>

        
<div className='max-w-[400px]  my-10	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-blue-900 duration-300'>
        <div className='flex justify-center items-center'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_oLwztiUKVaegpp5Ys8hX6LXQiGXTrhxLgwinwxDj.jpg' className='h-[260px]' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>POTION AMBER OUD EDP 100ML</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 4,569</h3>
            <button className=' bg-gradient-to-r from-cyan-500 to-blue-500 to-80% text-white px-3 py-3 text-[15px] md:text-xl font-bold rounded-lg  '>Shop now</button>

            </div>
        </div>

        <div className='md:w-[400px] max-w-[400px] my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>

        <div className='flex justify-center items-center '><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_AHZZtrzniDzfzZhhgSdC0JomKd2HaMdYNNPaWtme.png' className='h-[260px]' /></div>

                    <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Kademan silver chain watch-6163G</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 8,500</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>

            
        </div>

        <div className='md:w-[400px] max-w-[400px] my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
            <div className=''><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_qXX8l3f4QBdbBap5pJObOijqeFeYOYNRctzJYeHW.jpg' className='h-[260px] w-full object-fill' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>Ferrara Dual Leather shoes</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 9,000</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>

        <div className='md:w-[400px] max-max-w-[400px]  my-10 	rounded-2xl overflow-hidden shadow-xl shadow-gray-800 hover:scale-105 duration-300'>
        <div className='flex justify-center items-center  w-full'><img src='https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_pDuXpXaa0VWV2YgXcbrlDwekz1fPR9C7uZ4uueGI.jpg' className='h-[260px]' /></div>
            <div className='m-4'>
            <h4 className='md:text-2xl text-[20px] font-semibold mb-3'>SN GARMENTS White Winter Shirt</h4>
            <h3 className='md:text-xl text-[15px] font-medium text-gray-400 mb-3'>Rs. 799</h3>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 md:text-xl text-[15px] font-bold rounded-lg '>Shop now</button>

            </div>
            
        </div>



    </div>

    {/* contact section */}

    <h1 className='text-center my-5 font-bold text-[40px] bg-gradient-to-r from-purple-900 from-30%   to-pink-600 to-80% text-white py-2'>Contact</h1>
    <div className='md:flex gap-5 w-full px-10 my-10'>
<div className='md:w-[50%] w-full md:my-0 my-10'><img src='https://images.pexels.com/photos/1303862/pexels-photo-1303862.jpeg?auto=compress&cs=tinysrgb&w=600' className='rounded-xl'/></div>
<div className='bg-slate-400  px-5 md:w-[50%] w-full py-10 rounded-xl bg-gradient-to-r from-purple-900 from-30%   to-indigo-600 to-80%'>
<div><h1 className='font-bold text-[40px] text-white'>CONTACT US</h1></div>
<div><input  className='md:w-[70%] w-[100%] py-2 my-5 outline-none rounded-xl  px-4 text-[15px]' placeholder='Full Name' type='text'></input></div>
    <div><input  className='md:w-[70%] w-[100%] py-2 my-5 outline-none rounded-xl  px-4 text-[15px]' placeholder='Emaiil Address' type='text'></input></div>
    <div><input className='md:w-[70%] w-[100%] py-2 my-5 outline-none rounded-xl px-4 text-[15px]' placeholder='Telephone Number' type='number'></input></div>
    <div><button className='text-white font-bold  md:text-[20px] text-[15px]  bg-gradient-to-r from-cyan-500 to-blue-500 px-20 py-3 rounded-lg'>Sign in</button></div>
</div>

    </div>



</>





  )
};

export default Home;