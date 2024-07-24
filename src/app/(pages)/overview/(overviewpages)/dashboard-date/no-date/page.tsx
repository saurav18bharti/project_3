import { maincontentpadding } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import { Clock3, Plus, Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashboardNodate = () => {
  const DATA = [
    {
      icon: <Rocket />,
      title: "Launch Product",
      desc: "If you haven’t launched your product yet, come back when you do.",
    },
    {
      icon: <Clock3 />,
      title: "Waiting for data",
      desc: "Waiting for data",
    },
    {
      icon: <Plus />,
      title: "Adding data",
      desc: "Please add data manually on other pages.",
    },
  ];
  return (
    <div className={maincontentpadding}>
      <div className=" flex flex-col gap-8 max-w-md mx-auto py-52  ">
        <div className="flex flex-col gap-4 justify-center  items-center">
          <h1 className="text-white font-semibold text-xl">No date</h1>
          <Image
            src="/overview/nodate/nodate.svg"
            alt="logo"
            width={80}
            height={50}
          />
        </div>
        <div className="empty_border border border-t-0 border-opacity-20 border-apple_google_border_color"></div>
        <div className="flex flex-col gap-4 justify-center  items-center">
          <h1 className="text-2xl text-white font-normal">You may need</h1>
          <div className="flex flex-col justify-center gap-4    ">
            {DATA.map((item, index) => (
              <div
                className="flex p-4 gap-4 bg-apple_google_border_color  bg-opacity-10 rounded-xl "
                key={index}
              >
                <div className="text-white pt-2">{item.icon}</div>
                <div className="fle flex-col ">
                  <h1 className="text-white font-semibold">{item.title}</h1>
                  <p className="text-card_text_color text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNodate;
