import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
      <Link href={'/about'}>
        <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to about Page</button>
      </Link>
      <br/>
      
      <div>Home Page</div>
    </>
  )
}
