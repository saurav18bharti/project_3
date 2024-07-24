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
          className={` ${(pathname === "/overview/dashboard-eCommerce") && (index === 1 || index === 2) ? "bg-bodyBackgroundColor text-white hover:text-black" :     index % 2 === 0
            ? "bg-overviewBackgroundColor1"
            : "bg-overviewBackgroundColor2"} flex flex-col flex-grow  gap-4 2xl:gap-6  p-4 sm:p-6 lg:p-8 rounded-xl hover:bg-white cursor-pointer  hover:duration-100 hover:shadow-md hover:shadow-black transition-all   active:scale-[1.01] hover:bg-opacity-90 shadow-[12px_4px_12px_rgba(0,0,0,0.8) `}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl xl:text-lg  font-normal">{item.title}</h2>
            { pathname === "/overview/dashboard-projects" && item.icon2}
          </div>
          <div className="flex justify-between items-center gap-12">
            <p className="font-semibold text-xl lg:text-2xl">{item.value}</p>
            <div className={`flex flex-wrap justify-center gap-1   items-center ${pathname === "/overview/dashboard-eCommerce" ? "gap-1" : "gap-4"} text-xs`}>
              <span>{item.valueinpercentage}</span>
              <Image src={item.icon} width={16} height={20} alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
