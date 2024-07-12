import { Radio, UserRound } from "lucide-react";
import React from "react";
import { BsBug } from "react-icons/bs";

export const OverviewRight = () => {

    // const data =[
    //     {

    //         Notifications: [
    //             {
    //               id: 1,
    //               description: "Your order has been placed",
    //               active: "Just now",
    //               icon: <BsBug className="size-4" />,
    //             },
            
    //             {
    //               id: 2,
    //               description: "Your order has been placed",
    //               active: "Just now",
    //               icon: <UserRound className="size-4"/>,
    //             },
    //             {
    //               id: 3,
    //               description: "Your order has been placed",
    //               active: "Just now",
    //               icon: <BsBug className="size-4" />,
    //             },
    //             {
    //               id: 4,
    //               description: "Your order has been placed",
    //               active: "Just now",
    //               icon: <Radio className="size-4"/>,
    //             },
    //           ]
    // }
    // ,{
    //     Activities:[

    //         {
    //             id: 1,
    //             description: "Your order has been placed",
    //             active: "Just now",
    //             icon: <BsBug className="size-4" />,
    //           },
          
    //           {
    //             id: 2,
    //             description: "Your order has been placed",
    //             active: "Just now",
    //             icon: <UserRound className="size-4"/>,
    //           },
    //           {
    //             id: 3,
    //             description: "Your order has been placed",
    //             active: "Just now",
    //             icon: <BsBug className="size-4" />,
    //           },
    //           {
    //             id: 4,
    //             description: "Your order has been placed",
    //             active: "Just now",
    //             icon: <Radio className="size-4"/>,
    //           },

    //     ]
    // }
    // ,{
    //     Contacts:[
    //         {
    //             profilepic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //             name: "John Doe",
    //         },

    //         {
    //             profilepic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //             name: "John Doe",   
    //         }
    //         ,

    //         {
    //             profilepic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //             name: "John Doe",   
    //         },

    //         {
    //             profilepic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //             name: "John Doe",

    //         }
    //         ,
    //             {
    //                 profilepic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //                 name: "John Doe",
    //             }
    //     ]
    // }

    // ]

    const   Notifications= [
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
          icon: <UserRound className="size-4"/>,
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
          icon: <Radio className="size-4"/>,
        },
      ]
  
  return (
    <div className=" w-[300px] flex-shrink-0 border-l-1 border-overviewBorderColor py-8 px-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-white">Notifications</h1>
        <div className="flex flex-col gap-4">
            
        {Notifications.map((item) => (
          <div className="flex gap-4 justify-center items-center" key={item.id}>
           <div className="p-2 bg-overviewBackgroundColor rounded-xl ">{item.icon}</div> 
            <div className="flex flex-col gap-1">
               
                <h1 className="text-white text-sm">{item.description}</h1>
                <p className="text-xs text-card_text_color">{item.active}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
