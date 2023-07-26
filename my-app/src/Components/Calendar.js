import React, { useState } from "react";
import Calendar from 'react-calendar'; 
import { Table } from 'react-bootstrap'



function Cal(){
const [date, setDate] = useState(new Date())


return (
 <div>
   <h1>React Calendar</h1>
    <Calendar className="table" onChange={setDate} value={date} />
    Selected date: {date.toString()} 
 </div>
  )

}


export default Cal;
