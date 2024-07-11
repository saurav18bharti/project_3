import Button from "@/app/component/Button";
import { app_style, max_width_content, otp_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Twostepverification = () => {
  // py-9 md:py-16 mx-4 md:mx-16 my-12 lg:mx-auto
  return (
    <div
      className={cn(
        app_style,
        "py-9 md:pb-[8.9rem] md:pt-[5.9rem] mx-4 md:mx-16 my-12 lg:mx-auto"
      )}
    >
      <div
        className={cn(
          max_width_content,
          "flex flex-col justify-center items-center gap-10"
        )}
      >
        <div className="flex flex-col justify-center items-center gap-8 w-full min-w-52">
          <div className="relative h-14 w-10 md:h-14 md:w-24">
            <Image
              src="/two-step-verification/mobile.svg"
              alt="two-step-verification"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1 className="text-white font-semibold text-lg md:text-xl">
              Two Step Verification
            </h1>
            <p className="text-[12px] md:text-xs text-card_text_color">
              Enter the verification code we sent to
            </p>
          </div>
        </div>
        <h2 className="text-white text-xl">+91 123 456 789</h2>
        <div className="flex flex-col justify-center items-center gap-5  w-full min-w-52">
          <h4 className="text-xs md:text-sm font-semibold text-white">
            Type your 4 digit security code
          </h4>
          <div className="flex justify-center items-center gap-3 ">
            <input
              type="text"
              className="max-w-12 p-3 rounded-xl bg-black bg-opacity-5 border border-white border-opacity-20 text-white"
            />{" "}
            <input
              type="text"
              className="max-w-12 p-3 rounded-xl bg-black bg-opacity-5 border border-white border-opacity-20 text-white"
            />{" "}
            <input
              type="text"
              className="max-w-12 p-3 rounded-xl bg-black bg-opacity-5 border border-white border-opacity-20 text-white"
            />{" "}
            <input
              type="text"
              className="max-w-12 p-3 rounded-xl bg-black bg-opacity-5 border border-white border-opacity-20 text-white"
            />
          </div>

          <Link href="/authentication/setup-new-password">
            {" "}
            <Button props="Submit" style="max-w-sm min-w-72" />
          </Link>
          <p className="text-[13px] md:text-sm text-card_text_color">
            Didn&apos;t get the code ?{" "}
            <span className="text-blue_text_color ">Resend</span> or{" "}
            <span className="text-blue_text_color">Call Us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twostepverification;
