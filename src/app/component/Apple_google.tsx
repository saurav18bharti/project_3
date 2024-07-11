import Image from 'next/image'
import React from 'react'

const Apple_google = () => {
    const style = {
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // This is the hover state
      };
  return (
    <div className="flex justify-center items-center gap-3 md:gap-4">
    <div className="google p-1 bg-apple_google-bg-color border border-apple_google_border_color border-opacity-40  rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 hover:shadow-gray-500 cursor-pointer" style={style}>
      <Image
        src="/signin/apple.svg"
        alt="apple"
        width={10}
        height={10}
        className="h-6 w-6 "
      />
      <p className="hidden md:block text-xs  md:text-white whitespace-nowrap ">
        Sign in with Apple
      </p>{" "}
    </div>
    <div className="apple p-1 bg-apple_google-bg-color  border border-apple_google_border_color border-opacity-40 rounded-xl shadow-border shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 hover:shadow-gray-500 cursor-pointer  " style={style}>
      <Image
        src="/signin/google.svg"
        alt="google"
        width={10}
        height={10}
        className="h-6 w-6 "
      />
      <p className="hidden md:block text-xs  md:text-white whitespace-nowrap">
        Sign in with Google
      </p>
    </div>
  </div>
  )
}

export default Apple_google
