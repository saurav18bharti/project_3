import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../globals.css'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
   <>
   <Header/>
   {children}
   <Footer/>
   </>
  )
}

export default layout
