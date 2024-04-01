import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='bg-slate-400 top-0 h-20 sticky flex items-center justify-center'> Header Section</header> 
      <main className="flex flex-col items-center m-5 p-24">
        <h1>Main  Page</h1>
        <Link href={'/about'}>
          <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to About Page</button>
        </Link>
        <br/>
        <Link href={'/users'}>
          <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to Users Page</button>
        </Link>
        <Link href={'/SmallProject'}>
          <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to Small Project</button>
        </Link>
        <Link href={'/BlogProject'}>
          <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to Blog Project</button>
        </Link>
      </main>
      <footer className='bg-slate-400 bottom-0 h-20 sticky flex items-center justify-center'>Footer</footer>
    </>
  );
}
