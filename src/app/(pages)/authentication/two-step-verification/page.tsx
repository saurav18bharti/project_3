import Image from "next/image";
import Link from "next/link";
import React from "react";


const Twostepverification = () => {
  return (
    <div className="signin_container bg-card-bg-color flex flex-col justify-center items-center gap-7 lg:gap-8 xl:gap-12 2xl:gap-10 m-4 md:my-16 rounded-3xl py-9 md:max-w-[521px] lg:max-w-[579px] xl:max-w-[789px] md:mx-auto md:p-20 2xl:p-16   ">
      <div className="flex flex-col gap-6" >
        <div className="flex flex-col justify-center items-center gap-2 xl:gap-4">
          <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-2xl font-semibold text-white">Sign In</h1>
          <h3 className="text-xs md:text-sm xl:text-lg 2xl:text-sm text-card_text_color opacity-70">Your Social Campaigns</h3>
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4 xl:gap-6 ">
          <div className="google p-1 bg-apple_google-bg-color border border-apple_google_border_color border-opacity-40  rounded-2xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-3 md:p-2 md:px-4 xl:px-5 2xl:px-6"><Image src="/signin/apple.svg" alt="apple" width={10} height={10} className="h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 " /><p className="hidden md:block md:text-xs xl:text-lg 2xl:text-sm md:text-white ">Sign in with Apple</p> </div>
          <div className="apple p-1 bg-apple_google-bg-color  border border-apple_google_border_color border-opacity-40 rounded-2xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-3 md:p-2 md:px-4 lg:px-3 2xl:px-5"><Image src="/signin/google.svg" alt="google" width={10} height={10} className="h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7" /><p className="hidden md:block md:text-xs xl:text-lg 2xl:text-sm md:text-white">Sign in with Google</p></div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-3">
        <div className="empty_border border border-gray-700 opacity-40 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%] 2xl:w-[25%]"></div>
        <p className="text-xs lg:text-sm xl:text-lg 2xl:text-sm text-card_text_color opacity-70 font-normal">Or with Email</p>
        <div className="empty_border border border-gray-700 opacity-40 border-header-button-2 border-t-1 border-b-0 w-[16%] md:w-[34%] lg:w-[27%] xl:w-[29%]  2xl:w-[25%]"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 xl:gap-10 md:w-[353px] xl:w-[513px] 2xl:w-[454px]">
        <div className="flex flex-col gap-3 xl:gap-5 w-full">

        <input type="text" placeholder="Email" className="text-sm xl:text-lg 2xl:text-sm py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-2xl outline-none text-white placeholder-card_text_color  bg-input-bg-color" />
        <input type="text" placeholder="Password" className="text-sm xl:text-lg 2xl:text-sm py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-2xl bg-input-bg-color text-white placeholder-card_text_color outline-none "/>
        <h4 className="text-blue_text_color text-xs xl:text-lg  2xl:text-sm font-normal text-end">Forgot Password?</h4>
        </div >
        <button className="text-sm xl:text-lg 2xl:text-sm bg-header-button-2 py-2 md:py-3 w-full rounded-2xl">Sign In</button>
        <div className=" flex justify-center items-center gap-1 md:gap-2   "><p className="text-[12px] md:text-sm xl:text-lg 2xl:text-sm text-card_text_color opacity-80 font-normal">Not a Member yet?</p><Link href="/authentication/signup"><span className="text-xs xl:text-lg 2xl:text-sm text-blue_text_color">Sign Up</span></Link></div>
      </div>
    </div>
  );
};

export default Twostepverification;