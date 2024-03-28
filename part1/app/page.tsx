import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-5 p-24 h-screen">
      <Link href={'/about'}>
        <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to About Page</button>
      </Link>
      <br/>
      <Link href={'/users'}>
        <button className='text-2xl m-5 rounded-xl p-4 bg-red-600'>Go to Users Page</button>
      </Link>
      <h1>Main  Page</h1>
    </main>
  );
}
