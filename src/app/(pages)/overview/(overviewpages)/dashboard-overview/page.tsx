"use client";
import CustomSelect from "@/app/component/CustomSelect";
import React from "react";
import { OverviewCard } from "../../component/OverviewCard";
import Image from "next/image";
import LineGraph from "../../component/LineGraph";
import BarGraph from "../../component/BarGraph";
import PieGraph from "../../component/PieGraph";
import { graphshadow, maincontentpadding } from "@/utils/constant";
import { cn, zeroFormatter } from "@/utils/helpers";
import { BatteryCharging, FolderClosed, ListChecks } from "lucide-react";
import { PiUsersThreeLight } from "react-icons/pi";

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
      icon2:<FolderClosed />
    },
    {
      title: "Clicks",
      value: "2,265",
      valueinpercentage: "-11.01%",
      icon: "/overview/midcontent/decrearrow.svg",
      icon2:<ListChecks />
    },
    {
      title: "Conversions",
      value: "1,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2:<PiUsersThreeLight />
    },
    {
      title: "CTR",
      value: "11.01%",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2:<BatteryCharging />
    },
  ];


  const customData = [
    { name: "Group E", value: 500 },
    { name: "Group F", value: 1000 },
    { name: "Group G", value: 1500 },
    { name: "Group H", value: 200 },
  ];

  const customPieData = [
    {
      title: "Canada",
      valueinpercentage: "40.2%",
      icon: "/overview/midcontent/dot.svg",
    },
    {
      title: "Mexico",
      valueinpercentage: "25.5%",
      icon: "/overview/midcontent/dot.svg",
    },
    {
      title: "Germany",
      valueinpercentage: "19.3%",
      icon: "/overview/midcontent/dot.svg",
    },
    {
      title: "France",
      valueinpercentage: "15.0%",
      icon: "/overview/midcontent/dot.svg",
    },
  ];

  const deviceData = [
    { name: "Linux", value: 18000 },
    { name: "Mac", value: 30000 },
    { name: "iOS", value: 20000 },
    { name: "Windows", value: 32000 },
    { name: "Android", value: 10000 },
    { name: "Other", value: 25000 },
  ];


  
  const data = [
    {
      name: "Jan",
      uv: 8000,
      pv: 14000,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 12000,
      pv: 9000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 20000,
      pv: 15000,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 8000,
      pv: 25000,
      amt: 2000,
    },
    {
      name: "May",
      uv: 11000,
      pv: 29000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 22000,
      pv: 21000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 28000,
      pv: 21050,
      amt: 2100,
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
    <div className={maincontentpadding}>
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
          <LineGraph
      data={data}
      yAxisTickFormatter={zeroFormatter}
    />
          </div>
        </div>
       
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
        <BarGraph
      data={deviceData}
      title="Traffic by Device"
      customwidth={660}
      customheight={280}
      barSize={40}
      fill="#82ca9d"
    />
        </div>
        <div>
          <PieGraph title="Traffic by Location" data={customData} pieData={customPieData} customwidth={333} customheight={370} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
