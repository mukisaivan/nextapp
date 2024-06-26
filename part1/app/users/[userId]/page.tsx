import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import React, { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import { notFound } from 'next/navigation'


type Params = {
  params: {
    userId: string
  }
}


export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {

  const userData: Promise<User> = getUser(userId)

  const user: User = await userData
  
  if (!user) {
    return {
      title: 'User Not Found'
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }

}

export default async function UserPage({ params: { userId } }: Params) {  
  
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPost(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  if (!user) {
    return notFound()
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPostsData}/>
      </Suspense>
    </>
  )
}

// converting the site from server site rendering (SSR) to static site generation SSG 
export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers()

  const users = await userData

  return users.map(user => 
     ({
      userId: user.id.toString()
    })
  )
}
