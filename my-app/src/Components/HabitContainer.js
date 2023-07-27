import React, { useState, useEffect } from "react";
import Habit from "./Habit";
import Header from "./Header";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {format, addWeeks, subWeeks, startOfWeek,lastDayOfWeek, addDays} from "date-fns";

function HabitContainer( {habits, updateWeekDay, removeHabit}){

  const [activeDay, setActiveDay] = useState(new Date());

  const itemRefs = React.useRef(new Array())

    useEffect(()=> {
        console.log(itemRefs.current)
    }, [])
  
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
        week.push(<th ref={(element) => itemRefs.current.push(addDays(currentDay, day))} key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      }
    return <>{week}</> 
  }


    const tableFooter = () => {
      return (
          <div className="row">
            <div className= "col" onClick={() => changeWeekHandle("prev")}>prev week</div>
            <div className="col" onClick={() => changeWeekHandle("next")}>next week</div>
          </div>
      );
    };

    const dailyHabits = habits.map((habit) => <Habit refs={itemRefs} removeHabit={removeHabit} updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
  

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
                </tbody>
                </Table>
                <>{tableFooter()}</>
         
        </div>
       
     
    )
}

export default HabitContainer;