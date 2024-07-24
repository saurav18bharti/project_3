import React from "react";
import { TbLayoutSidebarRightFilled } from "react-icons/tb";
import { ChevronDown, ChevronUp, Trash2, X } from "lucide-react";
import Image from "next/image";
import { DatePicker, Input, Textarea } from "@nextui-org/react";
import { RiFileCopyLine } from "react-icons/ri";
import { cn } from "@/utils/helpers";

const RightBarMode = () => {
  return (
    <div
      className={
        "w-[300px] border-l-1 border-l-overviewBorderColor pt-6 px-4  h-full hidden xl:block"
      }
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <TbLayoutSidebarRightFilled className={cn(hoverEffect,"text-white text-lg ")} />
          <ChevronUp className={cn(hoverEffect,"text-overviewBorderColor ")} />
          <ChevronDown className={cn(hoverEffect,"text-overviewBorderColor ")} />
        </div>
        <X className="text-overviewBorderColor cursor-pointer  " />
      </div>
      <div className="mt-8 pb-2 flex flex-col justify-between flex-grow">
        <div className="flex justify-between flex-col gap-4">
          <div>
            <h1 className="text-white text-2xl">ByeWind</h1>
            <p className="text-base text-overviewBorderColor">#CM9801</p>
          </div>
          <Image
            src="/overview/left/ByeWind.jpg"
            width={90}
            height={90}
            alt="logo"
            className="rounded-xl"
          />
          <Input classNames={{inputWrapper: "h-16 bg-overviewBorderColor bg-opacity-10 border border-gray-100 border-opacity-20 placeholder-text-opacity-10  " , label:"outside text-gray-400"}} type="name" label="Name" />
          <Input classNames={{inputWrapper: "h-16  bg-overviewBorderColor bg-opacity-10 border border-gray-100 border-opacity-20 placeholder-text-opacity-10  " , label:"outside text-gray-400"}} type="email" label="Email" />
          <Input classNames={{inputWrapper: "h-16  bg-overviewBorderColor bg-opacity-10 border border-gray-100 border-opacity-20 placeholder-text-opacity-10  " , label:"outside text-gray-400 " }} type="address" label="Address"/>
          <DatePicker classNames={{inputWrapper: "h-16  " , label:"outside"}} label="Registeration date" className="max-w-[284px]" />
          <Textarea classNames={{inputWrapper: "h-16  bg-overviewBorderColor bg-opacity-10 border border-gray-100 border-opacity-20 placeholder-text-opacity-10  " , label:"outside text-gray-400 " }} label="Note" />
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex justify-center items-center gap-3">
            <Trash2 className={cn(hoverEffect,"text-white cursor-pointer p-1")}   />
            <RiFileCopyLine className="text-white cursor-pointer" />
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className={cn(hoverEffect,"text-base text-white")}>Cancel</h1>
            <h1 className={cn(hoverEffect,"text-base text-white py-1 px-3 rounded-xl bg-overviewBorderColor")}>Save</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBarMode;

const hoverEffect = "transition-all hover:scale-[1.04] active:scale-[1.03] cursor-pointer";
