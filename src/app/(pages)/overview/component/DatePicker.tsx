import React from "react";
import {DatePicker} from "@nextui-org/react";
import {now, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <div className="w-full max-w-xl flex flex-row gap-4">
      <DatePicker
        label="Event Date"
        variant="bordered"
        hideTimeZone
        showMonthAndYearPickers
        defaultValue={now(getLocalTimeZone())}
      />
    </div>
  );
}
