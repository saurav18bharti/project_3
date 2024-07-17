"use client";
import { maincontentpadding } from "@/utils/constant";
import Image from "next/image";
import React, { useState } from "react";
import FilterBar from "../../component/FilterBar";
import { Pagination } from "@nextui-org/react";

const DashboardUserList = () => {
  const images = [
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
    { img: "/overview/left/ByeWind.jpg" },
  ];

  const ITEMS_PER_PAGE = 21;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const currentOrders = images.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className={maincontentpadding}>
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-semibold">User List</h1>
        <div>
          <FilterBar />
        </div>
      </div>
      <div className="flex flex-wrap gap-3  ">
        {currentOrders.map((item, index) => (
          <>
            <Image
              src={item.img}
              alt="img"
              width={100}
              height={200}
              className="rounded-xl"
            />
          </>
        ))}
      </div>
      <div className="flex justify-end">
        <Pagination
          total={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DashboardUserList;
