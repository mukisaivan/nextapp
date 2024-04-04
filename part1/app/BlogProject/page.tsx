import React from 'react'
import Posts from './components/Posts'

type Props = {}

export default function BPPage({}: Props) {
  return (
    <main className=''>
      <p className='text-3xl text-center dark:text-white p-12'>
        Hello and Welcome 👋
        <span className='whitespace-nowrap'>
          I'm 
          <span className='font-bold ml-3'>
            Ivan
          </span>
        </span> 
      </p>
      <Posts />
    </main>
  )
}