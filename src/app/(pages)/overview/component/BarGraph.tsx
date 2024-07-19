'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { graphshadow } from "@/utils/constant";
import { cn, zeroFormatter } from "@/utils/helpers";

interface DataPoint {
  name: string;
  value: number;
  [key: string]: any; // Allow for additional properties
}

interface BarGraphProps {
  data: DataPoint[];
  title: string;
  customwidth?: any | number | string;
  customheight?: any | number | string;
  barSize?: number;
  dataKey?: string;
  fill?: string;
  className?: string;
}

const BarGraph = ({
  data,
  title,
  customwidth ,
  customheight,
  barSize = 40,
  dataKey = "value",
  fill = "#82ca9d",
  className,
}:BarGraphProps) => {
  return (
    <div className={cn(graphshadow, " w-full flex flex-col justify-between", className)}>
      <h1 className="text-white font-semibold mb-8">{title}</h1>
      <ResponsiveContainer aspect={customwidth / customheight}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={barSize}
        >
          <XAxis className="text-xs md:text-base" dataKey="name" />
          <YAxis className="text-xs md:text-base"  tickFormatter={(value) => zeroFormatter(value)} />
          <Tooltip shared={false} trigger="click" />
          <Bar dataKey={dataKey} fill={fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;