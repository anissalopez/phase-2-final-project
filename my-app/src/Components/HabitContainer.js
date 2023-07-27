import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {format, addWeeks, subWeeks, startOfWeek,lastDayOfWeek, addDays} from "date-fns";

function HabitContainer( {habits, updateWeekDay, removeHabit}){

  const [activeDay, setActiveDay] = useState(new Date());
  
  const changeWeekHandle = (btnType) => {
      if (btnType === "prev") {
        setActiveDay(subWeeks(activeDay, 1));
      };
      if (btnType === "next") {
        setActiveDay(addWeeks(activeDay, 1));
      };
    };
 
  const dateHeader = () => {
      const dateFormat = "MMM yyyy";
      return (
            <h2 className="dateHeader">{format(activeDay, dateFormat)}</h2> 
      );
    };
  
  const renderWeekDays = () => {
    let week = [];

    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;

    for(let day = 0; day < 7; day++){
      week.push(<th>{format(addDays(currentDay, day), "E")} {format(currentDay, "d")}</th>);
      currentDay = addDays(currentDay, 1);
      console.log(currentDay)
    }
      return <>{week}</>  

       }


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
  

    return(
        <div>
            <Header />
             {dateHeader()}
            <Table >
                <thead>
                    <tr>
                        <th>Habits</th>
                        {renderWeekDays()}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dailyHabits}
                    <tr>{tableFooter()}</tr>
                </tbody>
               
                </Table>
         
        </div>
       
     
    )
}

export default HabitContainer;