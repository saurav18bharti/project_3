'use client'
import { graphshadow } from "@/utils/constant";
import { cn } from "@/utils/helpers";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { usePathname } from "next/navigation";

const COLORS = ["#a1e3cb", "#b1e3ff", "#cbccf9", "#a8c5da"];
interface PieData {
  title: string;
  valueinpercentage: string;
  icon: string;
}
             

interface PieGraphProps {
  data: { name: string; value: number }[];
  pieData: PieData[];
  title: string;
  customwidth:any | number;
  customheight:any |number;
}

const PieGraph = ({ data, pieData ,title ,customwidth,customheight }: PieGraphProps) => {
  const pathname = usePathname();
  return (
    <div className={cn(graphshadow, "  flex flex-col basis-1/4 p-8 h-fit")}>
      <h1 className="text-white font-semibold">{title}</h1>
      <div className={`${pathname === "/overview" ? "flex flex-basis flex-col md:flex-row xl:flex-row" : "flex flex-col md:flex-row xl:flex-col"} justify-between  items-stretch `}>
      
     <div className="flex-grow w-[178px] h-[290px] block mx-auto">
    
      

     <ResponsiveContainer width={customwidth} height={customheight} className={"block m-auto"} >


          <PieChart  >
            <Pie
              data={data}
              cx={80}
              cy={160}
              innerRadius={38}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index ) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              
            </Pie>
          </PieChart>
        </ResponsiveContainer>
     
     </div>
       
    
      
        <div className=" flex flex-col self-center  flex-grow">
          {pieData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-20 my-2"
            >
              <div className="flex justify-between items-center gap-4">
                <Image src={item.icon} width={8} height={8} alt={item.title} />
                <p className="text-white">{item.title}</p>
              </div>
              <p className="text-white">{item.valueinpercentage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieGraph;
