"use client";
import { graphshadow, maincontentpadding } from "@/utils/constant";
import React from "react";
import { OverviewCard } from "../../component/OverviewCard";
import { BatteryCharging, FolderClosed, ListChecks } from "lucide-react";
import { PiUsersThreeLight } from "react-icons/pi";
import BarGraph from "../../component/BarGraph";
import Image from "next/image";
import LineGraph from "../../component/LineGraph";
import { cn, zeroFormatter } from "@/utils/helpers";
import { ProductTable } from "../../component/Table";
import PieGraph from "../../component/PieGraph";

const DashboardEcommerce = () => {
  const cardData = [
    {
      title: "Views",
      value: "7,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <FolderClosed />,
    },
    {
      title: "Customers",
      value: "1219",
      valueinpercentage: "-0.03%",
      icon: "/overview/midcontent/decrearrow.svg",
      icon2: <ListChecks />,
    },
    {
      title: "Orders",
      value: "316",
      valueinpercentage: "+6.08%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <PiUsersThreeLight />,
    },
    {
      title: "Revenue",
      value: "$695",
      valueinpercentage: "+15.03%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <BatteryCharging />,
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

  const monthdata = [
    {
      name: "Jan",
      uv: 2000,
      pv: 5000,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 10000,
      pv: 12000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 10000,
      pv: 12000,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 5000,
      pv: 19000,
      amt: 2000,
    },
    {
      name: "May",
      uv: 19000,
      pv: 19000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 26000,
      pv: 24000,
      amt: 2500,
    },
  ];

  interface CityRevenue {
    city: string;
    revenue: number;
  }

  const cities: CityRevenue[] = [
    { city: "New York", revenue: 72000 },
    { city: "San Francisco", revenue: 39000 },
    { city: "Sydney", revenue: 25000 },
    { city: "Singapore", revenue: 61000 },
  ];

  const maxRevenue = Math.max(...cities.map((city) => city.revenue));

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

  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">eCommerce</h1>
      <div className="flex justify-center items-center gap-8 mt-6">
        <div className="grid grid-cols-2 gap-8">
          <OverviewCard data={cardData} />
        </div>

        <BarGraph
          data={deviceData}
          title="Projection vs Actuals"
          customwidth={660}
          customheight={240}
          barSize={40}
          fill="#82ca9d"
        />
      </div>

      <div className="flex justify-between gap-6 py-10  ">
        <div className={graphshadow}>
          <div className="flex items-center gap-12  w-full">
            <p className="text-white font-semibold">Revenue</p>

            <div className="empty_border border border-apple_google_border_color border-r-1 border-l-0 h-5"></div>
            <div className="flex items-center gap-12">
              <p className="flex justify-center items-center gap-2 text-white">
                <Image
                  src="/overview/midcontent/dot.svg"
                  width={6}
                  height={6}
                  alt="total users"
                />
                Current Week $58,211
              </p>
              <p className="flex justify-center items-center gap-2 text-white">
                <Image
                  src="/overview/midcontent/dot.svg"
                  width={6}
                  height={6}
                  alt="total users"
                />
                Previous Week $68,768
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-8">
            <LineGraph
              data={monthdata}
              yAxisTickFormatter={zeroFormatter}
              width={1000}
            />
          </div>
        </div>
        <div className={graphshadow}>
          <h1 className=" text-white font-semibold ">Revenue by Location</h1>
          <Image
            src="/overview/midcontent/map.svg"
            width={660}
            height={240}
            alt="line graph"
            className="mt-6"
          />
          <ul className="mt-6 flex flex-col gap-8">
            {cities.map((cityData, index) => (
              <li key={index} className="relative text-white pb-2">
                <span>
                  {cityData.city} {(cityData.revenue / 1000).toFixed(0)}K
                </span>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gray-300"
                  style={{ width: `${(cityData.revenue / maxRevenue) * 100}%` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex justify-between gap-8">
          <div className={cn(graphshadow, "w-full")}>
            <h1 className="text-white font-semibold">Top Selling Products</h1>

            <ProductTable />
          </div>
          <PieGraph
            customwidth={230}
            customheight={300}
            data={customData}
            pieData={customPieData}
            title="Revenue Breakdown"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardEcommerce;
