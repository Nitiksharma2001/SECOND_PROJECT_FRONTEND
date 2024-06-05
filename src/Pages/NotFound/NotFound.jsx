import React from 'react'

const NotFound = () => {
  return (
    <main className='h-full flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className='text-4xl'>Not Found</h2>
        <h4 className='text-2xl'>The Resource requested could not be found on the server</h4>
      </div>
    </main>
  )
}

export default NotFound
