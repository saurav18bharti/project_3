import React from 'react'


import Header from '@/app/component/Header'
import Footer from '@/app/component/Footer'

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
