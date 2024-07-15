
import { graphshadow } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  {
    name: "Linux",
    uv: 18000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mac",
    uv: 30000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "iOS",
    uv: 20000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Windows",
    uv: 32000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Android",
    uv: 10000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Other",
    uv: 25000 ,
    pv: 3800,
    amt: 2500,
  },
 
];

export default function BarGraph() {
  return (
    <div className={cn(graphshadow,"flex flex-col justify-between")}>
      <h1 className="text-white font-semibold">Traffic by Device</h1>
    <BarChart
      width={610}
      height={280}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5,
      }}
     barSize={40}
     
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip shared={false} trigger="click" />
      <Bar dataKey="uv" fill="#82ca9d" />
     
     
    </BarChart>
    </div>
  );
}
