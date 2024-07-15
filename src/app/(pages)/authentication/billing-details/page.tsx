"use client"
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { cn } from "@/utils/helpers";
import { app_style } from "@/utils/constant";
import { PreContinueButton } from "@/app/component/Button";

const BillingDetails = () => {
  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <div className={cn(app_style ," py-9 sm:py-16 mx-4  my-10 md:mx-auto")}>
      <div className="max-w-[28rem] w-full px-4 md:p-0">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
            Billing Details
          </h1>
          <h3 className="text-sm text-center md:text-balance text-card_text_color opacity-70">
            If you need more info, please check out Help Page.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center my-7 gap-4">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">Business Name</h1>
            <input
              type="text"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black  "
              placeholder="Enter your business name"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">
              Shortened Descriptor
            </h1>
            <input
              type="text"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
              placeholder="Enter a shortened descriptor"
            />
          </div>
          <div className="w-full">
           
            <Select
              label="Corporation Type"
              placeholder="Select "
              labelPlacement="outside"
              className=" text-black shadow-sm shadow-black rounded-md"
              classNames={{ label: "!text-white font-semibold" }}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">
              Business Description
            </h1>
            <textarea
              className="text-xs w-full min-w-64 py-2 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
              placeholder="Enter your business description"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">Contact Email</h1>
            <input
              type="email"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
              placeholder="Enter your contact email"
            />
          </div>
        </div>

       <PreContinueButton onContinue="/authentication/billing-detail-card" previous="/authentication/account-info"/>
      </div>
    </div>
  );
};

export default BillingDetails;
