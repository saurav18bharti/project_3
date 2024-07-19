import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return <div className="fixed left-0 top-0 w-full  bg-black/60 backdrop-blur-sm z-10  ">{children}</div>;
}
