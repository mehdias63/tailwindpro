import React from 'react'


function App() {

  return (
    <>
        <div className='bg-white'>
          <h1 className='bg-gray-300'>The title of the card here</h1>
          <div className='flex'>
          <button className='m-4 rounded-full text-white px-4 py-2  text-sm bg-orange-600'>UNDER REVIEW</button>
          <p>May14,1988</p>
          </div>
          <div>
            <h1 className='bg-gray-300 m-4'>here is a short comment about this emploee</h1>
          </div>
          <div className='bg-gray-300'>
            <h3>EMPLOEE</h3>
            <div className='flex'>
              <div className='w-16 h-16 bg-blue-600 rounded-full text-center p-4 text-white font-bold'>VG</div>
              <div className='ml-4'>
                <h1>Victor Gonzales</h1>
                <p>instructor</p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default App
