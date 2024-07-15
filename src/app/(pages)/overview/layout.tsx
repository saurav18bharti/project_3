import React from "react";
import { OverviewHeader } from "./component/OverviewHeader";
import { OverviewRight } from "./component/OverviewRight";
import { OverviewLeftPart } from "./component/OverviewLeftPart";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between h-screen">
      <OverviewLeftPart />
      <div className="flex flex-col flex-1">
        <OverviewHeader />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
      <OverviewRight />
    </div>
  );
};

export default OverviewLayout;