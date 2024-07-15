import { Radio, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsBug } from "react-icons/bs";

const ListItem = ({ icon, description, active, isImage }: any) => (
  <>
  
  <div
    className={`flex gap-4 ${
      !active ? "justify-start pl-6" : "justify-center"
    } items-center `}
  >
    {isImage ? (
      <Image
        src={icon}
        width={15}
        height={8}
        alt={description}
        className="size-8 rounded-full"
      />
    ) : (
      <div className="p-2 bg-overviewBackgroundColor1 rounded-xl">{icon}</div>
    )}
    <div className="flex flex-col gap-1">
      <h1 className="text-white text-sm hover:text-card_text_color">{description}</h1>
      {active && <p className="text-xs text-card_text_color">{active}</p>}
    </div>
  </div>
  
  </>
);

export const OverviewRight = () => {
  const notifications = [
    {
      id: 1,
      description: "Your order has been placed",
      active: "Just now",
      icon: <BsBug className="size-4" />,
    },
    {
      id: 2,
      description: "Your order has been placed",
      active: "Just now",
      icon: <UserRound className="size-4" />,
    },
    {
      id: 3,
      description: "Your order has been placed",
      active: "Just now",
      icon: <BsBug className="size-4" />,
    },
    {
      id: 4,
      description: "Your order has been placed",
      active: "Just now",
      icon: <Radio className="size-4" />,
    },
  ];

  const activities = [
    {
      id: 1,
      description: "Your order has been placed",
      active: "Just now",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 2,
      description: "Your order has been placed",
      active: "Just now",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 3,
      description: "Your order has been placed",
      active: "Just now",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 4,
      description: "Your order has been placed",
      active: "Just now",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
  ];

  const contacts = [
    {
      id: 1,
      description: "John Doe",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 2,
      description: "John Doe",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 3,
      description: "John Doe",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
    {
      id: 4,
      description: "John Doe",
      icon: "/overview/left/ByeWind.jpg",
      isImage: true,
    },
  ];

  return (
    <div className="w-[300px] flex-shrink-0 border-l-1 border-overviewBorderColor flex flex-col gap-8 py-8 px-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Notifications</h1>
        <div className="flex flex-col gap-4 cursor-pointer ">
          {notifications.map((item) => (
            <ListItem
              key={item.id}
              icon={item.icon}
              description={item.description}
              active={item.active}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Activities</h1>
        <div className="flex flex-col gap-4 cursor-pointer">
          {activities.map((item) => (
            <ListItem
              key={item.id}
              icon={item.icon}
              description={item.description}
              active={item.active}
              isImage={item.isImage}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Contacts</h1>
        <div className="flex flex-col gap-4 cursor-pointer">
          {contacts.map((item) => (
            <ListItem
              key={item.id}
              icon={item.icon}
              description={item.description}
              isImage={item.isImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
