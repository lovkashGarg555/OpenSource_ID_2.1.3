import React from 'react'
import Livebidcard from './livebidcard'
const livebidcarousel = () => {
    
  return (
   < div className='flex flex-col justify-center m-[30px]'>
   <div className='flex justify-start mx-[40px]'>
   <div className='rounded-full bg-green-400 w-[20px] h-[20px]'>.</div> <div>Live</div>
   </div>
    <div className='  w-[1300px] h-[300px]'>
      <div className='flex overflow-x-scroll no-scrollbar w-[1500px] '>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      </div>   
    </div>
    </div>
  )
}

export default livebidcarousel