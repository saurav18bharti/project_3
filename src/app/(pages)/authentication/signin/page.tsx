import { app_style, max_width_content } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const SignIn = () => {
  return (
    <div className={cn(app_style," max-w-[717px]   py-16 mx-4 my-12 md:mx-auto")}>
      <div className= " max-w-[23rem] flex flex-col gap-4 w-full">

      <div className="flex flex-col gap-6" >
        <div className="flex flex-col justify-center items-center gap-2 xl:gap-4">
          <h1 className="text-lg md:text-xl xl:text-2xl  font-semibold text-white">Sign In</h1>
          <h3 className=" text-sm  text-card_text_color opacity-70">Your Social Campaigns</h3>
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4 ">
          <div className="google p-1 bg-apple_google-bg-color border border-apple_google_border_color border-opacity-40  rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4  "><Image src="/signin/apple.svg" alt="apple" width={10} height={10} className="h-6 w-6  " /><p className="hidden md:block text-xs  md:text-white whitespace-nowrap ">Sign in with Apple</p> </div>
          <div className="apple p-1 bg-apple_google-bg-color  border border-apple_google_border_color border-opacity-40 rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4  "><Image src="/signin/google.svg" alt="google" width={10} height={10} className="h-6 w-6 " /><p className="hidden md:block text-xs  md:text-white whitespace-nowrap">Sign in with Google</p></div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-3">
        <div className="empty_border border border-gray-700 opacity-40 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%] 2xl:w-[25%]"></div>
        <p className="text-sm  text-card_text_color opacity-70 font-normal">Or with Email</p>
        <div className="empty_border border border-gray-700 opacity-40 border-header-button-2 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%]  2xl:w-[25%]"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 px-8 md:px-0 w-full">
        <div className="flex flex-col gap-3 xl:gap-5 w-full">

        <input type="text" placeholder="Email" className="text-sm  py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-xl outline-none text-white placeholder-card_text_color  bg-input-bg-color" />
        <input type="text" placeholder="Password" className="text-sm py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-xl bg-input-bg-color text-white placeholder-card_text_color outline-none "/>
        <Link href="/authentication/two-step-verification"><h4 className="text-blue_text_color  text-sm font-normal text-end">Forgot Password?</h4></Link>
        </div >
        <button className="text-sm xl:text-sm bg-header-button-2 py-2 md:py-3 w-full rounded-2xl">Sign In</button>
        <div className=" flex justify-center items-center gap-1 md:gap-2   "><p className="text-sm  text-card_text_color opacity-80 font-normal">Not a Member yet?</p><Link href="/authentication/signup"><span className="text-sm text-blue_text_color">Sign Up</span></Link></div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
