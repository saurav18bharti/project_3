"use client";
import CustomSelect from "@/app/component/CustomSelect";
import React from "react";
import { OverviewCard } from "../../component/OverviewCard";
import Image from "next/image";
import LineGraph from "../../component/LineGraph";
import BarGraph from "../../component/BarGraph";
import PieGraph from "../../component/PieGraph";
import { graphshadow } from "@/utils/constant";
import { cn } from "@/utils/helpers";

const DashboardOverview = () => {
  const day = [
    { key: "yesterday", label: "yesterday" },
    { key: "today", label: "Today" },
    { key: "tomorrow", label: "Tomorrow" },
  ];

  const cardData = [
    {
      title: "Views",
      value: "7,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
    },
    {
      title: "Clicks",
      value: "2,265",
      valueinpercentage: "-11.01%",
      icon: "/overview/midcontent/decrearrow.svg",
    },
    {
      title: "Conversions",
      value: "1,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
    },
    {
      title: "CTR",
      value: "11.01%",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
    },
  ];

  const TrafficBorder = ({ width }: any) => {
    return (
      <>
        <div className={`flex gap-2 mt-3 ${width}`}>
          <div className="border-t-2 border-white w-10 opacity-80 rounded-t-full "></div>
          <div className="border-t-2 border-white w-10 opacity-40 rounded-t-full "></div>
          <div className="border-t-2 border-white w-10 opacity-20 rounded-t-sm"></div>
        </div>
      </>
    );
  };

  return (
    <div className="py-8 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-semibold">Overview</h1>
        <div className="w-32 ">
          <CustomSelect label="" placeholder="Today" options={day} />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <OverviewCard data={cardData} />
      </div>
      <div className="flex justify-between gap-6 py-10  ">
        <div className={graphshadow}>
          <div className="flex items-center gap-12  w-full">
            <div className="flex items-center gap-16">
              <p className="text-blue_text_color font-semibold">Total Users</p>
              <p className="text-card_text_color opacity-50">Total Projects</p>
              <p className="text-card_text_color opacity-50">
                Operating Status
              </p>
            </div>
            <div className="empty_border border border-apple_google_border_color border-r-1 border-l-0 h-5"></div>
            <div className="flex items-center gap-12">
              <p className="flex justify-center items-center gap-2 text-white">
                <Image
                  src="/overview/midcontent/dot.svg"
                  width={6}
                  height={6}
                  alt="total users"
                />
                This year
              </p>
              <p className="flex justify-center items-center gap-2 text-white">
                <Image
                  src="/overview/midcontent/dot.svg"
                  width={6}
                  height={6}
                  alt="total users"
                />
                Last year
              </p>
            </div>
          </div>
          <div className="mt-6 ">
            <LineGraph />
          </div>
        </div>
        {/* "bg-apple_google-bg-color bg-opacity-10 p-6 rounded-xl hover:shadow-md hover:shadow-black cursor-pointer hover:cursor-pointer" */}
        <div
          className={cn(graphshadow, "py-6 px-8 w-full gap-8  flex flex-col ")}
        >
          <h1 className="whitespace-nowrap font-semibold text-white text-lg">
            Traffic by Website
          </h1>
          <div className="flex   gap-5">
            <ul className="flex flex-col gap-8 text-white">
              <li>Google </li>
              <li>Youtube </li>
              <li>Instagram </li>
              <li>Pinterest </li>
              <li>facebook </li>
              <li>Twitter </li>
            </ul>

        
            <div className="flex flex-col gap-11">

            <TrafficBorder width="w-20" />
            <TrafficBorder width="w-24" />
            <TrafficBorder width="w-20" />
            <TrafficBorder />
            <TrafficBorder width="w-16" />
            <TrafficBorder widh="w-28" />

            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        <div className="flex justify-center cursor-pointer">
          <BarGraph />
        </div>
        <div>
          <PieGraph />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
