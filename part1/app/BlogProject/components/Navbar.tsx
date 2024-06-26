import Link from 'next/link'
import React from 'react'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"


type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold grid place-content-center'>
          <Link href={'/BlogProject'} className='no-underline hover:text-white text-white/90'>
            Mukisa Ivan
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/@DaveGrayTeachesCode">
            <FaYoutube />
          </Link>
          <Link className="text-white/90 hover:text-white" href="https://courses.davegray.codes/">
            <FaLaptop />
          </Link>
          <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
            <FaGithub />
          </Link>
          <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
            <FaTwitter />
          </Link>
        </div>

      </div>
     
    </nav>
  )
}