import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return <div className="fixed left-0 top-0 w-full bg-gradient-to-r from-gray-800 to-slate-500 bg-opacity-80 z-10  ">{children}</div>;
}
