import { zeroFormatter } from "@/utils/helpers";
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
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 8000,
    pv: 14000,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 12000,
    pv: 9000,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 20000,
    pv: 15000,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 8000,
    pv: 25000,
    amt: 2000,
  },
  {
    name: "May",
    uv: 11000,
    pv: 29000,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 22000,
    pv: 21000,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 28000,
    pv: 21050,
    amt: 2100,
  },
];

export default function LineGraph() {
  return (
    <LineChart width={950} height={350} data={data}>
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis tickFormatter={(value) => zeroFormatter(value)} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#cacbf9"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#9db8cb"
        strokeDasharray="3 4 5 2"
      />
    </LineChart>
  );
}
