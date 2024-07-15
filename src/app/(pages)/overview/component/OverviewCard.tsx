import Image from "next/image";
import React from "react";

type cardProps = {
  data: {
    title: string;
    value: string;
    valueinpercentage: string;
    icon: string;
  }[];
};

export const OverviewCard = ({ data }: cardProps) => {
  return (
    <>
   
      {data.map((item, index) => (
        <div key={index} className={`${index%2 === 0 ? "bg-overviewBackgroundColor1" : "bg-overviewBackgroundColor2"} flex flex-col gap-4 p-8 rounded-xl hover:bg-white cursor-pointer transition hover:duration-100 hover:shadow-md hover:shadow-black `}>
          <h2 className="text-2xl font-normal">{item.title}</h2>
          <div className="flex justify-between items-center gap-12">
            <p className="font-semibold text-4xl">{item.value}</p>
            <div className="flex justify-between items-center gap-4 text-lg">
              <span>{item.valueinpercentage}</span>
              <Image src={item.icon} width={20} height={20} alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </>
  
  );
};
