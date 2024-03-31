import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by Ivan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className='bg-slate-400 top-0 h-20 sticky flex items-center justify-center'> Header Section</header> 
        <main className='p-7'>
          {children}  
        </main>
        {/* <footer className='bg-slate-400 bottom-0 h-20 sticky flex items-center justify-center'>Footer</footer> */}
      </body>
    </html>
  );
}
