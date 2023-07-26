import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import { faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";




function HabitContainer( {habits, updateWeekDay, removeHabit}){

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [weekArray, setWeek] = useState([]);



    const changeWeekHandle = (btnType) => {
      if (btnType === "prev") {
        setCurrentMonth(subWeeks(currentMonth, 1));
        
      }
      if (btnType === "next") {
        setCurrentMonth(addWeeks(currentMonth, 1));
      }
    };
  
  
  const dateHeader = () => {
      const dateFormat = "MMM yyyy";
      return (
            <h2 className="dateHeader">{format(currentMonth, dateFormat)}</h2> 
      );
    };
   
    const renderCells = () => {
      const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
      const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
      const dateFormat = "d";
      const rows = [];
      let days = [];
      let day = startDate;
      let formattedDate = "";
      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, dateFormat);
          days.push( <th key={formattedDate}>{formattedDate}</th>);
          day = addDays(day, 1);
        }
    
        rows.push(
           <>{days}</>           
        );
        days = [];
      }
      return <>{rows}</>;
    };

    const tableFooter = () => {
      return (
           <>
            <td onClick={() => changeWeekHandle("prev")}>
              prev week
            </td>
            <td  onClick={() => changeWeekHandle("next")}>
            next week
            </td>
        </>
      );
    };

    const dailyHabits = habits.map((habit) => <Habit removeHabit={removeHabit} updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
    const weekDays= weekday.map(day => <th className="p-3"  key={day}>{day}</th>);

    return(
        <div>
            <Header />
             {dateHeader()}
            <Table >
                <thead>
                    <tr>
                        <th>Habits</th>
                        {renderCells()}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dailyHabits}
                    <trow>{tableFooter()}</trow>
                </tbody>
               
                </Table>
         
        </div>
       
     
    )
}

export default HabitContainer;