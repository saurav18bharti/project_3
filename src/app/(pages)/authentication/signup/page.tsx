import Apple_google from "@/app/component/Apple_google";
import Button from "@/app/component/Button";
import Input from "@/app/component/Input";
import { app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";

import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div
      className={cn(app_style, " py-9 md:py-16 mx-4 md:mx-16 my-12 lg:mx-auto")}
    >
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
          <Apple_google />
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
            <Input />
            <div className="flex gap-3 justify-center items-center">
              <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
              <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
              <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
              <div className="w-1/3 h-1  rounded-md bg-input-bg-color"></div>
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
          <Button props="Sign Up" />
          <div className=" flex justify-center items-center gap-1 md:gap-2   ">
            <p className="text-[14px] md:text-sm  text-card_text_color opacity-80 font-normal">
              Already have an Account?{" "}
            </p>
            <Link href="/authentication/signin">
              <span className="text-sm  text-blue_text_color">Sign In</span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
