"use client";
import { greyafterhover } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  FolderClosed,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineAccountBox } from "react-icons/md";
import {
  PiChartPieSliceFill,
  PiNotebookBold,
  PiUserRectangleLight,
} from "react-icons/pi";

export const OverviewLeftPart = () => {
  const [pages, setPages] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);
  const handleList = (title: string) => {
    setPages(title);
    setOpen(!open);
  };
  const items = [
    {
      title: "User Profile",
      icon: <PiUserRectangleLight className="h-5 w-5" />,
      itemlist: [
        { item: "Overview" },
        { item: "Projects" },
        { item: "campaigns" },
        { item: "Documents" },
        { item: "Followers" },
      ],
    },
    {
      title: "Account",
      icon: <MdOutlineAccountBox className="h-5 w-5" />,
      itemlist: [
        { item: "Overview" },
        { item: "Projects" },
        { item: "campaigns" },
        { item: "Documents" },
        { item: "Followers" },
      ],
    },
    {
      title: "Corporate",
      icon: <HiOutlineUserGroup className="h-5 w-5" />,
      itemlist: [
        { item: "Overview" },
        { item: "Projects" },
        { item: "campaigns" },
        { item: "Documents" },
        { item: "Followers" },
      ],
    },
    {
      title: "Blog",
      icon: <PiNotebookBold className="h-5 w-5" />,
      itemlist: [
        { item: "Overview" },
        { item: "Projects" },
        { item: "campaigns" },
        { item: "Documents" },
        { item: "Followers" },
      ],
    },
    {
      title: "Social",
      icon: <IoChatbubblesOutline className="h-5 w-5" />,
      itemlist: [
        { item: "Overview" },
        { item: "Projects" },
        { item: "campaigns" },
        { item: "Documents" },
        { item: "Followers" },
      ],
    },
  ];
  return (
    <div className="w-[221px] flex flex-col justify-between items-center flex-shrink-0 min-h-[100vh] py-8 border-r-1 border-overviewBorderColor">
      <div className="flex flex-col justify-between gap-6 ">
        <div className="flex items-center gap-2">
          <Image
            src="/overview/left/ByeWind.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-white ">ByeWind</p>
        </div>
        <div>
          <div className="text-card_text_color  text-xs flex gap-4 ml-3">
            <p className="hover:text-slate-300">Favourites</p>
            <p className="hover:text-slate-300 ">Recently</p>
          </div>
          <ul className="list-disc custom_disc_color text-white px-8 py-4 flex flex-col gap-5 text-sm ">
            <li className={greyafterhover}>Overview</li>
            <li className={greyafterhover}>Projects</li>
          </ul>
        </div>
        <div>
          <p className="text-card_text_color text-xs hover:text-slate-300 ml-3">
            Dashboards
          </p>
          <div>
            <Link href="/overview">
              <div
                className={cn(
                  greyafterhover,
                  "flex items-center gap-4 px-8 bg-apple_google-bg-color bg-opacity-10 py-1 rounded-xl my-4  text-white pr-12"
                )}
              >
                <PiChartPieSliceFill className="h-8" />
                <h1>Overview</h1>
              </div>
            </Link>
            <ul className="flex flex-col gap-5 text-sm">
              <Link href="/overview/dashboard-eCommerce">
              
              <li
                className={cn(
                  greyafterhover,
                  "flex items-center gap-2 text-white"
                )}
              >
                <ChevronRight className="h-5 text-card_text_color " />
                <ShoppingBag className="h-5" /> <span>eCommerce</span>
              </li>
              </Link>
              <Link href="/overview/dashboard-projects">
                <li
                  className="
                 
                  flex items-center gap-2 text-white cursor-pointer transition  hover:duration-500 hover:text-gray-400"
                >
                  <ChevronRight className="h-5 text-card_text_color" />
                  <FolderClosed className="h-5" /> <span>Projects</span>
                </li>
              </Link>

              <Link href="/overview/dashboard-orderlist">
              <li
                className={cn(
                  greyafterhover,
                  "flex items-center gap-2 text-white"
                )}
              >
                <ChevronRight className="h-5 text-card_text_color" />
                <BookOpen className="h-5" /> <span>Online Courses</span>
              </li>
              </Link>
              
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-card_text_color text-xs hover:text-slate-300 ml-3">
            Pages
          </p>
          <ul className="flex flex-col gap-5 text-sm">
            {items.map((item1) => (
              <>
                <li
                  key={item1.title}
                  className={cn(
                    greyafterhover,
                    "flex items-center gap-2 text-white"
                  )}
                  onClick={() => handleList(item1.title)}
                >
                  {open && pages === item1.title ? (
                    <ChevronDown className="h-5 text-card_text_color" />
                  ) : (
                    <ChevronRight className="h-5 text-card_text_color" />
                  )}
                  {item1.icon} <span>{item1.title}</span>
                </li>

                {item1.itemlist.map((item2) => (
                  <>
                    {pages === item1.title && open && (
                      <p className="pl-16 text-white">{item2.item} </p>
                    )}
                  </>
                ))}
              </>
            ))}
          </ul>
        </div>
      </div>
      <Image src="/logo.svg" alt="logo" width={90} height={60} />
    </div>
  );
};
