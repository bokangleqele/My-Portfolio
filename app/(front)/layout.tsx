// import Footer from '@/components/FrontEnd/Footer'
import Navbar from '@/components/FrontEnd/Navbar'
import React, { ReactNode } from 'react'
import Footer from '@/components/FrontEnd/Footer'


export default async function Layout({children}: {children:ReactNode}) {
  return (
    <div>
      <Navbar />
       {children}
       <Footer />
    </div>
  )
}