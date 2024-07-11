"use client"
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { cn } from "@/utils/helpers";
import { app_style } from "@/utils/constant";

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
    <div className={cn(app_style,"mx-4 my-16 md:m-16")}>
      <div className="max-w-[28rem]">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-2xl font-semibold text-white">
            Billing Details
          </h1>
          <h3 className="text-xs md:text-sm text-card_text_color opacity-70">
            If you need more info, please check out Help Page.
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center my-7 gap-4">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">Business Name</h1>
            <input
              type="text"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="Enter your business name"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">
              Shortened Descriptor
            </h1>
            <input
              type="text"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="Enter a shortened descriptor"
            />
          </div>
          <div className="w-full">
           
            <Select
              label="Corporation Type"
              placeholder="Select "
              labelPlacement="outside"
              className="max-w-xs bg-input-bg-color"
              classNames={{ label: "!text-white font-semibold"}}
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
              className="text-xs w-full min-w-64 py-2 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="Enter your business description"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-white text-sm">Contact Email</h1>
            <input
              type="email"
              className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="Enter your contact email"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center w-full">
          <Link href="/authentication/account-info" className="w-full">
            <button className="text-sm bg-input-bg-color py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1 text-white">
              <IoIosArrowBack className="h-4 w-5 text-gray-500" />
              Previous
            </button>
          </Link>
          <Link href="/authentication/billing-detail-card" className="w-full">
            <button className="text-sm bg-header-button-2 py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1">
              Continue{" "}
              <MdKeyboardArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
