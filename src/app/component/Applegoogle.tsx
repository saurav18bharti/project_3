import Image from 'next/image'
import React from 'react'


const Applegoogle = () => {
   

  
    return (
        <div className="flex justify-center items-center gap-2">
            <div className="appple_google md:flex-1 p-1 bg-apple_google-bg-color border border-apple_google_border_color border-opacity-40  rounded-xl shadow-border hover:shadow-inner md:inline-flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 hover:shadow-gray-500 cursor-pointer transition hover:bg-slate-800 hover:duration-500 hover:ease-in-out shadow-sm shadow-black" >
                <Image
                    src="/signin/apple.svg"
                    alt="apple"
                    width={10}
                    height={10}
                    className="h-6 w-6 "
                />
                <p className="hidden md:block text-xs  md:text-white whitespace-nowrap">
                    Sign in with Apple
                </p>
            </div>
            <div className="appple_google md:flex-1 p-1 bg-apple_google-bg-color  border border-apple_google_border_color border-opacity-40 rounded-xl shadow-border hover:shadow-inner md:flex md:justify-self-center md:items-center md:gap-1 xl:gap-2 md:p-2 md:px-4 hover:shadow-gray-500 cursor-pointer transition hover:bg-slate-800  hover:duration-500 shadow-sm shadow-black " >
                <Image
                    src="/signin/google.svg"
                    alt="google"
                    width={10}
                    height={10}
                    className="h-6 w-6"
                />
                <p className="hidden md:block text-xs  md:text-white whitespace-nowrap">
                    Sign in with Google
                </p>
            </div>
        </div>
    )
}

export default Applegoogle
