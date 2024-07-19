'use client'
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface LineConfig {
  dataKey: string;
  stroke: string;
  activeDot?: { r: number };
  strokeDasharray?: string;
}

interface ReusableLineGraphProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  xAxisDataKey?: string;
  xAxisPadding?: { left: number; right: number };
  yAxisTickFormatter?: (value: any) => string;
  lines?: LineConfig[];
}

const LineGraph = ({
  data,
  width = 950,
  height = 300,
  xAxisDataKey = "name",
  xAxisPadding = { left: 30, right: 30 },
  yAxisTickFormatter,
  lines = [
    { dataKey: "pv", stroke: "#cacbf9", activeDot: { r: 8 } },
    { dataKey: "uv", stroke: "#9db8cb", strokeDasharray: "3 4 5 2" }
  ]
}:ReusableLineGraphProps) => {
  return (
    <ResponsiveContainer width="100%" height={height}>

    <LineChart  data={data}>
      <XAxis className="text-xs md:text-balance" dataKey={xAxisDataKey} padding={xAxisPadding} />
      <YAxis className="text-xs md:text-balance" tickFormatter={yAxisTickFormatter} />
      <Tooltip />
      {lines.map((line, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey={line.dataKey}
          stroke={line.stroke}
          activeDot={line.activeDot}
          strokeDasharray={line.strokeDasharray}
        />
      ))}
    </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;