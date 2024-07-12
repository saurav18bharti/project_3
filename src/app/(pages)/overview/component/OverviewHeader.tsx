import { greyafterhover } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import { Bell, Search, Star, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

export const OverviewHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-12 border-b-1 border-overviewBorderColor">
        <div className="flex gap-4">
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
              <Search className="absolute p-1 m-1 text-card_text_color" />
              <input
                type="text"
                placeholder="Search"
                className="bg-card-bg-color py-2 pl-7 text-sm rounded-md outline-none text-white placeholder-card_text_color hover:bg-opacity-80 focus:bg-card-bg-color focus:shadow-md focus:shadow-black transition hover:duration-800 "
              />
            </div>
            <div className="flex justify-between items-center gap-4">
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
