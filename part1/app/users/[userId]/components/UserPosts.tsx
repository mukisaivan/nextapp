import React from 'react'

type PropsType = {
  promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: PropsType) {
  
  const posts = await  promise

  const content = posts.map(post => {
    return (
      <article key={post.id}>
        <li>
          <h2>{post.title}</h2>
        </li>
          <p>{post.body}</p>
      </article>)
  })

  return content
}
