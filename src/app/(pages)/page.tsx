import Image from "next/image";
import SignIn from "./authentication/signin/page";



export default function Home({children}: {children: React.ReactNode}) {
  return (
    <>
     <SignIn/>
    </>
   
  );
}
