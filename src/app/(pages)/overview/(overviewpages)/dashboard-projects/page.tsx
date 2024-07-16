import React from "react";
import { OverviewCard } from "../../component/OverviewCard";
import { BatteryCharging, FolderClosed, ListChecks } from "lucide-react";
import { PiUsersThreeLight } from "react-icons/pi";
import { graphshadow, maincontentpadding } from "@/utils/constant";
import PieGraph from "../../component/PieGraph";
import OverviewTable from "../../component/Table";
import { cn } from "@/utils/helpers";
import BarGraph from "../../component/BarGraph";

const DashboardProjects = () => {
  const cardData = [
    {
      title: "Views",
      value: "7,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <FolderClosed />,
    },
    {
      title: "Clicks",
      value: "2,265",
      valueinpercentage: "-11.01%",
      icon: "/overview/midcontent/decrearrow.svg",
      icon2: <ListChecks />,
    },
    {
      title: "Conversions",
      value: "1,265",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <PiUsersThreeLight />,
    },
    {
      title: "CTR",
      value: "11.01%",
      valueinpercentage: "+11.01%",
      icon: "/overview/midcontent/increarrow.svg",
      icon2: <BatteryCharging />,
    },
  ];

  const customData = [
    { name: "Group E", value: 500 },
    { name: "Group F", value: 1000 },
    { name: "Group G", value: 1500 },
   
  ];

  const customPieData = [
    {
      title: "Canada",
      valueinpercentage: "40.2%",
      icon: "/overview/midcontent/dot.svg",
    },
    {
      title: "Mexico",
      valueinpercentage: "25.5%",
      icon: "/overview/midcontent/dot.svg",
    },
    {
      title: "Germany",
      valueinpercentage: "19.3%",
      icon: "/overview/midcontent/dot.svg",
    },
  ];


  const deviceData = [
    { name: "Jan", value: 18000 },
    { name: "Feb", value: 30000 },
    { name: "Mar", value: 20000 },
    { name: "Apr", value: 32000 },
    { name: "May", value: 10000 },
    { name: "Jun", value: 21000 },
    { name: "Jul", value: 28000 },
    { name: "Aug", value: 15000 },
    { name: "Sep", value: 26000 },
    { name: "Oct", value: 18000 },
    { name: "Nov", value: 19000 },
    { name: "Dec", value: 21000 },
  ];
  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">Projects</h1>
      <div className="flex justify-between mt-6">
        <OverviewCard data={cardData} />
      </div>
      <div className="flex gap-8 py-10">
     

        <PieGraph
          title="Projects Status"
          data={customData}
          pieData={customPieData}
          customwidth={245}
          customheight={362}
        />
       <div className={cn(graphshadow ,"w-full")}>
        <h1 className="text-white font-semibold">Task</h1>
        <OverviewTable />
       </div>
      </div>
       <BarGraph
      data={deviceData}
      title="Tasks Overview"
      customwidth={1295}
      customheight={340}
      barSize={45}
      fill="#82ca9d"
      className="gap-8"
    />
    </div>
  );
};

export default DashboardProjects;
