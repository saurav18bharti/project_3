import {  RadioGroup } from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import CustomRadio from '@/app/component/CustomRadio';
import { cn } from '@/utils/helpers';
import { app_style, max_width_content } from '@/utils/constant';


const ChooseAccountType = () => {

  return (
    <div className={cn(app_style,"py-[9.7rem] mx-8 md:mx-24 lg:mx-auto ")}>
      <div className=" max-w-[23rem] flex flex-col justify-center items-center gap-8">
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-lg md:text-xl xl:text-2xl  font-semibold text-white'>Choose Account Type</h1>
        <h3 className='text-sm  text-card_text_color opacity-70 text-center md:text-balance'>If you need more info, please check out <span className='text-blue_text_color'>Help Page</span> .</h3>
      </div>
  <div className='flex flex-col gap-6 px-8 md:px-0'>

      <RadioGroup  >
      <CustomRadio description="If you need more info, please check it out." value="free">
        <div className='flex gap-3 text-[14px]  font-semibold text-white text-nowrap'>
        <VscAccount className='h-6 w-6  text-white'/>
      Personal Account
            </div>
      </CustomRadio>
      <CustomRadio description="Create corporate account to many users." value="pro">
        <div className='flex gap-3 text-[14px]  font-semibold text-white text-nowrap'>
        <VscAccount className='h-6 w-6  text-white'/>
            Corporate Account
        </div>
      </CustomRadio>
      
    </RadioGroup>
    


      <Link href="/authentication/account-info" className='w-full'><button className="text-sm bg-header-button-2 py-3   max-w-2xl min-w-72 w-full rounded-xl  flex justify-center items-center gap-1  transition   hover:bg-violet-300 hover:font-semibold shadow-sm shadow-black">submit <MdKeyboardArrowRight className='h-5 w-5 text-gray-500'/></button></Link>
  </div>
        </div>
    
   
      
    </div>
  )
}

export default ChooseAccountType
