import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function zeroFormatter(num1: string) {
  const num = num1.toString();

  // if (num.includes("/∞")) {
  //   const num2 = Number(num.replace("/∞", ""));
  //   return Math.floor(num2 / 100000) / 10 + "M" + "+∞";
  // }

  if (!num) {
    return num1;
  }
  const N = Number(num);
  if (N >= 1000000000) {
    return Math.floor(N / 100000000) / 10 + "B";
  } else if (N >= 1000000) {
    return Math.floor(N / 100000) / 10 + "M";
  } else if (N >= 1000) {
    return Math.floor(N / 100) / 10 + "K";
  } else {
    return num;
  }
}
