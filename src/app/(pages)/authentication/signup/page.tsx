import { app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoEyeClosed } from "react-icons/go";

const SignUp = () => {
  return (
    <div className={cn(app_style, " py-16 mx-4 my-12 md:mx-auto")}>
      <div className=" max-w-[23rem] flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-6 2xl:gap-4">
          <div className="flex flex-col justify-center items-center gap-2 xl:gap-4">
            <h1 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
              Sign Up
            </h1>
            <h3 className="text-sm  text-card_text_color opacity-70">
              Your Social Campaigns
            </h3>
          </div>
          <div className="flex justify-center items-center gap-3 md:gap-4">
            <div className="google p-1 bg-apple_google-bg-color border border-apple_google_border_color border-opacity-40  rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 ">
              <Image
                src="/signin/apple.svg"
                alt="apple"
                width={10}
                height={10}
                className="h-6 w-6 "
              />
              <p className="hidden md:block text-xs  md:text-white whitespace-nowrap ">
                Sign in with Apple
              </p>{" "}
            </div>
            <div className="apple p-1 bg-apple_google-bg-color  border border-apple_google_border_color border-opacity-40 rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 ">
              <Image
                src="/signin/google.svg"
                alt="google"
                width={10}
                height={10}
                className="h-6 w-6 "
              />
              <p className="hidden md:block text-xs  md:text-white whitespace-nowrap">
                Sign in with Google
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full gap-3">
          <div className="empty_border border border-gray-700 opacity-40 border-t-1 border-b-0 w-[31%] md:w-[34%] lg:w-[27%] xl:w-[29%]"></div>
          <p className="text-sm text-card_text_color opacity-70 font-normal">
            Or with Email
          </p>
          <div className="empty_border border border-gray-700 opacity-40 border-header-button-2 border-t-1 border-b-0 w-[31%] md:w-[34%] lg:w-[27%] xl:w-[29%]"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 px-4 md:px-0">
          <div className="flex flex-col gap-5 xl:gap-5 w-full">
            <input
              type="text"
              placeholder="Email"
              className="text-sm  py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50  rounded-xl outline-none text-white placeholder-card_text_color  bg-input-bg-color"
            />
            <div>
              <input
                type="text"
                placeholder="Password"
                className="text-sm w-full  py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50  rounded-xl bg-input-bg-color text-white placeholder-card_text_color outline-none "
              />
              <div className="flex gap-3 justify-center items-center mt-4">
                <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
                <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
                <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
                <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
              </div>
            </div>
            <p className="text-xs md:text-sm  text-card_text_color opacity-80 font-normal">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </p>
            <input
              type="text"
              placeholder="Repeat Password"
              className="text-sm  py-2 px-3 md:py-3 md:px-4 border border-apple_google_border_color opacity-50  rounded-xl bg-input-bg-color text-white placeholder-card_text_color outline-none "
            />
            <div className="flex justify-start items-center gap-3">
              <input
                type="checkbox"
                className="bg-card-bg-color p-3 rounded-md"
              />
              <p className="text-card_text_color text-sm ">
                I Accept the{" "}
                <span className="text-blue_text_color ">Terms</span>
              </p>
            </div>
          </div>
          <button className="text-sm  bg-header-button-2 py-2 md:py-3 w-full rounded-2xl">
            Sign In
          </button>
          <div className=" flex justify-center items-center gap-1 md:gap-2   ">
            <p className="text-[14px] md:text-sm  text-card_text_color opacity-80 font-normal">
              Already have an Account?{" "}
            </p>
            <Link href="/authentication/signin">
              <span className="text-sm  text-blue_text_color">
                Sign In
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
