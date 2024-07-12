import React from "react";
import { OverviewHeader } from "./component/OverviewHeader";
import { OverviewRight } from "./component/OverviewRight";
import { OverviewLeftPart } from "./component/OverviewLeftPart";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-between">
        <OverviewLeftPart />
        <div className="flex flex-col flex-1">
          <OverviewHeader />
          {children}
        </div>
        <OverviewRight />
      </div>
    </>
  );
};
export default OverviewLayout;
