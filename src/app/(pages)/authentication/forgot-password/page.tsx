"use client";
import Button from "@/app/component/Button";
import { app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
// p-32  max-w-[789px] mx-4 my-24 md:m-24
const ForgotPassword = () => {
  return (
    <div className={cn(app_style, "py-32 mx-4 md:mx-16 my-10 lg:mx-auto")}>
      <div className="max-w-[23rem] w-full flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
            Forgot Password
          </h1>
          <h3 className="text-sm text-card_text_color opacity-70">
            Enter your email to reset your password.
          </h3>
        </div>

        <form className="w-full flex flex-col gap-4 px-4 md:px-0">
          <div className="w-full flex flex-col gap-2">
            <input
              type="email"
              className="text-xs w-full py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="Please enter your email address"
            />
          </div>

          <Button
            props="Submit"
            style="max-w-2xl min-w-28  flex justify-center items-center gap-1"
          />

          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm text-blue_text_color "
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
