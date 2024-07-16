"use client";
import Image from "next/image";
import React from "react";


import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import { getStatusColor } from "@/utils/helpers";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

interface Task {
  id: number;
  title: string;
  assignedTo: { img: string }[];
  time: string;
  speed: string;
  status: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    assignedTo: [{ img: "/overview/left/ByeWind.jpg" }],
    time: "2 hours",
    speed: "Fast",
    status: "Completed",
  },
  {
    id: 2,
    title: "Task 2",
    assignedTo: [
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
    ],
    time: "4 hours",
    speed: "Moderate",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Task 3",
    assignedTo: [
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
    ],
    time: "3 hours",
    speed: "Slow",
    status: "Not Started",
  },
  {
    id: 3,
    title: "Task 4",
    assignedTo: [
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
    ],
    time: "4 hours",
    speed: "Slow",
    status: "Completed",
  },
  {
    id: 3,
    title: "Task 5",
    assignedTo: [
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
    ],
    time: "5 hours",
    speed: "Slow",
    status: "Pending",
  },
  {
    id: 3,
    title: "Task 6",
    assignedTo: [
      { img: "/overview/left/ByeWind.jpg" },
      { img: "/overview/left/ByeWind.jpg" },
    ],
    time: "6 hours",
    speed: "Slow",
    status: "Not Started",
  },
  {
    id: 3,
    title: "Task 7",
    assignedTo: [{ img: "/overview/left/ByeWind.jpg" }],
    time: "7 hours",
    speed: "Slow",
    status: "Completed",
  },
];

export default function OverviewTable() {
  return (
    <div className="overflow-x-auto pt-4">
      <table className="w-full min-w-full divide-y divide-card_text_color divide-opacity-60 ">
        <thead className="">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-overviewBorderColor  tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-overviewBorderColor  tracking-wider"
            >
              Assigned To
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-overviewBorderColor  tracking-wider"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-overviewBorderColor  tracking-wider"
            >
              Speed
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-medium text-overviewBorderColor  tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className=" ">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                {task.title}
              </td>
              <td className=" flex px-6 py-4 whitespace-nowrap text-sm text-white">
              <div className="flex items-center">
                  {task.assignedTo.slice(0, 2).map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={30}
                      height={30}
                      alt={`Assigned user ${index + 1}`}
                      className="rounded-full -ml-2 first:ml-0 border-2 border-white"
                    />
                  ))}
                  {task.assignedTo.length > 2 && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-800 -ml-2 border-2 border-white">
                      +{task.assignedTo.length - 2}
                    </div>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {task.time}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {task.speed}
              </td>
              <td className={`${getStatusColor(task.status)} px-6 py-4 whitespace-nowrap text-sm text-white`}>
                {task.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


interface ProductData {
  name: string;
  price: number;
  quantity: number;
}

const products: ProductData[] = [
  { name: "Product A", price: 50, quantity: 3 },
  { name: "Product B", price: 75, quantity: 2 },
  { name: "Product C", price: 30, quantity: 5 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
  { name: "Product D", price: 100, quantity: 1 },
];

export const ProductTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full ">
        <thead>
          <tr className=" text-card_text_color text-sm font-light  border-b border-card_text_color  leading-normal">
            <th className="py-3 px-6  text-left text-sm font-medium text-overviewBorderColor  tracking-wider">Name</th>
            <th className="py-3 px-6 text-right text-sm font-medium text-overviewBorderColor  tracking-wider">Price</th>
            <th className="py-3 px-6 text-right text-sm font-medium text-overviewBorderColor  tracking-wider">Quantity</th>
            <th className="py-3 px-6 text-right text-sm font-medium text-overviewBorderColor  tracking-wider  ">Amount</th>
          </tr>
        </thead>
        <tbody className="text-white text-sm font-light">
          {products.map((product, index) => (
            <tr key={index} className="">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <span className="font-medium">{product.name}</span>
              </td>
              <td className="py-3 px-6 text-right">
                ${product.price.toFixed(2)}
              </td>
              <td className="py-3 px-6 text-right">
                {product.quantity}
              </td>
              <td className="py-3 px-6 text-right">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};









export const NextUiTable = ({orders}:any) => {
  return (
    <div className="flex flex-col gap-3">
      <Table 
        selectionMode="multiple" 
        aria-label="Example table with custom cells"
      >
        <TableHeader>
          <TableColumn>ORDER ID</TableColumn>
          <TableColumn>USER</TableColumn>
          <TableColumn>PROJECT</TableColumn>
          <TableColumn>ADDRESS</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          {orders.map((order:any) => (
            <TableRow key={order.orderId} className="cursor-pointer">
              <TableCell>{order.orderId}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    className="w-6 h-6 rounded-full mr-2" 
                    src={order.user.image} 
                    alt={order.user.name} 
                    width={24}
                    height={24}
                  />
                  {order.user.name}
                </div>
              </TableCell>
              <TableCell>{order.project}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className={getStatusColor(order.status)}>
                {order.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

