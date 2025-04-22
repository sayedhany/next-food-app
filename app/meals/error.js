"use client"
import React from 'react'

const Error = ({error}) => {
  console.log(error);
  
  return (
    <main className='error'>
    
      <h1>Something went wrong</h1>
    </main>
  )
}

export default Error
