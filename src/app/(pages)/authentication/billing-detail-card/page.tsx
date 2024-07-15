"use client";
import { Select, SelectItem, Switch } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { app_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import { PreContinueButton } from "@/app/component/Button";

const BillingDetailsCard = () => {
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
  // p-16  mx-4 my-24 md:mx-24 md:my-12

  return (
    <div className={cn(app_style ," py-9 sm:py-16 mx-4  my-10 md:mx-auto" )}>
      <div className="max-w-[28rem] flex flex-col gap-8 px-6 md:p-0">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
            Billing Details
          </h1>
          <h3 className="text-sm text-center md:text-balance text-card_text_color opacity-70">
            If you need more info, please check out Help Page.
          </h3>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="font-semibold text-white text-sm">Name on Card</h1>
          <input
            type="text"
            className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
            placeholder="Enter the name on card"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="font-semibold text-white text-sm">Card Number</h1>
          <input
            type="text"
            className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
            placeholder="Enter the card number"
          />
        </div>

        <div className="w-full flex gap-2 max-w-full">
          <div className="flex flex-col gap-2 ">
            <h1 className="font-semibold text-white text-sm">
              Expiration Date
            </h1>
            <div className="flex gap-2">
              <input
                type="text"
                className="text-xs w-2/3 py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
                placeholder="Month"
              />
              <input
                type="text"
                className="text-xs w-2/3 py-3    px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
                placeholder="Year"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="font-semibold text-white text-sm">CVV</h1>
            <input
              type="text"
              className="text-xs w-full py-3 px-3 md:px-4 border border-apple_google_border_color bg-opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none shadow-sm shadow-black"
              placeholder="CVV"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center mt-4 ">
            <div className="  text-center md:text-start w-full md:max-w-[58%]">
                <h1 className="text-white text-sm">Save Card for further billing?</h1>
                <p className="text-[12px] text-card_text_color">If you need more info, please check budget planning.</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-[12px] text-card_text_color">Save Card</p>
                    <Switch size="sm" color="primary" className="h-4 " defaultSelected ></Switch>
                </div>

        </div>

        <PreContinueButton  onContinue="/authentication/forgot-password" previous="/authentication/billing-details"/>
      </div>
    </div>
  );
};

export default BillingDetailsCard;
