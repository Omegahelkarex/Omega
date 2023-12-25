"use client"
import { Moon } from 'lucide-react'
import React from 'react'

function DarkModeToggle() {
    const handleClick=()=>{
        document.documentElement.classList.toggle('dark')
    }
  return (
    <button className='flex items-center justify-center' onClick={handleClick}><Moon/></button>
  )
}

export default DarkModeToggle