"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
function MealsFormSubmit() {
  const {pending} =  useFormStatus()
  return (
    <button type='submit' className='btn' disabled={pending}>
      {pending ? "Sending..." : "Add Meal"}
    </button>
  )
}

export default MealsFormSubmit
