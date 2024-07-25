import React from "react";
import { OverviewCard } from "../../component/OverviewCard";
import { BatteryCharging, FolderClosed, ListChecks } from "lucide-react";
import { PiUsersThreeLight } from "react-icons/pi";
import { graphshadow, maincontentpadding } from "@/utils/constant";
import PieGraph from "../../component/PieGraph";
import { cn, getStatusColor } from "@/utils/helpers";
import BarGraph from "../../component/BarGraph";
import Image from "next/image";

const DashboardProjects = () => {
  return (
    <div className={maincontentpadding}>
      <h1 className="text-white font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6 ">
        <OverviewCard data={CARDDATA} />
      </div>
      <div className="flex flex-col xl:flex-row gap-4 py-6">
        <PieGraph
          title="Projects Status"
          data={CUSTOMDATA}
          pieData={CUSTOMPIEDATA}
          customwidth={245}
          customheight={362}
        />
        <div className={cn(graphshadow, "w-full ")}>
          <h1 className="text-white font-semibold">Task</h1>
          <div className="overflow-x-auto max-w-[70vw] lg:max-w-[100vw]">
            <OverviewTable />
          </div>
        </div>
      </div>
      <BarGraph
        data={DEVICEDATA}
        title="Tasks Overview"
        customwidth="100%"
        customheight={340}
        barSize={40}
        fill="#82ca9d"
        className="gap-6  "
      />
    </div>
  );
};

export default DashboardProjects;

const CARDDATA = [
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

const CUSTOMDATA = [
  { name: "Group E", value: 500 },
  { name: "Group F", value: 1000 },
  { name: "Group G", value: 1500 },
];

const CUSTOMPIEDATA = [
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

const DEVICEDATA = [
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

const OverviewTable = () => {
  return (
    <div className="w-full overflow-x-auto min-w-[768px]">
      <table className="min-w-full divide-y divide-card_text_color divide-opacity-60 table-auto">
        <thead>
          <tr>
            <th
              scope="col"
              className={overviewheadStyle   }
            >
              Title
            </th>
            <th
              scope="col"
              className={overviewheadStyle   }
            >
              Assigned To
            </th>
            <th
              scope="col"
              className={overviewheadStyle   }
            >
              Time
            </th>
            <th
              scope="col"
              className={overviewheadStyle   }
            >
              Speed
            </th>
            <th
              scope="col"
              className={overviewheadStyle   }
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="px-3 sm:px-6 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-100">
                {task.title}
              </td>
              <td className="px-3 sm:px-6 py-2 whitespace-nowrap text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  {task.assignedTo.slice(0, 2).map((item, index) => (
                    <Image
                      key={index}
                      src={item.img}
                      width={24}
                      height={24}
                      alt={`Assigned user ${index + 1}`}
                      className="rounded-full -ml-2 first:ml-0 border-2 border-white"
                    />
                  ))}
                  {task.assignedTo.length > 2 && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-800 -ml-2 border-2 border-white">
                      +{task.assignedTo.length - 2}
                    </div>
                  )}
                </div>
              </td>
              <td className="px-3 sm:px-6 py-2 whitespace-nowrap text-xs sm:text-sm text-white">
                {task.time}
              </td>
              <td className="px-3 sm:px-6 py-2 whitespace-nowrap text-xs sm:text-sm text-white">
                {task.speed}
              </td>
              <td
                className={`${getStatusColor(
                  task.status
                )} px-3 sm:px-6 py-2 whitespace-nowrap text-xs sm:text-sm text-white`}
              >
                {task.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const overviewheadStyle ="px-3 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium text-overviewBorderColor tracking-wider"
