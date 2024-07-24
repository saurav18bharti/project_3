import React, { useState } from 'react'
import { Plus, X } from "lucide-react";
import { DatePicker, Input, Textarea } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import Modal from './Modal';

const NewUserCard = ({showmodal, setShowmodal}: {showmodal: boolean, setShowmodal: (value: boolean) => void}) => {
 
  return (
    <Modal>
    <div className="flex items-center justify-center min-h-screen  bg-opacity-10">
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center p-6">
        <Plus className="text-white " />
        <h1 className="text-white text-4xl font-semibold">New</h1>
        <div className="p-1 hover:bg-white hover:bg-opacity-10 rounded-xl">
          {" "}
          <X
            className="text-white cursor-pointer"
            onClick={() => setShowmodal(!showmodal)}
          />
        </div>
      </div>
      <div className="bg-bodyBackgroundColor py-16 px-12 rounded-2xl">
        <div className="flex flex-col gap-8">
          <div className="p-5 bg-apple_google-bg-color w-fit rounded-full">
            <FaUser className="text-white text-2xl" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <Input type="text" label="First Name" />
              <Input type="text" label ="Last Name"/>
            </div>
            <Input type="text" label="Email " placeholder="Type enter Your email" />
            <DatePicker label="date"/>
            <div className="flex justify-between gap-4">
              <button
                className="text-white bg-apple_google-bg-color py-2 px-14 rounded-xl cursor-pointer hover:bg-overviewBorderColor hover:transition-all"
                onClick={() => setShowmodal(!showmodal)}
              >
                Cancel
              </button>
              <button className="text-black bg-blue_text_color py-2 px-14 rounded-xl cursor-pointer  hover:bg-opacity-90">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </Modal>

  )
}

export default NewUserCard
