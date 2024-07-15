
import { graphshadow } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 1500 },
  { name: "Group C", value: 2000 },
  { name: "Group D", value: 300 },
];
const COLORS = ["#a1e3cb", "#b1e3ff", "#cbccf9", "#a8c5da"];

const pieData = [
  {
    title: "United States",
    valeinpercentage: "52.1%",
    icon: "/overview/midcontent/dot.svg",
  },
  {
    title: "India",
    valeinpercentage: "22.8%",
    icon: "/overview/midcontent/dot.svg",
  },
  {
    title: "Japan",
    valeinpercentage: "13.9%",
    icon: "/overview/midcontent/dot.svg",
  },
  {
    title: "Russia",
    valeinpercentage: "11.2%",
    icon: "/overview/midcontent/dot.svg",
  },
];

export default function PieGraph() {
  return (
//   "bg-apple_google-bg-color bg-opacity-10 p-6 rounded-xl hover:shadow-md hover:shadow-black cursor-pointer hover:cursor-pointer"
    <div className={cn(graphshadow,"flex flex-col")}>
      <h1 className="text-white font-semibold">Traffic by Location</h1>
      <div className="flex justify-center items-center"  >
        <div className="mt-[-50px]">
        <PieChart width={333} height={370}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={38}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>

        </div>

        <div className="pr-[20px]">
          {pieData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-20 my-4"
            >
              <div className="flex justify-between items-center gap-4">
                <Image
                  src={item.icon}
                  width={8}
                  height={8}
                  alt={item.title}
                />
                <p className="text-white">{item.title}</p>
              </div>
              <p className="text-white">{item.valeinpercentage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
