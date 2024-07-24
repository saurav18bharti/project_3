import { getStatusColor } from "@/utils/helpers";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const NextUiTable = ({ orders }: any) => {
  const pathname = usePathname();

  return (
    <div className="min-w-[768px]">
      <Table
        aria-label="Example table with custom cells"
        color="primary"
        classNames={{
          tbody: "text-white",
          wrapper: "bg-gray",
          table: "table-fixed",
        }}
      >
        <TableHeader>
          <TableColumn className="text-xs sm:text-sm">
            {pathname === "/overview/list-1" ? "Serial" : "Order id"}
          </TableColumn>
          <TableColumn className="text-xs sm:text-sm">User</TableColumn>
          <TableColumn className="text-xs sm:text-sm">
            {pathname === "/overview/list-1" ? "Email" : "Project"}
          </TableColumn>
          <TableColumn className="text-xs sm:text-sm">Address</TableColumn>
          <TableColumn className="text-xs sm:text-sm">Date</TableColumn>
          <TableColumn className="text-xs sm:text-sm">
            {pathname === "/overview/list-1" ? "Registration date" : "Status"}
          </TableColumn>
        </TableHeader>
        <TableBody>
          {orders.map((order: any) => (
            <TableRow key={order.orderId} className="cursor-pointer">
              <TableCell className="text-xs sm:text-sm">
                {order.orderId}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    className="w-6 h-6 rounded-full mr-2"
                    src={order.user.image}
                    alt={order.user.name}
                    width={24}
                    height={24}
                  />
                  <span className="text-xs sm:text-sm">{order.user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {order.project}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">
                {order.address}
              </TableCell>
              <TableCell className="text-xs sm:text-sm">{order.date}</TableCell>
              <TableCell
                className={`${getStatusColor(order.status)} text-xs sm:text-sm`}
              >
                {order.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
