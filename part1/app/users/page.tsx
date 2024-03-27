import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
import React from 'react'

export default async function UsersPage() {

  const users: Promise<User[]> = getAllUsers()

  const gottenUsers = await users

  const content = (
    
      <section className='min-h-screen'>
        {
          gottenUsers.map(user => {
            return (<p key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>)
          })
        }
      </section>
    
  )


  return content
}
