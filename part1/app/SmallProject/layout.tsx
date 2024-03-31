import { Metadata } from 'next'
import React from 'react'
import SpNavbar from './components/SpNavbar'
import SpFooter from './components/SpFooter'


export const metaData: Metadata = {
  title: 'Small Project'
}


export default function RootLayoutForSmallProject({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <SpNavbar />
        {children}
        <SpFooter/>
      </body>
    </html>
  )
}
