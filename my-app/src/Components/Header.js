import React from "react";
import {format} from "date-fns";
import { Container } from "react-bootstrap"

function DateHeader( { activeDay }) {

  return (
    <Container fluid className="mt-5 mb-5">
    <h2 className="dateHeader">{format((activeDay), "MMMM yyyy")}</h2>
    </Container>
  );
}

export default DateHeader;
