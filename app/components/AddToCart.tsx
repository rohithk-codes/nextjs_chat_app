'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div className='p-5 my-5 bg-amber-400 text-white text-xl hover:bg-amber-700'>
     <button onClick={()=>console.log("button clicked")}>AddToCart</button>
    </div>
  )
}

export default AddToCart
