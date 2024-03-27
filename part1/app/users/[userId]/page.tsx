import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import React, { Suspense } from 'react'
import UserPosts from './components/UserPosts'
type Params = {
  userId: {
    userId: string
  }
}


export default async function UserPage({ userId }: Params) {
  
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
