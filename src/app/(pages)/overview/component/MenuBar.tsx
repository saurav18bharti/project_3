import Image from 'next/image'
import React from 'react'
import { TfiMenuAlt } from 'react-icons/tfi'

interface showview {
  view: boolean,
  setView: (value: boolean) => void
}
const MenuBar = ({view, setView}:showview) => {
  return (
    <div className="flex justify-between items-center gap-4">
    <h1 className="text-white font-semibold">User List</h1>
   <div className="flex gap-2">
    <div className="p-2 cursor-pointer" onClick={() => setView(false)}>  <TfiMenuAlt className="text-white"/></div>
 
   <div onClick={() => setView(true)} className="p-2 bg-apple_google-bg-color rounded-xl cursor-pointer">

   <Image  src="/overview/userlist/listview.svg" width={8} height={8} alt="apple" className="size-4"/>
   </div>
   </div>
  </div>
  )
}

export default MenuBar
