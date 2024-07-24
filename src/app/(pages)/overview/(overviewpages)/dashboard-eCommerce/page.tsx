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
import PieGraph from "../../component/PieGraph";

const DashboardEcommerce = () => {
  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">eCommerce</h1>
      <div className="flex  flex-col 2xl:flex-row justify-center  gap-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2  gap-4   w-full ">
          <OverviewCard data={CARDDATA} />
        </div>

        <BarGraph
          data={DEVICEDATA}
          title="Projection vs Actuals"
          customwidth={660}
          customheight={220}
          barSize={32}
          fill="#82ca9d"
        />
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-4 py-6    ">
        <div className={cn(graphshadow, "flex-basis")}>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12  w-full">
            <p className="text-white font-semibold">Revenue</p>

            <div className="empty_border border hidden xl:block border-apple_google_border_color border-r-1 border-l-0 h-5"></div>
            <div className="flex items-center gap-12">
              <p className="flex flex-col md:flex-row text-center text-sm md:text-base md:text-balance justify-center items-center gap-2 text-white bg-overviewBorderColor px-2 py-1 rounded-xl hover:scale-[1.02] active:scale-[1.02]">
                <Image
                  src="/overview/midcontent/dot.svg"
                  width={6}
                  height={6}
                  alt="total users"
                />
                Current Week $58,211
              </p>
              <p className="flex flex-col md:flex-row  text-center text-sm md:text-base md:text-balance justify-center items-center gap-2 text-white bg-overviewBorderColor px-2 py-1 rounded-xl transition-all hover:scale-[1.02] active:scale-[1.02]">
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
          <div className="mt-12 md:mt-6 flex gap-8 ">
            <LineGraph
              data={MONTHDATA}
              yAxisTickFormatter={zeroFormatter}
              width={600}
              height={380}
            />
          </div>
        </div>
        <div className={cn(graphshadow, "basis-1/4")}>
          <h1 className=" text-white font-semibold ">Revenue by Location</h1>
          <Image
            src="/overview/midcontent/map.svg"
            width={660}
            height={240}
            alt="line graph"
            className="mt-6"
          />
          <ul className="mt-6 flex flex-col gap-6">
            {cities.map((cityData, index) => (
              <li key={index} className="relative text-white pb-2">
                <span>
                  {cityData.city} {(cityData.revenue / 1000).toFixed(0)}K
                </span>
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gray-300"
                  style={{ width: `${(cityData.revenue / MAXREVENUE) * 100}%` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-col xl:flex-row justify-between gap-4">
          <div className={cn(graphshadow, "w-full  basis-full")}>
            <h1 className="text-white font-semibold">Top Selling Products</h1>

            <ProductTable />
          </div>
          <PieGraph
            customwidth={200}
            customheight={300}
            data={CUSTOMDATA}
            pieData={CUSTOMPIEDATA}
            title="Revenue Breakdown"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardEcommerce;

const CARDDATA = [
  {
    title: "Views",
    value: "$7,265",
    valueinpercentage: "+11.01%",
    icon: "/overview/midcontent/increarrow.svg",
    icon2: <FolderClosed />,
  },
  {
    title: "Customers",
    value: "$1219",
    valueinpercentage: "-0.03%",
    icon: "/overview/midcontent/decrearrow.svg",
    icon2: <ListChecks />,
  },
  {
    title: "Orders",
    value: "$316",
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

const DEVICEDATA = [
  { name: "Linux", value: 18000 },
  { name: "Mac", value: 30000 },
  { name: "iOS", value: 20000 },
  { name: "Windows", value: 32000 },
  { name: "Android", value: 10000 },
  { name: "Other", value: 25000 },
];

const MONTHDATA = [
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

const MAXREVENUE = Math.max(...cities.map((city) => city.revenue));

const CUSTOMDATA = [
  { name: "Group E", value: 500 },
  { name: "Group F", value: 1000 },
  { name: "Group G", value: 1500 },
  { name: "Group H", value: 200 },
];

const CUSTOMPIEDATA = [
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

interface ProductData {
  name: string;
  price: number;
  quantity: number;
}

const products: ProductData[] = [
  { name: "Product A", price: 50, quantity: 3 },
  { name: "Product B", price: 75, quantity: 2 },
  { name: "Product C", price: 30, quantity: 5 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
];

const ProductTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-card_text_color text-xs sm:text-base font-light border-b border-card_text_color">
            <th className="py-2 sm:py-4 px-2 sm:px-6 text-left font-medium text-overviewBorderColor tracking-wider">
              Name
            </th>
            <th className="py-2 sm:py-4 px-2 sm:px-6 text-right font-medium text-overviewBorderColor tracking-wider">
              Price
            </th>
            <th className="py-2 sm:py-4 px-2 sm:px-6 text-right font-medium text-overviewBorderColor tracking-wider">
              Quantity
            </th>
            <th className="py-2 sm:py-4 px-2 sm:px-6 text-right font-medium text-overviewBorderColor tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="text-white text-xs sm:text-sm font-light">
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-left whitespace-nowrap">
                <span className="font-medium">{product.name}</span>
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-right">
                ${product.price.toFixed(2)}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-right">
                {product.quantity}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-6 text-right">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
