import React from 'react'
import Navbar from './components/Navbar'

type Props = {
  children: React.ReactNode
}

export default function RootLayoutforBlogProject({children}: Props) {
  return (
    <>
      <main className='min-h-screen bg-slate-800'>
      <Navbar/>
        {children}
      </main>
    
    </>

  )
}