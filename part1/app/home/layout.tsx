import React from 'react'

export default function Homelayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main>
        <p>inside Home layout file</p>
        {children}
      </main>
    </>
  )
}
