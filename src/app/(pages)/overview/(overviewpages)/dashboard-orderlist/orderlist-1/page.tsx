"use client";
import { maincontentpadding } from "@/utils/constant";
import React, { useState } from "react";
import FilterBar from "../../../component/FilterBar";
import PaginatedTable from "../../../component/PaginatedTable";
import NewUserCard from "../../../component/NewUserCard";
import { NextUiTable } from "../../../component/NextUiTable";

const OrderList1 = () => {
  const [showmodal, setShowmodal] = useState<boolean>(false);

  if (showmodal) {
    return <NewUserCard setShowmodal={setShowmodal} showmodal={showmodal} />;
  }

  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">Order List</h1>
      <FilterBar showmodal={showmodal} setShowmodal={setShowmodal} />
      <PaginatedTable
        data={ALLORDERS}
        itemsPerPage={4}
        renderTable={(currentOrders) => <NextUiTable orders={currentOrders} />}
      />
    </div>
  );
};

export default OrderList1;

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
  status: "Pending" | "Completed" | "Cancelled" | "In Progress";
}

const ALLORDERS: Order[] = [
  {
    orderId: "ORD-12345",
    user: {
      name: "John Doe",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Website Redesign",
    address: "123 Main St, Anytown, USA 12345",
    date: "2024-07-15",
    status: "In Progress",
  },
  {
    orderId: "ORD-67890",
    user: {
      name: "Jane Smith",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Mobile App Development",
    address: "456 Oak Ave, Somewhere City, USA 67890",
    date: "2024-07-20",
    status: "Pending",
  },
  {
    orderId: "ORD-24680",
    user: {
      name: "Bob Johnson",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "E-commerce Platform",
    address: "789 Pine Rd, Another Place, USA 13579",
    date: "2024-07-10",
    status: "Completed",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown1",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis3",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown2",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis4",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown5",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis6",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown7",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis8",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown9",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis10",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown11",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis12",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "Social Media Integration",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "In Progress",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown13",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "SEO Optimization",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Cancelled",
  },
];
