import Link from 'next/link'
import React from 'react'

export default function About() {
  
  return (
    <main className='min-h-screen flex-column p-5'>
      <Link href={'/'}>
        <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to main Page</button>
      </Link>
      <div>AboutPage</div>
    </main>
  )
}
