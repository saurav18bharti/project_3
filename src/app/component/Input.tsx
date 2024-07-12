import { input_style } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import React from "react";

const Input = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className={input_style}
      />
      <input
        type="text"
        placeholder="Password"
        className={input_style}
      />
    </>
  );
};

export default Input;
