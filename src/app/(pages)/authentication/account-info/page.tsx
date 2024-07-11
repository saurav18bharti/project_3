import { cn, Radio, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import CustomRadio from "@/app/component/CustomRadio";

export default function AccountInfo() {
  return (
    <div className="bg-card-bg-color flex flex-col justify-center items-center gap-8 rounded-3xl px-16 p-16 max-w-[789px] mx-4 my-24 md:m-12 lg:mx-auto">
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
              <p className="border bg-opacity-40 border-apple_google_border_color border-opacity-40 py-2 px-9 bg-input-bg-color rounded-lg text-white text-nowrap">
                1-1
              </p>
              <p className="border bg-opacity-40 border-apple_google_border_color border-opacity-40 py-2 px-9 bg-input-bg-color rounded-lg text-white text-nowrap">
                2-10
              </p>
              <p className="border bg-opacity-40 border-apple_google_border_color border-opacity-40 py-2 px-9 bg-input-bg-color rounded-lg text-white text-nowrap">
                10-15
              </p>
              <p className="border bg-opacity-40 border-apple_google_border_color border-opacity-40 py-2 px-9 bg-input-bg-color rounded-lg text-white text-nowrap">
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
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
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

        <div className="flex gap-3 justify-center items-center w-full">
          <Link href="/authentication/choose-account-type" className="w-full">
            <button className="text-sm bg-input-bg-color py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1 text-white">
              <IoIosArrowBack className="h-4 w-5 text-gray-500" />
              Previous
            </button>
          </Link>
          <Link href="/authentication/billing-details" className="w-full">
            <button className="text-sm bg-header-button-2 py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1">
              Continue{" "}
              <MdKeyboardArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
