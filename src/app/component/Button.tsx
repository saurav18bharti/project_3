import { button_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import React from "react";

const Button = ({ props, style }: { props: string; style?: string }) => {
  return <button className={cn(button_style, style)}>{props}</button>;
};

export default Button;
