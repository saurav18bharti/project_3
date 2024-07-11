"use client";
import { Select, SelectItem, Switch } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

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

  return (
    <div className="bg-card-bg-color flex flex-col justify-center items-center gap-8 rounded-3xl px-16 py-16 max-w-[789px] mx-4 my-24 md:mx-24 md:my-12 lg:mx-auto">
      <div className="max-w-[28rem] flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-2xl font-semibold text-white">
            Billing Details
          </h1>
          <h3 className="text-xs md:text-sm text-card_text_color opacity-70">
            If you need more info, please check out Help Page.
          </h3>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="font-semibold text-white text-sm">Name on Card</h1>
          <input
            type="text"
            className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
            placeholder="Enter the name on card"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <h1 className="font-semibold text-white text-sm">Card Number</h1>
          <input
            type="text"
            className="text-xs w-full min-w-64 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
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
                className="text-xs w-2/3 py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
                placeholder="Month"
              />
              <input
                type="text"
                className="text-xs w-2/3 py-3    px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
                placeholder="Year"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <h1 className="font-semibold text-white text-sm">CVV</h1>
            <input
              type="text"
              className="text-xs w-full py-3 px-3 md:px-4 border border-apple_google_border_color opacity-50 rounded-lg bg-input-bg-color text-white placeholder-card_text_color outline-none"
              placeholder="CVV"
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-4 ">
            <div className="max-w-[58%]">
                <h1 className="text-white text-sm">Save Card for further billing?</h1>
                <p className="text-[12px] text-card_text_color">If you need more info, please check budget planning.</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-[12px] text-card_text_color">Save Card</p>
                    <Switch size="sm" className="h-4" defaultSelected color="default"></Switch>
                </div>

        </div>

        <div className="flex gap-3 justify-center items-center w-full">
          <Link href="/authentication/billing-details" className="w-full">
            <button className="text-sm bg-input-bg-color py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1 text-white">
              <IoIosArrowBack className="h-4 w-5 text-gray-500" />
              Previous
            </button>
          </Link>
          <Link href="/authentication/forgot-password" className="w-full">
            <button className="text-sm bg-header-button-2 py-2 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1">
              Submit <MdKeyboardArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingDetailsCard;