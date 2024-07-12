import {Button} from '@/app/component/Button'
import { app_style, max_width_content } from '@/utils/constant'
import { cn } from '@/utils/helpers'
import Link from 'next/link'
import React from 'react'

const Setupnewpassword = () => {
  return (
    <div className={cn(app_style ,"  py-9 sm:py-[10.3rem] mx-4 md:mx-16 my-12 lg:mx-auto")}>
        <div className={ cn(max_width_content ,"flex flex-col justify-center items-center gap-4 px-8 md:px-0")}>

        <div className='min-w-64 flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl text-white font-semibold'>Setup new password</h1>
            <p className='text-sm text-card_text_color text-center md:text-balance'>Have you already reset the password ? <span className='text-blue_text_color'> Sign in</span></p>
        </div>
        <div className='flex flex-col gap-5'>
            <div>
        <input type="text" placeholder="Password" className="text-sm w-full   py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-xl outline-none text-white placeholder-card_text_color  bg-input-bg-color shadow-sm shadow-black" />
        <div className='flex gap-3 justify-center items-center mt-4'>
            <div className='w-1/3 h-1  rounded-md bg-input-bg-color'></div>
            <div className='w-1/3 h-1  rounded-md bg-input-bg-color'></div>
            <div className='w-1/3 h-1  rounded-md bg-input-bg-color'></div>
            <div className='w-1/3 h-1  rounded-md bg-input-bg-color'></div>
   
      
           
           
        </div>
                
            </div>
        <p className="text-[12px] md:text-sm  text-card_text_color opacity-80 font-normal">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
        <input type="text" placeholder="Repeat Password" className="text-sm w-full min-w-64   py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color bg-opacity-50  rounded-xl bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black "/>
        <div className="flex justify-start items-center gap-4">

        <input type="checkbox" className="bg-card-bg-color p-3 rounded-md" />
        <p className="text-card_text_color text-sm ">I Accept the <span className="text-blue_text_color ">Terms</span></p>
        </div>
   
        <Link href="/authentication/choose-account-type"><Button props='Submit' style='max-w-2xl min-w-72'/></Link>
        </div>
        </div>
      
    </div>
  )
}

export default Setupnewpassword
