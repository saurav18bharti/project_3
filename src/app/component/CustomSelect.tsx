"use client"
import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';

type CustomSelectProps = {
    label:string
    placeholder:string
    options:{
        key:string
        label:string
    }[]
}
const CustomSelect = ({ label, placeholder, options }: CustomSelectProps) => {
  return (
    <div className="w-full">
      <Select
        label={label}
        placeholder={placeholder}
        labelPlacement="outside"
        className="text-black shadow-sm shadow-black rounded-md"
        classNames={{ label: "text-xs md:text-balance text-white font-semibold" }}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
