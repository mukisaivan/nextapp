import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "About Page",
  description: "Generated by Ivan",
  icons: '/favicon.ico'
};

export default function Aboutlayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main>
        <p>inside About layout file</p>
        {children}
      </main>
    </>
  )
}
