"use client"

import React from 'react'
import Search from './Search'

export default function SpNavbar() {
  return (
    <nav className='bg-slate-600 p-4 flex-col flex md:flex-row sticky top-0 justify-between'>
      <h1 className='text-3xl font-bold text-white place-content-center mb-2 md:mb-0'>
        Wiki Rockets!
      </h1>
      <Search />
    </nav>
  )
}