import { ArrowDownUp, ListFilter, Plus, Search } from 'lucide-react'
import React from 'react'

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-1 bg-overviewBorderColor bg-opacity-15 rounded-lg my-4">
        <div className="flex justify-between items-center gap-6 px-4">
          <Plus className="text-white hover:text-card_text_color cursor-pointer" />
          <ListFilter className="text-white hover:text-card_text_color cursor-pointer" />
          <ArrowDownUp className="text-white hover:text-card_text_color cursor-pointer" />
        </div>
        <div className="flex justify-between items-center relative px-4">
          <Search className="absolute p-1 m-1 text-card_text_color" />
          <input
            type="text"
            placeholder="Search"
            className="bg-apple_google-bg-color py-2 pl-7 text-sm rounded-md outline-none text-white placeholder-card_text_color hover:bg-opacity-80 focus:bg-card-bg-color focus:shadow-md focus:shadow-black transition hover:duration-800 border border-card_text_color "
          />
        </div>
      </div>
  )
}

export default FilterBar
