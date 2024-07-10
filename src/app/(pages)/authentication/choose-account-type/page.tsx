import { cn, Radio, RadioGroup } from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";

export const CustomRadio = (props:any) => {
    const {children, ...otherProps} = props;
  
    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1  items-center justify-between",
            "flex-row-reverse max-w-[750px] cursor-pointer rounded-2xl gap-4 p-5 border-2 border-transparent",
            "data-[selected=true]:border-violet-200 border-opacity-10 bg-input-bg-color"
          ),
          description:"ml-10 text-[12px] md:text-sm"
          
        }}
      >
        {children}
      </Radio>
    );
  };
const ChooseAccountType = () => {

  return (
    <div className='bg-card-bg-color flex flex-col justify-center items-center gap-8  rounded-3xl px-12 py-32 md:py-32 max-w-[789px] mx-4 my-24 md:m-24 lg:mx-auto'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-lg md:text-xl xl:text-3xl  font-semibold text-white'>Choose Account Type</h1>
        <h3 className='text-xs md:text-sm  text-card_text_color opacity-70 text-center md:text-balance'>If you need more info, please check out <span className='text-blue_text_color'>Help Page</span> .</h3>
      </div>
  
      <RadioGroup  >
      <CustomRadio description="If you need more info, please check it out." value="free">
        <div className='flex gap-3 text-[14px] md:text-base font-semibold text-white text-nowrap'>
        <VscAccount className='h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 text-white'/>
      Personal Account
            </div>
      </CustomRadio>
      <CustomRadio description="Create corporate account to many users." value="pro">
        <div className='flex gap-3 text-[14px] md:text-base font-semibold text-white text-nowrap'>
        <VscAccount className='h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 text-white'/>
            Corporate Account
        </div>
      </CustomRadio>
      
    </RadioGroup>
    


      <Link href="/authentication/account-info"><button className="text-sm bg-header-button-2 py-2   max-w-2xl min-w-72 w-full rounded-xl mt-4 flex justify-center items-center gap-1">submit <MdKeyboardArrowRight className='h-5 w-5 text-gray-500'/></button></Link>
    
   
      
    </div>
  )
}

export default ChooseAccountType
