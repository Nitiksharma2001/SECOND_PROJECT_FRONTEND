import React from 'react'

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>404</h1>
        <h2>Not Found</h2>
        <h4>The Resource requested could not be found on the server</h4>
      </div>
    </div>
  )
}

export default NotFound
