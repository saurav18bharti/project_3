import { button_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Button = ({ props, style }: { props: string; style?: string }) => {
  return <button className={cn(button_style, style)}>{props}</button>;
};
export const PreContinueButton = ({
  previous,
  onContinue,
}: {
  previous: string;
  onContinue: string;
}) => {
  return (
    <div className="flex gap-3 justify-center items-center w-full">
      <Link href={previous} className="w-full">
        <button className="text-sm bg-input-bg-color py-3 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1 text-white hover:transition   hover:bg-gray-900 hover:font-semibold shadow-sm shadow-black">
          <IoIosArrowBack className="h-4 w-5 text-gray-500" />
          Previous
        </button>
      </Link>
      <Link href={onContinue} className="w-full">
        <button className="text-sm bg-header-button-2 py-3 max-w-2xl min-w-28 w-full rounded-xl mt-6 flex justify-center items-center gap-1 transition   hover:bg-violet-300 hover:font-semibold shadow-sm shadow-black">
          Continue
          <MdKeyboardArrowRight className="h-5 w-5 text-gray-500" />
        </button>
      </Link>
    </div>
  );
};


