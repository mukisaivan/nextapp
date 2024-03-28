import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import React, { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
type Params = {
  params: {
    userId: string
  }
}

type metadataParams = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: metadataParams) {

  const user:User = await getUser(userId)

  const metaData: Metadata = {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  
  
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPost(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const userdata = await userData

  return (
    <>
      <h2>{userdata.name}</h2>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPostsData}/>
      </Suspense>
    </>
  )
}
