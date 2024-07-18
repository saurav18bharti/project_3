import { maincontentpadding } from "@/utils/constant";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashboardNodate = () => {

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
        <div className="flex flex-col gap-8 justify-center  items-center">

        <h1 className="text-2xl text-white font-normal">You may need</h1>

        <div className="flex gap-1 bg-blue_text_color px-3 py-2 text-sm font-normal rounded-xl">
            <Plus className=" h-5"/>
            <button>Add date</button>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default DashboardNodate;
