import { greyafterhover } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import { Bell, Menu, Search, Star, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

export const OverviewHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-12 border-b-1 border-overviewBorderColor">
      <Menu className=" md:hidden text-card_text_color" />
        <div className="hidden md:flex gap-4">
          <Image
            src="/overview/header/button.svg"
            alt="logo"
            width={20}
            height={20}
            className=""
          />
          <Star className={greyafterhover} />
          <h1 className={greyafterhover}>Dashboards</h1>
          <p className={greyafterhover}>/</p>
          <h1 className={greyafterhover}>Default</h1>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-between items-center relative">
              <Search className="absolute lg:p-1 m-1 text-card_text_color ml-[-20px] lg:ml-0" />
              <input
                type="text"
                placeholder="Search"
                className="hidden lg:block bg-card-bg-color py-2 pl-7 text-sm rounded-md outline-none text-white placeholder-card_text_color hover:bg-opacity-80 focus:bg-card-bg-color focus:shadow-md focus:shadow-black transition hover:duration-800 "
              />
              
            </div>
            <div className=" hidden 2xl:flex justify-between items-center gap-4">
              <Sun className={greyafterhover} />
              <Image
                src="/overview/header/clockcounterclockwise.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <Bell className={greyafterhover} />
              <Image
                src="/overview/header/button.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
