import React from 'react'

async function getUserPost({userId}: {userId:string}) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  if (!res.ok) throw new Error('failed to fetch user post  ')
  
  return res.json()
}

export default getUserPost