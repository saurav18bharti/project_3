import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Header = () => {
  return (
    <header className="">
      <div className=" flex justify-between items-center p-4 md:px-6">
        {/* First Section: Company Logo and Name */}
        <div className="flex items-center ">
          <Image src="/logo.svg" alt="Company Logo" width={40}  height={40} className="h-6 w-20 lg:w-24 lg:h-7 xl:w-28 xl:h-8" />
          
          
        </div>

        {/* Second Section: Navigation Links */}
        <nav className=" hidden md:flex md:gap-4 md:text-xs lg:gap-8 lg:text-sm  ">
          <Link href="#products" className=" hover:text-gray-900 text-white">Products</Link>
          <Link href="#solution" className="hover:text-gray-900 text-white">Solution</Link>
          <Link href="#resources" className="hover:text-gray-900 text-white">Resources</Link>
          <Link href="#download" className="hover:text-gray-900 text-white">Download</Link>
          <Link href="#pricing" className="hover:text-gray-900 text-white">Pricing</Link>
        </nav>

        {/* Third Section: Signup and Signin Buttons */}
        <div className="flex gap-2 md:gap-4">
         <Link href="/authentication/signup" ><button className="px-2 py-1 bg-header-button-1 text-white rounded-lg hover:bg-blue-600 bg-opacity-10 text-xs lg:text-sm ">Sign up</button></Link> 
        <Link href="/authentication/signin" ><button className="px-2 py-1 bg-header-button-2 text-black rounded-lg hover:bg-gray-600 text-xs lg:text-sm ">Sign in</button></Link>  
        </div>
      </div>
    </header>
  );
}

export default Header;
