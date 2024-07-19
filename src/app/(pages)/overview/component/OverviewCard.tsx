'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type cardProps = {
  data: {
    title: string;
    value: string;
    valueinpercentage: string;
    icon: string;
    icon2: JSX.Element;
  }[];
};

export const OverviewCard = ({ data }: cardProps) => {
  const pathname = usePathname();
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 === 0
              ? "bg-overviewBackgroundColor1"
              : "bg-overviewBackgroundColor2"
          } flex flex-col flex-grow gap-4 p-8 rounded-xl hover:bg-white cursor-pointer transition hover:duration-100 hover:shadow-md hover:shadow-black  `}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl lg:text-2xl font-normal">{item.title}</h2>
            { pathname === "/overview/dashboard-projects" && item.icon2}
          </div>
          <div className="flex justify-between items-center gap-12">
            <p className="font-semibold text-2xl lg:text-4xl">{item.value}</p>
            <div className={`flex flex-wrap justify-center  items-center ${pathname === "/overview/dashboard-eCommerce" ? "gap-1" : "gap-4"} text-lg`}>
              <span>{item.valueinpercentage}</span>
              <Image src={item.icon} width={20} height={20} alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
