import Image from "next/image";

import { NextUIProvider } from "@nextui-org/react";
import SignIn from "./signin/page";



export default function Home() {
  return (
    <>
    
     <NextUIProvider>
     <SignIn/>
    </NextUIProvider>
    </>
   
  );
}
