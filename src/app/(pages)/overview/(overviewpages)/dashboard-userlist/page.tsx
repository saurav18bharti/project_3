"use client";
import { maincontentpadding } from "@/utils/constant";
import React, { useState } from "react";
import MenuBar from "../../component/MenuBar";
import FilterBar from "../../component/FilterBar";
import PaginatedTable from "../../component/PaginatedTable";
import { NextUiTable } from "../../component/Table";
import { DatePicker, Input } from "@nextui-org/react";

import { FaUser } from "react-icons/fa";
import { Plus, X } from "lucide-react";
import Modal from "../../component/Modal";
import Image from "next/image";
import NewUserCard from "../../component/NewUserCard";

const List1 = () => {
  const [showmodal, setShowmodal] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  if (showmodal) {
    return <NewUserCard showmodal={showmodal} setShowmodal={setShowmodal} />
  }

  return (
    <div className={maincontentpadding}>
      <MenuBar view={view} setView={setView} />
      <FilterBar showmodal={showmodal} setShowmodal={setShowmodal} />
      {view ? (
        <div className="flex flex-wrap gap-4">
          {ALLIMAGES.map((item, index) => (
            <div key={index}>
              <Image
                className="rounded-2xl"
                src={item.image}
                alt="image"
                width={80}
                height={200}
              />
            </div>
          ))}
        </div>
      ) : (
        <PaginatedTable
          data={ALLORDERS}
          itemsPerPage={4}
          renderTable={(currentOrders) => (
            <NextUiTable orders={currentOrders} />
          )}
        />
      )}
    </div>
  );
};

export default List1;

const ALLIMAGES = [
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
  {
    image: "/overview/left/ByeWind.jpg",
  },
];

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
  status: string;
}

const ALLORDERS: Order[] = [
  {
    orderId: "ORD-12345",
    user: {
      name: "John Doe",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "123@gmail.com",
    address: "123 Main St, Anytown, USA 12345",
    date: "2024-07-15",
    status: "Just now",
  },
  {
    orderId: "ORD-67890",
    user: {
      name: "Jane Smith",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "abc@xyz.com",
    address: "456 Oak Ave, Somewhere City, USA 67890",
    date: "2024-07-20",
    status: "1hr ago",
  },
  {
    orderId: "ORD-24680",
    user: {
      name: "Bob Johnson",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "abc123@gmail.com",
    address: "789 Pine Rd, Another Place, USA 13579",
    date: "2024-07-10",
    status: "2hrs ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown1",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis3",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown2",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis4",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown5",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis6",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown7",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis8",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown9",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis10",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown11",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
  {
    orderId: "ORD-86420",
    user: {
      name: "Mike Davis12",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "srt@gmail.com",
    address: "987 Pine St, Yet Another City, USA 86420",
    date: "2024-07-12",
    status: "2day ago",
  },
  {
    orderId: "ORD-13579",
    user: {
      name: "Alice Brown13",
      image: "/overview/left/ByeWind.jpg",
    },
    project: "adfsa1234@gmail.com",
    address: "321 Elm St, Elsewhere, USA 24680",
    date: "2024-07-25",
    status: "Just now",
  },
];
