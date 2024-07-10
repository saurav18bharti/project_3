import Image from "next/image";
import SignIn from "./authentication/signin/page";
import { NextUIProvider } from "@nextui-org/react";



export default function Home() {
  return (
    <>
    
     <NextUIProvider>
     <SignIn/>
    </NextUIProvider>
    </>
   
  );
}
