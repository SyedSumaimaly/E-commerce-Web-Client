import React from 'react'
import CatButton from './CatButton.js'
import Productcard from './product_card.js'

function Category() {
  return (
    <>

    <div className='mx-auto text-center'>
        <h1 className='text-black text-center font-bold text-2xl mt-8 mb-8'>Select Category</h1>
        <CatButton/>
        <h1 className='text-black text-center font-bold text-2xl mt-8 mb-8'>All Product</h1>
        <div className=' flex flex-col md:flex-row gap-4 mt-8'>
       

        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard/>
          
    
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard/>
      
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard/>
       
        </div>
        <div className='bg-white/10 md:w-[25%] w-full'>
          <Productcard/>

        
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
    
    </>
  )
}

export default Category
