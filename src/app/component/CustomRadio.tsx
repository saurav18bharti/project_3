'use client'
import React from "react";
import { RadioGroup, Radio, RadioProps } from "@nextui-org/react";
import { cn } from "@/utils/helpers";

const CustomRadio = (props: RadioProps) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
         "inline-flex m-0 bg-content1 items-center justify-between ",
          "flex-row-reverse max-w-[750px] cursor-pointer rounded-2xl gap-4 p-3 border-2 border-transparent",
          "data-[selected=true]:border-violet-200 border-opacity-10 bg-input-bg-color hover:bg-gray-800 hover:transition hover:duration-600 hover:ease-in-out shadow-sm shadow-gray-700"
        ),
      description: "ml-10 text-sm",
      }}
    >
      {children}
    </Radio>
  );
};

export default CustomRadio;
