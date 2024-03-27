import React from 'react'

async function getUser({userId}: {userId: string}) {

  const res =await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if(!res.ok) throw new Error('failed to fetch user ')

  return res.json()
}

export default getUser