import {  Radio, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import CustomRadio from "@/app/component/CustomRadio";
import { account_info_specify_team, app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import { PreContinueButton } from "@/app/component/Button";

export default function AccountInfo() {
  return (
    <div className={cn(app_style ," py-9 sm:py-12 mx-4  my-10 md:mx-auto") }>
      <div className="max-w-[28rem]">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-2xl font-semibold text-white">
            Account Info
          </h1>
          <h3 className="text-xs md:text-sm text-card_text_color opacity-70">
            If you need more info, please check out{" "}
            <span className="text-blue_text_color">Help Page</span>.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center my-7 gap-4">
          <div className="flex flex-col justify-center gap-3">
            <h1 className="font-semibold text-white text-sm">
              Specify Team Size
            </h1>
            <div className="flex gap-3 text-white font-normal text-sm">
              <p className={account_info_specify_team}>
                1-1
              </p>
              <p className={account_info_specify_team}>
                2-10
              </p>
              <p className={account_info_specify_team}>
                10-15
              </p>
              <p className={account_info_specify_team}>
                50+
              </p>
            </div>
            <p className="text-xs md:text-sm text-card_text_color opacity-70">
              Customers will see this shortened version of your statement
              descriptor.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">
              Team Account Name
            </h1>
            <input
              type="text"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-md shadow-black"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-white mb-4">Select Account Plan</h1>
          <RadioGroup>
            <CustomRadio
              description="Use images to enhance your post flow."
              value="free"
            >
              <div className="flex gap-3 text-sm md:text-base font-semibold text-white">
                <VscAccount className="h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 text-white" />
                Company Account
              </div>
            </CustomRadio>
            <CustomRadio
              description="Use images to your post time."
              value="pro"
            >
              <div className="flex gap-3 text-sm md:text-base font-semibold text-white">
                <VscAccount className="h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 text-white" />
                Developer Account
              </div>
            </CustomRadio>
            <CustomRadio
              description="Use images to your post time."
              value="use image"
            >
              <div className="flex gap-3 text-sm md:text-base font-semibold text-white">
                <VscAccount className="h-6 w-6 md:h-5 xl:h-8 xl:w-8 2xl:h-7 2xl:w-7 text-white" />
                Testing Account
              </div>
            </CustomRadio>
          </RadioGroup>
        </div>

        <PreContinueButton onContinue="/authentication/billing-details" previous="/authentication/choose-account-type"/>
      </div>
    </div>
  );
}
