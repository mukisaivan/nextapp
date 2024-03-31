
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Search() {
  
  const [search, setSearch] = useState('')
  const router  = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    
    setSearch('')
    router.push(`/${search}/`)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const content = (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={search}
        onChange={handleChange}
        className='rounded-xl p-2 text-black'
        placeholder='Search'
      />
      <button className='bg-slate-300 rounded-xl p-2 ml-2'>🚀</button>
      
    </form>
  )

 
  
  return content
}
