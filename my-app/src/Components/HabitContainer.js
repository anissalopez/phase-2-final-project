import React, { useState, useEffect } from "react";
import Habit from "./Habit";
import { weekday } from "../weekdata";
import { Table } from "react-bootstrap";
import {format, startOfWeek, addDays} from "date-fns";

function HabitContainer({changeWeek, habits, updateWeekDay, removeHabit, activeDay, dateHeader, updateCompletedHabits}){

  
  
  const renderWeekDays = () => {
    let week = [];
    const startDate = startOfWeek(activeDay, { weekStartsOn: 1 });
    let currentDay = startDate;

      for(let day = 0; day < 7; day++){
        week.push(<th key={day}>{format(addDays(currentDay, day), "E")} {format(addDays(currentDay, day), "d")}</th>);
      }
    return <>{week}</> 
  }



  const dailyHabits = habits.map((habit) => <Habit activeDay={activeDay} updateCompletedHabits={updateCompletedHabits} removeHabit={removeHabit} updateWeekDay={updateWeekDay} weekDays={weekday}  key={habit.id} habit={habit} />);
  

    return(
        <div>
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
                <>{changeWeek()}</>
         
        </div>
       
     
    )
}

export default HabitContainer;