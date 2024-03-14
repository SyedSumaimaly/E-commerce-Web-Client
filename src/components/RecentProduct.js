import React from 'react'


import Productcard from './product_card';


function RecentProduct() {
  return (
    <div className=' mt-8 p-2'>
      <h1 className='text-black text-4xl font-semibold'>Recent Product</h1>
      
      <div className=' flex flex-col md:flex-row gap-4 mt-4'>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
          
    
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
      
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
       
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />

        
        </div>

      </div>

      <div className=' flex flex-col md:flex-row gap-4 mt-4'>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
          
    
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
      
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />
       
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard />

        
        </div>

      </div>

      

      

 
  
      
    </div>
  )
}

export default RecentProduct
