import React from "react";
import {format} from "date-fns";


function DateHeader( { activeDay }) {



  return (
    <div>
    <h2 className="dateHeader">{format((activeDay), "MMMM yyyy")}</h2>
    </div>
  );
}

export default DateHeader;
