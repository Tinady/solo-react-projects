import React from 'react'

const Balance = () => {
  return (
    <div className='flex flex-col w-5/12 gap-1 lg:w-3/12'>
      <p className='text-start text-xs'>YOUR BALANCE</p>
      <h5 className='text-xl font-semibold'>$260.00</h5>
      <div className='flex mt-3 bg-white justify-between py-6 px-8'>
        <div className='border-r-4 w-1/2'>
           <h5>INCOME</h5> 
           <p className='text-teal-500'>$5000</p>
        </div>

        <div>
            <h5>EXPENSE</h5>
            <p className='text-red-800'>$5000</p>
      
        </div>
      </div>
    </div>
  )
}

export default Balance
