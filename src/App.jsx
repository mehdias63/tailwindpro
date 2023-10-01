import React from 'react'


function App() {

  return (
    <>
        <div className='bg-white w-2/5 mx-auto my-32 rounded-md overflow-hidden'>
          <h1 className='bg-gray-200 text-gray-700 px-6 py-4'>The title of the card here</h1>
          <div className='flex justify-between items-center px-6 py-4'>
          <button className='m-4 rounded-full text-white px-4 py-2  text-sm bg-orange-600'>UNDER REVIEW</button>
          <p className='text-sm'>May14,1988</p>
          </div>
          <div className='border-t border-gray-200'>
            <h1 className='bg-gray-200 m-4 p-10 text-xl font-medium rounded-md'>Here is a short comment about this<br/> emploee</h1>
          </div>
          <div className='bg-gray-200 p-4'>
            <h3 className='text-gray-600 mb-4 ml-3'>EMPLOEE</h3>
            
            <div className='flex'>
              <div className='w-16 h-16 bg-blue-700 rounded-full text-center p-4 text-white font-bold'>VG</div>
              <div className='ml-5'>
                <h1 className='font-bold'>Victor Gonzales</h1>
                <p className='text-gray-600'>instructor</p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default App
