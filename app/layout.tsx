
import NavigationBar from '@/app/page.Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amp Lab Marketing',
  description: 'Illuminate Your Business',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  
  const companyName = "Amp Lab Marketing"
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="overflow-hidden font-mono select-none">

      <NavigationBar/>

      {children}
      <footer className="h-48 bg-color flex justify-center items-center"><div>Copyright 2023 {companyName}</div></footer>


      </main>
      </body>
    </html>
  )
}
