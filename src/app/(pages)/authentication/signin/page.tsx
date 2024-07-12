
import Applegoogle from "@/app/component/Applegoogle";
import {Button} from "@/app/component/Button";
import Input from "@/app/component/Input";
import { app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const SignIn = () => {
  return (
    <div className={cn(app_style,"   py-9 sm:py-24 mx-4 md:mx-16 my-12 lg:mx-auto")}>
      <div className= " max-w-[23rem] flex flex-col gap-4 w-full">

      <div className="flex flex-col gap-6" >
        <div className="flex flex-col justify-center items-center gap-2 xl:gap-4">
          <h1 className="text-lg md:text-xl xl:text-2xl  font-semibold text-white ">Sign In</h1>
          <h3 className=" text-sm  text-card_text_color opacity-70">Your Social Campaigns</h3>
        </div>
       <Applegoogle/>
      </div>
      <div className="flex justify-center items-center w-full gap-3">
        <div className="empty_border border border-gray-700 opacity-40 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%] 2xl:w-[25%]"></div>
        <p className="text-sm  text-card_text_color opacity-70 font-normal">Or with Email</p>
        <div className="empty_border border border-gray-700 opacity-40 border-header-button-2 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%]  2xl:w-[25%]"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 px-8 md:px-0 w-full">
        <div className="flex flex-col gap-3 xl:gap-5 w-full">

        <Input/>
        <Link href="/authentication/two-step-verification"><h4 className="text-blue_text_color  text-sm font-normal text-end hover:text-white ">Forgot Password?</h4></Link>
        </div >
        <Button props="Sign In"/>
        <div className=" flex justify-center items-center gap-1 md:gap-2   "><p className="text-sm  text-card_text_color opacity-80 font-normal">Not a Member yet?</p><Link href="/authentication/signup"><span className="text-sm text-blue_text_color">Sign Up</span></Link></div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
