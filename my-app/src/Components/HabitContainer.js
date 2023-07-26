import React, { useState } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {
  format,
  startOfWeek,
  addDays,
  lastDayOfWeek,
  addWeeks,
  subWeeks
} from "date-fns";





function HabitContainer( {habits, updateWeekDay, removeHabit}){

    const [activeDay, setActiveDay] = useState(new Date());
  
    const changeWeekHandle = (btnType) => {
      if (btnType === "prev") {
        setActiveDay(subWeeks(activeDay, 1));

      }
      if (btnType === "next") {
        setActiveDay(addWeeks(activeDay, 1));
      }
    };

 
  const dateHeader = () => {
      const dateFormat = "MMM yyyy";
      return (
            <h2 className="dateHeader">{format(activeDay, dateFormat)}</h2> 
      );
    };
  

     
    const renderWeekDays = () => {
        let currentDate = activeDay

        console.log(currentDate)
         const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
         const endDate = lastDayOfWeek(activeDay, { weekStartsOn: 1 });

   
         console.log(format(currentDate, "d"))
         const week =[];
         
         while(startDate <= endDate){
           for(let i = 0; i < 7; i++){

      
               week.push(<th>{format(currentDate, "d")}</th>);
               currentDate = addDays(currentDate, 1)
           }
         }
         console.log(week)
         return <>{week}</>
         }
   
renderWeekDays()

 
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