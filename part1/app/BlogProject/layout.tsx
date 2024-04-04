import React from 'react'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

type Props = {
  children: React.ReactNode
}

export default function RootLayoutforBlogProject({children}: Props) {
  return (
    <>
      <main className='min-h-screen bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </main>
    
    </>

  )
}