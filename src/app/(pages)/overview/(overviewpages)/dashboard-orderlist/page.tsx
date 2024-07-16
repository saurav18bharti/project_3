"use client";
import { maincontentpadding } from "@/utils/constant";
import { ArrowDownUp, ListFilter, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { NextUiTable } from "../../component/Table";
import { Pagination } from "@nextui-org/react";

const DashboardOrderList = () => {
   
  

    interface User {
        name: string;
        image: string;
      }
      
      
      interface User {
        name: string;
        image: string;
      }
      
      interface Order {
        orderId: string;
        user: User;
        project: string;
        address: string;
        date: string;
        status: 'Pending' | 'Completed' | 'Cancelled' | 'In Progress';
      }
      
      const allOrders: Order[] = [
        {
          orderId: "ORD-12345",
          user: {
            name: "John Doe",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Website Redesign",
          address: "123 Main St, Anytown, USA 12345",
          date: "2024-07-15",
          status: "In Progress"
        },
        {
          orderId: "ORD-67890",
          user: {
            name: "Jane Smith",
             image: "/overview/left/ByeWind.jpg"
          },
          project: "Mobile App Development",
          address: "456 Oak Ave, Somewhere City, USA 67890",
          date: "2024-07-20",
          status: "Pending"
        },
        {
          orderId: "ORD-24680",
          user: {
            name: "Bob Johnson",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "E-commerce Platform",
          address: "789 Pine Rd, Another Place, USA 13579",
          date: "2024-07-10",
          status: "Completed"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown",
           image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown1",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis3",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown2",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis4",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown5",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis6",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown7",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis8",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown9",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis10",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown11",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",
          status: "Cancelled"
        },
        {
          orderId: "ORD-86420",
          user: {
            name: "Mike Davis12",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "Social Media Integration",
          address: "987 Pine St, Yet Another City, USA 86420",
          date: "2024-07-12",
          status: "In Progress"
        },
        {
          orderId: "ORD-13579",
          user: {
            name: "Alice Brown13",
            image: "/overview/left/ByeWind.jpg"
          },
          project: "SEO Optimization",
          address: "321 Elm St, Elsewhere, USA 24680",
          date: "2024-07-25",   
          status: "Cancelled"
        }
      
      
      ];

      
      const ITEMS_PER_PAGE = 4;
      const [currentPage, setCurrentPage] = useState(1);
  
      const totalPages = Math.ceil(allOrders.length / ITEMS_PER_PAGE);
    
      const currentOrders = allOrders.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      );
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">Order List</h1>
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
      <div className="flex flex-col gap-4">
        <NextUiTable orders={currentOrders} />
        <div className="flex justify-end">
          <Pagination   total={totalPages} 
          page={currentPage}
          onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOrderList;
